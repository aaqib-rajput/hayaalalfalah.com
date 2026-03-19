import { LibraryBook } from '@mosqueconnect/shared-types';

export const books: LibraryBook[] = [
  {
    id: 'b1',
    mosqueId: '1',
    title: 'The Sealed Nectar (Ar-Raheeq Al-Makhtum)',
    author: 'Safi-ur-Rahman al-Mubarakpuri',
    isbn: '978-6035001106',
    category: 'seerah',
    language: 'English',
    description: 'A complete authoritative book on the life of Prophet Muhammad (PBUH).',
    coverImageUrl: 'https://images.unsplash.com/photo-1544890225-2f3faec4cd60?auto=format&fit=crop&q=80&w=400',
    totalCopies: 5,
    availableCopies: 3,
    location: 'Shelf A1',
    condition: 'excellent',
    addedBy: 'admin',
    addedByName: 'Admin',
    status: 'approved',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: 'b2',
    mosqueId: '1',
    title: 'Riyad as-Salihin',
    author: 'Imam an-Nawawi',
    isbn: '978-2987485926',
    category: 'hadith',
    language: 'Arabic/English',
    description: 'The Meadows of the Righteous, a compilation of verses from the Quran supplemented by hadith narratives.',
    coverImageUrl: 'https://images.unsplash.com/photo-1585779034823-7e9ac8faec70?auto=format&fit=crop&q=80&w=400',
    totalCopies: 3,
    availableCopies: 3,
    location: 'Shelf B2',
    condition: 'good',
    addedBy: 'admin',
    addedByName: 'Admin',
    status: 'approved',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];
