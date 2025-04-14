"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Smartphone, TabletSmartphone, Tablet, Layers, Zap } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import "./page.css"

const ImageSlider = () => {
  const images = Array.from({ length: 8 }, (_, i) => i + 1);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="image-slider">
      <div className="glow-effect" />

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        watchSlidesProgress={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,       // Increased depth for a stronger 3D effect
          modifier: 1.5,    // Smoother transition modifier
          slideShadows: false,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation, Pagination]}
        className="swiper-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {images.map((index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <motion.div
              initial={{ opacity: 0.1, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0.1, y: -20 }}
              transition={{ duration: 0.5 }}
              className="slide-content"
            >
              <Image
                src={`/mobile/mob${index}.jpg`}
                alt={`Mobile ${index}`}
                width={1000}
                height={600}
                className="slider-image"
                priority={index === 1}
              />
            </motion.div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default function MobileDevelopmentPage() {
  return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full hero-section bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ScrollReveal>
                <div className="space-y-4 hero-content">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Mobile Application Development
                  </h1>
                  <p className="text-zinc-300 md:text-xl">
                    We create native and cross-platform mobile applications that engage users and drive business growth.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact">
                      <Button className="bg-white text-zinc-900 hover:bg-zinc-100">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/portfolio?category=mobile">
                      <Button variant="outline" className="border-white text-white hover:bg-white/10" style={{ color: "black" }}>
                        View Mobile Projects
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="relative overflow-visible rounded-lg">
                  <ImageSlider />
                </div>
              </ScrollReveal>
            </div>
          </div>
      </section>

      {/* Services Overview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Mobile Development Services
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed">
                We offer comprehensive mobile development solutions tailored to your specific business needs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-zinc-100 rounded-full w-fit">
                      <Smartphone className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">iOS App Development</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Native iOS applications designed to provide a seamless user experience on Apple devices.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Swift & SwiftUI development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Apple design guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">App Store optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-zinc-100 rounded-full w-fit">
                      <Smartphone className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Android App Development</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Native Android applications optimized for performance across the diverse Android ecosystem.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Kotlin & Java development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Material Design implementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Google Play Store optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-zinc-100 rounded-full w-fit">
                      <TabletSmartphone className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Cross-Platform Development</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Efficient development of applications that work seamlessly across multiple platforms.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">React Native development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Flutter development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Code reusability across platforms</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-zinc-100 rounded-full w-fit">
                      <Tablet className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Tablet & iPad Applications</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Applications optimized for larger screens, providing enhanced user experiences on tablets.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Adaptive layouts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Multi-pane interfaces</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Stylus & pencil support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-zinc-100 rounded-full w-fit">
                      <Layers className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">UI/UX Design for Mobile</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    User-centered design that creates intuitive and engaging mobile experiences.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">User research & testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Wireframing & prototyping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Interaction design</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <div className="p-3 bg-zinc-100 rounded-full w-fit">
                      <Zap className="h-6 w-6 text-zinc-900" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">App Maintenance & Updates</h3>
                  <p className="text-zinc-500 mb-4 flex-grow">
                    Ongoing support to keep your mobile applications secure, up-to-date, and performing optimally.
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Regular updates & bug fixes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">Performance optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                      <span className="text-zinc-700">OS compatibility updates</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mobile Technologies</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed">
                We leverage cutting-edge technologies to build robust and engaging mobile applications
              </p>
            </div>
          </ScrollReveal>

          <Tabs defaultValue="native" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="native">Native</TabsTrigger>
                <TabsTrigger value="cross-platform">Cross-Platform</TabsTrigger>
                <TabsTrigger value="tools">Tools & Services</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="native" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ScrollReveal delay={0.1}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src="/placeholder.svg?height=64&width=64" alt="Swift" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Swift</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src="/placeholder.svg?height=64&width=64" alt="SwiftUI" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">SwiftUI</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src="/placeholder.svg?height=64&width=64" alt="Kotlin" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Kotlin</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src="/placeholder.svg?height=64&width=64" alt="Jetpack Compose" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Jetpack Compose</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </TabsContent>

            <TabsContent value="cross-platform" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ScrollReveal delay={0.1}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src="/placeholder.svg?height=64&width=64" alt="React Native" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">React Native</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src="/placeholder.svg?height=64&width=64" alt="Flutter" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Flutter</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src="/placeholder.svg?height=64&width=64" alt="Xamarin" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Xamarin</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src="/placeholder.svg?height=64&width=64" alt="Ionic" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Ionic</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </TabsContent>

            <TabsContent value="tools" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ScrollReveal delay={0.1}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src="/placeholder.svg?height=64&width=64" alt="Firebase" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Firebase</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src="/placeholder.svg?height=64&width=64" alt="App Center" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">App Center</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src="/placeholder.svg?height=64&width=64" alt="Fastlane" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Fastlane</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <Card className="bg-white border-none shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <Image src="/placeholder.svg?height=64&width=64" alt="Figma" width={64} height={64} />
                      </div>
                      <h3 className="font-medium">Figma</h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Studies */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Case Studies</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed">
                Explore how we've helped our clients achieve their business goals through mobile development
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Fitness Tracking App"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Fitness Tracking App</h3>
                  <p className="text-zinc-500 mb-4">
                    We developed a comprehensive fitness tracking app that helped a health company increase user
                    engagement by 60%.
                  </p>
                  <Link href="/portfolio/fitness-app">
                    <Button variant="outline" className="border-zinc-900 text-zinc-900 hover:bg-zinc-900/10">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Healthcare App"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Healthcare App</h3>
                  <p className="text-zinc-500 mb-4">
                    We built a mobile healthcare application that streamlined patient management and reduced
                    administrative tasks by 40%.
                  </p>
                  <Link href="/portfolio/healthcare-app">
                    <Button variant="outline" className="border-zinc-900 text-zinc-900 hover:bg-zinc-900/10">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/portfolio?category=mobile">
              <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                View All Mobile Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <ScrollReveal>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Start Your Mobile Project?
                </h2>
                <p className="max-w-[900px] text-zinc-300 md:text-xl/relaxed">
                  Let's discuss how we can help bring your vision to life with a custom mobile application
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link href="/contact">
                  <Button className="bg-white text-zinc-900 hover:bg-zinc-100">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Explore Other Services
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

