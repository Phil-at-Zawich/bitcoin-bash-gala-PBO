
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CreditCard, Loader2 } from 'lucide-react';

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
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  paymentData,
  handlePaymentChange,
  onSubmit,
  formatCardNumber,
  formatExpiry,
  isSubmitting,
  onBack,
}) => {
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
                value: formatted
              }
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
                  value: formatted
                }
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
          <strong>Total:</strong> $2,950 USD
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
        
        <Button 
          type="submit" 
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
              Pay $2,950
            </>
          )}
        </Button>
      </div>
      
      <div className="text-center">
        <p className="text-xs text-gray-500 mt-4">
          Your payment is secured with industry-standard encryption.
          All payments are processed by Luma securely.
        </p>
      </div>
    </form>
  );
};

export default PaymentForm;
