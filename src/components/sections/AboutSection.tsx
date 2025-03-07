
import React, { useEffect, useRef } from 'react';
import SectionTitle from '../SectionTitle';
import { Bitcoin, Trophy, Users } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      fadeElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section id="about" className="section bg-white" ref={sectionRef}>
      <div className="container mx-auto">
        <SectionTitle 
          subtitle="About the Event" 
          title="The Premier Bitcoin Gathering of the Year"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="fade-in-section">
            <p className="text-lg text-gray-700 mb-6">
              The Bitcoin Summit brings together the brightest minds and most influential figures in the Bitcoin ecosystem for three days of insightful discussions, networking, and exclusive experiences.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Hosted in the luxurious Grand Palace Hotel in the heart of the historic city center, this invitation-only event creates the perfect atmosphere for meaningful connections and groundbreaking collaborations.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="rounded-full bg-bitcoin/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-bitcoin" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Elite Speakers</h3>
                <p className="text-gray-600">Leading voices in the Bitcoin ecosystem</p>
              </div>
              
              <div className="rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="rounded-full bg-bitcoin/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-bitcoin" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Exclusive</h3>
                <p className="text-gray-600">Limited to 300 distinguished attendees</p>
              </div>
              
              <div className="rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="rounded-full bg-bitcoin/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Bitcoin className="h-6 w-6 text-bitcoin" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Showcasing the future of Bitcoin</p>
              </div>
            </div>
          </div>
          
          <div className="fade-in-section relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1629867951513-12fd3b5ef5b3?q=80&w=2070&auto=format&fit=crop" 
                alt="Bitcoin Conference" 
                className="w-full h-auto object-cover"
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
