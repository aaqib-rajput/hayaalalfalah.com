import { Book as BookRecord, PrismaClient } from '../generated/client';
import { NotFoundError } from '@mosqueconnect/shared-utils';

const prisma = new PrismaClient();

function normalizeCategory(category?: string | null) {
  switch (category) {
    case 'quran':
    case 'hadith':
    case 'fiqh':
    case 'tafseer':
    case 'seerah':
    case 'arabic':
    case 'islamic_history':
    case 'spirituality':
    case 'children':
    case 'youth':
    case 'women':
    case 'comparative_religion':
    case 'general_islamic':
      return category;
    default:
      return 'other';
  }
}

function mapBook(book: BookRecord) {
  return {
    id: book.id,
    mosqueId: book.mosqueId,
    title: book.title,
    author: book.author || 'Unknown author',
    isbn: book.isbn || undefined,
    category: normalizeCategory(book.category),
    language: book.language || 'English',
    description: undefined,
    coverImageUrl: undefined,
    publisher: undefined,
    publishYear: undefined,
    totalCopies: book.totalCopies,
    availableCopies: book.availableCopies,
    location: book.location || 'Library Shelf',
    condition: 'good' as const,
    addedBy: 'system',
    addedByName: 'Mosque Library',
    status: 'approved' as const,
    approvedBy: undefined,
    approvedDate: undefined,
    rejectionReason: undefined,
    tags: [],
    isReferencOnly: false,
    createdAt: book.createdAt.toISOString(),
    updatedAt: book.updatedAt.toISOString(),
  };
}

export class LibraryService {
  async getAllBooks() {
    const books = await prisma.book.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return books.map(mapBook);
  }

  async getBooksByMosqueId(mosqueId: string) {
    const books = await prisma.book.findMany({
      where: { mosqueId },
      orderBy: { createdAt: 'desc' },
    });

    return books.map(mapBook);
  }

  async getBookById(id: string) {
    const book = await prisma.book.findUnique({
      where: { id },
    });

    if (!book) throw new NotFoundError('Book', id);

    return mapBook(book);
  }
}

export const libraryService = new LibraryService();
