import { PrismaClient } from '../src/generated/client';
import { announcements } from '../src/seed/data';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding community-service...');

  for (const announcement of announcements) {
    await prisma.announcement.upsert({
      where: { id: announcement.id },
      update: {},
      create: {
        id: announcement.id,
        mosqueId: announcement.mosqueId,
        title: announcement.title,
        content: announcement.content,
        category: announcement.category,
        priority: announcement.priority,
        expiryDate: announcement.expiryDate ? new Date(announcement.expiryDate) : null,
        authorId: announcement.authorId,
        authorName: announcement.authorName,
      },
    });
  }

  console.log('Seed completed for community-service.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
