import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  Trophy,
  Utensils,
  Network,
  Building2,
  Gift,
  Award,
  Target,
} from "lucide-react";

const BenefitsPanel: React.FC = () => {
  return (
    <div className="bg-bitcoin/10 rounded-2xl p-8">
      <h3 className="text-2xl font-semibold mb-6">Why Join Us?</h3>

      <Tabs defaultValue="attendee" className="space-y-6">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="attendee" className="text-base">
            Attendee Benefits
          </TabsTrigger>
          <TabsTrigger value="sponsor" className="text-base">
            Sponsor Benefits
          </TabsTrigger>
        </TabsList>

        <TabsContent value="attendee" className="space-y-6">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-bitcoin/20 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Trophy className="h-4 w-4 text-bitcoin" />
              </div>
              <div>
                <h4 className="font-medium">Exclusive Access</h4>
                <p className="text-gray-600">
                  Join an intimate gathering of Bitcoin's most influential
                  figures and industry leaders
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="rounded-full bg-bitcoin/20 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Network className="h-4 w-4 text-bitcoin" />
              </div>
              <div>
                <h4 className="font-medium">Elite Networking</h4>
                <p className="text-gray-600">
                  Connect with decision-makers, investors, and innovators in the
                  Bitcoin space
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="rounded-full bg-bitcoin/20 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Utensils className="h-4 w-4 text-bitcoin" />
              </div>
              <div>
                <h4 className="font-medium">Luxury Experience</h4>
                <p className="text-gray-600">
                  Enjoy gourmet dining, premium champagne, and a sophisticated
                  atmosphere
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="rounded-full bg-bitcoin/20 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Users className="h-4 w-4 text-bitcoin" />
              </div>
              <div>
                <h4 className="font-medium">Meaningful Connections</h4>
                <p className="text-gray-600">
                  Build lasting relationships in an intimate setting limited to
                  100 attendees
                </p>
              </div>
            </li>
          </ul>

          <div className="p-4 border border-bitcoin/20 rounded-lg bg-bitcoin/5">
            <p className="text-sm text-gray-700 space-y-2">
              <strong className="block">Available Tickets:</strong>
              <span className="block">• Lunch Only: $200 (10 spots)</span>
              <span className="block">
                • Evening Party: $100-$150 (50 spots)
              </span>
              <span className="block">
                • Reserved Table: $2,000 (10 available)
              </span>
            </p>
          </div>
        </TabsContent>

        <TabsContent value="sponsor" className="space-y-6">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="rounded-full bg-bitcoin/20 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Target className="h-4 w-4 text-bitcoin" />
              </div>
              <div>
                <h4 className="font-medium">Premium Brand Exposure</h4>
                <p className="text-gray-600">
                  Showcase your brand to a highly curated audience of Bitcoin
                  industry leaders
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="rounded-full bg-bitcoin/20 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Building2 className="h-4 w-4 text-bitcoin" />
              </div>
              <div>
                <h4 className="font-medium">VIP Access</h4>
                <p className="text-gray-600">
                  Reserved seating and private networking opportunities with key
                  industry figures
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="rounded-full bg-bitcoin/20 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Gift className="h-4 w-4 text-bitcoin" />
              </div>
              <div>
                <h4 className="font-medium">Exclusive Perks</h4>
                <p className="text-gray-600">
                  Special mention during the event, branded materials, and
                  promotional opportunities
                </p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="rounded-full bg-bitcoin/20 w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                <Award className="h-4 w-4 text-bitcoin" />
              </div>
              <div>
                <h4 className="font-medium">Industry Recognition</h4>
                <p className="text-gray-600">
                  Position your brand as a leader in the Bitcoin ecosystem
                </p>
              </div>
            </li>
          </ul>

          <div className="p-4 border border-bitcoin/20 rounded-lg bg-bitcoin/5">
            <p className="text-sm text-gray-700 space-y-2">
              <strong className="block">Sponsorship Opportunities:</strong>
              <span className="block">
                • Platinum Sponsor: Premium placement and maximum visibility
              </span>
              <span className="block">
                • Gold Sponsor: Enhanced brand presence
              </span>
              <span className="block">
                • Silver Sponsor: Standard visibility package
              </span>
              <span className="block text-xs mt-2">
                Contact us for detailed sponsorship packages and pricing
              </span>
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BenefitsPanel;
