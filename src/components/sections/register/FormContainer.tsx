import React from "react";
import { Bitcoin } from "lucide-react";
import RegistrationForm from "./RegistrationForm";
import PaymentForm from "./PaymentForm";

interface FormContainerProps {
  currentStep: "registration" | "payment";
  setCurrentStep: (value: "registration" | "payment") => void;
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    company: string;
    role: string;
  };
  paymentData: {
    cardNumber: string;
    cardName: string;
    expiry: string;
    cvc: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePaymentChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegistrationSubmit: (e: React.FormEvent) => void;
  handlePaymentSubmit: (e: React.FormEvent) => void;
  formatCardNumber: (value: string) => string;
  formatExpiry: (value: string) => string;
  isSubmitting: boolean;
}

const FormContainer: React.FC<FormContainerProps> = ({
  currentStep,
  setCurrentStep,
  formData,
  paymentData,
  handleChange,
  handlePaymentChange,
  handleRegistrationSubmit,
  handlePaymentSubmit,
  formatCardNumber,
  formatExpiry,
  isSubmitting,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-bitcoin/90 p-8 text-white flex items-center gap-4">
        <Bitcoin className="h-8 w-8" />
        <h3 className="text-2xl font-display font-semibold">
          {currentStep === "registration"
            ? "Registration Form"
            : "Payment Information"}
        </h3>
      </div>

      <RegistrationForm
        formData={formData}
        handleChange={handleChange}
        onSubmit={handleRegistrationSubmit}
      />
    </div>
  );
};

export default FormContainer;
