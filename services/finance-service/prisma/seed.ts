import { PrismaClient } from '../src/generated/client';
import { donationGoals, financeRecords } from '../src/seed/data';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding finance-service...');

  for (const goal of donationGoals) {
    await prisma.donationGoal.upsert({
      where: { id: goal.id },
      update: {},
      create: {
        id: goal.id,
        mosqueId: goal.mosqueId,
        title: goal.title,
        description: goal.description,
        targetAmount: goal.targetAmount,
        currentAmount: goal.currentAmount,
        startDate: new Date(goal.startDate),
        endDate: goal.endDate ? new Date(goal.endDate) : null,
        isActive: goal.isActive,
      },
    });
  }

  for (const record of financeRecords) {
    await prisma.financeRecord.upsert({
      where: { id: record.id },
      update: {},
      create: {
        id: record.id,
        mosqueId: record.mosqueId,
        type: record.type,
        category: record.category,
        amount: record.amount,
        description: record.description,
        date: new Date(record.date),
        isAnonymous: record.isAnonymous,
      },
    });
  }

  console.log('Seed completed for finance-service.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
