export interface FinanceRecord {
    id: string;
    mosqueId: string;
    type: 'donation' | 'expense';
    category: FinanceCategory;
    amount: number;
    description: string;
    date: string;
    donorName?: string;
    isAnonymous: boolean;
    receiptNumber?: string;
    createdAt: string;
}
export type FinanceCategory = 'zakat' | 'sadaqah' | 'building_fund' | 'operational' | 'education' | 'utilities' | 'maintenance' | 'salaries' | 'events' | 'charity' | 'other';
export interface DonationGoal {
    id: string;
    mosqueId: string;
    title: string;
    description: string;
    targetAmount: number;
    currentAmount: number;
    startDate: string;
    endDate: string;
    isActive: boolean;
    createdAt?: string;
}
//# sourceMappingURL=finance.types.d.ts.map