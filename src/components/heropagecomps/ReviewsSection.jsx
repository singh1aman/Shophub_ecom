import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const ReviewsSection = () => {
  const [api, setApi] = React.useState(null)

  React.useEffect(() => {
    if (!api) return
    const interval = setInterval(() => {
      api.scrollNext()
    }, 3500)
    return () => clearInterval(interval)
  }, [api])

  const reviews = [
    {
      name: "Aarav Mehta",
      role: "Music Producer",
      text: "The audio quality is stunning and the build feels premium. Delivery was super fast and the packaging was classy.",
      rating: "5.0",
    },
    {
      name: "Neha Kapoor",
      role: "Content Creator",
      text: "Love the clean UI and the product selection. The headphones are comfortable for long edits.",
      rating: "4.9",
    },
    {
      name: "Rahul Sen",
      role: "Gamer",
      text: "Great soundstage and low latency. The buying experience felt smooth and secure.",
      rating: "4.8",
    },
    {
      name: "Zoya Ali",
      role: "Photographer",
      text: "Minimal, fast, and easy to navigate. The product details are crisp and clear.",
      rating: "4.7",
    },
    {
      name: "Arjun Malhotra",
      role: "Audio Engineer",
      text: "Balanced sound and exceptional comfort. The PDP layout is clean and premium.",
      rating: "4.9",
    },
  ]

  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-4">
      <div className="mb-6 text-xs uppercase tracking-widest text-gray-500">
        Customer Reviews
      </div>
      <Carousel
        opts={{ align: "start", loop: true }}
        setApi={setApi}
        className="relative"
      >
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem key={review.name} className="basis-full md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="rounded-2xl border border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:shadow-md">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{review.role}</span>
                      <span className="rounded-full border border-gray-200 px-2 py-0.5 text-[11px] text-gray-700">
                        {review.rating}
                      </span>
                    </div>
                    <div className="mt-3 text-sm text-gray-700">{review.text}</div>
                    <div className="mt-4 text-sm font-medium text-gray-900">
                      {review.name}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
export default ReviewsSection;
