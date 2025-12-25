import Layout from "@/components/Layout";
import {Button} from "@/components/ui/button";
import {MapPin, Phone, Mail, Clock} from "lucide-react";
import driftwoodTexture from "@assets/generated_images/driftwood_and_sand_texture.png";

export default function Contact() {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary text-primary-foreground pt-20 pb-10 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img src={driftwoodTexture} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto mt-2 pt-10 mb-2 px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">
            Contact
          </h1>
          <p className="text-xl font-light text-white/80 max-w-2xl mx-auto">
            We're here to help you on your wellness journey.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Info Section */}
        <div className="w-full md:w-1/2 bg-background p-10 md:p-20 flex flex-col justify-center">
          <div className="max-w-md mx-auto space-y-10">
            <div>
              <h1 className="text-4xl font-serif text-primary mb-4">
                Get in Touch
              </h1>
              <p className="text-muted-foreground">
                We are conveniently located on South Dogwood Street in Campbell
                River. <br />
                Parking is available directly across from the clinic entrance.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full text-primary">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary text-lg">
                    Visit Us
                  </h3>
                  <p className="text-muted-foreground">
                    2-522 S Dogwood street
                    <br />
                    Campbell River, BC V9W 6Y7
                  </p>
                  <a
                    href="#"
                    className="text-sm text-secondary font-medium hover:underline mt-1 block"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Todo: re-add phone once provided */}
              {/* <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary text-lg">Call Us</h3>
                  <p className="text-muted-foreground">(250) 555-0123</p>
                  <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 9am - 5pm</p>
                </div>
              </div> */}

              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 rounded-full text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-primary text-lg">
                    Email Us
                  </h3>
                  <p className="text-muted-foreground">eywatherapy@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="font-serif font-bold text-primary mb-4">
                Clinic Hours
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>Tuesday - Saturday</div>
                <div className="text-right">9:00 AM - 7:00 PM</div>
                <div>Sunday</div>
                <div className="text-right">10:00 AM - 4:00 PM</div>
                <div>Monday</div>
                <div className="text-right">Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Map / Image Section */}
        <div className="w-full md:w-1/2 bg-muted relative min-h-[400px]">
          <img
            src={driftwoodTexture}
            className="w-full h-full object-cover opacity-80"
            alt="Location texture"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl text-center max-w-xs mx-4">
              <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-serif font-bold text-xl text-primary mb-2">
                Find Us Here
              </h3>
              {/* <p className="text-sm text-muted-foreground mb-4">Interactive map would load here in production.</p> */}
              <Button variant="outline" className="w-full">
              <a href="https://maps.app.goo.gl/iwGJr3Uz6X1fx9Xa9" target="_blank" rel="noopener noreferrer">Open in Maps</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
