import React, { useEffect, useRef } from "react";
import SectionTitle from "../SectionTitle";
import { Bitcoin, Trophy, Users, Star, Utensils } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const fadeElements = document.querySelectorAll(".fade-in-section");
    fadeElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      fadeElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="section bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <SectionTitle
          subtitle="About the Event"
          title="The Premier Bitcoin Gathering of 2025"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="fade-in-section">
            <p className="text-lg text-gray-700 mb-6">
              The Premier Bitcoin Gathering of the Year brings together the
              brightest minds and most influential figures in the Bitcoin
              ecosystem to engage in insightful discussions and forge new
              relatioships, all whilst sharing an exclusive experience.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Hosted in the luxurious{" "}
              <span className="inline-flex items-center">
                5 <Star className="h-4 w-4 text-gold mx-0.5 fill-gold" />
              </span>{" "}
              Hotel Le Place d'Armes in the heart of the historic city center,
              this exceptional lunch event creates the perfect atmosphere for
              meaningful connections and groundbreaking collaborations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3  gap-6">
              <div className="rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="rounded-full bg-bitcoin/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-bitcoin" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Elite Sponsors</h3>
                <p className="text-gray-600">
                  Leading voices in the Bitcoin ecosystem
                </p>
              </div>

              {/* <div className="rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="rounded-full bg-bitcoin/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-bitcoin" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Exclusive</h3>
                <p className="text-gray-600">
                  Limited to 200 distinguished attendees
                </p>
              </div> */}

              <div className="rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="rounded-full bg-bitcoin/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Utensils className="h-6 w-6 text-bitcoin" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Exceptional Lunch
                </h3>
                <p className="text-gray-600">
                  Gourmet buffet featuring exceptional Krug Champagne cuvées
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="rounded-full bg-bitcoin/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Utensils className="h-6 w-6 text-bitcoin" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Evening Party</h3>
                <p className="text-gray-600">
                  Gourmet 3-course lunch with an apéritif offered.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-in-section relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/gathering.jpg"
                alt="Bitcoin Conference"
                className="w-full h-[70vh] object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 rounded-xl overflow-hidden shadow-lg w-48 h-48 border-4 border-white hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1591994843349-f415893b3a6b?q=80&w=2070&auto=format&fit=crop"
                alt="Bitcoin Networking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
