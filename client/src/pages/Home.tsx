import Layout from "@/components/Layout";
import {Button} from "@/components/ui/button";
import {motion} from "framer-motion";
import {ArrowRight, Leaf, Droplets, Activity, Heart} from "lucide-react";
import {Link} from "wouter";
import {ReviewSection} from "@/components/ReviewSection";

// Assets
import heroImage from "@assets/generated_images/calm_coastal_forest_landscape_for_hero_section.png";
import fernTexture from "@assets/generated_images/fern_leaves_texture_for_background_accent.png";

export default function Home() {
  const fadeIn = {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0},
    transition: {duration: 0.6, ease: "easeOut"},
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Coastal landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 mix-blend-multiply" />
        </div>

        {/* Hero Content */}
        <div className="container relative z-10 px-6 text-center text-white">
          <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8, delay: 0.2}}
            className="space-y-6 max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight leading-tight drop-shadow-lg">
              Holistic Healing <br className="hidden md:block" />
              <span className="italic text-secondary">for Modern Living</span>
            </h1>
            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-white/90 drop-shadow-md">
              Holistic Registered Massage Therapy rooted in the natural calm of
              the Campbell River coast.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
              <Button
                asChild
                size="lg"
                className="bg-[#F9F7F2] text-primary hover:bg-white rounded-full px-8 py-6 text-lg shadow-xl transition-all hover:scale-105"
              >
                <a
                  href="https://eywamassage.janeapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book an Appointment
                </a>
              </Button>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg backdrop-blur-sm transition-all bg-transparent"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro / Mission */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <img
            src={fernTexture}
            className="w-full h-full object-cover mix-blend-multiply"
          />
        </div>

        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{once: true}}
            variants={fadeIn}
            className="space-y-6"
          >
            <span className="text-sm uppercase tracking-[0.2em] text-primary/60 font-semibold">
              Welcome to Eywa Massage Therapy
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary">
              Rooted in Healing. Focused on You.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eywa Massage Therapy was created to provide massage care that
              blends clinical precision with a calm, attentive experience. Our
              focus is on treatments that restore function, reduce tension, and
              support lasting well-being.
            </p>
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors border-b border-primary/30 pb-1"
              >
                Read Our Story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Review Section */}
      <ReviewSection />


      {/* Who We Help / Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Activity,
                title: "Injury Recovery",
                desc: "Targeted treatment to help you heal from sports injuries or accidents.",
              },
              {
                icon: Leaf,
                title: "Stress Relief",
                desc: "Calming techniques to lower cortisol and restore mental clarity.",
              },
              {
                icon: Heart,
                title: "Pain Management",
                desc: "Evidence-based approaches to manage chronic or acute pain.",
              },
              {
                icon: Droplets,
                title: "Deep Relaxation",
                desc: "Restorative sessions to help your nervous system reset.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
                className="bg-[#F9F7F2] p-8 rounded-2xl text-center hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-muted"
              >
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-primary shadow-sm">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">
                Therapeutic Services
              </h2>
              <p className="text-white/80 font-light text-lg">
                Whether you need deep tissue work or a moment of stillness, our
                treatments are tailored to your body's needs.
              </p>
            </div>
            <Link href="/services">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-primary rounded-full px-6 bg-transparent"
              >
                View All Services
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {title: "Deep Tissue Massage", price: "From $120"},
              {title: "Cranial Therapy", price: "From $110"},
              {title: "Passive Stretch Therapy", price: "From $110"},
            ].map((service, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl aspect-[4/5] md:aspect-[3/4] bg-black/20 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <img
                  src={idx === 1 ? fernTexture : heroImage}
                  className="absolute inset-0 w-full h-full object-cover -z-10 transition-transform duration-700 group-hover:scale-110 opacity-80"
                />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-serif font-medium text-white mb-2">
                    {service.title}
                  </h3>
                  {/* <p className="text-white/70 font-light mb-4">{service.price}</p> */}
                  <span className="inline-block text-sm text-secondary border-b border-secondary/50 pb-0.5 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300">
                    Learn More
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / CTA */}
      <section className="py-24 bg-[#F9F7F2] text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-10">
            <Activity className="w-8 h-8 text-secondary mx-auto opacity-50" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif text-primary italic leading-relaxed mb-10">
            "Your wellness matters. Whether you're managing pain, recovering
            from injury, or simply seeking relaxation, we're here to support
            you."
          </blockquote>
          <Button
            asChild
            size="lg"
            className="bg-primary text-white rounded-full px-10 py-6 text-lg shadow-lg hover:bg-primary/90"
          >
            <a
              href="https://eywamassage.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Session
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
