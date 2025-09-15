"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Calendar, MessageCircle, CheckCircle, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventDate: "",
          message: "",
        })

        if (result.mailtoLink) {
          window.open(result.mailtoLink, "_blank")
        }
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-12 sm:mb-16 scroll-reveal">
          Book Mizaazi
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="scroll-reveal">
            <h3 className="font-playfair text-xl sm:text-2xl font-semibold mb-6 sm:mb-8">Get in Touch</h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4 hover-lift p-2 rounded-lg">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-pulse-slow flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Phone</p>
                  <p className="text-muted-foreground text-sm sm:text-base">+91 73105 43093</p>
                </div>
              </div>
              <a
                href="https://wa.me/917310543093"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 hover-lift"
              >
                <MessageCircle className="h-6 w-6 text-yellow-500 animate-pulse-slow" />
                <div>
                  <p className="font-semibold">WhatsApp Me</p>
                </div>
              </a>
              <div className="flex items-center space-x-3 sm:space-x-4 hover-lift p-2 rounded-lg">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-pulse-slow flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Email</p>
                  <p className="text-muted-foreground text-sm sm:text-base break-all">manishkumarsingh8954@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 hover-lift p-2 rounded-lg">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-pulse-slow flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Location</p>
                  <p className="text-muted-foreground text-sm sm:text-base">Dehradun, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4 hover-lift p-2 rounded-lg">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-pulse-slow flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm sm:text-base">Availability</p>
                  <p className="text-muted-foreground text-sm sm:text-base">Weddings, Corporate Events, Concerts</p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Event Types</h4>
              <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                <li>• Wedding Ceremonies & Receptions</li>
                <li>• Corporate Events & Parties</li>
                <li>• Music Concerts & Festivals</li>
                <li>• Private Celebrations</li>
                <li>• Cultural Programs</li>
              </ul>
            </div>
          </div>

          <Card className="hover-lift border-primary/20 bg-card/50 backdrop-blur-sm scroll-reveal delay-200">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="font-playfair text-xl sm:text-2xl">Book Your Event</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input border-primary/20 focus:border-primary min-h-[44px]"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input border-primary/20 focus:border-primary min-h-[44px]"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-input border-primary/20 focus:border-primary min-h-[44px]"
                  />
                  <Input
                    name="eventDate"
                    type="date"
                    placeholder="Event Date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    className="bg-input border-primary/20 focus:border-primary min-h-[44px]"
                  />
                </div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your event (venue, type, duration, special requests)"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-input border-primary/20 focus:border-primary min-h-[100px] resize-none"
                />
                {submitStatus === "success" && (
                   <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-md animate-fade-in">
          Booking request sent successfully!
        </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <p className="text-sm">Failed to send booking request. Please try again.</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover-lift animate-glow min-h-[48px] text-base sm:text-lg disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Send Booking Request"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
