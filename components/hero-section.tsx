"use client"

import { Button } from "@/components/ui/button"
import { Play, Phone } from "lucide-react"
import { FaInstagram, FaYoutube } from "react-icons/fa" 
export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source
          src="/IMG_3352.MP4?height=1080&width=1920&query=musician performing on stage with dramatic lighting"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 video-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 text-balance animate-fade-in-up">
          Mizaazi
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-balance opacity-90 animate-fade-in-up delay-200">
          Soulful Voice, Timeless Vibes
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-balance opacity-80 max-w-2xl mx-auto animate-fade-in-up delay-300">
          Experience the Soul of Sufi, Bollywood & More...
        </p>

      {/* Buttons Block */}
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up delay-400 px-2 sm:px-0">
  <Button
    size="lg"
    className="bg-primary hover:bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover-lift animate-glow min-h-[48px]"
    onClick={() => scrollToSection("videos")}
  >
    <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
    Watch Videos
  </Button>
  <Button
    size="lg"
    variant="outline"
    className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg bg-transparent hover-lift"
    onClick={() => scrollToSection("contact")}
  >
    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
    Book for Events
  </Button>
</div>

{/* Social Icons Block */}
<div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10">
  <a
    href="https://www.instagram.com/mizaaz_music_lover/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[100px] justify-center"
  >
    <FaInstagram className="w-4 h-4 group-hover:animate-pulse" />
    <span className="font-semibold text-sm">Follow on mizaaz_music_lover</span>
  </a>

  <a
    href="https://www.instagram.com/miz_aazi/"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[100px] justify-center"
  >
    <FaInstagram className="w-4 h-4 group-hover:animate-pulse" />
    <span className="font-semibold text-sm">Follow on miz_aazi</span>
  </a>

  <a
    href="https://youtube.com/@mizaazmusiclover?feature=shared"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[100px] justify-center"
  >
    <FaYoutube className="w-4 h-4 group-hover:animate-pulse" />
    <span className="font-semibold text-sm">Subscribe on YouTube</span>
  </a>
</div>

      </div>
    </section>
  )
}
