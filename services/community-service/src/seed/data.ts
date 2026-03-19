import { Announcement } from '@mosqueconnect/shared-types';

export const announcements: Announcement[] = [
  {
    id: 'a1',
    mosqueId: '1',
    title: 'Ramadan 2026 Preparation',
    content: 'We are pleased to announce that Taraweeh prayers will be held starting this Friday. Please join us for the moon sighting.',
    category: 'prayer',
    isPinned: true,
    publishDate: new Date().toISOString(),
    authorName: 'Sheikh Ahmed',
    priority: 'high',
    isActive: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'a2',
    mosqueId: '1',
    title: 'New Youth Program Launched',
    content: 'Our new youth program focuses on leadership and community service. Registration is now open.',
    category: 'community',
    isPinned: false,
    publishDate: new Date().toISOString(),
    authorName: 'Brother Omar',
    priority: 'medium',
    isActive: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'a3',
    mosqueId: '2',
    title: 'Urgent: Maintenance Work',
    content: 'The main prayer hall will be closed for maintenance tomorrow from 10 AM to 2 PM.',
    category: 'urgent',
    isPinned: true,
    publishDate: new Date().toISOString(),
    authorName: 'Management Office',
    priority: 'high',
    isActive: true,
    createdAt: new Date().toISOString()
  }
];
