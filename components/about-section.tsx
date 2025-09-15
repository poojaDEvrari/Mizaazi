"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useRef, useState } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activatedWords, setActivatedWords] = useState<Set<string>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const sectionHeight = rect.height

      const scrollTop = -rect.top
      const scrollBottom = scrollTop + windowHeight
      const scrollProgress = Math.max(0, Math.min(1, scrollBottom / (sectionHeight + windowHeight)))

      setScrollProgress(scrollProgress)

      const totalLines = 5 // 4 paragraphs + 1 heading
      const wordsPerLine = [8, 25, 35, 20, 18] // Approximate word counts per line
      const totalWords = 0
      const newActivatedWords = new Set(activatedWords)

      for (let lineIndex = 0; lineIndex < totalLines; lineIndex++) {
        const lineProgress = Math.max(0, Math.min(1, scrollProgress * totalLines - lineIndex))
        const wordsToActivate = Math.floor(lineProgress * wordsPerLine[lineIndex])

        for (let wordIndex = 0; wordIndex < wordsToActivate; wordIndex++) {
          const wordKey = `${lineIndex}-${wordIndex}`
          newActivatedWords.add(wordKey)
        }
      }

      setActivatedWords(newActivatedWords)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activatedWords])

  const animateText = (text: string, lineIndex: number) => {
    const words = text.split(" ")
    return words.map((word, wordIndex) => {
      const wordKey = `${lineIndex}-${wordIndex}`
      const isActivated = activatedWords.has(wordKey)

      return (
        <span key={wordIndex}>
          <span
            className={`inline-block transition-all duration-700 ease-out ${
              isActivated ? "text-white" : "text-gray-400"
            }`}
          >
            {word}
          </span>
          {wordIndex < words.length - 1 && " "}
        </span>
      )
    })
  }

  const animateHeading = (text: string) => {
    const words = text.split(" ")
    return words.map((word, wordIndex) => {
      const wordKey = `0-${wordIndex}` // Heading is line 0
      const isActivated = activatedWords.has(wordKey)

      return (
        <span key={wordIndex}>
          <span
            className={`inline-block transition-all duration-700 ease-out ${
              isActivated ? "text-primary" : "text-gray-400"
            }`}
          >
            {word}
          </span>
          {wordIndex < words.length - 1 && " "}
        </span>
      )
    })
  }

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
      
          <div className="scroll-reveal order-2 lg:order-1">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              {animateHeading("🎤 Mizaazi – The Voice That Connects")}
            </h2>

            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              {animateText(
                "Mizaazi is the soulful voice inspired by the legendary KK, bringing a unique blend of Sufi, Bollywood retro, and timeless favorites to every performance.",
                1,
              )}
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              {animateText(
                "Music is more than sound—it’s therapy and emotion. Blending classical roots with modern vibes, every performance brings passion and energy, from intimate acoustic evenings to grand stage shows.",
                2,
              )}
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              {animateText(
                "As the lead voice of the band, paired with the acoustic guitar, Mizaazi creates asoulful connection with the audience.",
                3,
              )}
            </p>

            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              {animateText(
                "More than just a name, Mizaazi is a journey—creating moments that live in hearts forever.",
                4,
              )}
            </p>
          </div>

     
       
      </div>
    </section>
  )
}
