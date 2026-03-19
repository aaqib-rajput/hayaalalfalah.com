"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.financeService = exports.FinanceService = void 0;
const client_1 = require("../generated/client");
const shared_utils_1 = require("@mosqueconnect/shared-utils");
const prisma = new client_1.PrismaClient();
class FinanceService {
    async getAllGoals() {
        return await prisma.donationGoal.findMany();
    }
    async getGoalsByMosqueId(mosqueId) {
        return await prisma.donationGoal.findMany({
            where: { mosqueId },
        });
    }
    async getGoalById(id) {
        const goal = await prisma.donationGoal.findUnique({
            where: { id },
        });
        if (!goal)
            throw new shared_utils_1.NotFoundError('DonationGoal', id);
        return goal;
    }
    async getAllRecords() {
        return await prisma.financeRecord.findMany();
    }
    async getRecordsByMosqueId(mosqueId) {
        return await prisma.financeRecord.findMany({
            where: { mosqueId },
        });
    }
    async getRecordById(id) {
        const record = await prisma.financeRecord.findUnique({
            where: { id },
        });
        if (!record)
            throw new shared_utils_1.NotFoundError('FinanceRecord', id);
        return record;
    }
}
exports.FinanceService = FinanceService;
exports.financeService = new FinanceService();
//# sourceMappingURL=finance.service.js.map