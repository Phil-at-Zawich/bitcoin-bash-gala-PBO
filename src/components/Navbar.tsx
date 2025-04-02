import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import GalaIcon from "@/components/icons/GalaIcon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-8 py-4",
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GalaIcon className="h-6 w-6 animate-float" />
          <span className="font-display text-xl font-medium text-bitcoin">
            Bitcoin Meetup Day
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="bitcoin-link">
            About
          </a>
          <a href="#speakers" className="bitcoin-link">
            Sponsors
          </a>
          <a href="#venue" className="bitcoin-link">
            Venue
          </a>
          <a href="#schedule" className="bitcoin-link">
            Schedule
          </a>
        </div>

        <div>
          <a href="#register">
            <Button className="bg-bitcoin hover:bg-bitcoin/90 text-white rounded-full px-6">
              Register Now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
