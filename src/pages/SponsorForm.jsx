import React from 'react';
import FormComponent from '../components/FormComponent';

const SponsorForm = () => {
  const sponsorFields = [
    {
      name: 'companyName',
      label: 'Company/Organization Name',
      type: 'text',
      required: true,
      placeholder: 'Enter your company name'
    },
    {
      name: 'contactPerson',
      label: 'Contact Person Name',
      type: 'text',
      required: true,
      placeholder: 'Full name of primary contact'
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      placeholder: 'contact@company.com'
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      required: true,
      placeholder: '+91 12345 67890'
    },
    {
      name: 'designation',
      label: 'Designation',
      type: 'text',
      required: true,
      placeholder: 'e.g., Marketing Manager, CEO'
    },
    {
      name: 'companyWebsite',
      label: 'Company Website',
      type: 'url',
      required: false,
      placeholder: 'https://www.company.com'
    },
    {
      name: 'sponsorshipTier',
      label: 'Preferred Sponsorship Tier',
      type: 'select',
      required: true,
      options: ['Title Sponsor', 'Gold Sponsor', 'Silver Sponsor', 'Bronze Sponsor', 'Custom Package']
    },
    {
      name: 'industry',
      label: 'Industry/Sector',
      type: 'text',
      required: true,
      placeholder: 'e.g., Technology, Healthcare, Finance'
    },
    {
      name: 'companySize',
      label: 'Company Size',
      type: 'select',
      required: true,
      options: ['1-10 employees', '11-50 employees', '51-200 employees', '201-1000 employees', '1000+ employees']
    },
    {
      name: 'sponsorshipGoals',
      label: 'Sponsorship Goals',
      type: 'textarea',
      required: true,
      placeholder: 'What do you hope to achieve through this sponsorship? (brand awareness, community engagement, etc.)'
    },
    {
      name: 'previousSponsorship',
      label: 'Previous Event Sponsorship Experience',
      type: 'select',
      required: true,
      options: ['First time sponsor', 'Sponsored 1-3 events', 'Sponsored 4-10 events', 'Regular event sponsor']
    },
    {
      name: 'budget',
      label: 'Approximate Budget Range',
      type: 'select',
      required: false,
      options: ['₹10,000 - ₹25,000', '₹25,000 - ₹50,000', '₹50,000 - ₹1,00,000', '₹1,00,000 - ₹2,50,000', '₹2,50,000+']
    },
    {
      name: 'additionalRequirements',
      label: 'Additional Requirements/Comments',
      type: 'textarea',
      required: false,
      placeholder: 'Any specific requirements or additional information'
    }
  ];

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <main className="pt-20 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Partner with <span className="text-red-500">TEDxIIMT UNIVERSITY</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join us in spreading ideas worth sharing and make a lasting impact
            </p>
          </div>

          <FormComponent
            formType="Sponsor"
            title="Sponsorship Application"
            description="Partner with TEDxIIMT UNIVERSITY to reach an engaged audience of innovators, thinkers, and changemakers. Let's create something extraordinary together."
            fields={sponsorFields}
          />
        </div>
      </main>
    </div>
  );
};

export default SponsorForm;