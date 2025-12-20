import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, CheckCircle2 } from "lucide-react";
import { GoogleLogo } from "./GoogleLogo";
import type { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Card className="bg-white border-none shadow-sm h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12">
              {review.avatarImage && (
                <AvatarImage src={review.avatarImage} alt={review.name} />
              )}
              <AvatarFallback
                className="text-white font-semibold"
                style={{ backgroundColor: review.avatarColor }}
              >
                {review.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-semibold text-primary">{review.name}</h4>
                {review.verified && (
                  <CheckCircle2 className="w-4 h-4 text-[#4285F4]" />
                )}
              </div>
              <p className="text-xs text-muted-foreground">{review.timeAgo}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {[...Array(review.rating)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4 fill-[#FBBC04] text-[#FBBC04]"
            />
          ))}
        </div>
      </CardHeader>
      <CardContent className="pb-6">
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {review.excerpt}
        </p>
        <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
          Read more
        </button>
        <div className="flex items-center gap-2 mt-4 pt-4 border-t">
          <GoogleLogo />
          <span className="text-xs text-muted-foreground">
            Posted on <span className="text-[#4285F4]">Google</span>
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
