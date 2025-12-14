import Layout from "@/components/Layout";
import {motion} from "framer-motion";
import waterTexture from "@assets/generated_images/abstract_calm_water_texture.png";
import max from "@assets/generated_images/max.jpg";
import olena from "@assets/generated_images/olena.jpg";

export default function About() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img src={waterTexture} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Our Story & Philosophy
          </h1>
          <p className="text-xl font-light text-white/80 max-w-2xl mx-auto">
            Compassionate care rooted in the community of Campbell River.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{opacity: 0, x: -20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif text-primary">
                Why EYWA Massage Therapy Exists
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Eywa Massage Therapy was created to provide massage care that blends
                clinical precision with a calm, attentive experience. Our focus
                is on treatments that restore function, reduce tension, and
                support lasting well-being.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand that pain—whether physical or
                stress-related—interrupts life. Our mission is to help you
                reclaim that balance through evidence-based massage therapy that
                feels as restorative as it is effective.
              </p>
              <div className="p-6 bg-white border-l-4 border-secondary rounded-r-lg shadow-sm">
                <p className="text-primary font-medium italic">
                  "We don't just treat symptoms; we treat the person. Every
                  session is an opportunity to listen to your body and provide
                  the specific care it needs."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{opacity: 0, scale: 0.95}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Placeholder for practitioner or clinic interior */}
              <img
                src={waterTexture}
                alt="Calming clinic atmosphere"
                className="w-full h-full object-cover grayscale-[20%] contrast-[0.9]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent text-white">
                <p className="font-serif text-lg">
                  A space designed for healing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practitioner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-primary mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dedicated Registered Massage Therapists committed to your health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Practitioner Card 1 */}
            <div className="bg-[#F9F7F2] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/10 relative flex items-center justify-center">
                <img
                  src={max}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold text-primary mb-1">
                  Max Naftulyev
                </h3>
                <p className="text-sm text-secondary font-bold uppercase tracking-wider mb-4">
                  Registered Massage Therapist
                </p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Max is a registered massage therapist who offers a calm,
                  personalized approach to care. He blends deep tissue
                  techniques with Neuro-Relaxation therapy to gently release
                  tension, restore balance, and support the body’s natural
                  healing process. Max also provides simple, tailored home-care
                  guidance — whether for posture, mobility, or recovery —
                  helping each person feel more aligned and supported in their
                  everyday life.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white px-3 py-1 rounded-full border border-primary/10 text-primary/80">
                    Deep Tissue
                  </span>
                  <span className="text-xs bg-white px-3 py-1 rounded-full border border-primary/10 text-primary/80">
                    Myofascial Release
                  </span>
                </div>
              </div>
            </div>

            {/* Practitioner Card 2 */}
            <div className="bg-[#F9F7F2] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/5 to-secondary/10 relative flex items-center justify-center">
                <img
                  src={olena}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold text-primary mb-1">
                  Olena Naftulyev
                </h3>
                <p className="text-sm text-secondary font-bold uppercase tracking-wider mb-4">
                  Registered Massage Therapist
                </p>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Olena is a registered massage therapist who brings an
                  attentive, thoughtful approach to every session. She
                  integrates techniques such as myofascial release, hot and cold
                  stone therapy, and Craniosacral Therapy to release tension and
                  support the body’s natural balance. Olena also offers
                  personalized home-care guidance, helping each person
                  understand their body and feel more grounded and supported in
                  daily life.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white px-3 py-1 rounded-full border border-primary/10 text-primary/80">
                    Relaxation
                  </span>
                  <span className="text-xs bg-white px-3 py-1 rounded-full border border-primary/10 text-primary/80">
                    Sports Massage
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
