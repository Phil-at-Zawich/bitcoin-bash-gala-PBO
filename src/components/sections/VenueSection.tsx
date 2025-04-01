import React from "react";
import SectionTitle from "../SectionTitle";
import { Hotel, MapPin, Star } from "lucide-react";

const VenueSection = () => {
  return (
    <section id="venue" className="section relative overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.2)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent z-10"></div>

      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle
              subtitle="Luxury Accommodation"
              title="Experience the Historic Place d'Armes Hotel"
              alignment="left"
              className="text-white"
            />

            <div className="fade-in-section mb-8">
              <div className="flex items-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-gold text-gold" />
                ))}
                <span className="ml-2 text-white/80 text-sm">
                  5-Star Luxury
                </span>
              </div>

              <p className="text-white/90 text-lg mb-6">
                Nestled in the heart of the historic city center, the Place
                d'Armes combines timeless elegance with modern luxury, providing
                the perfect backdrop for our exclusive Bitcoin Meetup Day.
              </p>

              <p className="text-white/90 text-lg mb-8">
                With stunning architecture, world-class amenities, and
                impeccable service, the venue offers an unparalleled experience
                for our distinguished guests.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-white/10 backdrop-blur-sm w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Hotel className="h-5 w-5 text-bitcoin" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Luxury Accommodation
                    </h3>
                    <p className="text-white/80">
                      Elegant rooms and suites with premium amenities
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-white/10 backdrop-blur-sm w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5 text-bitcoin" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      Prime Location
                    </h3>
                    <p className="text-white/80">
                      Located in the historic center, surrounded by cultural
                      landmarks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-section">
            <div className="glass-panel p-6 backdrop-blur-lg bg-black/30 border border-white/10">
              <img
                src="/images/hotel-exterior.jpg"
                alt="Place d'Armes Hotel Exterior"
                className="w-full h-auto rounded-lg mb-6"
              />

              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/hotel-room.jpg"
                  alt="Place d'Armes Hotel Room"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src="/images/restaurant.jpg"
                  alt="La Place Restaurant"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
