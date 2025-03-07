
import React, { useState } from 'react';
import SectionTitle from '../SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Bitcoin, Loader2 } from 'lucide-react';

const RegisterSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Luma API integration
      const response = await fetch('https://api.lu.ma/public/v1/event/register', {
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

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Registration Successful",
          description: "You've been registered for The Ultimate Bitcoin Summit 2025. Check your email for confirmation.",
          duration: 5000,
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          role: ''
        });
      } else {
        throw new Error(data.message || 'Failed to register');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration Failed",
        description: error instanceof Error ? error.message : "Please try again later or contact support.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <h3 className="text-2xl font-display font-semibold">Registration Form</h3>
              </div>
              <form onSubmit={handleSubmit} className="p-8 space-y-6">
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
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Register for the Summit"
                  )}
                </Button>
                
                <p className="text-center text-sm text-gray-500 mt-4">
                  Due to limited capacity, all registrations are subject to approval. 
                  You will be notified via email within 3 business days.
                </p>
              </form>
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
