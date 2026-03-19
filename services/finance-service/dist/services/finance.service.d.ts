export declare class FinanceService {
    getAllGoals(): Promise<{
        id: string;
        mosqueId: string;
        title: string;
        description: string | null;
        targetAmount: import("../generated/client/runtime/library").Decimal;
        currentAmount: import("../generated/client/runtime/library").Decimal;
        startDate: Date;
        endDate: Date | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getGoalsByMosqueId(mosqueId: string): Promise<{
        id: string;
        mosqueId: string;
        title: string;
        description: string | null;
        targetAmount: import("../generated/client/runtime/library").Decimal;
        currentAmount: import("../generated/client/runtime/library").Decimal;
        startDate: Date;
        endDate: Date | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getGoalById(id: string): Promise<{
        id: string;
        mosqueId: string;
        title: string;
        description: string | null;
        targetAmount: import("../generated/client/runtime/library").Decimal;
        currentAmount: import("../generated/client/runtime/library").Decimal;
        startDate: Date;
        endDate: Date | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllRecords(): Promise<{
        id: string;
        mosqueId: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        category: string;
        amount: import("../generated/client/runtime/library").Decimal;
        date: Date;
        isAnonymous: boolean;
    }[]>;
    getRecordsByMosqueId(mosqueId: string): Promise<{
        id: string;
        mosqueId: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        category: string;
        amount: import("../generated/client/runtime/library").Decimal;
        date: Date;
        isAnonymous: boolean;
    }[]>;
    getRecordById(id: string): Promise<{
        id: string;
        mosqueId: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        category: string;
        amount: import("../generated/client/runtime/library").Decimal;
        date: Date;
        isAnonymous: boolean;
    }>;
}
export declare const financeService: FinanceService;
//# sourceMappingURL=finance.service.d.ts.map