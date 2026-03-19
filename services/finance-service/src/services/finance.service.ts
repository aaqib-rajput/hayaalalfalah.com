import { DonationGoal as DonationGoalRecord, FinanceRecord as FinanceRecordRecord, Prisma, PrismaClient } from '../generated/client';
import { NotFoundError } from '@mosqueconnect/shared-utils';

const prisma = new PrismaClient();

function toIsoDate(value: Date | null | undefined) {
  return value ? value.toISOString().split('T')[0] : '';
}

function mapGoal(goal: DonationGoalRecord) {
  return {
    id: goal.id,
    mosqueId: goal.mosqueId,
    title: goal.title,
    description: goal.description || '',
    targetAmount: Number(goal.targetAmount),
    currentAmount: Number(goal.currentAmount),
    startDate: toIsoDate(goal.startDate),
    endDate: goal.endDate ? toIsoDate(goal.endDate) : '',
    isActive: goal.isActive,
  };
}

function normalizeRecordType(type: string) {
  return type.toLowerCase() === 'expense' ? 'expense' : 'donation';
}

function normalizeCategory(category?: string | null) {
  switch ((category || '').toLowerCase()) {
    case 'zakat':
    case 'sadaqah':
    case 'building_fund':
    case 'operational':
    case 'education':
    case 'utilities':
    case 'maintenance':
    case 'salaries':
    case 'events':
    case 'charity':
      return category!.toLowerCase();
    case 'building':
      return 'building_fund';
    case 'general':
    case 'supplies':
      return 'other';
    default:
      return 'other';
  }
}

function mapRecord(record: FinanceRecordRecord) {
  return {
    id: record.id,
    mosqueId: record.mosqueId,
    type: normalizeRecordType(record.type),
    category: normalizeCategory(record.category),
    amount: Number(record.amount),
    description: record.description || '',
    date: toIsoDate(record.date),
    donorName: undefined,
    isAnonymous: record.isAnonymous,
    receiptNumber: undefined,
    createdAt: record.createdAt.toISOString(),
  };
}

export class FinanceService {
  async getAllGoals() {
    const goals = await prisma.donationGoal.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return goals.map(mapGoal);
  }

  async getGoalsByMosqueId(mosqueId: string) {
    const goals = await prisma.donationGoal.findMany({
      where: { mosqueId },
      orderBy: { createdAt: 'desc' },
    });
    return goals.map(mapGoal);
  }

  async getGoalById(id: string) {
    const goal = await prisma.donationGoal.findUnique({
      where: { id },
    });
    if (!goal) throw new NotFoundError('DonationGoal', id);
    return mapGoal(goal);
  }

  async getAllRecords() {
    const records = await prisma.financeRecord.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return records.map(mapRecord);
  }

  async getRecordsByMosqueId(mosqueId: string) {
    const records = await prisma.financeRecord.findMany({
      where: { mosqueId },
      orderBy: { createdAt: 'desc' },
    });
    return records.map(mapRecord);
  }

  async getRecordById(id: string) {
    const record = await prisma.financeRecord.findUnique({
      where: { id },
    });
    if (!record) throw new NotFoundError('FinanceRecord', id);
    return mapRecord(record);
  }

  async createGoal(data: any) {
    const goal = await prisma.donationGoal.create({
      data: {
        mosqueId: data.mosqueId,
        title: data.title,
        description: data.description || null,
        targetAmount: new Prisma.Decimal(data.targetAmount || 0),
        currentAmount: new Prisma.Decimal(data.currentAmount || 0),
        startDate: new Date(data.startDate),
        endDate: data.endDate ? new Date(data.endDate) : null,
        isActive: data.isActive ?? true,
      },
    });

    return mapGoal(goal);
  }

  async createRecord(data: any) {
    const record = await prisma.financeRecord.create({
      data: {
        mosqueId: data.mosqueId,
        type: data.type === 'expense' ? 'EXPENSE' : 'DONATION',
        category: normalizeCategory(String(data.category || 'other')).toUpperCase(),
        amount: new Prisma.Decimal(data.amount || 0),
        description: data.description || null,
        date: data.date ? new Date(data.date) : new Date(),
        isAnonymous: Boolean(data.isAnonymous),
      },
    });

    return mapRecord(record);
  }
}

export const financeService = new FinanceService();
