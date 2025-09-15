import { Card, CardContent } from "@/components/ui/card"
import { Music, Heart, Mic, Guitar } from "lucide-react"

export function GenresSection() {
  const genres = [
    {
      icon: <Music className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Sufi Music",
      description: "Spiritual and soulful renditions that touch the heart and elevate the spirit.",
    },
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Bollywood Retro",
      description: "Classic Hindi songs from the golden era, bringing nostalgia to life.",
    },
    {
      icon: <Mic className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "KK Tributes",
      description: "Heartfelt tributes to the legendary singer who inspired this musical journey.",
    },
    {
      icon: <Guitar className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Acoustic Sessions",
      description: "Intimate performances with guitar, creating magical moments of pure music.",
    },
  ]

  return (
    <section id="genres" className="py-16 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-center text-primary mb-12 sm:mb-16 scroll-reveal">
          Musical Genres
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {genres.map((genre, index) => (
            <Card
              key={index}
              className={`text-center hover-lift hover-glow transition-all duration-300 border-primary/20 bg-card/50 backdrop-blur-sm scroll-reveal delay-${(index + 1) * 100}`}
            >
              <CardContent className="p-6 sm:p-8">
                <div className="flex justify-center mb-3 sm:mb-4 text-primary animate-pulse-slow">{genre.icon}</div>
                <h3 className="font-playfair text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-balance">
                  {genre.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-balance">
                  {genre.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
