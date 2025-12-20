import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ReviewCard } from "./ReviewCard";
import { REVIEWS, REVIEW_STATS } from "@/data/reviews";

export function ReviewSection() {
  return (
    <section className="py-24 bg-[#F9F7F2]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif text-primary text-center mb-16"
        >
          What our Customers Say
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC04]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </span>
                <span className="text-2xl text-muted-foreground">Reviews</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center md:items-start">
                <div className="text-4xl font-bold text-primary mb-1">
                  {REVIEW_STATS.averageRating}
                </div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]"
                    />
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  ({REVIEW_STATS.totalReviews})
                </div>
              </div>

              <Button
                asChild
                className="bg-[#4285F4] hover:bg-[#357ABD] text-white rounded-lg px-6"
              >
                <a
                  href={REVIEW_STATS.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Review us on Google
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {REVIEWS.map((review) => (
                <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                  <ReviewCard review={review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {REVIEWS.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === 0 ? "bg-primary" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
