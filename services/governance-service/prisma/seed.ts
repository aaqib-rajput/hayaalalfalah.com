import { PrismaClient } from '../src/generated/client';
import { shuraMembers } from '../src/seed/data';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding governance-service...');

  for (const member of shuraMembers) {
    await prisma.shuraMember.upsert({
      where: { id: member.id },
      update: {},
      create: {
        id: member.id,
        name: member.name,
        title: member.title,
        biography: member.biography,
        email: member.email,
        phone: member.phone,
        isActive: member.isActive,
        appointmentDate: member.appointmentDate ? new Date(member.appointmentDate) : null,
      },
    });
  }

  console.log('Seed completed for governance-service.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
