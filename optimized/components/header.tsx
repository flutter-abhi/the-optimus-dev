"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()

  // Handle mounting state to avoid hydration issues
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setScrolled(window.scrollY > 10)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ]

  // Don't render anything until mounted to avoid hydration issues
  if (!isMounted) {
    return <header className="h-16"></header>
  }

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-white shadow-sm" : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-bold",
            scrolled ? "text-zinc-900" : "text-white"
          )}>
            optimusDev
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium",
                scrolled ? "text-zinc-600" : "text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden",
            scrolled ? "text-zinc-900" : "text-white"
          )}
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col h-full p-4">
                <div className="flex justify-end">
                  <button
                    className="text-white p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <nav className="flex-1 flex flex-col items-center justify-center gap-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-white text-2xl"
                      onClick={(e) => {
                        // Close menu immediately
                        setIsMenuOpen(false)
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}