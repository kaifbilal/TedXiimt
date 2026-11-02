import React from 'react';
import FormComponent from '../components/FormComponent';

const AttendeeForm = () => {
  const attendeeFields = [
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
      name: 'age',
      label: 'Age',
      type: 'number',
      required: true,
      placeholder: 'Your age'
    },
    {
      name: 'profession',
      label: 'Profession/Occupation',
      type: 'text',
      required: true,
      placeholder: 'e.g., Student, Engineer, Teacher'
    },
    {
      name: 'organization',
      label: 'Organization/Institution',
      type: 'text',
      required: false,
      placeholder: 'Your school, college, or workplace'
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
      required: true,
      placeholder: 'Your current city'
    },
    {
      name: 'tedExperience',
      label: 'Previous TED/TEDx Experience',
      type: 'select',
      required: true,
      options: ['First time attendee', 'Attended 1-2 events', 'Attended 3-5 events', 'Regular attendee']
    },
    {
      name: 'interests',
      label: 'Areas of Interest',
      type: 'text',
      required: true,
      placeholder: 'e.g., Technology, Science, Arts, Social Issues'
    },
    {
      name: 'motivation',
      label: 'Why do you want to attend TEDxIIMT UNIVERSITY?',
      type: 'textarea',
      required: true,
      placeholder: 'Tell us what motivates you to attend and what you hope to gain from the experience'
    },
    {
      name: 'dietaryRestrictions',
      label: 'Dietary Restrictions/Preferences',
      type: 'text',
      required: false,
      placeholder: 'e.g., Vegetarian, Vegan, Allergies'
    },
    {
      name: 'accessibilityNeeds',
      label: 'Accessibility Requirements',
      type: 'text',
      required: false,
      placeholder: 'Any special accommodations needed'
    },
    {
      name: 'hearAboutUs',
      label: 'How did you hear about TEDxIIMT UNIVERSITY?',
      type: 'select',
      required: true,
      options: ['Social Media', 'Website', 'Friend/Colleague', 'University', 'Previous Event', 'Other']
    },
    {
      name: 'additionalComments',
      label: 'Additional Comments',
      type: 'textarea',
      required: false,
      placeholder: 'Any additional information or questions'
    }
  ];

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <main className="pt-20 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join <span className="text-red-500">TEDxIIMT UNIVERSITY</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Be part of an inspiring community of thinkers and changemakers
            </p>
          </div>

          <FormComponent
            formType="Attendee"
            title="Attendee Registration"
            description="Register to attend TEDxIIMT UNIVERSITY and be part of an unforgettable experience filled with inspiring talks, networking opportunities, and ideas worth spreading."
            fields={attendeeFields}
          />
        </div>
      </main>
    </div>
  );
};

export default AttendeeForm;