"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Piyush Bandal",
    role: "Entrepreneur",
    content:
      "Working with optimusDev was a game-changer for our business. Their team delivered a web application that exceeded our expectations and has significantly improved our customer engagement. The attention to detail and commitment to quality throughout the project was impressive.",
    rating: 5,
    company: "TechStart",
    logo: "/client1.jpg",
  },
  {
    id: 2,
    name: "Swapnil Kale",
    role: "Product Manager",
    content:
      "The mobile app developed by optimusDev has transformed how we interact with our customers. Their attention to detail and commitment to quality is unmatched. The team was responsive, professional, and truly understood our business needs from day one.",
    rating: 5,
    company: "E-Commerce",
    logo: "/client2.jpg",
  },
  {
    id: 3,
    name: "Dinesh Dhawal",
    role: "Director of Operations",
    content:
      "optimusDev delivered our desktop application on time and within budget. Their team was responsive, professional, and truly understood our business needs. The application has streamlined our internal processes and improved productivity across the organization.",
    rating: 4,
    company: "GrowthHub",
    logo: "/client3.jpg",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const [direction, setDirection] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => {
    setDirection(1)
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(next, 6000)
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [current, autoplay])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <div
      className="relative overflow-hidden py-10"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-zinc-200 opacity-20">
        <Quote size={120} />
      </div>

      <div className="relative">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full"
          >
            <div className="flex flex-col items-center text-center space-y-8 px-4">
              {/* Company Logo */}
              <div className="w-32 h-16 relative mb-6">
                <Image
                  src={testimonials[current].logo}
                  alt={testimonials[current].company}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Rating Stars */}
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonials[current].rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-zinc-200 text-zinc-200"
                      }`}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="max-w-2xl text-lg md:text-xl italic text-zinc-700 relative z-10">
                "{testimonials[current].content}"
              </blockquote>

              {/* Name and Role */}
              <div className="space-y-1">
                <div className="font-semibold text-lg">{testimonials[current].name}</div>
                <div className="text-sm text-zinc-500">
                  {testimonials[current].role}, {testimonials[current].company}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white z-10"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous testimonial</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white z-10"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next testimonial</span>
      </Button>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${current === index ? "bg-zinc-900 w-6" : "bg-zinc-300"
              }`}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              setCurrent(index)
            }}
          >
            <span className="sr-only">Testimonial {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

