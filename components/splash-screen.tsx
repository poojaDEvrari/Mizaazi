"use client"

import { useEffect, useState } from "react"
import { Music } from "lucide-react"

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onComplete, 1000) // Wait for fade out animation
    }, 1200)

    return () => clearTimeout(timer)
  }, [onComplete])

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-50 bg-background flex items-center justify-center animate-splash-out px-4">
        <div className="text-center">
          <div className="relative mb-6 sm:mb-8">
            <Music className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto animate-pulse-slow" />
            <div className="absolute -inset-3 sm:-inset-4 bg-primary/20 rounded-full blur-xl animate-glow" />
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-3 sm:mb-4 animate-splash-in">
            Mizaazi
          </h1>
          
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center px-4">
      <div className="text-center">
        <div className="relative mb-6 sm:mb-8">
          <Music className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto animate-pulse-slow" />
          <div className="absolute -inset-3 sm:-inset-4 bg-primary/20 rounded-full blur-xl animate-glow" />
        </div>
        <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-3 sm:mb-4 animate-splash-in">
          Mizaazi
        </h1>
        
      </div>
    </div>
  )
}
