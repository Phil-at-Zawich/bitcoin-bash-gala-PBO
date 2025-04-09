import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ExternalLink, ArrowRight } from "lucide-react";

interface RegistrationFormProps {
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    role: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const LUMA_URL = "https://lu.ma/9muxzd0e";

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  formData,
  handleChange,
  onSubmit,
}) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.company ||
      !formData.role
    ) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Optional: Save the form data to your system before redirecting
      // You can still call the original onSubmit to handle any data processing
      onSubmit(e);

      // Open Luma page in a new tab
      window.open(LUMA_URL, "_blank");

      toast({
        title: "Success",
        description: "Registration details saved. Continuing to payment page.",
      });
    } catch (error) {
      console.error("Error processing registration:", error);
      toast({
        title: "Error",
        description:
          "There was a problem processing your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="p-8 space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="text-sm font-medium">
            First Name
          </label>
          <Input
            id="firstName"
            placeholder="Enter your first name"
            required
            className="h-12"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="text-sm font-medium">
            Last Name
          </label>
          <Input
            id="lastName"
            placeholder="Enter your last name"
            required
            className="h-12"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email address"
          required
          className="h-12"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company / Organization
        </label>
        <Input
          id="company"
          placeholder="Enter your company name"
          required
          className="h-12"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="role" className="text-sm font-medium">
          Job Title
        </label>
        <Input
          id="role"
          placeholder="Enter your job title"
          required
          className="h-12"
          value={formData.role}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-bitcoin hover:bg-bitcoin/90 text-white h-12 text-base"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Processing..."
        ) : (
          <>
            Continue to Payment <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
        <ExternalLink className="h-4 w-4" />
        <span>You'll be redirected to Luma to complete your payment</span>
      </div>

      <p className="text-center text-sm text-gray-500">
        Crypto payment accepted, please contact{" "}
        <a href="mailto:info@bitcoinmeetupday.com" className="text-bitcoin">
          info@bitcoinmeetupday.com
        </a>
      </p>

      <p className="text-center text-sm text-gray-500 mt-4">
        Due to limited capacity, all registrations are subject to approval. You
        will be notified via email within 3 business days.
      </p>
    </form>
  );
};

export default RegistrationForm;
