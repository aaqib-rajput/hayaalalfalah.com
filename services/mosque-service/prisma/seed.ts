import { PrismaClient } from '../src/generated/client';
import { mosques, imams, managementMembers } from '../src/seed/data';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding mosque-service...');

  for (const mosque of mosques) {
    await prisma.mosque.upsert({
      where: { id: mosque.id },
      update: {},
      create: {
        id: mosque.id,
        name: mosque.name,
        address: mosque.address,
        city: mosque.city,
        postcode: mosque.zipCode || '', // Map zipCode to postcode
        phone: mosque.phone,
        email: mosque.email,
        website: mosque.website || '',
        capacity: mosque.capacity,
        facilities: mosque.facilities,
      },
    });
  }

  for (const imam of imams) {
    await prisma.imam.upsert({
      where: { id: imam.id },
      update: {},
      create: {
        id: imam.id,
        name: imam.name,
        title: imam.title,
        biography: imam.biography,
        email: imam.email || '', 
        phone: imam.phone || '',
        mosqueId: imam.mosqueId,
      },
    });
  }

  for (const member of managementMembers) {
    await prisma.managementMember.upsert({
      where: { id: member.id },
      update: {},
      create: {
        id: member.id,
        name: member.name,
        role: member.position, // Map position to role
        email: member.email,
        phone: member.phone || '',
        mosqueId: member.mosqueId,
      },
    });
  }

  console.log('Seed completed for mosque-service.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
