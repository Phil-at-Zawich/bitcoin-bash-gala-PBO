
import React from 'react';

const BenefitsPanel: React.FC = () => {
  return (
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
  );
};

export default BenefitsPanel;
