import { Hero } from '@/components/home/Hero'
import { Metadata } from 'next'
import { ValueProposition } from '@/components/home/ValueProposition'
import { ServicesOverview } from '@/components/home/ServicesOverview'
import { ProductsShowcase } from '@/components/home/ProductsShowcase'
import { Testimonials } from '@/components/home/Testimonials'
import { SupportTeam } from '@/components/home/SupportTeam'
import { CTASection } from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <ServicesOverview />
      <ProductsShowcase />
      <Testimonials />
      <SupportTeam />
      <CTASection />
    </>
  )
}

export const metadata: Metadata = {
  title: 'TechWareAfrica — World-Class Software Solutions from Africa',
  description:
    'TechWareAfrica builds production-ready SaaS and mobile apps from Africa for the global market — inventory, SMS gateways, restaurant QR menus and more.',
  openGraph: {
    title: 'TechWareAfrica — World-Class Software Solutions from Africa',
    description: 'TechWareAfrica builds production-ready SaaS and mobile apps from Africa for the global market.',
    images: ['/images/og/og-home-1200x630.png']
  },
}
