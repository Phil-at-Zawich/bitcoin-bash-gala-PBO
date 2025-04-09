import React from "react";
import { cn } from "@/lib/utils";
import { Bitcoin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-16 px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-bitcoin transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#sponsors"
                  className="text-gray-400 hover:text-bitcoin transition-colors"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="#venue"
                  className="text-gray-400 hover:text-bitcoin transition-colors"
                >
                  Venue
                </a>
              </li>
              <li>
                <a
                  href="#schedule"
                  className="text-gray-400 hover:text-bitcoin transition-colors"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#register"
                  className="text-gray-400 hover:text-bitcoin transition-colors"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <span className="block">Email:</span>
                <a
                  href="mailto:info@bitcoinmeetupday.com"
                  className="text-bitcoin hover:underline"
                >
                  info@bitcoinmeetupday.com
                </a>
              </li>
              {/* <li>
                <span className="block">Phone:</span>
                <a
                  href="tel:+1234567890"
                  className="text-bitcoin hover:underline"
                >
                  +1 (234) 567-890
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500">
          <p>&copy; 2025 Asymkey sàrl. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
