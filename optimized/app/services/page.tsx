import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Database, Laptop, Monitor, Phone, Settings } from "lucide-react"
import webi from '../../public/services/webpage.jpg'
import desk from '../../public/services/deskt.png'
import mobileimg from '../../public/services/icons/mobile_app.png'


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer comprehensive digital solutions tailored to your specific needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {/* Web Development */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-block p-3 bg-zinc-100 rounded-lg">
                  <Monitor className="h-8 w-8 text-zinc-900" />
                </div>
                <h2 className="text-3xl font-bold">Web Application Development</h2>
                <p className="text-zinc-500 md:text-lg">
                  We build modern, responsive web applications that deliver exceptional user experiences. Our web
                  solutions are designed to be scalable, secure, and optimized for performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-zinc-900" />
                    <span>Custom web application development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-zinc-900" />
                    <span>Progressive Web Apps (PWAs)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-zinc-900" />
                    <span>E-commerce solutions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-zinc-900" />
                    <span>Content Management Systems (CMS)</span>
                  </li>
                </ul>
                <div>
                  <Link href="/services/web-development">
                    <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={webi}
                  alt="Web Development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Mobile Development */}
            <div className="grid md:grid-cols-2 gap-8 items-center md:order-2">
              <div className="space-y-4 md:order-2">
                <div className="inline-block p-3 bg-zinc-100 rounded-lg">
                  <Phone className="h-8 w-8 text-zinc-900" />
                </div>
                <h2 className="text-3xl font-bold">Mobile Application Development</h2>
                <p className="text-zinc-500 md:text-lg">
                  We create native and cross-platform mobile applications that engage users and drive business growth.
                  Our mobile solutions are designed with a focus on performance, usability, and security.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-zinc-900" />
                    <span>iOS app development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-zinc-900" />
                    <span>Android app development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-zinc-900" />
                    <span>Cross-platform app development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-zinc-900" />
                    <span>Mobile app maintenance and support</span>
                  </li>
                </ul>
                <div>
                  <Link href="/services/mobile-development">
                    <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg md:order-1 border border-zinc-200 shadow-lg">
                  <Image
                  src={mobileimg}
                  alt="Mobile Development"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>

            {/* Desktop Development */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="inline-block p-3 bg-zinc-100 rounded-lg">
                  <Laptop className="h-8 w-8 text-zinc-900" />
                </div>
                <h2 className="text-3xl font-bold">Desktop Application Development</h2>
                <p className="text-zinc-500 md:text-lg">
                  We develop powerful desktop applications that streamline workflows and boost productivity. Our desktop
                  solutions are designed to be robust, efficient, and user-friendly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-zinc-900" />
                    <span>Windows application development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-zinc-900" />
                    <span>macOS application development</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-zinc-900" />
                    <span>Cross-platform desktop applications</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-1 w-1 rounded-full bg-zinc-900" />
                    <span>Legacy system modernization</span>
                  </li>
                </ul>
                <div>
                  <Link href="/services/desktop-development">
                    <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={desk}
                  alt="Desktop Development"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Additional Services */}
            <div className="pt-12">
              <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-zinc-100 rounded-full">
                      <Code className="h-8 w-8 text-zinc-900" />
                    </div>
                    <h3 className="text-xl font-bold">Custom API Development</h3>
                    <p className="text-zinc-500">
                      We build secure, scalable, and well-documented APIs that connect your systems and enable seamless
                      data exchange.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-zinc-100 rounded-full">
                      <Database className="h-8 w-8 text-zinc-900" />
                    </div>
                    <h3 className="text-xl font-bold">Database Design & Development</h3>
                    <p className="text-zinc-500">
                      We design and implement efficient database solutions that ensure data integrity, security, and
                      optimal performance.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-3 bg-zinc-100 rounded-full">
                      <Settings className="h-8 w-8 text-zinc-900" />
                    </div>
                    <h3 className="text-xl font-bold">DevOps & Cloud Services</h3>
                    <p className="text-zinc-500">
                      We provide comprehensive DevOps and cloud services to streamline your development processes and
                      optimize infrastructure.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss your project and how we can help bring your vision to life
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" className="border-zinc-900 text-zinc-900 hover:bg-zinc-900/10">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

