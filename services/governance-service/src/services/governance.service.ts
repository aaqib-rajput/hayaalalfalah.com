import { PrismaClient } from '../generated/client';
import { NotFoundError } from '@mosqueconnect/shared-utils';

const prisma = new PrismaClient();

export class GovernanceService {
  async getAllShuraMembers() {
    return await prisma.shuraMember.findMany({
      where: { isActive: true },
    });
  }

  async getShuraMemberById(id: string) {
    const member = await prisma.shuraMember.findUnique({
      where: { id },
    });
    if (!member) throw new NotFoundError('ShuraMember', id);
    return member;
  }

  async getAllVisits() {
    return await prisma.mosqueVisit.findMany({
      orderBy: { visitDate: 'desc' },
    });
  }

  async getVisitsByMosqueId(mosqueId: string) {
    return await prisma.mosqueVisit.findMany({
      where: { mosqueId },
      orderBy: { visitDate: 'desc' },
    });
  }
}

export const governanceService = new GovernanceService();
