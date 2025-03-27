import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import { Calendar, Bitcoin } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ScheduleSection = () => {
  const scheduleData = {
    day1: [
      {
        time: "12:00 - 14:00",
        title: "Lunch",
        description: "Welcome lunch",
      },
      {
        time: "18:00 - 00:00",
        title: "Party time",
        description: "Welcome reception",
      },
      // {
      //   time: "09:30 - 10:30",
      //   title: "Opening Keynote",
      //   description: "The Future of Bitcoin: Challenges and Opportunities",
      // },
      // {
      //   time: "10:45 - 12:00",
      //   title: "Panel Discussion",
      //   description: "Institutional Adoption: The Path Forward",
      // },
      // {
      //   time: "12:00 - 13:30",
      //   title: "Lunch Break",
      //   description: "Gourmet lunch and networking",
      // },
      // {
      //   time: "13:30 - 15:00",
      //   title: "Technical Workshops",
      //   description: "Lightning Network: Building the Future of Payments",
      // },
      // {
      //   time: "15:15 - 16:30",
      //   title: "Fireside Chat",
      //   description: "Bitcoin's Role in a Changing Global Economy",
      // },
      // {
      //   time: "17:00 - 19:00",
      //   title: "Welcome Reception",
      //   description: "Cocktails and hors d'oeuvres",
      // },
    ],
    // day2: [
    //   { time: "09:00 - 10:00", title: "Breakfast & Networking", description: "Continental breakfast" },
    //   { time: "10:00 - 11:15", title: "Keynote Address", description: "Bitcoin Security: Protecting the Network" },
    //   { time: "11:30 - 12:45", title: "Expert Panel", description: "Bitcoin Mining: Sustainability and Innovation" },
    //   { time: "12:45 - 14:00", title: "Lunch Break", description: "Networking lunch" },
    //   { time: "14:00 - 15:30", title: "Technical Deep Dive", description: "Smart Contracts on Bitcoin: Current and Future State" },
    //   { time: "15:45 - 17:00", title: "Investor Roundtable", description: "Bitcoin as an Investment: Strategies for the Future" },
    //   { time: "19:00 - 22:00", title: "Gala Dinner", description: "Exclusive dining experience with special guest speaker" },
    // ],
    // day3: [
    //   { time: "09:00 - 10:00", title: "Breakfast", description: "Final day networking breakfast" },
    //   { time: "10:00 - 11:15", title: "Innovation Showcase", description: "Highlighting Cutting-Edge Bitcoin Projects" },
    //   { time: "11:30 - 12:45", title: "Panel Discussion", description: "Regulatory Landscape: Navigating the Future" },
    //   { time: "12:45 - 14:00", title: "Lunch", description: "Farewell lunch" },
    //   { time: "14:00 - 15:30", title: "Closing Keynote", description: "The Road Ahead: Bitcoin's Next Decade" },
    //   { time: "15:30 - 16:00", title: "Closing Remarks", description: "Thank you and farewell" },
    // ],
  };

  return (
    <section id="schedule" className="section bg-white">
      <div className="container mx-auto">
        <SectionTitle subtitle="Event Schedule" title="Inspiring Day" />

        <div className="fade-in-section">
          <Tabs defaultValue="day1" className="w-full">
            {/* <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="day1" className="text-base py-3">
                <span className="hidden md:inline mr-2">Day 1:</span> December
                15
              </TabsTrigger>
              <TabsTrigger value="day2" className="text-base py-3">
                <span className="hidden md:inline mr-2">Day 2:</span> December
                16
              </TabsTrigger>
              <TabsTrigger value="day3" className="text-base py-3">
                <span className="hidden md:inline mr-2">Day 3:</span> December
                17
              </TabsTrigger>
            </TabsList> */}

            {Object.entries(scheduleData).map(([day, events]) => (
              <TabsContent key={day} value={day} className="mt-0">
                <div className="space-y-6">
                  {events.map((event, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="md:w-1/6">
                          <div className="inline-flex items-center justify-center px-3 py-1 bg-bitcoin/10 text-bitcoin rounded-full text-sm">
                            <Calendar className="h-3.5 w-3.5 mr-1.5" />
                            {event.time}
                          </div>
                        </div>
                        <div className="md:w-2/6">
                          <h3 className="text-xl font-semibold group-hover:text-bitcoin transition-colors">
                            {event.title}
                          </h3>
                        </div>
                        <div className="md:w-3/6">
                          <p className="text-gray-600">{event.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
