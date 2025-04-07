import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SponsorsSection from "@/components/sections/SponsorsSection";
import VenueSection from "@/components/sections/VenueSection";
import ScheduleSection from "@/components/sections/ScheduleSection";
import RegisterSection from "@/components/sections/RegisterSection";

const Index = () => {
  useEffect(() => {
    // Fade-in animations observer
    const fadeElements = document.querySelectorAll(".fade-in-section");

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

    fadeElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      fadeElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  useEffect(() => {
    // Smoothly reveal staggered elements
    const revealStaggered = () => {
      document.querySelectorAll('[class*="stagger-"]').forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.opacity = "1";
        }
      });
    };

    // Small delay before starting animations
    setTimeout(revealStaggered, 100);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <HeroSection />
      <AboutSection />
      <VenueSection />
      <ScheduleSection />
      <SponsorsSection />
      <RegisterSection />

      <Footer />
    </main>
  );
};

export default Index;
