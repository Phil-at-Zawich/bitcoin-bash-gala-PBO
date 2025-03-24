import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1621794269359-cd9d01da56d7?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.2)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 z-10"></div>

      <div className="container mx-auto relative z-20 pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-bitcoin uppercase bg-bitcoin/20 backdrop-blur-sm rounded-full opacity-0 animate-fade-in stagger-1">
            Exclusive Bitcoin Event
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 opacity-0 animate-fade-in stagger-2">
            <span className="block">The Ultimate Bitcoin</span>
            <span className="block mt-1">
              Meetup
              <span className="text-bitcoin">2024</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in stagger-3">
            Join the world's most influential Bitcoin leaders, innovators, and
            visionaries for an exclusive meetup in the historic Luxembourg City
            center.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-12 opacity-0 animate-fade-in stagger-4">
            <div className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-md rounded-full">
              <Calendar className="h-5 w-5 text-bitcoin" />
              <span className="text-white">May 14, 2025</span>
            </div>

            <a
              href="https://hotel-leplacedarmes.com/en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-2 px-4 py-3 bg-white/10 backdrop-blur-md rounded-full">
                <MapPin className="h-5 w-5 text-bitcoin" />
                <span className="text-white">
                  Le Place d'Armes, Place d'Armes, Luxembourg
                </span>
              </div>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in stagger-5">
            <a href="#register">
              <Button className="bg-bitcoin hover:bg-bitcoin/90 text-white rounded-full px-8 py-6 text-lg">
                Register Now
              </Button>
            </a>
            <a href="#schedule">
              <Button
                variant="outline"
                className="text-black border-white/30 hover:bg-white/10 rounded-full px-8 py-6 text-lg"
              >
                View Schedule
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a
          href="#about"
          className="text-white/70 hover:text-white transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
