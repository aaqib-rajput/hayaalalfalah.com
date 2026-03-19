import { Announcement as AnnouncementRecord, PrismaClient } from '../generated/client';
import { NotFoundError } from '@mosqueconnect/shared-utils';

const prisma = new PrismaClient();

function toIsoDate(value: Date | null | undefined) {
  return value ? value.toISOString().split('T')[0] : undefined;
}

function normalizePriority(priority?: string) {
  switch (priority) {
    case 'low':
    case 'medium':
    case 'high':
      return priority;
    case 'urgent':
      return 'high';
    case 'normal':
      return 'medium';
    default:
      return 'medium';
  }
}

function mapAnnouncement(record: AnnouncementRecord) {
  return {
    id: record.id,
    mosqueId: record.mosqueId,
    title: record.title,
    content: record.content,
    category: record.category || 'general',
    isPinned: false,
    publishDate: toIsoDate(record.createdAt) || '',
    expiryDate: toIsoDate(record.expiryDate),
    authorName: record.authorName || 'MosqueConnect',
    priority: normalizePriority(record.priority),
    isActive: true,
    createdAt: record.createdAt.toISOString(),
  };
}

export class CommunityService {
  async getAllAnnouncements() {
    const records = await prisma.announcement.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return records.map(mapAnnouncement);
  }

  async getAnnouncementsByMosqueId(mosqueId: string) {
    const records = await prisma.announcement.findMany({
      where: { mosqueId },
      orderBy: { createdAt: 'desc' },
    });
    return records.map(mapAnnouncement);
  }

  async getAnnouncementById(id: string) {
    const record = await prisma.announcement.findUnique({
      where: { id },
    });
    if (!record) throw new NotFoundError('Announcement', id);
    return mapAnnouncement(record);
  }

  async createAnnouncement(data: any) {
    const record = await prisma.announcement.create({
      data: {
        mosqueId: data.mosqueId,
        title: data.title,
        content: data.content,
        category: data.category || 'general',
        priority: data.priority || 'medium',
        expiryDate: data.expiryDate ? new Date(data.expiryDate) : null,
        authorId: data.authorId || null,
        authorName: data.authorName || 'MosqueConnect',
        createdAt: data.publishDate ? new Date(data.publishDate) : undefined,
      },
    });

    return mapAnnouncement(record);
  }

  async updateAnnouncement(id: string, data: any) {
    await this.getAnnouncementById(id);

    const record = await prisma.announcement.update({
      where: { id },
      data: {
        mosqueId: data.mosqueId,
        title: data.title,
        content: data.content,
        category: data.category,
        priority: data.priority,
        expiryDate: data.expiryDate ? new Date(data.expiryDate) : data.expiryDate === null ? null : undefined,
        authorId: data.authorId,
        authorName: data.authorName,
        createdAt: data.publishDate ? new Date(data.publishDate) : undefined,
      },
    });

    return mapAnnouncement(record);
  }

  async deleteAnnouncement(id: string) {
    await this.getAnnouncementById(id);
    await prisma.announcement.delete({
      where: { id },
    });
  }
}

export const communityService = new CommunityService();
