import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CreditCard, Loader2, ChevronDown, Check, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface TicketType {
  id: string;
  name: string;
  price: number;
  totalSpots: number;
  availableSpots: number;
  requiresMembership?: boolean;
}

interface PaymentFormProps {
  paymentData: {
    cardNumber: string;
    cardName: string;
    expiry: string;
    cvc: string;
  };
  handlePaymentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  formatCardNumber: (value: string) => string;
  formatExpiry: (value: string) => string;
  isSubmitting: boolean;
  onBack: () => void;
  handleTicketSelect: (ticketType: string, price: number) => void;
}

const TICKET_TYPES: TicketType[] = [
  {
    id: "lunch",
    name: "Lunch Only",
    price: 200,
    totalSpots: 10,
    availableSpots: 10,
  },
  {
    id: "evening-how",
    name: "Evening Party (HOW Member)",
    price: 100,
    totalSpots: 50,
    availableSpots: 50,
    requiresMembership: true,
  },
  {
    id: "evening-regular",
    name: "Evening Party (Non-Member)",
    price: 150,
    totalSpots: 50,
    availableSpots: 50,
  },
  {
    id: "Sponsor",
    name: "Become a Sponsor",
    price: 2000,
    totalSpots: 10,
    availableSpots: 10,
  },
];

const PaymentForm: React.FC<PaymentFormProps> = ({
  paymentData,
  handlePaymentChange,
  onSubmit,
  formatCardNumber,
  formatExpiry,
  isSubmitting,
  onBack,
  handleTicketSelect,
}) => {
  const [selectedTicket, setSelectedTicket] = useState<TicketType | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showMembershipDialog, setShowMembershipDialog] = useState(false);
  const [membershipCode, setMembershipCode] = useState("");
  const [membershipError, setMembershipError] = useState("");

  const handleTicketClick = (ticket: TicketType) => {
    if (ticket.availableSpots === 0) {
      return; // Ticket sold out
    }

    if (ticket.requiresMembership) {
      setSelectedTicket(ticket);
      setShowMembershipDialog(true);
    } else {
      setSelectedTicket(ticket);
      setShowConfirmDialog(true);
    }
  };

  const handleMembershipVerification = () => {
    // This is where you'd implement actual HOW membership verification
    if (membershipCode === "HOW2024") {
      // Example verification
      setShowMembershipDialog(false);
      setShowConfirmDialog(true);
      setMembershipError("");
    } else {
      setMembershipError("Invalid membership code");
    }
  };

  const confirmTicketSelection = () => {
    if (selectedTicket) {
      handleTicketSelect(selectedTicket.id, selectedTicket.price);
      setShowConfirmDialog(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="p-8 space-y-6" noValidate>
      <div className="space-y-2">
        <label htmlFor="cardName" className="text-sm font-medium">
          Cardholder Name
        </label>
        <Input
          id="cardName"
          placeholder="Name on card"
          required
          className="h-12"
          value={paymentData.cardName}
          onChange={handlePaymentChange}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="cardNumber" className="text-sm font-medium">
          Card Number
        </label>
        <Input
          id="cardNumber"
          placeholder="1234 5678 9012 3456"
          required
          className="h-12"
          value={paymentData.cardNumber}
          onChange={(e) => {
            const formatted = formatCardNumber(e.target.value);
            const eventWithNewValue = {
              ...e,
              target: {
                ...e.target,
                id: e.target.id,
                value: formatted,
              },
            };
            handlePaymentChange(eventWithNewValue);
          }}
          maxLength={19}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="expiry" className="text-sm font-medium">
            Expiry Date
          </label>
          <Input
            id="expiry"
            placeholder="MM/YY"
            required
            className="h-12"
            value={paymentData.expiry}
            onChange={(e) => {
              const formatted = formatExpiry(e.target.value);
              const eventWithNewValue = {
                ...e,
                target: {
                  ...e.target,
                  id: e.target.id,
                  value: formatted,
                },
              };
              handlePaymentChange(eventWithNewValue);
            }}
            maxLength={5}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="cvc" className="text-sm font-medium">
            CVC
          </label>
          <Input
            id="cvc"
            placeholder="123"
            required
            className="h-12"
            value={paymentData.cvc}
            onChange={handlePaymentChange}
            maxLength={3}
          />
        </div>
      </div>

      <div className="p-4 border border-bitcoin/20 rounded-lg bg-bitcoin/5 flex items-center justify-between">
        <p className="text-sm text-gray-700">
          <strong>Total:</strong> ${selectedTicket?.price || 0} USD
        </p>
        <p className="text-xs text-gray-500">Secure payment via Luma</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          type="button"
          variant="outline"
          className="flex-1"
          onClick={onBack}
          disabled={isSubmitting}
        >
          Back
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="flex-1 bg-bitcoin hover:bg-bitcoin/90 text-white h-12 text-base"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="mr-2 h-4 w-4" />
                  {selectedTicket ? selectedTicket.name : "Select Ticket Type"}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-72">
            {TICKET_TYPES.map((ticket) => (
              <DropdownMenuItem
                key={ticket.id}
                onClick={() => handleTicketClick(ticket)}
                disabled={ticket.availableSpots === 0}
                className="cursor-pointer"
              >
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{ticket.name}</span>
                    <span className="text-sm text-gray-500">
                      ${ticket.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {ticket.availableSpots} of {ticket.totalSpots} spots left
                    </span>
                    {ticket.availableSpots === 0 && (
                      <span className="text-red-500 text-sm">Sold Out</span>
                    )}
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Dialog
        open={showMembershipDialog}
        onOpenChange={setShowMembershipDialog}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>HOW Membership Verification</DialogTitle>
            <DialogDescription>
              Please enter your HOW membership code to access member pricing.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <Input
              placeholder="Enter membership code"
              value={membershipCode}
              onChange={(e) => setMembershipCode(e.target.value)}
            />
            {membershipError && (
              <p className="text-red-500 text-sm">{membershipError}</p>
            )}
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowMembershipDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={handleMembershipVerification}>
              Verify Membership
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Ticket Selection</DialogTitle>
            <DialogDescription>
              Please confirm your ticket selection:
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="font-medium">{selectedTicket?.name}</p>
            <p className="text-gray-500">Price: ${selectedTicket?.price} USD</p>
            <p className="text-gray-500">
              {selectedTicket?.availableSpots} spots remaining
            </p>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setShowConfirmDialog(false)}
            >
              Cancel
            </Button>
            <Button onClick={confirmTicketSelection}>Confirm Selection</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="text-center">
        <p className="text-xs text-gray-500 mt-4">
          Your payment is secured with industry-standard encryption. All
          payments are processed by Luma securely.
        </p>
      </div>
    </form>
  );
};

export default PaymentForm;
