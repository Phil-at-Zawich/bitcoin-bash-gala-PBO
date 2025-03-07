
import React, { useState } from 'react';
import SectionTitle from '../SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Bitcoin, Loader2, CreditCard } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const RegisterSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState<'registration' | 'payment'>('registration');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: ''
  });
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvc: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [id]: value
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
    setCurrentStep('payment');
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // First create a registration in Luma
      const registrationResponse = await fetch('https://api.lu.ma/public/v1/event/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event_id: 'evt-KiUfVdnFXANvuzc', // Replace with your actual Luma event ID
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          custom_fields: {
            company: formData.company,
            job_title: formData.role
          }
        }),
      });

      const registrationData = await registrationResponse.json();

      if (!registrationResponse.ok) {
        throw new Error(registrationData.message || 'Failed to register');
      }

      // Then process payment through Luma's payment endpoint
      const paymentResponse = await fetch('https://api.lu.ma/public/v1/event/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event_id: 'evt-KiUfVdnFXANvuzc', // Replace with your actual Luma event ID
          registration_id: registrationData.registration_id,
          payment_method: {
            type: 'card',
            card_number: paymentData.cardNumber.replace(/\s/g, ''),
            card_holder_name: paymentData.cardName,
            expiry_date: paymentData.expiry,
            cvc: paymentData.cvc
          },
          amount: 2950 // Fee in USD cents (2950 USD)
        }),
      });

      const paymentResponseData = await paymentResponse.json();

      if (paymentResponse.ok) {
        toast({
          title: "Registration and Payment Successful",
          description: "You've been registered for The Ultimate Bitcoin Summit 2025. Check your email for confirmation.",
          duration: 5000,
        });
        
        // Reset form and go back to registration step
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          role: ''
        });
        setPaymentData({
          cardNumber: '',
          cardName: '',
          expiry: '',
          cvc: '',
        });
        setCurrentStep('registration');
      } else {
        throw new Error(paymentResponseData.message || 'Payment failed');
      }
    } catch (error) {
      console.error('Registration/Payment error:', error);
      toast({
        title: "Process Failed",
        description: error instanceof Error ? error.message : "Please try again later or contact support.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 2) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
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
                  <form onSubmit={handleRegistrationSubmit} className="p-8 space-y-6">
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
                    
                    <p className="text-center text-sm text-gray-500 mt-4">
                      Due to limited capacity, all registrations are subject to approval. 
                      You will be notified via email within 3 business days.
                    </p>
                  </form>
                </TabsContent>
                
                <TabsContent value="payment" className="p-0">
                  <form onSubmit={handlePaymentSubmit} className="p-8 space-y-6">
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
                          setPaymentData(prev => ({
                            ...prev,
                            cardNumber: formatted
                          }));
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
                            setPaymentData(prev => ({
                              ...prev,
                              expiry: formatted
                            }));
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
                        onClick={() => setCurrentStep('registration')}
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
                </TabsContent>
              </Tabs>
            </div>
          </div>
          
          <div className="lg:col-span-2 fade-in-section">
            <div className="bg-bitcoin/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Why Attend?</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-bitcoin/20 w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-bitcoin font-medium">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Elite Networking</h4>
                    <p className="text-gray-600">Connect with industry leaders and decision-makers</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-bitcoin/20 w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-bitcoin font-medium">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Expert Insights</h4>
                    <p className="text-gray-600">Gain valuable knowledge from renowned speakers</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-bitcoin/20 w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-bitcoin font-medium">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Exclusive Experience</h4>
                    <p className="text-gray-600">Enjoy luxury accommodations and premium events</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="rounded-full bg-bitcoin/20 w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-bitcoin font-medium">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Future Opportunities</h4>
                    <p className="text-gray-600">Discover partnerships and investment possibilities</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 p-4 border border-bitcoin/20 rounded-lg bg-bitcoin/5">
                <p className="text-sm text-gray-700">
                  <strong>Registration Fee:</strong> $2,950 USD<br />
                  Includes all sessions, workshops, meals, and networking events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;

