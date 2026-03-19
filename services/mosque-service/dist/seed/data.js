"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.managementMembers = exports.imams = exports.mosques = void 0;
exports.mosques = [
    {
        id: '1',
        name: 'Central Mosque',
        address: '123 Main St',
        city: 'London',
        state: 'Greater London',
        country: 'UK',
        zipCode: 'NW1 1AA',
        latitude: 51.528308,
        longitude: -0.128299,
        phone: '+44 20 1234 5678',
        email: 'info@centralmosque.org',
        description: 'A historic mosque in the heart of London, serving the community for decades.',
        imageUrl: 'https://images.unsplash.com/photo-1590076215667-873d6f00918c?auto=format&fit=crop&q=80&w=800',
        facilities: ['Prayer Hall', 'Library', 'Community Center', 'School'],
        capacity: 2000,
        establishedYear: 1980,
        isVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        id: '2',
        name: 'East London Mosque',
        address: '82-92 Whitechapel Rd',
        city: 'London',
        state: 'Greater London',
        country: 'UK',
        zipCode: 'E1 1JQ',
        latitude: 51.5173,
        longitude: -0.0658,
        phone: '+44 20 7650 6300',
        email: 'info@elm.org.uk',
        description: 'The East London Mosque & London Muslim Centre is a large mosque with a long history of community engagement.',
        imageUrl: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=800',
        facilities: ['Prayer Hall', 'Seminar Room', 'Gym', 'Library'],
        capacity: 7000,
        establishedYear: 1910,
        isVerified: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];
exports.imams = [
    {
        id: 'i1',
        mosqueId: '1',
        name: 'Sheikh Ahmed Al-Fulan',
        title: 'Head Imam',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
        biography: 'Sheikh Ahmed has been serving the community for over 15 years. He specializes in Quranic Tafseer and Fiqh.',
        education: [
            { institution: 'Al-Azhar University', degree: 'BA in Islamic Law', field: 'Sharia', year: 2005, location: 'Cairo, Egypt' }
        ],
        specializations: ['Quranic Recitation', 'Islamic Jurisprudence'],
        languages: ['Arabic', 'English'],
        yearsOfExperience: 20,
        isActive: true,
        appointmentDate: '2010-01-01',
        createdAt: new Date().toISOString(),
        previousPositions: [],
        certifications: []
    }
];
exports.managementMembers = [
    {
        id: 'm1',
        mosqueId: '1',
        name: 'Brother Omar Khan',
        position: 'president',
        email: 'omar.khan@centralmosque.org',
        responsibilities: ['Strategic oversight', 'Community relations'],
        termStartDate: '2023-01-01',
        isElected: true,
        isActive: true,
        createdAt: new Date().toISOString()
    }
];
//# sourceMappingURL=data.js.map