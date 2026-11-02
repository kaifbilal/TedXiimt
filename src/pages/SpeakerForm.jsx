import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FormComponent from '../components/FormComponent';

const SpeakerForm = () => {
  const speakerFields = [
    {
      name: 'fullName',
      label: 'Full Name',
      type: 'text',
      required: true,
      placeholder: 'Enter your full name'
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      placeholder: 'your.email@example.com'
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      required: true,
      placeholder: '+91 12345 67890'
    },
    {
      name: 'profession',
      label: 'Profession/Title',
      type: 'text',
      required: true,
      placeholder: 'e.g., CEO, Researcher, Artist'
    },
    {
      name: 'organization',
      label: 'Organization/Company',
      type: 'text',
      required: false,
      placeholder: 'Your current organization'
    },
    {
      name: 'talkTitle',
      label: 'Proposed Talk Title',
      type: 'text',
      required: true,
      placeholder: 'The title of your TEDx talk'
    },
    {
      name: 'talkDescription',
      label: 'Talk Description',
      type: 'textarea',
      required: true,
      placeholder: 'Describe your talk idea, key messages, and why it matters (max 500 words)'
    },
    {
      name: 'speakingExperience',
      label: 'Speaking Experience',
      type: 'select',
      required: true,
      options: ['First time speaker', '1-5 talks', '6-20 talks', '20+ talks', 'Professional speaker']
    },
    {
      name: 'expertise',
      label: 'Area of Expertise',
      type: 'text',
      required: true,
      placeholder: 'e.g., Technology, Healthcare, Education, Arts'
    },
    {
      name: 'website',
      label: 'Website/LinkedIn Profile',
      type: 'url',
      required: false,
      placeholder: 'https://your-website.com'
    },
    {
      name: 'additionalInfo',
      label: 'Additional Information',
      type: 'textarea',
      required: false,
      placeholder: 'Any additional information you would like to share'
    }
  ];

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <main className="pt-20 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Become a <span className="text-red-500">Speaker</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Share your ideas worth spreading with the TEDxIIMT UNIVERSITY community
            </p>
          </div>

          <FormComponent
            formType="Speaker"
            title="Speaker Application"
            description="We're looking for passionate individuals with ideas that can inspire, educate, and transform. Tell us about your story and the message you want to share."
            fields={speakerFields}
          />
        </div>
      </main>
    </div>
  );
};

export default SpeakerForm;