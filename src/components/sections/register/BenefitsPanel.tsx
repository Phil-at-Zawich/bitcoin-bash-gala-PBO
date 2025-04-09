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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

          <div className="border border-bitcoin/20 rounded-lg bg-bitcoin/5 overflow-hidden">
            <div className="p-3 bg-bitcoin/10 border-b border-bitcoin/20">
              <strong className="text-sm">Available Tickets</strong>
            </div>
            <div className="p-1">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket Type</TableHead>
                    <TableHead>HoW3 Members</TableHead>
                    <TableHead>Non-Members</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Lunch
                      <div className="text-xs text-gray-500">
                        (includes Evening Party Entry)
                      </div>
                    </TableCell>
                    <TableCell>200,00 €</TableCell>
                    <TableCell>280,00 €</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Evening Party
                      <div className="text-xs text-gray-500">
                        (includes 2 free drinks)
                      </div>
                    </TableCell>
                    <TableCell>130,00 €</TableCell>
                    <TableCell>200,00 €</TableCell>
                  </TableRow>
                  {/* <TableRow>
                    <TableCell className="font-medium">
                      Evening Party (Non-Member)
                    </TableCell>
                    <TableCell>$150</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Reserved Table (Sponsor)
                    </TableCell>
                    <TableCell>$2,000</TableCell>
                  </TableRow> */}
                </TableBody>
              </Table>
            </div>
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

          <div className="border border-bitcoin/20 rounded-lg bg-bitcoin/5 overflow-hidden">
            <div className="p-3 bg-bitcoin/10 border-b border-bitcoin/20">
              <strong className="text-sm">Sponsorship Opportunities</strong>
            </div>
            <div className="p-1">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Level</TableHead>
                    <TableHead>Benefits</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Platinum Sponsor
                    </TableCell>
                    <TableCell>
                      Premium placement and maximum visibility
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Gold Sponsor</TableCell>
                    <TableCell>Enhanced brand presence</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Silver Sponsor
                    </TableCell>
                    <TableCell>Standard visibility package</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="px-4 py-2 text-xs text-gray-500">
                Contact us for detailed sponsorship packages and pricing
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BenefitsPanel;
