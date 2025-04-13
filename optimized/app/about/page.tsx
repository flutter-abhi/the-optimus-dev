import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Calendar, CheckCircle, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About optimusDev</h1>
              <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are a team of passionate developers and designers dedicated to creating exceptional digital solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <p className="text-zinc-500 md:text-lg">
                Founded in 2018, optimusDev began with a simple mission: to create digital solutions that make a
                difference. What started as a small team of three passionate developers has grown into a diverse group
                of talented professionals united by a common goal.
              </p>
              <p className="text-zinc-500 md:text-lg">
                Our journey has been marked by continuous learning, innovation, and a relentless pursuit of excellence.
                We've had the privilege of working with clients across various industries, helping them transform their
                ideas into reality and achieve their business objectives.
              </p>
              <p className="text-zinc-500 md:text-lg">
                Today, optimusDev stands as a trusted partner for businesses seeking to leverage technology to drive
                growth and create meaningful user experiences. Our commitment to quality, transparency, and client
                satisfaction remains at the core of everything we do.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=720&width=1280" alt="Our Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold">Mission, Vision & Values</h2>
            <p className="max-w-[900px] text-zinc-500 md:text-lg">
              Our guiding principles that shape our work and culture
            </p>
          </div>
          <Tabs defaultValue="mission" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="mission">Mission</TabsTrigger>
              <TabsTrigger value="vision">Vision</TabsTrigger>
              <TabsTrigger value="values">Values</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="p-6 bg-white rounded-lg mt-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-zinc-500">
                To empower businesses through innovative digital solutions that solve real-world problems, enhance user
                experiences, and drive sustainable growth.
              </p>
            </TabsContent>
            <TabsContent value="vision" className="p-6 bg-white rounded-lg mt-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-zinc-500">
                To be a global leader in digital innovation, recognized for our technical excellence, creative approach,
                and the tangible value we bring to our clients and their users.
              </p>
            </TabsContent>
            <TabsContent value="values" className="p-6 bg-white rounded-lg mt-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-2 text-zinc-500">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Excellence:</strong> We strive for excellence in everything we do, from code quality to
                    client communication.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Innovation:</strong> We embrace new technologies and approaches to solve complex problems.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Integrity:</strong> We operate with honesty, transparency, and ethical standards.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Collaboration:</strong> We believe in the power of teamwork and partnership.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-zinc-900 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>User-Centered:</strong> We put users at the heart of our design and development process.
                  </span>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold">Meet Our Team</h2>
            <p className="max-w-[900px] text-zinc-500 md:text-lg">The talented individuals behind our success</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg?height=128&width=128" alt="John Smith" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">John Smith</h3>
                  <p className="text-zinc-500">Founder & CEO</p>
                </div>
                <p className="text-zinc-500 text-sm">
                  With over 15 years of experience in software development, John leads our team with vision and
                  technical expertise.
                </p>
              </CardContent>
            </Card>
            {/* Team Member 2 */}
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-zinc-500">CTO</p>
                </div>
                <p className="text-zinc-500 text-sm">
                  Sarah oversees our technical strategy and ensures we stay at the forefront of technological
                  innovation.
                </p>
              </CardContent>
            </Card>
            {/* Team Member 3 */}
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  <Image src="/placeholder.svg?height=128&width=128" alt="Michael Chen" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Michael Chen</h3>
                  <p className="text-zinc-500">Lead Designer</p>
                </div>
                <p className="text-zinc-500 text-sm">
                  Michael brings creativity and user-centered design principles to every project we undertake.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/about/team">
              <Button variant="outline" className="border-zinc-900 text-zinc-900 hover:bg-zinc-900/10">
                View Full Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold">Our Milestones</h2>
            <p className="max-w-[900px] text-zinc-500 md:text-lg">Key achievements in our journey</p>
          </div>
          <div className="relative border-l border-zinc-300 ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-8 md:pl-0">
            {/* Milestone 1 */}
            <div className="mb-12 md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div className="md:text-right md:pr-8 relative">
                <div className="absolute left-0 md:left-auto md:right-0 top-0 -ml-12 md:ml-0 md:-mr-12 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 text-white">
                  <Calendar className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-bold">2018</h3>
                <p className="text-zinc-500">Company Founded</p>
              </div>
              <div className="mt-2 md:mt-0 md:border-l md:border-zinc-300 md:pl-8">
                <p className="text-zinc-500">
                  optimusDev was founded with a vision to create innovative digital solutions that make a difference.
                </p>
              </div>
            </div>
            {/* Milestone 2 */}
            <div className="mb-12 md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div className="md:order-2 md:text-left md:pl-8 relative">
                <div className="absolute left-0 top-0 -ml-12 md:ml-0 md:-ml-12 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 text-white">
                  <Users className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-bold">2020</h3>
                <p className="text-zinc-500">Team Expansion</p>
              </div>
              <div className="mt-2 md:mt-0 md:order-1 md:text-right md:pr-8">
                <p className="text-zinc-500">
                  Our team grew to 10 members, allowing us to take on larger and more complex projects.
                </p>
              </div>
            </div>
            {/* Milestone 3 */}
            <div className="mb-12 md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div className="md:text-right md:pr-8 relative">
                <div className="absolute left-0 md:left-auto md:right-0 top-0 -ml-12 md:ml-0 md:-mr-12 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 text-white">
                  <Award className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-bold">2022</h3>
                <p className="text-zinc-500">Industry Recognition</p>
              </div>
              <div className="mt-2 md:mt-0 md:border-l md:border-zinc-300 md:pl-8">
                <p className="text-zinc-500">
                  Received multiple industry awards for our innovative approach to digital solutions.
                </p>
              </div>
            </div>
            {/* Milestone 4 */}
            <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center">
              <div className="md:order-2 md:text-left md:pl-8 relative">
                <div className="absolute left-0 top-0 -ml-12 md:ml-0 md:-ml-12 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 text-white">
                  <Calendar className="h-4 w-4" />
                </div>
                <h3 className="text-xl font-bold">2023</h3>
                <p className="text-zinc-500">Global Expansion</p>
              </div>
              <div className="mt-2 md:mt-0 md:order-1 md:text-right md:pr-8">
                <p className="text-zinc-500">
                  Expanded our operations globally, opening offices in Europe and Asia to better serve our international
                  clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join Our Journey</h2>
              <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Whether you're looking to work with us or join our team, we'd love to hear from you
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/careers">
                <Button variant="outline" className="border-zinc-900 text-zinc-900 hover:bg-zinc-900/10">
                  View Careers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

