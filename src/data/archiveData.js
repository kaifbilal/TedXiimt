import { FACULTY_ADVISOR_2025, TEAM_MEMBERS_2025, SPEAKERS_2025, GALLERY_ITEMS_2025, LEGACY_SPONSORS_2025 } from './TEDx2025';





const banner2025 = 'hero-bg.png';

export const ARCHIVE_EDITIONS = [
  {
    year: 2025,
    theme: 'Break the Flow',
    title: 'TEDxIIMT University 2025',
    tagline: 'Disrupting conventional thinking to unlock human potential.',
    date: '2025-11-11',
    venue: 'Seminar Hall 2nd Floor B Block, IIMT University, Meerut',
    city: 'Meerut, Uttar Pradesh',
    banner_url: banner2025,
    description: 'TEDxIIMT University 2025 brings together visionary thinkers, creators, and innovators under the theme "Break the Flow". We explore how challenging inertia, embracing creative disruption, and reimagining our relationship with technology can shape a resilient future.',
    attendee_capacity: 350,
    is_active: false,
    is_published: true,
    faculty_advisors: FACULTY_ADVISOR_2025.map((name) => ({ name })),
    speakers: SPEAKERS_2025,
    team_members: TEAM_MEMBERS_2025,
    gallery_items: GALLERY_ITEMS_2025.map(([image_url, caption, category], index) => ({
      id: `2025-gallery-${index + 1}`,
      image_url,
      caption,
      category,
    })),
    legacy_sponsors: LEGACY_SPONSORS_2025,
  },
].map((edition) => ({
  ...edition,
  speaker_count: edition.speakers.length,
  team_count: edition.team_members.length,
  gallery_count: edition.gallery_items.length,
}));

export const getArchiveEdition = (year) => (
  ARCHIVE_EDITIONS.find((edition) => edition.year === Number(year)) || ARCHIVE_EDITIONS[0]
);