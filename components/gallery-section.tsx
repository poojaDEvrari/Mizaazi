"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Play } from "lucide-react"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const photos = [
    { src: "/IMG_0609.jpg", alt: "Live Performance 1" },
    { src: "/IMG_7641.JPG", alt: "Studio Session" },
    { src: "/IMG_2572.jpg", alt: "Outdoor Concert" },
    { src: "/IMG_9177.PNG", alt: "KK Song Performance" },
    { src: "/IMG_4720.JPG", alt: "My Performance" },
  ]

  const videos = [
    { id: "1", src: "/a.MP4" },
    { id: "2", src: "/b.MP4" },
    { id: "3", src: "/c.MP4" },
    { id: "4", src: "/d.MP4" },
    { id: "5", src: "/IMG_3352.MP4" },
  ]

  return (
    <section id="gallery" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          Gallery & Videos
        </h2>

        {/* Photo Gallery */}
        <div className="mb-16">
          <h3 className="font-playfair text-2xl font-semibold mb-8 text-center">Performance Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <Card
                key={index}
                className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(photo.src)}
              >
                <img
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  className="aspect-[4/3] object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </Card>
            ))}
          </div>
        </div>

        {/* Video Gallery */}

        <div id="videos">
          <h3 className="font-playfair text-2xl font-semibold mb-8 text-center">Video Performances</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos.map((video) => (
              <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedVideo(video.src)}
                >
                  <video
                    src={video.src}
                    className="w-full h-48 object-cover"
                    muted
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
              
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
  <div
    className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
    onClick={() => setSelectedImage(null)} // close when clicking outside
  >
    <div
      className="relative max-w-4xl max-h-full"
      onClick={(e) => e.stopPropagation()} // prevent closing when clicking image
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:bg-white/20"
        onClick={() => setSelectedImage(null)}
      >
        <X className="h-6 w-6" />
      </Button>
      <img
        src={selectedImage || "/placeholder.svg"}
        alt="Gallery image"
        className="max-w-full max-h-[80vh] object-contain rounded-lg"
      />
    </div>
  </div>
)}
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  )
}
