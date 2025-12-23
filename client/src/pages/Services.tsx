import Layout from "@/components/Layout";
import {Button} from "@/components/ui/button";
import {CheckCircle2} from "lucide-react";
import {services} from "@/data/services";
import {useEffect} from "react";

export default function Services() {
  useEffect(() => {
    // Scroll to the service section if hash is present in URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({behavior: 'smooth', block: 'center'});
        }, 100);
      }
    }
  }, []);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-secondary/20 pt-20 pb-5">
        <div className="container mx-auto px-6 pt-6 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-primary mb-2">
            Our Services
          </h1>
          <p className="text-xl font-light text-muted-foreground max-w-2xl mx-auto">
            At Eywa Massage Therapy, we offer evidence-based, holistic massage
            therapy designed to calm the nervous system, reduce pain, and
            support long-term well-being. Each session is tailored to your
            unique needs and goals.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-5xl space-y-12">
          {services.map((service, idx) => {
            const serviceId = service.title.toLowerCase().replace(/\s+/g, '-').replace(/[–—]/g, '-');
            return (
              <div
                key={idx}
                id={serviceId}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-muted flex flex-col gap-8 items-center group hover:border-secondary/50 transition-colors"
              >
              <div className="flex-1 text-center">
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mt-6 mb-6 flex flex-col items-center">
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider mb-4">
                    Key Benefits
                  </span>
                  <ul className={`${service.benefits.length <= 3 ? 'space-y-3 max-w-md' : 'grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-3xl'}`}>
                    {service.benefits.map((benefit, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-sm text-primary/80 text-left"
                      >
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span className="flex-1 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            );
          })}
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
          <Button
            asChild
            className="bg-primary text-white hover:bg-primary/90 rounded-full px-12 py-6 text-lg"
          >
            <a
              href="https://eywamassage.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                Your appointment time is reserved exclusively for you. A late
                cancellation or missed visit leaves a gap that could have been
                offered to another patient.
              </p>
              <p className="text-red-800/80 leading-relaxed text-sm mt-4 font-medium">
                We require 24 hours’ notice for any cancellations or appointment
                changes. Appointments cancelled with less than 24 hours’ notice,
                or missed entirely, are subject to a cancellation fee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
