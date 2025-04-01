import React from "react";
import SectionTitle from "../SectionTitle";
import { User } from "lucide-react";

interface SpeakerProps {
  name: string;
  role: string;
  company: string;
  span: number;
  image: string;
  delay: number;
}

const Speaker: React.FC<SpeakerProps> = ({
  name,
  span = 1,
  company,
  image,
  delay,
}) => {
  return (
    <div
      className={`fade-in-section bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group col-span-${span}`}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="h-64 overflow-hidden">
        {company === "Asymkey" ? (
          <a href="https://asymkey.com" target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </a>
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <div className="p-6">
        {/* <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 mb-2">{role}</p> */}
        <div className="flex items-center font-semibold text-bitcoin text-xl">
          <span>{company === "Asymkey" ? "Your Host: Asymkey" : company}</span>
        </div>
      </div>
    </div>
  );
};

const SpeakersSection = () => {
  const speakers = [
    {
      name: "Alexandra Chen",
      role: "Blockchain Strategist",
      company: "Asymkey",
      image:
        "https://asymkey.com/wp-content/uploads/2024/05/Asymkey_Logo_250x300px_Plan-de-travail-1-1-768x384.png",
    },
    {
      name: "Platinum Package",
      role: "Premium Sponsorship",
      company: "Platinum Package x1",
      image: "",
    },
    {
      name: "Gold Package",
      role: "Premium Sponsorship",
      company: "Gold Package x2",
      image: "",
    },
    {
      name: "Silver Package",
      role: "Premium Sponsorship",
      company: "Silver Package x4",
      image: "",
    },
    {
      name: "Bronze Package",
      role: "Premium Sponsorship",
      company: "Bronze Package x8",
      image: "",
    }
  ];

  return (
    <section id="speakers" className="section bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle
          subtitle="World-Class Sponsors"
          title="Sponsorship Options"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Speaker
              key={index}
              name={speaker.name}
              span={index == 1 ? 2 : 1}
              role={speaker.role}
              company={speaker.company}
              image={speaker.image}
              delay={(index % 3) + 1}
            />
          ))}
        </div>

        <div className="mt-16 text-center fade-in-section">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-bitcoin/10 text-bitcoin">
            <User className="h-4 w-4" />
            <span className="font-medium">And 100+ more industry leaders</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
