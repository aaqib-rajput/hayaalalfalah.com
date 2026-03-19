import { Event as EventRecord, Prisma, PrismaClient, PrayerTime as PrayerTimeRecord } from '../generated/client';
import { NotFoundError, ValidationError } from '@mosqueconnect/shared-utils';

const prisma = new PrismaClient();

function toIsoDate(value: Date | null | undefined) {
  return value ? value.toISOString().split('T')[0] : '';
}

function toTime(value: Date | null | undefined) {
  if (!value) {
    return '00:00';
  }

  return value.toISOString().slice(11, 16);
}

function normalizeCategory(category?: string | null) {
  switch (category) {
    case 'jummah':
    case 'lecture':
    case 'class':
    case 'quran_study':
    case 'youth_program':
    case 'sisters_program':
    case 'community_event':
    case 'fundraiser':
    case 'iftar':
    case 'eid':
      return category;
    default:
      return 'other';
  }
}

function mapPrayerTimes(record: PrayerTimeRecord | null) {
  if (!record) {
    return null;
  }

  const iqama = (record.iqama as Record<string, string> | null) || {};

  return {
    id: record.id,
    mosqueId: record.mosqueId,
    date: toIsoDate(record.date),
    fajr: record.fajr,
    fajrIqama: iqama.fajr || record.fajr,
    sunrise: record.sunrise,
    dhuhr: record.dhuhr,
    dhuhrIqama: iqama.dhuhr || record.dhuhr,
    asr: record.asr,
    asrIqama: iqama.asr || record.asr,
    maghrib: record.maghrib,
    maghribIqama: iqama.maghrib || record.maghrib,
    isha: record.isha,
    ishaIqama: iqama.isha || record.isha,
    jummah: iqama.jummah,
    jummahIqama: iqama.jummahIqama,
    isAutoCalculated: false,
  };
}

function mapEvent(record: EventRecord) {
  const endDate = record.endDate || record.startDate;
  const price = record.price ? Number(record.price) : 0;

  return {
    id: record.id,
    mosqueId: record.mosqueId,
    title: record.title,
    description: record.description || '',
    category: normalizeCategory(record.category),
    startDate: toIsoDate(record.startDate),
    endDate: toIsoDate(endDate),
    startTime: toTime(record.startDate),
    endTime: toTime(endDate),
    location: record.location || 'Main Hall',
    locationType: 'onsite' as const,
    speaker: record.organizer || undefined,
    isRecurring: false,
    maxAttendees: record.capacity || undefined,
    attendeeCount: 0,
    imageUrl: record.coverImageUrl || undefined,
    isActive: true,
    isFree: price === 0,
    price: price > 0 ? price : undefined,
    registrationRequired: record.isRegistrationRequired,
    createdAt: record.createdAt.toISOString(),
  };
}

function toDateTime(date: string, time?: string) {
  return new Date(`${date}T${time || '00:00'}:00`);
}

export class PrayerService {
  async getPrayerTimes(mosqueId: string, date: string) {
    if (!mosqueId) {
      throw new ValidationError('mosqueId is required');
    }

    const prayerTimes = await prisma.prayerTime.findFirst({
      where: {
        mosqueId,
        date: new Date(date),
      },
    });
    return mapPrayerTimes(prayerTimes);
  }

  async getAllEvents() {
    const events = await prisma.event.findMany({
      orderBy: { startDate: 'asc' },
    });
    return events.map(mapEvent);
  }

  async getEventsByMosqueId(mosqueId: string) {
    const events = await prisma.event.findMany({
      where: { mosqueId },
      orderBy: { startDate: 'asc' },
    });
    return events.map(mapEvent);
  }

  async getEventById(id: string) {
    const event = await prisma.event.findUnique({
      where: { id },
    });
    if (!event) throw new NotFoundError('Event', id);
    return mapEvent(event);
  }

  async createEvent(data: any) {
    const event = await prisma.event.create({
      data: {
        mosqueId: data.mosqueId,
        title: data.title,
        description: data.description || null,
        startDate: toDateTime(data.startDate, data.startTime),
        endDate: data.endDate || data.endTime ? toDateTime(data.endDate || data.startDate, data.endTime || data.startTime) : null,
        location: data.location || null,
        category: data.category || 'other',
        coverImageUrl: data.imageUrl || null,
        organizer: data.speaker || null,
        isRegistrationRequired: Boolean(data.registrationRequired),
        capacity: data.maxAttendees || null,
        price: new Prisma.Decimal(data.price || 0),
      },
    });

    return mapEvent(event);
  }

  async updateEvent(id: string, data: any) {
    await this.getEventById(id);

    const event = await prisma.event.update({
      where: { id },
      data: {
        mosqueId: data.mosqueId,
        title: data.title,
        description: data.description,
        startDate: data.startDate ? toDateTime(data.startDate, data.startTime) : undefined,
        endDate: data.endDate || data.endTime
          ? toDateTime(data.endDate || data.startDate, data.endTime || data.startTime)
          : undefined,
        location: data.location,
        category: data.category,
        coverImageUrl: data.imageUrl,
        organizer: data.speaker,
        isRegistrationRequired: data.registrationRequired,
        capacity: data.maxAttendees,
        price: data.price === undefined ? undefined : new Prisma.Decimal(data.price || 0),
      },
    });

    return mapEvent(event);
  }

  async deleteEvent(id: string) {
    await this.getEventById(id);
    await prisma.event.delete({
      where: { id },
    });
  }
}

export const prayerService = new PrayerService();
