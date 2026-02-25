import React from 'react'
import Link from 'next/link'
import Button from '@/components/common/Button'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-none bg-tecobit-blue/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-none bg-tecobit-teal/10 blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-none bg-tecobit-blue/10 text-tecobit-blue text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-none bg-tecobit-blue mr-2"></span>
              #1 IT Training Center in Nepal
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Master the Skills to{' '}
              <span className="text-tecobit-blue mt-2 inline-block">Shape the Future.</span>
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Launch your career with Training Point. We provide practical, hands-on training in Web
              Development, UI/UX, QA, and more to get you job-ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/courses">
                <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-tecobit-mint/25 bg-tecobit-mint text-navy hover:bg-[#2FE6B1]">
                  Explore Courses
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Book Consultation
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <div className="flex items-center text-gray-600 text-sm font-medium">
                <CheckCircle size={18} className="text-tecobit-green mr-2" />
                Job Placement Assistance
              </div>
              <div className="flex items-center text-gray-600 text-sm font-medium">
                <CheckCircle size={18} className="text-tecobit-green mr-2" />
                Industry Expert Instructors
              </div>
              <div className="flex items-center text-gray-600 text-sm font-medium">
                <CheckCircle size={18} className="text-tecobit-green mr-2" />
                Real-world Projects
              </div>
            </div>
          </div>

          {/* Hero Image / Visuals */}
          <div className="relative">
            <div className="relative rounded-none overflow-hidden shadow-2xl border-4 border-white">
              {/* Simulated Hero Image */}
              <div className="bg-tecobit-teal aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-tecobit-teal to-[#2A8F99] opacity-90"></div>
                <div className="relative z-10 text-center text-white p-8">
                  <code className="text-white/80 block mb-4 text-left p-4 bg-black/20 rounded-none backdrop-blur-sm font-mono text-sm">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-tecobit-mint">future</span> ={' '}
                    <span className="text-tecobit-amber">await</span>{' '}
                    <span className="text-green-300">trainingPoint</span>.
                    <span className="text-blue-200">startJourney</span>();
                  </code>
                  <div className="text-6xl font-bold mb-2">3000+</div>
                  <div className="text-lg text-gray-300">Students & Professionals Trained</div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-none shadow-xl animate-bounce">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-tecobit-soft flex items-center justify-center text-tecobit-green">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Success Rate</p>
                  <p className="font-bold text-navy">95% Placed</p>
                </div>
              </div>
            </div>

            <div className="absolute top-10 -right-6 bg-white p-4 rounded-none shadow-xl animate-pulse">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-purple-100 flex items-center justify-center text-tecobit-blue">
                  <Star size={20} className="fill-current" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Review</p>
                  <p className="font-bold text-navy">4.9/5 Check</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
