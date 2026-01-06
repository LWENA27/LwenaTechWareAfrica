"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Package, QrCode, Cloud as CloudIcon, MessageSquare } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

export function ProductsShowcase() {
  const products = [
    {
      icon: Package,
      name: 'InventoryMaster SaaS',
      tagline: 'Multi-Platform Inventory Management',
      description: 'Complete inventory management system with multi-tenant architecture, supporting Web, Android, Windows, macOS, and Linux.',
      features: ['Multi-tenant SaaS', 'Real-time sync', 'Product catalog with images', 'Cross-platform'],
      link: '/products/inventorymaster',
      status: 'Production Ready',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: QrCode,
      name: 'SmartMenu QR',
      tagline: 'QR-Based Restaurant Ordering',
      description: 'Smart menu food ordering system for restaurants and hotels. Customers scan QR codes to view menus and place orders.',
      features: ['QR code menus', 'Order management', 'Kitchen dashboard', 'No app required'],
      link: '/products/smartmenu-qr',
      status: 'Production Ready',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: CloudIcon,
      name: 'Weather Admin App',
      tagline: 'SMS Weather Information Platform',
      description: 'Android platform providing real-time weather information via SMS in Swahili with AI assistant integration.',
      features: ['SMS-based queries', 'AI assistant', 'Weather forecasts', 'Agricultural advice'],
      link: '/products/weatheradmin',
      status: 'Production Ready',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MessageSquare,
      name: 'SMS Gateway Pro',
      tagline: 'Professional Bulk SMS System',
      description: 'Multi-tenant bulk SMS management with native Android sending, contact management, and group messaging.',
      features: ['Bulk messaging', 'Multi-tenant', 'Native SMS', 'API integration'],
      link: '/products/sms-gateway-pro',
      status: 'Production Ready',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let timer: ReturnType<typeof setInterval> | null = null

    const getVisibleCount = () => {
      const w = window.innerWidth
      if (w >= 1280) return 4
      if (w >= 1024) return 3
      if (w >= 640) return 2
      return 1
    }

    const calcStep = () => {
      const visible = getVisibleCount()
      const clientWidth = container.clientWidth
      return Math.floor(clientWidth / visible)
    }

    const updatePages = () => {
      const step = calcStep()
      const clientWidth = container.clientWidth
      const maxScroll = Math.max(0, container.scrollWidth - clientWidth)
      const pages = Math.max(1, Math.ceil((maxScroll + clientWidth) / step))
      setTotalPages(pages)
    }

    const doScroll = () => {
      const step = calcStep()
      const clientWidth = container.clientWidth
      const maxScroll = Math.max(0, container.scrollWidth - clientWidth)
      const current = Math.round(container.scrollLeft / step)
      let next = current + 1
      if (next * step > maxScroll) next = 0
      const nextScroll = next * step
      container.scrollTo({ left: nextScroll, behavior: 'smooth' })
    }

    // update pages on load and resize
    updatePages()
    const resizeHandler = () => {
      updatePages()
    }
    window.addEventListener('resize', resizeHandler)

    // attach scroll listener to update current page
    const onScroll = () => {
      const step = calcStep()
      const current = Math.round(container.scrollLeft / step)
      setCurrentPage(current)
    }
    container.addEventListener('scroll', onScroll, { passive: true })

    if (!isPaused) {
      timer = setInterval(doScroll, 3500)
    }

    return () => {
      window.removeEventListener('resize', resizeHandler)
      container.removeEventListener('scroll', onScroll)
      if (timer) clearInterval(timer)
    }
  }, [isPaused])

  const scrollToPage = (page: number) => {
    const container = scrollRef.current
    if (!container) return
    const visible = window.innerWidth >= 1280 ? 4 : window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1
    const step = Math.floor(container.clientWidth / visible)
    const maxScroll = Math.max(0, container.scrollWidth - container.clientWidth)
    const target = Math.max(0, Math.min(page * step, maxScroll))
    container.scrollTo({ left: target, behavior: 'smooth' })
    setCurrentPage(Math.round(target / step))
  }

  const handlePrev = () => scrollToPage(Math.max(0, currentPage - 1))
  const handleNext = () => scrollToPage(currentPage + 1)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            Ready-to-Deploy Products
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Battle-tested SaaS solutions that are ready to generate revenue. 
            License our products or get custom development.
          </p>
        </div>

        {/* Horizontal auto-sliding carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              ref={scrollRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="product-scroll-container flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 hide-scrollbar"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {products.map((product, index) => (
                <div
                  key={index}
                  className="snap-start flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                >
                  <div className="group relative bg-white rounded-xl border border-border hover:border-secondary shadow-sm hover:shadow-xl transition-all overflow-hidden">
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        {product.status}
                      </span>
                    </div>

                    <div className={`h-24 bg-gradient-to-r ${product.color} opacity-10 group-hover:opacity-20 transition-opacity`} />

                    <div className="p-8 -mt-12">
                      <div className={`inline-flex p-4 bg-white rounded-lg shadow-md mb-4 border-2 border-white group-hover:border-secondary transition-colors`}>
                        <product.icon className="h-8 w-8 text-secondary" />
                      </div>

                      <h3 className="text-2xl font-bold text-primary mb-2">{product.name}</h3>
                      <p className="text-secondary font-medium mb-3">{product.tagline}</p>
                      <p className="text-muted mb-6">{product.description}</p>

                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                            <span className="text-muted">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={product.link}
                        className="inline-flex items-center text-secondary font-semibold hover:gap-2 transition-all"
                      >
                        View Details <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Auto-scroll behavior */}
        {/* Controls (visible on larger screens) */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <div className="hidden lg:flex items-center gap-2">
            <button onClick={handlePrev} aria-label="Previous" className="p-2 rounded-md bg-white border">
              ‹
            </button>
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToPage(i)}
                  className={`h-2 w-8 rounded-full ${i === currentPage ? 'bg-primary' : 'bg-muted/40'}`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={handleNext} aria-label="Next" className="p-2 rounded-md bg-white border">
              ›
            </button>
          </div>

          {/* Small-screen dots */}
          <div className="flex lg:hidden items-center gap-2">
            {Array.from({ length: Math.max(1, totalPages) }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToPage(i)}
                className={`h-2 w-2 rounded-full ${i === currentPage ? 'bg-primary' : 'bg-muted/40'}`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link href="/products">Explore All Products</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Get Custom Development</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// small utility CSS to hide scrollbar (added here so no global CSS change required)
// You can move this to a global stylesheet if preferred.
const style = `
.hide-scrollbar::-webkit-scrollbar{display:none}
.hide-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
`

if (typeof document !== 'undefined') {
  const id = 'products-showcase-scroll-style'
  if (!document.getElementById(id)) {
    const el = document.createElement('style')
    el.id = id
    el.innerHTML = style
    document.head.appendChild(el)
  }
}
