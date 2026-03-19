import { PrismaClient } from '../src/generated/client';
import { books } from '../src/seed/data';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding library-service...');

  for (const book of books) {
    await prisma.book.upsert({
      where: { id: book.id },
      update: {},
      create: {
        id: book.id,
        mosqueId: book.mosqueId,
        title: book.title,
        author: book.author,
        isbn: book.isbn,
        category: book.category,
        language: book.language,
        availableCopies: book.availableCopies,
        totalCopies: book.totalCopies,
        location: book.location,
      },
    });
  }

  console.log('Seed completed for library-service.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
