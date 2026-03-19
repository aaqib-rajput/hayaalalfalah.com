import { ShuraMember } from '@mosqueconnect/shared-types';

export const shuraMembers: ShuraMember[] = [
  {
    id: 's1',
    name: 'Dr. Faisal Hassan',
    title: 'chairman',
    biography: 'Dr. Faisal has been the chairman of the Shura Council for 5 years, overseeing community development.',
    email: 'faisal.hassan@shura.org',
    phone: '+44 20 8888 9999',
    education: [
      { institution: 'Oxford University', degree: 'PhD in Sociology', year: 2000 }
    ],
    expertise: ['Community Leadership', 'Sociology'],
    languages: ['Arabic', 'English'],
    yearsInShura: 10,
    previousPositions: [],
    responsibilities: ['Strategic Planning', 'Council Oversight'],
    availability: 'Mon-Fri, 9AM-5PM',
    appointmentDate: '2019-01-01',
    isActive: true,
    createdAt: new Date().toISOString()
  }
];
