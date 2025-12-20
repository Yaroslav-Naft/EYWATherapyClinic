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
    name: "Béa Conseils",
    initials: "BC",
    avatarColor: "#7C9885",
    timeAgo: "10 days ago",
    rating: 5,
    excerpt: "A single word to describe my first session with Mrs. Leanne Wong: blown away. After 30...",
    platform: "google",
    verified: true,
  },
  {
    id: "2",
    name: "Marilyn Schick",
    initials: "MS",
    avatarColor: "#9B59B6",
    timeAgo: "5 months ago",
    rating: 5,
    excerpt: "July 2025 I have been treated by Dr Matthew Wong since Feb of this year. So grateful f...",
    platform: "google",
    verified: true,
  },
  {
    id: "3",
    name: "Fernanda",
    initials: "F",
    avatarColor: "#E67E22",
    timeAgo: "5 months ago",
    rating: 5,
    excerpt: "I'm a regular costumer and I can just say that this place is amazing! Sasha is such a...",
    platform: "google",
    verified: true,
  },
  {
    id: "4",
    name: "Brittany Blake",
    initials: "BB",
    avatarColor: "#34495E",
    timeAgo: "6 months ago",
    rating: 5,
    excerpt: "Very kind and professional services; Chen-Yu is a very professional, and kind...",
    platform: "google",
    verified: true,
  },
];

export const REVIEW_STATS = {
  averageRating: 4.9,
  totalReviews: 110,
  platform: "google" as const,
  reviewUrl: "https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review",
};
