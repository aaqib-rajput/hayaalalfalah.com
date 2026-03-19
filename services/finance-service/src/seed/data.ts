import { DonationGoal, FinanceRecord } from '@mosqueconnect/shared-types';

export const donationGoals: DonationGoal[] = [
  {
    id: 'dg1',
    mosqueId: '1',
    title: 'Ramadan Food Drive',
    description: 'Help us provide Iftar and Suhoor meals to those in need this Ramadan.',
    targetAmount: 10000,
    currentAmount: 7500,
    startDate: '2026-03-01',
    endDate: '2026-03-31',
    isActive: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'dg2',
    mosqueId: '1',
    title: 'Masque Renovation Fund',
    description: 'Raising funds for the maintenance and expansion of our prayer halls.',
    targetAmount: 50000,
    currentAmount: 12000,
    startDate: '2026-01-01',
    endDate: '2026-12-31',
    isActive: true,
    createdAt: new Date().toISOString()
  }
];

export const financeRecords: FinanceRecord[] = [
  {
    id: 'fr1',
    mosqueId: '1',
    type: 'donation',
    category: 'sadaqah',
    amount: 100,
    description: 'Anonymous donation',
    date: new Date().toISOString(),
    isAnonymous: true,
    createdAt: new Date().toISOString()
  },
  {
    id: 'fr2',
    mosqueId: '1',
    type: 'expense',
    category: 'utilities',
    amount: 500,
    description: 'Electricity bill for February',
    date: new Date().toISOString(),
    isAnonymous: false,
    createdAt: new Date().toISOString()
  }
];
