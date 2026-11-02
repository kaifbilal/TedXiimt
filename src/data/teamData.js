import { FACULTY_ADVISOR_2025 } from './TEDx2025';

export const FACULTY_ADVISORS = FACULTY_ADVISOR_2025.map((name) => ({ name }));

export const TEAM_DOMAIN_TABS = [
  { id: 'all', label: 'All Crew' },
  { id: 'organizer', label: 'Leadership' },
  { id: 'curation', label: 'Curation' },
  { id: 'logistics', label: 'Logistics & Finance' },
  { id: 'technical', label: 'Tech & Stage Ops' },
  { id: 'design', label: 'Design & Creative' },
  { id: 'marketing', label: 'Marketing' },
];

export const TEAM_TIER_LABELS = {
  organizer: 'Core Leadership',
  curation: 'Curation & Speakers',
  logistics: 'Logistics & Finance',
  technical: 'Production & Technology',
  design: 'Design & Creative',
  marketing: 'Marketing & Outreach',
};

const TEAM_MEMBER_RESPONSIBILITIES = {
  'team-1': ['Overall event strategy', 'Stakeholder & partner relations', 'Program direction & quality control'],
  'team-2': ['Logistics planning & execution', 'Cross-team coordination', 'Vendor & partner management'],
  'team-3': ['Creative direction', 'Brand consistency & visual identity', 'Content planning & production'],
  'team-4': ['Budget management & financial planning', 'Logistics coordination & scheduling', 'Resource allocation & vendor negotiations'],
  'team-5': ['Marketing strategy & campaigns', 'Public relations & media outreach', 'Audience growth & engagement'],
  'team-6': ['Venue & vendor management', 'Technical logistics & equipment', 'Event-day operations and contingency planning'],
  'team-7': ['Speaker discovery & selection', 'Speaker coaching & feedback', 'Program sequencing & content alignment'],
  'team-8': ['Content strategy & editorial', 'Community outreach & partnerships', 'Social content and campaign execution'],
  'team-10': ['Sponsor acquisition & retention', 'Proposal development & negotiation', 'Partnership program management'],
  'team-11': ['Event design support', 'Guest coordination', 'Attendee experience enhancement'],
  'team-12': ['Concept ideation & visual direction', 'Event set and collateral design', 'Multimedia asset delivery'],
  'team-13': ['Audio-visual systems design', 'Live streaming & broadcast operations', 'Technical team coordination & testing'],
  'team-14': ['Visual design support', 'Event aesthetics assistance', 'Creative brainstorming'],
  'team-15': ['Video editing & post-production', 'Quality control & final delivery', 'Media asset organization & archival'],
  'team-16': ['Visual design & branding', 'Event experience design', 'Creative asset production'],
  'team-17': ['Graphic design & templates', 'Brand collateral & print assets', 'Digital asset creation & maintenance'],
  'team-18': ['Editing & storytelling', 'Motion graphics & titling', 'Delivery standards & encoding'],
  'team-19': ['Video editing & post-production', 'Highlight reel creation', 'Content optimization for social media'],
};

const TEAM_MEMBER_RECORDS = [
  {
    id: 'team-1',
    name: 'Mohd Kaif',
    role: 'Organizer & Lead',
    domain: 'organizer',
    photo_url: '/assets/kaif.jpeg',
    bio: 'Visionary leader coordinating overall strategy, university administration, and execution to deliver a world-class TEDx experience.',
    email: 'kaifbilalibrahim@gmail.com',
    linkedin: 'https://www.linkedin.com/in/mohdkaifbilal/',
  },
];

export const TEAM_MEMBERS = TEAM_MEMBER_RECORDS.map((member) => ({
  ...member,
  responsibilities: TEAM_MEMBER_RESPONSIBILITIES[member.id] || [],
  contact: {
    email: member.email || 'tedxiimtuniversity@gmail.com',
    linkedin: member.linkedin || 'https://linkedin.com',
  },
}));