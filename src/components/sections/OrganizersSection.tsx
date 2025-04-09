import React from "react";
import { ArrowUpRight } from "lucide-react";

const OrganizersSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center justify-center space-y-6 fade-in-section">
          <p className="text-gray-600 text-lg font-medium uppercase tracking-wider">
            Brought to you by
          </p>

          <a
            href="https://asymkey.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center hover:opacity-90 transition-opacity"
          >
            <div className="flex items-center">
              <img
                src="https://asymkey.com/wp-content/uploads/2024/05/Asymkey_Logo_250x300px_Plan-de-travail-1-1-768x384.png"
                alt="Asymkey"
                className="h-24 mb-4"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.style.display = "none";
                  const fallback = document.getElementById("asymkey-text");
                  if (fallback) fallback.style.fontSize = "2.5rem";
                }}
              />
            </div>
            {/* <h2
              id="asymkey-text"
              className="text-3xl font-bold text-[#00A1DE] group-hover:underline flex items-center"
            >
              ASYMKEY
              <ArrowUpRight className="h-5 w-5 ml-1 opacity-70" />
            </h2> */}
            <p className="text-gray-700 max-w-xl mx-auto mt-3">
              Pioneering Bitcoin adoption in Luxembourg and beyond. Connecting
              visionaries, investors, and industry leaders in the Bitcoin
              ecosystem.
            </p>
          </a>

          {/* <div className="mt-10 pt-8 border-t border-gray-200 w-full max-w-md">
            <p className="text-sm text-gray-500">
              For partnership inquiries, please contact{" "}
              <a
                href="mailto:info@bitcoinmeetupday.com"
                className="text-bitcoin hover:underline"
              >
                info@bitcoinmeetupday.com
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
