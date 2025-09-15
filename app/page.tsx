"use client"

import { useState, useEffect } from "react"
import { SplashScreen } from "@/components/splash-screen"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { GenresSection } from "@/components/genres-section"
import { ContactSection } from "@/components/contact-section"
import { SocialSection } from "@/components/social-section"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    if (!showSplash) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      }, observerOptions)

      const elements = document.querySelectorAll(".scroll-reveal")
      elements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }
  }, [showSplash])

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <GenresSection />
      <SocialSection />
      <ContactSection />
    </main>
  )
}
