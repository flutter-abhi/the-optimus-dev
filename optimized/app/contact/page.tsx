"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formElement = e.target as HTMLFormElement
      const formData = new FormData(formElement)

      // Send to FormSubmit using fetch instead of form submission
      const response = await fetch('https://formsubmit.co/ajax/theoptimusdev23@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      const response2 = await fetch('https://formsubmit.co/ajax/vickyautade533@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      const response3 = await fetch('https://formsubmit.co/ajax/abhishekjadhav2303@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
      })

      // Show success message
      setShowThankYou(true)
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      })

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowThankYou(false)
      }, 5000)

    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We'd love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 123-4567"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Project Type</Label>
                  <RadioGroup
                    name="projectType"
                    value={formData.projectType}
                    onValueChange={handleRadioChange}
                    className="flex flex-wrap gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="web" id="web" />
                      <Label htmlFor="web">Web Development</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mobile" id="mobile" />
                      <Label htmlFor="mobile">Mobile Development</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="desktop" id="desktop" />
                      <Label htmlFor="desktop">Desktop Development</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-zinc-900 text-white hover:bg-zinc-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
              {showThankYou && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">
                  <p className="text-center">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-4 flex items-start space-x-4">
                      <MapPin className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-zinc-500">Kothrud</p>
                        <p className="text-zinc-500">Pune, Maharashtra 411038</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-4 flex items-start space-x-4">
                      <Mail className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-zinc-500">theoptimusdev23@gmail.com</p>
                        <p className="text-zinc-500">vickyautade533@gmail.com</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-4 flex items-start space-x-4">
                      <Phone className="h-5 w-5 text-zinc-900 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-zinc-500">+91 87674 85746</p>
                        <p className="text-zinc-500">+91 72638 40533</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                <Card className="border-none shadow-sm">
                  <CardContent className="p-4 flex items-start space-x-4">
                    <Calendar className="h-5 w-5 text-zinc-900 mt-0.5" />
                    <div className="space-y-2">
                      <div>
                        <h3 className="font-medium">Monday - Friday</h3>
                        <p className="text-zinc-500">9:00 AM - 6:00 PM PST</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Saturday</h3>
                        <p className="text-zinc-500">10:00 AM - 2:00 PM PST</p>
                      </div>
                      <div>
                        <h3 className="font-medium">Sunday</h3>
                        <p className="text-zinc-500">Closed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Schedule a Meeting</h2>
                <p className="text-zinc-500 mb-4">
                  Prefer to speak directly with one of our team members? Schedule a virtual meeting at a time that works
                  for you.
                </p>
                <Link href="/schedule">
                  <Button className="bg-zinc-900 text-white hover:bg-zinc-800">Book a Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.402835073319!2d73.8072443143681!3d18.507673674230957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8a24dae7ad%3A0xfb5769e4ccfd9c06!2sKothrud%2C%20Pune%2C%20Maharashtra%20411038!5e0!3m2!1sen!2sin!4v1663154335700!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          title="Office Location"
        />
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-zinc-500 md:text-lg">
              Find answers to common questions about working with us
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What is your typical project timeline?</h3>
                <p className="text-zinc-500">
                  Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while
                  a complex application could take 3-6 months. We'll provide a detailed timeline during our initial
                  consultation.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">How do you handle project pricing?</h3>
                <p className="text-zinc-500">
                  We offer both fixed-price and time-and-materials pricing models. The best approach depends on your
                  project's requirements and flexibility. We'll discuss options during our consultation to find what
                  works best for you.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Do you provide ongoing support?</h3>
                <p className="text-zinc-500">
                  Yes, we offer various support and maintenance packages to ensure your application continues to run
                  smoothly after launch. We can tailor a support plan to meet your specific needs.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">What technologies do you specialize in?</h3>
                <p className="text-zinc-500">
                  We specialize in a wide range of technologies including React, Angular, Vue.js, Node.js, Python, React
                  Native, Flutter, .NET, and more. Our team stays up-to-date with the latest advancements to provide the
                  best solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

