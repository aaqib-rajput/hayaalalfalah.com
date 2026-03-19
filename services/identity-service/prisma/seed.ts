import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding identity-service...');

  await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      id: '1',
      email: 'user@example.com',
      password: 'hashed_password_here', // In Phase 3 we'll use actual hash
      name: 'Mock User',
      role: 'MEMBER',
    },
  });

  console.log('Seed completed for identity-service.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
