'use client'

import React, { useState, useEffect } from 'react'
import Input from '@/components/common/Input'
import { Send, CheckCircle, ArrowLeft, GraduationCap } from 'lucide-react'
import Link from 'next/link'

interface CourseInfo {
    id: string
    title: string
    slug: string
    batches?: { startDate: string; startTime: string; endTime: string; id?: string | null }[]
}

interface EnrollmentFormProps {
    course?: CourseInfo
}

const EnrollmentForm: React.FC<EnrollmentFormProps> = ({ course }) => {
    const [submitted, setSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [courses, setCourses] = useState<CourseInfo[]>(course ? [course] : [])
    const [loadingCourses, setLoadingCourses] = useState(!course)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        education: '',
        preferredBatch: '',
        message: '',
        courseId: course?.id || '',
    })

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await fetch('/api/courses?limit=100')
                if (res.ok) {
                    const data = await res.json()
                    setCourses(data.docs)
                    if (!formData.courseId && data.docs.length > 0) {
                        setFormData(prev => ({ ...prev, courseId: data.docs[0].id }))
                    }
                }
            } catch (err) {
                console.error('Failed to fetch courses:', err)
            } finally {
                setLoadingCourses(false)
            }
        }
        
        fetchCourses()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const selectedCourse = courses.find(c => c.id === formData.courseId) || course

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        if (!formData.courseId) {
            setError('Please select a course')
            setIsLoading(false)
            return
        }

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                address: formData.address || undefined,
                education: formData.education || undefined,
                preferredBatch: formData.preferredBatch || undefined,
                course: formData.courseId,
                status: 'new',
                message: formData.message || undefined,
            }

            const response = await fetch('/api/enrollments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                const data = await response.json().catch(() => null)
                throw new Error(data?.errors?.[0]?.message || 'Failed to submit enrollment')
            }

            setSubmitted(true)
        } catch (err: any) {
            setError(err.message || 'Something went wrong. Please try again later.')
            console.error(err)
        } finally {
            setIsLoading(false)
        }
    }

    if (submitted) {
        return (
            <div className="text-center space-y-8 py-16">
                <div className="w-24 h-24 bg-primary/10 border border-primary/20 rounded-none flex items-center justify-center mx-auto">
                    <CheckCircle size={48} className="text-primary" />
                </div>
                <div className="space-y-3">
                    <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tighter uppercase">
                        Enrollment Submitted
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-md mx-auto leading-relaxed opacity-80">
                        Thank you for your interest in <span className="text-primary font-bold">{selectedCourse?.title || 'our course'}</span>.
                        Our team will contact you shortly with further details.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    {selectedCourse?.slug && (
                        <Link
                            href={`/courses/${selectedCourse.slug}`}
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-card border border-border text-foreground font-black uppercase tracking-[0.15em] text-[11px] hover:border-primary/50 transition-all"
                        >
                            <ArrowLeft size={16} />
                            Back to Course
                        </Link>
                    )}
                    <Link
                        href="/courses"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-none bg-primary text-white font-black uppercase tracking-[0.15em] text-[11px] hover:bg-foreground transition-all shadow-xl shadow-primary/20"
                    >
                        Browse More Courses
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="p-4 bg-red-500/10 text-red-500 rounded-none border border-red-500/20 text-sm font-bold uppercase tracking-wide">
                    {error}
                </div>
            )}

            {/* Course Selection */}
            <div className="w-full">
                <label htmlFor="courseId" className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Select Course <span className="text-primary">*</span>
                </label>
                <select
                    id="courseId"
                    name="courseId"
                    value={formData.courseId}
                    onChange={(e) => {
                        handleChange(e)
                        setFormData(prev => ({ ...prev, courseId: e.target.value, preferredBatch: '' }))
                    }}
                    required
                    disabled={loadingCourses}
                    className="w-full px-5 py-4 rounded-none border border-border bg-card/50 text-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium disabled:opacity-50"
                >
                    <option value="">Select a course</option>
                    {courses.map((c) => (
                        <option key={c.id} value={c.id}>
                            {c.title}
                        </option>
                    ))}
                </select>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="w-full">
                    <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-none border border-border bg-card/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-none border border-border bg-card/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium"
                    />
                </div>
            </div>

            {/* Phone & Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="w-full">
                    <label htmlFor="phone" className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Phone Number <span className="text-primary">*</span>
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+977 9800000000"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-none border border-border bg-card/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="address" className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Address
                    </label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Your city / location"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-none border border-border bg-card/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium"
                    />
                </div>
            </div>

            {/* Education & Preferred Batch */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="w-full">
                    <label htmlFor="education" className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Education Level
                    </label>
                    <select
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-none border border-border bg-card/50 text-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium"
                    >
                        <option value="">Select your education</option>
                        <option value="see">SEE / SLC</option>
                        <option value="plus-two">+2 / Intermediate</option>
                        <option value="bachelors">Bachelor&apos;s Degree</option>
                        <option value="masters">Master&apos;s Degree</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="w-full">
                    <label htmlFor="preferredBatch" className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
                        Preferred Batch
                    </label>
                    {selectedCourse?.batches && selectedCourse.batches.length > 0 ? (
                        <select
                            id="preferredBatch"
                            name="preferredBatch"
                            value={formData.preferredBatch}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-none border border-border bg-card/50 text-foreground focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium"
                        >
                            <option value="">Select a batch</option>
                            {selectedCourse.batches.map((batch, i) => (
                                <option key={i} value={`${new Date(batch.startDate).toLocaleDateString()} (${batch.startTime} - ${batch.endTime})`}>
                                    {new Date(batch.startDate).toLocaleDateString()} — {batch.startTime} - {batch.endTime}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <input
                            id="preferredBatch"
                            name="preferredBatch"
                            type="text"
                            placeholder="e.g. Morning, Evening"
                            value={formData.preferredBatch}
                            onChange={handleChange}
                            className="w-full px-5 py-4 rounded-none border border-border bg-card/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium"
                        />
                    )}
                </div>
            </div>

            {/* Message */}
            <div className="w-full">
                <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">
                    Additional Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-none border border-border bg-card/50 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 outline-none transition-all resize-none font-medium"
                    placeholder="Any questions or special requirements?"
                />
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={isLoading}
                className="w-full py-6 rounded-none bg-primary text-white font-black uppercase tracking-[0.2em] text-[11px] hover:bg-foreground transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
                {isLoading ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                    </>
                ) : (
                    <>
                        <GraduationCap size={18} className="group-hover:scale-110 transition-transform" />
                        Submit Enrollment
                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>
        </form>
    )
}

export default EnrollmentForm

