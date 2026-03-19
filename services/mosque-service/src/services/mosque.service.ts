import { Imam as ImamRecord, ManagementMember as ManagementMemberRecord, Mosque as MosqueRecord, PrismaClient } from '../generated/client';
import { NotFoundError, EventBus } from '@mosqueconnect/shared-utils';

const prisma = new PrismaClient();
const eventBus = new EventBus();

function toIsoDate(value: Date | null | undefined) {
  return value ? value.toISOString().split('T')[0] : '';
}

function normalizeManagementPosition(role?: string) {
  switch (role) {
    case 'president':
    case 'vice_president':
    case 'secretary':
    case 'treasurer':
    case 'trustee':
    case 'board_member':
    case 'committee_head':
    case 'volunteer_coordinator':
    case 'education_director':
    case 'youth_director':
    case 'women_coordinator':
    case 'facilities_manager':
    case 'security_head':
      return role;
    default:
      return 'other';
  }
}

function mapImam(imam: ImamRecord) {
  return {
    id: imam.id,
    mosqueId: imam.mosqueId,
    name: imam.name,
    title: imam.title || 'Imam',
    biography: imam.biography || '',
    education: [],
    specializations: [],
    languages: [],
    yearsOfExperience: 0,
    previousPositions: [],
    certifications: [],
    contactEmail: imam.email || undefined,
    contactPhone: imam.phone || undefined,
    officeHours: undefined,
    weeklySchedule: [],
    isActive: true,
    appointmentDate: toIsoDate(imam.createdAt),
    createdAt: imam.createdAt.toISOString(),
    photoUrl: undefined,
    characterTraits: undefined,
    teachingStyle: undefined,
    communityFocus: undefined,
    personalMessage: undefined,
    availableServices: undefined,
  };
}

function mapManagementMember(member: ManagementMemberRecord) {
  return {
    id: member.id,
    mosqueId: member.mosqueId,
    name: member.name,
    position: normalizeManagementPosition(member.role),
    department: undefined,
    photoUrl: undefined,
    biography: undefined,
    email: member.email || '',
    phone: member.phone || undefined,
    responsibilities: [],
    termStartDate: toIsoDate(member.createdAt),
    termEndDate: undefined,
    isElected: false,
    isActive: true,
    createdAt: member.createdAt.toISOString(),
    profession: undefined,
    education: undefined,
    skills: undefined,
    achievements: undefined,
    previousRoles: undefined,
    availability: undefined,
    officeHours: undefined,
    languages: undefined,
    yearsOfService: undefined,
    personalStatement: undefined,
    committees: undefined,
    socialMedia: undefined,
  };
}

function mapMosque(
  mosque: MosqueRecord & {
    imams?: ImamRecord[];
    management?: ManagementMemberRecord[];
  }
) {
  return {
    id: mosque.id,
    name: mosque.name,
    address: mosque.address,
    city: mosque.city,
    state: '',
    country: '',
    zipCode: mosque.postcode || '',
    latitude: 0,
    longitude: 0,
    phone: mosque.phone || '',
    email: mosque.email || '',
    website: mosque.website || undefined,
    description: '',
    imageUrl: '',
    facilities: mosque.facilities || [],
    capacity: mosque.capacity || 0,
    memberCount: 0,
    establishedYear: mosque.createdAt.getUTCFullYear(),
    isVerified: true,
    createdAt: mosque.createdAt.toISOString(),
    updatedAt: mosque.updatedAt.toISOString(),
    imams: mosque.imams?.map(mapImam),
    management: mosque.management?.map(mapManagementMember),
  };
}

export class MosqueService {
  async getAllMosques() {
    const mosques = await prisma.mosque.findMany({
      include: {
        imams: true,
        management: true,
      },
    });
    return mosques.map(mapMosque);
  }

  async searchMosques(query: string) {
    const where = query
      ? {
          OR: [
            { name: { contains: query, mode: 'insensitive' as const } },
            { address: { contains: query, mode: 'insensitive' as const } },
            { city: { contains: query, mode: 'insensitive' as const } },
          ],
        }
      : undefined;

    const mosques = await prisma.mosque.findMany({
      where: {
        ...where,
      },
      include: {
        imams: true,
        management: true,
      },
    });
    return mosques.map(mapMosque);
  }

  async getMosqueById(id: string) {
    const mosque = await prisma.mosque.findUnique({
      where: { id },
      include: {
        imams: true,
        management: true,
      },
    });
    if (!mosque) throw new NotFoundError('Mosque', id);
    return mapMosque(mosque);
  }

  async createMosque(data: any) {
    const mosque = await prisma.mosque.create({
      data: {
        name: data.name,
        address: data.address,
        city: data.city,
        postcode: data.zipCode || data.postcode || '',
        phone: data.phone || null,
        email: data.email || null,
        website: data.website || null,
        capacity: data.capacity || null,
        facilities: data.facilities || [],
      },
      include: {
        imams: true,
        management: true,
      },
    });

    // Publish event
    await eventBus.publish('MOSQUE_CREATED', mosque, 'mosque-service');

    return mapMosque(mosque);
  }

  async updateMosque(id: string, data: any) {
    await this.getMosqueById(id);

    const mosque = await prisma.mosque.update({
      where: { id },
      data: {
        name: data.name,
        address: data.address,
        city: data.city,
        postcode: data.zipCode || data.postcode,
        phone: data.phone,
        email: data.email,
        website: data.website,
        capacity: data.capacity,
        facilities: data.facilities,
      },
      include: {
        imams: true,
        management: true,
      },
    });

    return mapMosque(mosque);
  }

  async deleteMosque(id: string) {
    await this.getMosqueById(id);
    await prisma.mosque.delete({
      where: { id },
    });
  }

  async getAllImams() {
    const imams = await prisma.imam.findMany();
    return imams.map(mapImam);
  }

  async getImamsByMosqueId(mosqueId: string) {
    const imams = await prisma.imam.findMany({
      where: { mosqueId },
    });
    return imams.map(mapImam);
  }

  async getImamById(id: string) {
    const imam = await prisma.imam.findUnique({
      where: { id },
    });
    if (!imam) throw new NotFoundError('Imam', id);
    return mapImam(imam);
  }

  async createImam(data: any) {
    const imam = await prisma.imam.create({
      data: {
        mosqueId: data.mosqueId,
        name: data.name,
        title: data.title || null,
        biography: data.biography || null,
        email: data.contactEmail || data.email || null,
        phone: data.contactPhone || data.phone || null,
      },
    });

    return mapImam(imam);
  }

  async updateImam(id: string, data: any) {
    await this.getImamById(id);

    const imam = await prisma.imam.update({
      where: { id },
      data: {
        mosqueId: data.mosqueId,
        name: data.name,
        title: data.title,
        biography: data.biography,
        email: data.contactEmail || data.email,
        phone: data.contactPhone || data.phone,
      },
    });

    return mapImam(imam);
  }

  async deleteImam(id: string) {
    await this.getImamById(id);
    await prisma.imam.delete({
      where: { id },
    });
  }

  async getAllManagementMembers() {
    const members = await prisma.managementMember.findMany();
    return members.map(mapManagementMember);
  }

  async getManagementByMosqueId(mosqueId: string) {
    const members = await prisma.managementMember.findMany({
      where: { mosqueId },
    });
    return members.map(mapManagementMember);
  }

  async getManagementMemberById(id: string) {
    const member = await prisma.managementMember.findUnique({
      where: { id },
    });
    if (!member) throw new NotFoundError('ManagementMember', id);
    return mapManagementMember(member);
  }
}

export const mosqueService = new MosqueService();
