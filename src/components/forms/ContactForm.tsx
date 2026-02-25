'use client';

import React, { useState } from 'react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { Send, CheckCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        topic: 'General Inquiry',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                phoneNumber: formData.phone,
                subject: formData.topic,
                message: formData.message,
                status: 'new'
            };

            const response = await fetch('/api/contact-messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error('Failed to submit message');
            }

            setSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                topic: 'General Inquiry',
                message: '',
            });

        } catch (err) {
            setError('Something went wrong. Please try again later.');
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="bg-green-50 rounded-none p-8 text-center border border-green-100">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-none flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                    Send Another Message
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-none border border-red-100 text-sm">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                    id="name"
                    name="name"
                    label="Full Name"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Phone Number"
                    placeholder="+977 9800000000"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <div className="w-full">
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-1">
                        Topic
                    </label>
                    <select
                        id="topic"
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 bg-white"
                    >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Course Details">Course Details</option>
                        <option value="Hiring Partnership">Hiring Partnership</option>
                    </select>
                </div>
            </div>

            <div className="w-full">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-none border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 resize-none text-navy"
                    placeholder="How can we help you?"
                    required
                ></textarea>
            </div>

            <Button type="submit" size="lg" fullWidth disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Message'}
                {!isLoading && <Send size={18} className="ml-2" />}
            </Button>
        </form>
    );
};

export default ContactForm;
