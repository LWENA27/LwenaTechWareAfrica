import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle2, Download, Globe, Smartphone, Monitor, Gift, Clock, Check, Zap } from 'lucide-react'

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "InventoryMaster SaaS",
  "description": "Comprehensive multi-tenant inventory management system built with Flutter and Supabase.",
  "image": "https://techwareafrica.tech/images/inventory/inventory-01.png",
  "brand": {
    "@type": "Brand",
    "name": "TechWareAfrica"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://inventory.techwareafrica.tech",
    "priceCurrency": "USD",
    "price": "0",
    "priceValidUntil": "2026-12-31",
    "availability": "https://schema.org/InStock",
    "description": "3 months free trial in 2026"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "1"
  }
}

export const metadata: Metadata = {
  title: 'InventoryMaster SaaS - Multi-Platform Inventory Management',
  description: 'Comprehensive multi-tenant inventory management system built with Flutter and Supabase. Supports Web, Android, Windows, macOS, and Linux.',
  openGraph: {
    title: 'InventoryMaster — Multi-Platform Inventory Management',
    description: 'InventoryMaster is a comprehensive multi-tenant inventory management system supporting web and native platforms.',
    images: ['/images/inventory/inventory-01.png']
  },
}

export default function InventoryMasterPage() {
  // Check if we're still in 2026
  const currentYear = new Date().getFullYear()
  const isOfferValid = currentYear === 2026

  const features = [
    'Multi-tenant Architecture - Support multiple businesses',
    'Product Management - Complete catalog with up to 5 images per product',
    'Inventory Tracking - Real-time stock levels and alerts',
    'Sales Management - Track sales with foreign key constraints',
    'User Authentication - Secure login with role-based access',
    'Real-time Sync - Cross-platform data synchronization',
    'Image Management - Supabase Storage integration',
    'Export Capabilities - Generate reports and export data',
    'Offline Support - View products when offline'
  ]

  const platforms = [
    { name: 'Web Application', icon: Globe, description: 'PWA with offline capabilities' },
    { name: 'Android Mobile', icon: Smartphone, description: 'Native Android 5.0+ support' },
    { name: 'Windows Desktop', icon: Monitor, description: 'Native Windows 10/11 app' },
    { name: 'macOS Desktop', icon: Monitor, description: 'Native macOS 10.14+ app' },
    { name: 'Linux Desktop', icon: Monitor, description: 'Ubuntu 18.04+ compatible' }
  ]

  const techStack = [
    { category: 'Frontend', tech: 'Flutter, Dart' },
    { category: 'Backend', tech: 'Supabase (PostgreSQL)' },
    { category: 'Authentication', tech: 'Supabase Auth' },
    { category: 'Storage', tech: 'Supabase Storage' },
    { category: 'Real-time', tech: 'Supabase Realtime' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <Link href="/products" className="inline-flex items-center text-secondary hover:text-secondary/80 mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
            
            <div className="inline-block px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-semibold mb-6">
              ✅ Production Ready
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              InventoryMaster SaaS
            </h1>
            
            <p className="text-xl text-white/80 mb-8">
              A comprehensive multi-tenant inventory management system built with Flutter and Supabase, 
              supporting Web, Android, Windows, macOS, and Linux platforms.
            </p>

            {/* 3-Month Free Trial Offer Banner */}
            {isOfferValid ? (
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-2 border-green-400 rounded-2xl p-6 mb-8 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <Gift className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">🎉 LIMITED TIME OFFER - 2026 ONLY!</h3>
                    <p className="text-white/90 text-lg">
                      <strong>Get 3 MONTHS FREE</strong> access to InventoryMaster Pro with ALL features unlocked! 
                      Plus, submit unlimited customization requests to tailor it to your business needs.
                    </p>
                    <p className="text-green-300 text-sm mt-2">
                      ⏰ This exclusive offer is only available during 2026. Don't miss out!
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-red-500/20 border-2 border-red-500 rounded-2xl p-6 mb-8">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-2">Offer Expired</h3>
                    <p className="text-red-300">
                      ⏰ The 3-month free trial offer was exclusive to 2026 and has now expired. 
                      Contact us for current pricing and available plans.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              {isOfferValid ? (
                <>
                  <a
                    href="https://inventory.techwareafrica.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    Start FREE 3-Month Trial
                  </a>
                  <a
                    href="#features"
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
                  >
                    Learn More
                  </a>
                </>
              ) : (
                <Button variant="cta" size="lg" asChild>
                  <a href="https://inventory.techwareafrica.tech/" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-5 w-5" />
                    Start Free Trial
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">
              Comprehensive Features
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-muted">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">
              Multi-Platform Support
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-border hover:border-secondary hover:shadow-lg transition-all">
                  <platform.icon className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold text-primary mb-2">{platform.name}</h3>
                  <p className="text-muted">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">
              Technology Stack
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {techStack.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-background rounded-lg">
                  <div className="font-semibold text-primary min-w-[120px]">{item.category}:</div>
                  <div className="text-muted">{item.tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots Gallery */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#232F3E] mb-4">
              See InventoryMaster in Action
            </h2>
            <p className="text-xl text-gray-600">
              Real screenshots from our multi-platform app - powerful, intuitive, and feature-rich
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            {/* Featured Screenshot */}
            <div className="mb-12 flex justify-center">
              <div className="relative group max-w-4xl w-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl">
                  <Image 
                    src="/images/inventory/inventory-01.png"
                    alt="InventoryMaster - Main Dashboard showing multi-tenant inventory management"
                    width={1200}
                    height={675}
                    className="w-full h-auto rounded-xl"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Screenshot Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { src: "/images/inventory/inventory-02.png", alt: "Product Management - Add and edit inventory items" },
                { src: "/images/inventory/inventory-03.png", alt: "Inventory Dashboard - Real-time stock overview" },
                { src: "/images/inventory/inventory-04.png", alt: "Stock Levels - Monitor inventory quantities" },
                { src: "/images/inventory/inventory-05.png", alt: "Product Details - Complete item information" },
                { src: "/images/inventory/inventory-06.png", alt: "Sales Tracking - Transaction history" },
                { src: "/images/inventory/inventory-07.png", alt: "Category Management - Organize products" },
                { src: "/images/inventory/inventory-08.png", alt: "User Settings - Account configuration" },
                { src: "/images/inventory/inventory-09.png", alt: "Multi-tenant View - Manage multiple businesses" },
                { src: "/images/inventory/inventory-10.png", alt: "Reports & Analytics - Data insights" },
                { src: "/images/inventory/inventory-11.png", alt: "Image Gallery - Product photography" },
                { src: "/images/inventory/inventory-12.png", alt: "Real-time Sync - Cross-platform updates" },
                { src: "/images/inventory/inventory-13.png", alt: "Offline Support - Work without connection" }
              ].map((screenshot, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image 
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-semibold">{screenshot.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Below Gallery */}
            <div className="mt-12 text-center">
              <a
                href="https://inventory.techwareafrica.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <Globe className="w-6 h-6" />
                Try It Free - Experience These Features Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-heading text-primary mb-12 text-center">
              Perfect For
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">Retail Businesses</h3>
                <p className="text-muted">Track inventory across multiple stores with real-time updates</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">Warehouses</h3>
                <p className="text-muted">Manage stock levels, track movements, and prevent stockouts</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">E-commerce</h3>
                <p className="text-muted">Sync online and offline inventory seamlessly</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">Small Businesses</h3>
                <p className="text-muted">Affordable, easy-to-use inventory management solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Section */}
      {isOfferValid && (
        <section className="py-20 bg-gradient-to-br from-[#232F3E] to-[#1a242e] text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Need Custom Features? We've Got You Covered!
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                During your 3-month free trial, submit unlimited customization requests. We'll tailor InventoryMaster to your exact business needs.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Popular Customization Requests:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  {[
                    "Custom reporting dashboards",
                    "Barcode & QR code integration",
                    "Multi-location management",
                    "Advanced user roles & permissions",
                    "E-commerce platform integration",
                    "Custom product fields",
                    "Automated reorder alerts",
                    "White-label branding"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://inventory.techwareafrica.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-500 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all shadow-xl"
                >
                  Start Free Trial & Request Customizations
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              {isOfferValid 
                ? "Ready to Streamline Your Inventory?"
                : "Ready to Streamline Your Inventory?"}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {isOfferValid
                ? "Start your FREE 3-month trial today with all features unlocked and unlimited customization requests!"
                : "Start using InventoryMaster today. Contact us for licensing options."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <a href="https://inventory.techwareafrica.tech/" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
