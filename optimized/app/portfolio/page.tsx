import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Portfolio</h1>
              <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our latest projects and see how we've helped our clients achieve their goals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="desktop">Desktop</TabsTrigger>
              </TabsList>
            </div>

            {/* All Projects */}
            <TabsContent value="all" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Project 1 */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="E-commerce Platform"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">E-commerce Platform</h3>
                        <p className="text-sm text-zinc-500">Web Development</p>
                      </div>
                      <Link href="/portfolio/ecommerce-platform">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </Link>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">
                      A comprehensive e-commerce solution with advanced product filtering, secure payment processing,
                      and customer management.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">React</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Node.js</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">MongoDB</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Project 2 */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Fitness Tracking App"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Fitness Tracking App</h3>
                        <p className="text-sm text-zinc-500">Mobile Development</p>
                      </div>
                      <Link href="/portfolio/fitness-app">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </Link>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">
                      A mobile application that helps users track workouts, set goals, and monitor their fitness
                      progress.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">React Native</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Firebase</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Redux</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Project 3 */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Inventory Management System"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Inventory Management</h3>
                        <p className="text-sm text-zinc-500">Desktop Development</p>
                      </div>
                      <Link href="/portfolio/inventory-system">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </Link>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">
                      A robust desktop application for managing inventory, tracking sales, and generating reports.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Electron</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Vue.js</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">SQLite</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Project 4 */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Real Estate Platform"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Real Estate Platform</h3>
                        <p className="text-sm text-zinc-500">Web Development</p>
                      </div>
                      <Link href="/portfolio/real-estate">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </Link>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">
                      A comprehensive platform for property listings, virtual tours, and real estate agent management.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Next.js</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Prisma</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">PostgreSQL</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Project 5 */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Healthcare App"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Healthcare App</h3>
                        <p className="text-sm text-zinc-500">Mobile Development</p>
                      </div>
                      <Link href="/portfolio/healthcare-app">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </Link>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">
                      A mobile application for patient management, appointment scheduling, and medical record tracking.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Flutter</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Firebase</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">GraphQL</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Project 6 */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Financial Analysis Tool"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Financial Analysis Tool</h3>
                        <p className="text-sm text-zinc-500">Desktop Development</p>
                      </div>
                      <Link href="/portfolio/financial-tool">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </Link>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">
                      A powerful desktop application for financial data analysis, forecasting, and reporting.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">C#</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">.NET</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">SQL Server</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Web Projects */}
            <TabsContent value="web" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Web Project 1 */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="E-commerce Platform"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">E-commerce Platform</h3>
                        <p className="text-sm text-zinc-500">Web Development</p>
                      </div>
                      <Link href="/portfolio/ecommerce-platform">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </Link>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">
                      A comprehensive e-commerce solution with advanced product filtering, secure payment processing,
                      and customer management.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">React</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Node.js</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">MongoDB</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Web Project 2 */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Real Estate Platform"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Real Estate Platform</h3>
                        <p className="text-sm text-zinc-500">Web Development</p>
                      </div>
                      <Link href="/portfolio/real-estate">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </Link>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">
                      A comprehensive platform for property listings, virtual tours, and real estate agent management.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Next.js</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Prisma</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">PostgreSQL</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Mobile Projects */}
            <TabsContent value="mobile" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Mobile Project 1 */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Fitness Tracking App"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Fitness Tracking App</h3>
                        <p className="text-sm text-zinc-500">Mobile Development</p>
                      </div>
                      <Link href="/portfolio/fitness-app">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </Link>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">
                      A mobile application that helps users track workouts, set goals, and monitor their fitness
                      progress.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">React Native</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Firebase</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Redux</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Mobile Project 2 */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Healthcare App"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Healthcare App</h3>
                        <p className="text-sm text-zinc-500">Mobile Development</p>
                      </div>
                      <Link href="/portfolio/healthcare-app">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </Link>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">
                      A mobile application for patient management, appointment scheduling, and medical record tracking.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Flutter</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Firebase</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">GraphQL</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Desktop Projects */}
            <TabsContent value="desktop" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Desktop Project 1 */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Inventory Management System"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Inventory Management</h3>
                        <p className="text-sm text-zinc-500">Desktop Development</p>
                      </div>
                      <Link href="/portfolio/inventory-system">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </Link>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">
                      A robust desktop application for managing inventory, tracking sales, and generating reports.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Electron</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">Vue.js</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">SQLite</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Desktop Project 2 */}
                <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=720&width=1280"
                      alt="Financial Analysis Tool"
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold">Financial Analysis Tool</h3>
                        <p className="text-sm text-zinc-500">Desktop Development</p>
                      </div>
                      <Link href="/portfolio/financial-tool">
                        <Button variant="ghost" size="icon" className="rounded-full">
                          <ArrowUpRight className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </Link>
                    </div>
                    <p className="text-zinc-500 text-sm mb-4">
                      A powerful desktop application for financial data analysis, forecasting, and reporting.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">C#</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">.NET</span>
                      <span className="text-xs bg-zinc-100 px-2 py-1 rounded-full">SQL Server</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Project?
              </h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how we can help bring your vision to life
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

