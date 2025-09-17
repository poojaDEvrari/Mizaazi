"use client"

import { Instagram, Youtube } from "lucide-react"

export function SocialSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto text-center scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Follow Our Journey</h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join us on social media for behind-the-scenes content, live performances, and musical updates
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://www.instagram.com/mizaaz_music_lover/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[200px] justify-center"
          >
            <Instagram className="w-6 h-6 group-hover:animate-pulse" />
            <span className="font-semibold text-lg">Follow on mizaaz_music_lover</span>
          </a>
           <a
            href="https://www.instagram.com/miz_aazi/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[200px] justify-center"
          >
            <Instagram className="w-6 h-6 group-hover:animate-pulse" />
            <span className="font-semibold text-lg">Follow on miz_aazi
</span>
          </a>

          <a
            href="https://youtube.com/@mizaazmusiclover?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl min-w-[200px] justify-center"
          >
            <Youtube className="w-6 h-6 group-hover:animate-pulse" />
            <span className="font-semibold text-lg">Subscribe on YouTube</span>
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-gray-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">1K+</div>
            <div className="text-sm">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">50+</div>
            <div className="text-sm">Videos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">100+</div>
            <div className="text-sm">Performances</div>
          </div>
        </div>
      </div>
    </section>
  )
}
