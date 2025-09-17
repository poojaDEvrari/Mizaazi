"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Play } from "lucide-react"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const photos = [
    {
      src: "/IMG_0609.jpg",
      alt: "Live Performance 1",
      title: "Soulful Live Performance",
      description: "Captivating the audience with heartfelt melodies",
    },
    {
      src: "/IMG_7641.JPG",
      alt: "Studio Session",
      title: "Studio Magic",
      description: "Creating musical masterpieces in the recording studio",
    },
    {
      src: "/IMG_2572.jpg",
      alt: "Outdoor Concert",
      title: "Open Air Concert",
      description: "Connecting with nature through music",
    },
    {
      src: "/IMG_9177.PNG",
      alt: "Live Performance 2",
      title: "Energetic Performance",
      description: "Bringing high energy to the stage",
    },
    {
      src: "/IMG_4720.JPG",
      alt: "Studio Session",
      title: "Studio Magic",
      description: "Creating musical masterpieces in the recording studio",
    },
  ]

  const duplicatedPhotos = [...photos, ...photos, ...photos]

  const videos = [
    {
      id: "1",
      title: "Bollywood Night – Bhagirathi Puram, Dehradun",
      src: "/IMG_3359.MP4",
      description: "A nostalgic Bollywood performance filled with melodies and emotions.",
    },
     {
      id: "2",
      title: "Rock Session – GMS Road, Dehradun",
      src: "/b.MP4",
      description: "A high-energy rock performance recorded live in Dehradun.",
    },
   
   
    {
      id: "3",
      title: "Emotional Melody – Phly Bhi Main",
      src: "/c.MP4",
      description: "Performed by Mizaazi, this rendition flows with raw emotions and heartfelt depth. A song that beautifully mirrors love, vulnerability, and the essence of true feelings.",
    },
    {
      id: "4",
      title: "Kaho Na Kaho – Bollywood Classic",
      src: "/d.MP4",
      description: "Performed by Mizaazi in an open-air setting, this lively rendition carries a joyful and refreshing vibe, filling the atmosphere with happiness and timeless Bollywood charm.",
    },
    {
      id: "5",
      title: "Sufi Rendition – Kailash Kher Special",
      src: "/IMG_3352.MP4",
      description: "A soulful performance inspired by Kailash Kher’s powerful Sufi style.",
    },
     {
      id: "6",
      title: "Romantic Melody – Tum Na Ho To",
      src: "/a.MP4",
      description:
        "A heartfelt romantic performance that captures emotions with soulful music and deep feelings.",
    }, 
      {
      id: "7",
      title: "Devotional Vibes – Shiv Tandav",
      src: "/IMG_3355.MP4",
      description: "An energetic and divine rendition of the iconic Shiv Tandav Stotram.",
    },
  ]

  return (
    <section id="gallery" className="py-16 sm:py-20 px-4 bg-card/30 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-12 sm:mb-16 scroll-reveal">
          Gallery & Videos
        </h2>

        {/* Photo Gallery */}
        <div className="mb-12 sm:mb-16">
          <h3 className="font-playfair text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center scroll-reveal delay-200">
            Performance Gallery
          </h3>
          <div className="relative h-64 sm:h-80 overflow-hidden rounded-lg bg-gradient-to-r from-gray-900 to-black group/gallery">
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-scroll-right group-hover/gallery:animate-scroll-right-slow space-x-6 will-change-transform transition-all duration-500">
                {duplicatedPhotos.map((photo, index) => (
                  <div
                    key={`${photo.src}-${index}`}
                    className="relative flex-shrink-0 w-72 sm:w-80 md:w-96 h-48 sm:h-64 md:h-72 group/item cursor-pointer transition-all duration-500"
                    onClick={() => setSelectedImage(photo.src)}
                    onMouseEnter={(e) => {
                      e.currentTarget.closest(".group\\/gallery")?.classList.add("group-hover/gallery")
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.closest(".group\\/gallery")?.classList.remove("group-hover/gallery")
                    }}
                  >
                    <img
                      src={photo.src || "/placeholder.svg"}
                      alt={photo.alt}
                      className="w-full h-full object-cover rounded-lg shadow-lg group-hover/item:blur-md transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover/item:opacity-100 transition-all duration-500 rounded-lg flex flex-col justify-center items-center text-center p-6">
                      <h4 className="text-white font-bold text-xl mb-3 font-playfair transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500 drop-shadow-lg">
                        {photo.title}
                      </h4>
                      <p className="text-gray-100 text-base leading-relaxed transform translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500 delay-100 drop-shadow-md">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Gallery */}
        <div id="videos">
          <h3 className="font-playfair text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center scroll-reveal delay-300">
            Video Performances
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {videos.map((video, index) => (
              <Card
                key={video.id}
                className={`overflow-hidden hover-lift hover-glow transition-all duration-300 border-primary/20 scroll-reveal delay-${(index + 4) * 100}`}
              >
                <div
                  className="relative group cursor-pointer aspect-video bg-black"
                  onClick={() => setSelectedVideo(video.src)}
                >
                  <video className="w-full h-full object-cover" muted autoPlay loop playsInline preload="metadata">
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary animate-pulse-slow" />
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h4 className="font-semibold text-base sm:text-lg text-balance mb-2">{video.title}</h4>
                  <p className="text-sm text-muted-foreground text-balance">{video.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full animate-scale-in">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 -right-2 text-white hover:bg-red-500/20 hover:text-red-400 min-h-[44px] min-w-[44px] bg-black/50 rounded-full border border-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg border border-primary/20 shadow-2xl"
            />
          </div>
        </div>
      )}

      {selectedVideo && (
        <div className="fixed inset-0 z-50 lightbox-overlay flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full animate-scale-in">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 -right-2 text-white hover:bg-red-500/20 hover:text-red-400 min-h-[44px] min-w-[44px] bg-black/50 rounded-full border border-white/20 z-10"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <video
              className="w-full max-h-[80vh] object-contain rounded-lg border border-primary/20 shadow-2xl"
              controls
              autoPlay
            >
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  )
}
