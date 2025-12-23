export interface Service {
  title: string;
  description: string;
  benefits: string[];
  duration: string;
  price: string;
}

export const services: Service[] = [
  {
    title: "Deep Tissue Massage",
    description:
      "Focused therapeutic work targeting deeper layers of muscle and connective tissue. Ideal for chronic aches, postural tension, and long-standing restrictions that do not respond to lighter pressure.",
    benefits: [
      "Breaks down scar tissue and adhesions",
      "Improves range of motion",
      "Relieves chronic muscle tension",
      "Reduces deep-rooted stiffness",
      "Enhances long-term mobility",
    ],
    duration: "60 Minutes",
    price: "$95 - $160",
  },
  {
    title: "Cranial Therapy",
    description:
      "Gentle manipulation of the cranial bones and membranes to restore proper alignment and fluid movement. Effective for headaches, migraines, TMJ disorders, and stress-related tension.",
    benefits: [
      "Relief from headaches and migraines",
      "Improved sleep quality",
      "Reduced stress and tension",
    ],
    duration: "60 Minutes",
    price: "$75 - $130",
  },
  {
    title: "Neuro relaxation therapy",
    description:
      "Specialized therapy that calms the nervous system and releases deep-seated tension. Combines gentle techniques to restore balance and promote deep relaxation throughout the body.",
    benefits: [
      "Reduced anxiety and stress",
      "Enhanced mental clarity",
      "Improved nervous system regulation",
    ],
    duration: "60 Minutes",
    price: "$75 - $130",
  },
  {
    title: "Passive stretch therapy",
    description:
      "Therapist-guided stretching that requires no active effort from you. This approach safely lengthens muscles and fascia, improves joint mechanics, and supports better posture and performance.",
    benefits: [
      "Increases flexibility safely and effectively",
      "Reduces joint and muscle stiffness",
      "Enhances posture and alignment",
      "Improves athletic performance and recovery",
      "Supports long-term mobility and body awareness",
    ],
    duration: "60 Minutes",
    price: "$75 - $130",
  },
  {
    title: "Hydrotherapy – Hot & Cold Stone Treatment",
    description:
      "A therapeutic blend of heated and cooled stones applied in flowing, rhythmic patterns. The contrast of temperature soothes the nervous system, melts tension, and stimulates circulation for a deeply restorative experience.",
    benefits: [
      "Deep muscular relaxation",
      "Boosts circulation and lymphatic flow",
      "Calms the nervous system",
      "Improved circulation",
      "Reduces tension and stress",
      "Enhances overall rejuvenation and recovery",
    ],
    duration: "60 Minutes",
    price: "$75 - $130",
  },
  {
    title: "Trigger Point Therapy",
    description:
      "Precise release of hyper-irritable points within the muscle that cause local or referred pain. Especially helpful for headaches, neck and shoulder tension, and repetitive-strain patterns.",
    benefits: [
      "Releases muscle knots",
      "Reduces referred and localized pain",
      "Improves flexibility and ease of movement",
      "Restores healthy muscle function",
      "Decreases headaches and tension patterns",
      "Pain relief",
    ],
    duration: "60 Minutes",
    price: "$75 - $130",
  },
];
