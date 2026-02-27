import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ConditionalNavigation from "@/components/layout/ConditionalNavigation"
import React from 'react'
import { AuthProvider } from '@/providers/AuthProvider'
import NextTopLoader from 'nextjs-toploader'
import SmoothNavigationProvider from '@/providers/SmoothNavigationProvider'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "700"],
})

import { getSiteSettings } from "@/lib/queries/getSiteSettings"
import { getFooter } from "@/lib/queries/getFooter"

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()

  return {
    title: {
      default: settings.siteName || "Tecobit Academy",
      template: `%s | ${settings.siteName || "Tecobit Academy"}`,
    },
    description: settings.description || "Transform your career with industry-leading IT training.",
    keywords: "IT training Nepal, Web Development, UI/UX Design, DevOps, Mobile Development, QA, Project Management",
    icons: {
      icon: '/favicon.png',
      shortcut: '/favicon.png',
      apple: '/favicon.png',
    },
    openGraph: {
      images: settings.logo && typeof settings.logo !== 'string' ? [{ url: settings.logo.url || '' }] : [],
    }
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const footerData = await getFooter()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <AuthProvider>
            <NextTopLoader
              color="#79A0BA"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #79A0BA,0 0 5px #79A0BA"
            />
            <ConditionalNavigation footerData={footerData}>
              <SmoothNavigationProvider>
                {children}
              </SmoothNavigationProvider>
            </ConditionalNavigation>
          </AuthProvider>
        </ThemeProvider>
      </body>

    </html>
  )
}
