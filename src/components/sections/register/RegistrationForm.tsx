import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

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

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  formData,
  handleChange,
  onSubmit,
}) => {
  const { toast } = useToast();

  return (
    <form onSubmit={onSubmit} className="p-8 space-y-6" noValidate>
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
      >
        Continue to Payment
      </Button>

      <p className="text-center text-sm text-gray-500">
        Crypto payment accepted, please contact{" "}
        <a href="mailto:phil@asymkey.com" className="text-bitcoin">
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
