import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { careers } from '@/data/careers'
import { MapPin, Clock, Briefcase, DollarSign, ArrowLeft, CheckCircle } from 'lucide-react'
import Badge from '@/components/common/Badge'
import Button from '@/components/common/Button'
import ApplyButton from '@/components/careers/ApplyButton'

export function generateStaticParams() {
  return careers.map((career) => ({
    slug: career.slug,
  }))
}

export default async function CareerDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const career = careers.find((c) => c.slug === resolvedParams.slug)

  if (!career) {
    notFound()
  }

  return (
    <div className="pb-20">
      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="container-custom">
          <Link
            href="/careers"
            className="inline-flex items-center text-gray-500 hover:text-primary transition-colors text-sm font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Careers
          </Link>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-none shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-navy p-8 md:p-12 text-white">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="primary" className="bg-primary text-white border-0">
                {career.department}
              </Badge>
              <Badge variant="outline" className="text-gray-300 border-gray-500">
                {career.type}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{career.title}</h1>

            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-primary" />
                {career.location}
              </div>
              {career.salary_range && (
                <div className="flex items-center">
                  <DollarSign size={18} className="mr-2 text-primary" />
                  {career.salary_range}
                </div>
              )}
              <div className="flex items-center">
                <Clock size={18} className="mr-2 text-primary" />
                Posted: {career.postedDate}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <section className="mb-10">
              <h2 className="text-xl font-bold text-navy mb-4 border-b border-gray-100 pb-2">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">{career.description}</p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
              <section>
                <h2 className="text-xl font-bold text-navy mb-4 border-b border-gray-100 pb-2">
                  Responsibilities
                </h2>
                <ul className="space-y-3">
                  {career.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <CheckCircle size={18} className="text-green-500 mr-3 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-navy mb-4 border-b border-gray-100 pb-2">
                  Requirements
                </h2>
                <ul className="space-y-3">
                  {career.requirements.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <CheckCircle size={18} className="text-primary mr-3 mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Apply CTA */}
            <div className="bg-gray-50 rounded-none p-8 text-center border border-gray-200">
              <h3 className="text-2xl font-bold text-navy mb-4">Interested in this role?</h3>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Please send your CV and Cover Letter to{' '}
                <span className="font-bold text-navy">jobs@trainingpoint.com.np</span> mentioning
                the position in the subject line.
              </p>
              <ApplyButton
                email="jobs@trainingpoint.com.np"
                subject={`Application for ${career.title}`}
              >
                My Apply Now
              </ApplyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
