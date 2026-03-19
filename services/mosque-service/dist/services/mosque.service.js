"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mosqueService = exports.MosqueService = void 0;
const client_1 = require("../generated/client");
const shared_utils_1 = require("@mosqueconnect/shared-utils");
const prisma = new client_1.PrismaClient();
const eventBus = new shared_utils_1.EventBus();
class MosqueService {
    async getAllMosques() {
        return await prisma.mosque.findMany({
            include: {
                imams: true,
                management: true,
            },
        });
    }
    async searchMosques(query) {
        return await prisma.mosque.findMany({
            where: {
                OR: [
                    { name: { search: query.split(' ').join(' & ') } },
                    { address: { search: query.split(' ').join(' & ') } },
                    { city: { search: query.split(' ').join(' & ') } },
                ],
            },
            include: {
                imams: true,
                management: true,
            },
        });
    }
    async getMosqueById(id) {
        const mosque = await prisma.mosque.findUnique({
            where: { id },
            include: {
                imams: true,
                management: true,
            },
        });
        if (!mosque)
            throw new shared_utils_1.NotFoundError('Mosque', id);
        return mosque;
    }
    async createMosque(data) {
        const mosque = await prisma.mosque.create({
            data,
            include: {
                imams: true,
                management: true,
            },
        });
        // Publish event
        await eventBus.publish('MOSQUE_CREATED', mosque, 'mosque-service');
        return mosque;
    }
    async getAllImams() {
        return await prisma.imam.findMany();
    }
    async getImamsByMosqueId(mosqueId) {
        return await prisma.imam.findMany({
            where: { mosqueId },
        });
    }
    async getImamById(id) {
        const imam = await prisma.imam.findUnique({
            where: { id },
        });
        if (!imam)
            throw new shared_utils_1.NotFoundError('Imam', id);
        return imam;
    }
    async getAllManagementMembers() {
        return await prisma.managementMember.findMany();
    }
    async getManagementByMosqueId(mosqueId) {
        return await prisma.managementMember.findMany({
            where: { mosqueId },
        });
    }
    async getManagementMemberById(id) {
        const member = await prisma.managementMember.findUnique({
            where: { id },
        });
        if (!member)
            throw new shared_utils_1.NotFoundError('ManagementMember', id);
        return member;
    }
}
exports.MosqueService = MosqueService;
exports.mosqueService = new MosqueService();
//# sourceMappingURL=mosque.service.js.map