import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'TechWareAfrica | World-Class Software Solutions from Africa',
    template: '%s | TechWareAfrica'
  },
  description: 'Professional software development company delivering world-class SaaS solutions, mobile apps, and enterprise systems. Built in Africa for the global market.',
  keywords: [
    'software company Africa',
    'web development Tanzania',
    'SaaS solutions Africa',
    'mobile app development',
    'enterprise software Africa',
    'inventory management system',
    'SMS gateway',
    'restaurant management system',
  ],
  authors: [{ name: 'TechWareAfrica' }],
  creator: 'TechWareAfrica',
  publisher: 'TechWareAfrica',
  // canonical site base used to build absolute URLs (keeps Open Graph and canonical links consistent)
  metadataBase: new URL('https://techwareafrica.tech'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techwareafrica.tech',
    title: 'TechWareAfrica | World-Class Software Solutions from Africa',
    description: 'Professional software development company delivering world-class solutions built in Africa for the global market.',
    siteName: 'TechWareAfrica',
    images: [
      '/images/Brand&LandingPage/og-techwareafrica.png'
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechWareAfrica | World-Class Software Solutions',
    description: 'Professional software development company from Africa.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TechWareAfrica",
  "url": "https://techwareafrica.tech",
  "logo": "https://techwareafrica/images/Brand&LandingPage/logoal-removebg-preview.png",
  "description": "Professional software development company delivering world-class SaaS solutions, mobile apps, and enterprise systems.",
  "sameAs": []
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
