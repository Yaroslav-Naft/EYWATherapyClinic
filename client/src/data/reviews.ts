export interface Review {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  avatarImage?: string;
  timeAgo: string;
  rating: number;
  excerpt: string;
  fullReview?: string;
  platform: "google";
  verified: boolean;
}

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Sophia Jamieson",
    initials: "SJ",
    avatarColor: "#E67E22",
    timeAgo: "8 months ago",
    rating: 5,
    excerpt:
      "Max Naftulyev RMT is incredible. He spot what's the matters quickly and corrects it. My partner went in to see him for lower back (disc) issue and Max could tell what he did at work stepping with which foot first. He's amazing 😍",
    platform: "google",
    verified: true,
  },
  {
    id: "2",
    name: "Katherine van der Gracht",
    initials: "KG",
    avatarColor: "#34495E",
    timeAgo: "2 years ago",
    rating: 5,
    excerpt:
      "Best RMT in BC, by far. Olena provides excellent service and made a flawless experience. Highly recommend.",
    platform: "google",
    verified: true,
  },
  {
    id: "3",
    name: "Jessalyn Law",
    initials: "JL",
    avatarColor: "#34495E",
    timeAgo: "2 year ago",
    rating: 5,
    excerpt:
      "One of the best massages I've had in my Life! Can't recommend this place enough.",
    platform: "google",
    verified: true,
  },
  {
    id: "4",
    name: "Colette Kratzmann",
    initials: "CK",
    avatarColor: "#34495E",
    timeAgo: "a year ago",
    rating: 5,
    excerpt:
      "Max is amazing at what he does. He very quickly figured out spots where I was holding tension that I didn't realize. Best massage ever..",
    platform: "google",
    verified: true,
  },
  {
    id: "5",
    name: "Cheryl L",
    initials: "CL",
    avatarColor: "#34495E",
    timeAgo: "a year ago",
    rating: 5,
    excerpt:
      "Olena is great at her job! Friendly, caring and goes the extra mile to support me with additional health tips and support.",
    platform: "google",
    verified: true,
  },
  {
    id: "6",
    name: "Susan & David Zapp",
    initials: "SZ",
    avatarColor: "#7C9885",
    timeAgo: "a year ago",
    rating: 5,
    excerpt:
      "Max is an amazing rmt! He is very thorough, knowledgeable and a nice guy.",
    platform: "google",
    verified: true,
  },
  {
    id: "7",
    name: "Chelsea Varney",
    initials: "CV",
    avatarColor: "#9B59B6",
    timeAgo: "a year ago",
    rating: 5,
    excerpt: "Best massage I've ever had with Olena; she even used hot stones!",
    platform: "google",
    verified: true,
  },
  {
    id: "8",
    name: "Glenn Rogers",
    initials: "GR",
    avatarColor: "#34495E",
    timeAgo: "2 years ago",
    rating: 5,
    excerpt: "Olena is excellent and hot rock massage is very effective",
    platform: "google",
    verified: true,
  },
];

export const REVIEW_STATS = {
  averageRating: 4.9,
  totalReviews: 20,
  platform: "google" as const,
  reviewUrl: "https://maps.app.goo.gl/kJEeL3Cevt7qB9qb9",
};
