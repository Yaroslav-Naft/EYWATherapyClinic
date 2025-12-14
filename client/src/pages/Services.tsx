import Layout from "@/components/Layout";
import {Button} from "@/components/ui/button";
import {CheckCircle2} from "lucide-react";
import fernTexture from "@assets/generated_images/fern_leaves_texture_for_background_accent.png";

export default function Services() {
  const services = [
    {
      title: "Registered Massage Therapy",
      description:
        "A comprehensive assessment and treatment tailored to your specific needs. This may include a mix of deep tissue, Swedish, and myofascial techniques.",
      benefits: ["Pain relief", "Improved circulation", "Stress reduction"],
      duration: "60 Minutes",
      price: "$75 - $160",
    },
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
      title: "Cranial therapy",
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
      ],
      duration: "60 Minutes",
      price: "$75 - $130",
    },
  ];

  return (
    <Layout>
      {/* Header */}
      <div className="bg-secondary/20 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">
            Our Services
          </h1>
          <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
            Evidence-based treatments designed to restore your body's natural
            balance.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl space-y-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-muted flex flex-col md:flex-row gap-8 items-start group hover:border-secondary/50 transition-colors"
            >
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    Key Benefits
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.benefits.map((benefit, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-center gap-2 text-sm text-primary/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary" />{" "}
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="w-full md:w-64 flex-shrink-0 bg-[#F9F7F2] p-6 rounded-xl border border-primary/5 text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Sessions Available
                </p>
                <p className="font-serif font-medium text-primary">
                  {service.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Book Appointment Section */}
      <section className="py-16 bg-secondary/10">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            {/* Take the first step towards wellness. Book your session today and experience personalized care. */}
          </p>
          <Button asChild className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 py-6 text-lg">
            <a href="https://eywamassage.janeapp.com/" target="_blank" rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>
      </section>

      {/* Rates & Policies */}
      <section className="py-20 bg-white border-t border-muted">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-primary mb-6">
              Rates & Direct Billing
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We offer direct billing to most major insurance providers
              including Pacific Blue Cross, Canada Life, Manulife, and Sun Life.
              Please bring your insurance card to your first appointment.
            </p>
            {/* <ul className="space-y-3 text-primary/80 text-sm">
               <li className="flex justify-between border-b border-muted pb-2">
                 <span>30 Minute Session</span>
                 <span className="font-semibold">$75</span>
               </li>
               <li className="flex justify-between border-b border-muted pb-2">
                 <span>45 Minute Session</span>
                 <span className="font-semibold">$95</span>
               </li>
               <li className="flex justify-between border-b border-muted pb-2">
                 <span>60 Minute Session</span>
                 <span className="font-semibold">$115</span>
               </li>
               <li className="flex justify-between border-b border-muted pb-2">
                 <span>90 Minute Session</span>
                 <span className="font-semibold">$160</span>
               </li>
             </ul> */}
            <p className="text-xs text-muted-foreground mt-4">
              * GST included in all prices.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-primary mb-6">
              Cancellation Policy
            </h3>
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <p className="text-red-800/80 leading-relaxed text-sm">
                Your appointment time is reserved just for you. A late
                cancellation or missed visit leaves a hole in the therapists'
                day that could have been filled by another patient.
              </p>
              <p className="text-red-800/80 leading-relaxed text-sm mt-4 font-medium">
                We require 24 hours notice for any cancellations or changes to
                your appointment. Patients who provide less than 24 hours
                notice, or miss their appointment, will be charged a
                cancellation fee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
