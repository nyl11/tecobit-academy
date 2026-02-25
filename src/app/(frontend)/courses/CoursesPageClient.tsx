'use client'

import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, BookOpen, LayoutGrid, GraduationCap, ArrowUpDown, Filter, Sparkles, PhoneCall } from 'lucide-react'
import CourseList from '@/components/courses/CourseList'
import { Course as PayloadCourse, Media } from '@/payload-types'
import { Course as LocalCourse } from '@/data/courses'

export default function CoursesPageClient({ initialCourses }: { initialCourses: PayloadCourse[] }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeLevel, setActiveLevel] = useState('All')
  const [sortBy, setSortBy] = useState('latest')
  const [searchQuery, setSearchQuery] = useState('')

  const mappedCourses: LocalCourse[] = useMemo(() => {
    return initialCourses.map((course) => {
      let imageUrl = ''
      if (typeof course.image === 'string') {
        imageUrl = course.image
      } else if (course.image && (course.image as Media).url) {
        imageUrl = (course.image as Media).url!
      }

      const category = (course.category as string) || 'Development'
      const features = (course as any).features?.map((f: any) => f.feature) || []
      const syllabus = course.curriculum?.map((c) => ({
        module: c.title,
        topics: [c.duration],
      })) || []

      return {
        id: course.id,
        title: course.title,
        slug: course.slug,
        description: course.description,
        duration: course.duration || 'Flexible',
        level: (course.level as any) || 'Beginner',
        price: course.price,
        discount: 0,
        thumbnail: imageUrl || '/images/logo.png', // Fallback
        category,
        features,
        syllabus,
        instructor: course.instructor || 'Expert Instructor',
        enrollmentCount: 0,
        rating: 5.0,
        mode: (course.mode as any) || 'Physical',
        createdAt: (course as any).createdAt,
      } as LocalCourse & { createdAt: string }
    })
  }, [initialCourses])

  const categories = [
    'All',
    ...Array.from(new Set(mappedCourses.map((c) => c.category).filter(Boolean))).sort(),
  ]

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const filteredCourses = useMemo(() => {
    const result = mappedCourses.filter((course) => {
      const matchesCategory = activeCategory === 'All' || course.category === activeCategory
      const matchesLevel = activeLevel === 'All' || course.level === activeLevel
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (course.description && course.description.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesLevel && matchesSearch
    })

    // Sorting
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else {
      // Latest by default
      result.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0
        const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0
        return dateB - dateA
      })
    }

    return result
  }, [activeCategory, activeLevel, sortBy, searchQuery, mappedCourses])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Elite Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-muted/20 border-b border-border">
        {/* Aesthetic Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-none blur-[140px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-none blur-[120px] animate-pulse-slow delay-700" />
        </div>
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pattern-grid-lg animate-pulse-slow" />

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.2em]"
            >
              <GraduationCap size={16} className="animate-pulse" />
              Elite Knowledge Repository
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-none tracking-tighter"
            >
              Architect Your <span className="text-primary">Career</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground font-medium max-w-2xl mx-auto text-lg leading-relaxed px-4 opacity-80"
            >
              Access our selection of industry-synced technical programs designed to bridge the gap between raw potential and engineering mastery.
            </motion.p>
          </div>

          {/* Search Component */}
          <div className="relative max-w-2xl mx-auto px-4 group">
            <Search className="absolute left-10 md:left-10 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
            <input
              type="text"
              placeholder="Initialize Program Search..."
              className="w-full h-16 md:h-20 pl-16 md:pl-20 pr-8 rounded-none border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all outline-none bg-card/50 backdrop-blur-xl text-foreground placeholder:text-muted-foreground/50 text-base md:text-lg font-medium shadow-2xl shadow-primary/5"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Courses Discovery Section */}
      <section className="py-24 md:py-32">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Sidebar Filters - Sticky */}
            <aside className="lg:w-80 space-y-12 lg:space-y-16 lg:sticky lg:top-32 h-fit shrink-0">
              {/* Category Filter */}
              <div className="space-y-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-3">
                  <LayoutGrid size={16} className="text-primary" />
                  Classification
                </h3>
                <div className="flex overflow-x-auto pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-col gap-3 no-scrollbar snap-x">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-6 py-4 rounded-none text-left text-sm font-black transition-all border whitespace-nowrap snap-center shrink-0 flex items-center justify-between group ${activeCategory === cat
                        ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20 lg:translate-x-3'
                        : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                        }`}
                    >
                      <span className="uppercase tracking-[0.05em]">{cat}</span>
                      {activeCategory === cat && <Sparkles size={14} className="animate-pulse" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div className="space-y-8">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground flex items-center gap-3">
                  <Filter size={16} className="text-primary" />
                  Experience Tier
                </h3>
                <div className="flex overflow-x-auto pb-4 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 lg:flex-col gap-3 no-scrollbar snap-x">
                  {levels.map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setActiveLevel(lvl)}
                      className={`px-6 py-4 rounded-none text-left text-sm font-black transition-all border whitespace-nowrap snap-center shrink-0 flex items-center justify-between group ${activeLevel === lvl
                        ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20 lg:translate-x-3'
                        : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
                        }`}
                    >
                      <span className="uppercase tracking-[0.05em]">{lvl}</span>
                      {activeLevel === lvl && <Sparkles size={14} className="animate-pulse" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Support Card */}
              <div className="p-10 rounded-none bg-muted/50 border border-border relative overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-none blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                <h4 className="text-2xl font-black text-foreground tracking-tighter uppercase relative z-10 leading-none mb-3">Professional Guidance</h4>
                <p className="text-sm text-muted-foreground font-medium relative z-10 leading-relaxed mb-8 opacity-80">
                  Book a direct synchronization session with our architects to find your optimal path.
                </p>
                <button
                  onClick={() => window.location.href = '/book-consultation'}
                  className="w-full py-5 rounded-none bg-primary text-white font-black uppercase tracking-[0.2em] text-[10px] relative z-10 hover:bg-foreground transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group/btn"
                >
                  Initialize Protocol
                  <PhoneCall size={14} className="group-hover/btn:rotate-12 transition-transform" />
                </button>
              </div>
            </aside>

            {/* Courses Grid */}
            <div className="flex-1 space-y-12">
              <div className="flex items-center justify-between bg-muted/40 p-6 rounded-none border border-border">
                <div className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                  Protocol Result:{' '}
                  <span className="text-foreground">{filteredCourses.length}</span>{' '}
                  Active Programs
                </div>
                <div className="flex items-center gap-4">
                  <ArrowUpDown size={14} className="text-primary" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-transparent text-[10px] font-black uppercase tracking-[0.2em] text-foreground outline-none cursor-pointer border-none focus:ring-0"
                  >
                    <option value="latest">Latest</option>
                    <option value="price-low">Price Ascending</option>
                    <option value="price-high">Price Descending</option>
                  </select>
                </div>
              </div>

              <div className="relative group/grid">
                <CourseList courses={filteredCourses} />
              </div>

              {filteredCourses.length === 0 && (
                <div className="py-32 text-center space-y-8">
                  <div className="w-24 h-24 rounded-none bg-muted mx-auto flex items-center justify-center border border-border text-muted-foreground/30 rotate-12">
                    <BookOpen size={48} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-foreground tracking-tighter">Zero Correlation Found</h3>
                    <p className="text-muted-foreground text-lg">Modify your filters or re-initialize the search protocol.</p>
                  </div>
                  <button
                    onClick={() => { setActiveCategory('All'); setActiveLevel('All'); setSearchQuery(''); }}
                    className="rounded-none px-10 py-5 bg-card border border-primary/20 text-primary font-black uppercase tracking-[0.2em] text-[11px] hover:bg-primary hover:text-white transition-all"
                  >
                    Reset Local Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
