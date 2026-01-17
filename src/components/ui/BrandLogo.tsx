/**
 * BrandLogo Component
 * Displays "TechWareAfrica" with color-coded text:
 * - Tech: #FF9900 (Orange - Secondary)
 * - Ware: #232F3E (Dark Navy - Primary)
 * - Africa: #FF9900 (Orange - Secondary)
 * 
 * Supports two variants: "header" (standard) and "footer" (with white text fallback)
 */

interface BrandLogoProps {
  variant?: 'header' | 'footer'
  className?: string
}

export function BrandLogo({ variant = 'header', className = '' }: BrandLogoProps) {
  const defaultClass = variant === 'footer' 
    ? 'text-xl font-bold font-heading' 
    : 'text-xl font-bold text-white font-heading'

  return (
    <span className={`${defaultClass} ${className}`}>
      <span className="text-secondary">Tech</span>
      <span className={variant === 'footer' ? 'text-white' : 'text-white'}>Ware</span>
      <span className="text-secondary">Africa</span>
    </span>
  )
}
