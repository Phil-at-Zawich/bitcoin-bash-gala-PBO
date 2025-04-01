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
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        {/* <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-600 mb-2">{role}</p> */}
        <div className="flex items-center font-semibold text-bitcoin text-xl">
          <span>{company}</span>
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
      name: "Michael Reynolds",
      role: "Chief Bitcoin Officer",
      company: "Satoshi Ventures",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Sophia Williams",
      role: "Bitcoin Researcher",
      company: "Digital Asset Institute",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1922&auto=format&fit=crop",
    },
    {
      name: "Daniel Park",
      role: "Lightning Network Developer",
      company: "Voltage Labs",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Emma Thompson",
      role: "Bitcoin Economist",
      company: "Macro Trends Group",
      image:
        "https://images.unsplash.com/photo-1619085888250-b7691f3d5fe9?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "James Wilson",
      role: "Security Expert",
      company: "Cryptography Solutions",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <section id="speakers" className="section bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle
          subtitle="World-Class Sponsors"
          title="Meet Our Distinguished Sponsors"
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
