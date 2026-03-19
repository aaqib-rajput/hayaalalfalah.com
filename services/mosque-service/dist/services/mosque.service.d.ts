export declare class MosqueService {
    getAllMosques(): Promise<({
        imams: {
            id: string;
            name: string;
            phone: string | null;
            email: string | null;
            createdAt: Date;
            updatedAt: Date;
            title: string | null;
            biography: string | null;
            mosqueId: string;
        }[];
        management: {
            id: string;
            name: string;
            phone: string | null;
            email: string | null;
            createdAt: Date;
            updatedAt: Date;
            mosqueId: string;
            role: string;
        }[];
    } & {
        id: string;
        name: string;
        address: string;
        city: string;
        postcode: string;
        phone: string | null;
        email: string | null;
        website: string | null;
        capacity: number | null;
        facilities: string[];
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    searchMosques(query: string): Promise<({
        imams: {
            id: string;
            name: string;
            phone: string | null;
            email: string | null;
            createdAt: Date;
            updatedAt: Date;
            title: string | null;
            biography: string | null;
            mosqueId: string;
        }[];
        management: {
            id: string;
            name: string;
            phone: string | null;
            email: string | null;
            createdAt: Date;
            updatedAt: Date;
            mosqueId: string;
            role: string;
        }[];
    } & {
        id: string;
        name: string;
        address: string;
        city: string;
        postcode: string;
        phone: string | null;
        email: string | null;
        website: string | null;
        capacity: number | null;
        facilities: string[];
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    getMosqueById(id: string): Promise<{
        imams: {
            id: string;
            name: string;
            phone: string | null;
            email: string | null;
            createdAt: Date;
            updatedAt: Date;
            title: string | null;
            biography: string | null;
            mosqueId: string;
        }[];
        management: {
            id: string;
            name: string;
            phone: string | null;
            email: string | null;
            createdAt: Date;
            updatedAt: Date;
            mosqueId: string;
            role: string;
        }[];
    } & {
        id: string;
        name: string;
        address: string;
        city: string;
        postcode: string;
        phone: string | null;
        email: string | null;
        website: string | null;
        capacity: number | null;
        facilities: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    createMosque(data: any): Promise<{
        imams: {
            id: string;
            name: string;
            phone: string | null;
            email: string | null;
            createdAt: Date;
            updatedAt: Date;
            title: string | null;
            biography: string | null;
            mosqueId: string;
        }[];
        management: {
            id: string;
            name: string;
            phone: string | null;
            email: string | null;
            createdAt: Date;
            updatedAt: Date;
            mosqueId: string;
            role: string;
        }[];
    } & {
        id: string;
        name: string;
        address: string;
        city: string;
        postcode: string;
        phone: string | null;
        email: string | null;
        website: string | null;
        capacity: number | null;
        facilities: string[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    getAllImams(): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        title: string | null;
        biography: string | null;
        mosqueId: string;
    }[]>;
    getImamsByMosqueId(mosqueId: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        title: string | null;
        biography: string | null;
        mosqueId: string;
    }[]>;
    getImamById(id: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        title: string | null;
        biography: string | null;
        mosqueId: string;
    }>;
    getAllManagementMembers(): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        mosqueId: string;
        role: string;
    }[]>;
    getManagementByMosqueId(mosqueId: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        mosqueId: string;
        role: string;
    }[]>;
    getManagementMemberById(id: string): Promise<{
        id: string;
        name: string;
        phone: string | null;
        email: string | null;
        createdAt: Date;
        updatedAt: Date;
        mosqueId: string;
        role: string;
    }>;
}
export declare const mosqueService: MosqueService;
//# sourceMappingURL=mosque.service.d.ts.map