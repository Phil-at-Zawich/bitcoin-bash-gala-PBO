
import React from 'react';
import { Bitcoin } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegistrationForm from './RegistrationForm';
import PaymentForm from './PaymentForm';

interface FormContainerProps {
  currentStep: 'registration' | 'payment';
  setCurrentStep: (value: 'registration' | 'payment') => void;
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
          {currentStep === 'registration' ? 'Registration Form' : 'Payment Information'}
        </h3>
      </div>
      
      <Tabs 
        defaultValue="registration" 
        value={currentStep}
        className="w-full"
        onValueChange={(value) => setCurrentStep(value as 'registration' | 'payment')}
      >
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 rounded-none border-b">
          <TabsTrigger value="registration" disabled={isSubmitting}>Registration</TabsTrigger>
          <TabsTrigger value="payment" disabled={isSubmitting}>Payment</TabsTrigger>
        </TabsList>
        
        <TabsContent value="registration" className="p-0">
          <RegistrationForm 
            formData={formData}
            handleChange={handleChange}
            onSubmit={handleRegistrationSubmit}
          />
        </TabsContent>
        
        <TabsContent value="payment" className="p-0">
          <PaymentForm 
            paymentData={paymentData}
            handlePaymentChange={handlePaymentChange}
            onSubmit={handlePaymentSubmit}
            formatCardNumber={formatCardNumber}
            formatExpiry={formatExpiry}
            isSubmitting={isSubmitting}
            onBack={() => setCurrentStep('registration')}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FormContainer;
