import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import { useToast } from "@/components/ui/use-toast";
import FormContainer from "./register/FormContainer";
import BenefitsPanel from "./register/BenefitsPanel";

const RegisterSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState<"registration" | "payment">(
    "registration"
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    role: "",
  });
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleRegistrationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form data
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }

    // Proceed to payment step
    setCurrentStep("payment");
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First create a registration in Luma
      const registrationResponse = await fetch(
        "https://api.lu.ma/public/v1/event/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event_id: "evt-KiUfVdnFXANvuzc", // Replace with your actual Luma event ID
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            custom_fields: {
              company: formData.company,
              job_title: formData.role,
            },
          }),
        }
      );

      const registrationData = await registrationResponse.json();

      if (!registrationResponse.ok) {
        throw new Error(registrationData.message || "Failed to register");
      }

      // Then process payment through Luma's payment endpoint
      const paymentResponse = await fetch(
        "https://api.lu.ma/public/v1/event/payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event_id: "evt-KiUfVdnFXANvuzc", // Replace with your actual Luma event ID
            registration_id: registrationData.registration_id,
            payment_method: {
              type: "card",
              card_number: paymentData.cardNumber.replace(/\s/g, ""),
              card_holder_name: paymentData.cardName,
              expiry_date: paymentData.expiry,
              cvc: paymentData.cvc,
            },
            amount: 2950, // Fee in USD cents (2950 USD)
          }),
        }
      );

      const paymentResponseData = await paymentResponse.json();

      if (paymentResponse.ok) {
        toast({
          title: "Registration and Payment Successful",
          description:
            "You've been registered for The Ultimate Bitcoin Meetup Day 2025. Check your email for confirmation.",
          duration: 5000,
        });

        // Reset form and go back to registration step
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          role: "",
        });
        setPaymentData({
          cardNumber: "",
          cardName: "",
          expiry: "",
          cvc: "",
        });
        setCurrentStep("registration");
      } else {
        throw new Error(paymentResponseData.message || "Payment failed");
      }
    } catch (error) {
      console.error("Registration/Payment error:", error);
      toast({
        title: "Process Failed",
        description:
          error instanceof Error
            ? error.message
            : "Please try again later or contact support.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");

    if (v.length >= 2) {
      return v.slice(0, 2) + "/" + v.slice(2, 4);
    }

    return v;
  };

  return (
    <section id="register" className="section bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle
          subtitle="Join Us"
          title="Reserve Your Spot at This Exclusive Event"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 fade-in-section">
            <FormContainer
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              formData={formData}
              paymentData={paymentData}
              handleChange={handleChange}
              handlePaymentChange={handlePaymentChange}
              handleRegistrationSubmit={handleRegistrationSubmit}
              handlePaymentSubmit={handlePaymentSubmit}
              formatCardNumber={formatCardNumber}
              formatExpiry={formatExpiry}
              isSubmitting={isSubmitting}
            />
          </div>

          <div className="lg:col-span-2 fade-in-section">
            <BenefitsPanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
