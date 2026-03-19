import { PrismaClient } from '../src/generated/client';
import { events } from '../src/seed/data';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding prayer-event-service...');

  // Seed some sample prayer times for mosque 1 for today
  const today = new Date();
  await prisma.prayerTime.upsert({
    where: {
      mosqueId_date: {
        mosqueId: '1',
        date: today,
      },
    },
    update: {},
    create: {
      mosqueId: '1',
      date: today,
      fajr: '05:30',
      sunrise: '06:45',
      dhuhr: '12:30',
      asr: '15:45',
      maghrib: '18:15',
      isha: '19:45',
    },
  });

  for (const event of events) {
    await prisma.event.upsert({
      where: { id: event.id },
      update: {},
      create: {
        id: event.id,
        mosqueId: event.mosqueId,
        title: event.title,
        description: event.description || '',
        startDate: new Date(event.startDate),
        endDate: event.endDate ? new Date(event.endDate) : null,
        location: event.location || '',
        category: event.category || '',
        coverImageUrl: event.imageUrl || '',
        organizer: event.organizer || '',
      },
    });
  }

  console.log('Seed completed for prayer-event-service.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
