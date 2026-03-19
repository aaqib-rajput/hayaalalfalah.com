// Mosque Domain Types

export interface Mosque {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  phone: string;
  email: string;
  website?: string;
  description: string;
  imageUrl: string;
  facilities: string[];
  capacity: number;
  memberCount?: number;
  establishedYear: number;
  isVerified: boolean;
  adminId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Imam {
  id: string;
  mosqueId: string;
  name: string;
  title: string;
  photoUrl?: string;
  biography: string;
  education: ImamEducation[];
  specializations: string[];
  languages: string[];
  yearsOfExperience: number;
  previousPositions: ImamPosition[];
  certifications: string[];
  contactEmail?: string;
  contactPhone?: string;
  officeHours?: string;
  socialMedia?: {
    youtube?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
  publications?: string[];
  characterTraits?: string[];
  teachingStyle?: string;
  communityFocus?: string[];
  personalMessage?: string;
  availableServices?: string[];
  weeklySchedule?: ImamWeeklySchedule[];
  isActive: boolean;
  appointmentDate: string;
  createdAt: string;
}

export interface ImamWeeklySchedule {
  day: string;
  activities: string[];
}

export interface ImamEducation {
  institution: string;
  degree: string;
  field: string;
  year: number;
  location: string;
}

export interface ImamPosition {
  mosqueName: string;
  position: string;
  location: string;
  startYear: number;
  endYear?: number;
}

export interface ManagementMember {
  id: string;
  mosqueId: string;
  name: string;
  position: ManagementPosition;
  department?: string;
  photoUrl?: string;
  biography?: string;
  email: string;
  phone?: string;
  responsibilities: string[];
  termStartDate: string;
  termEndDate?: string;
  isElected: boolean;
  isActive: boolean;
  createdAt: string;
  profession?: string;
  education?: MemberEducation[];
  skills?: string[];
  achievements?: string[];
  previousRoles?: MemberPreviousRole[];
  availability?: string;
  officeHours?: string;
  languages?: string[];
  yearsOfService?: number;
  personalStatement?: string;
  committees?: string[];
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface MemberEducation {
  degree: string;
  institution: string;
  field?: string;
  year?: number;
}

export interface MemberPreviousRole {
  position: string;
  organization: string;
  years: string;
}

export type ManagementPosition =
  | 'president'
  | 'vice_president'
  | 'secretary'
  | 'treasurer'
  | 'trustee'
  | 'board_member'
  | 'committee_head'
  | 'volunteer_coordinator'
  | 'education_director'
  | 'youth_director'
  | 'women_coordinator'
  | 'facilities_manager'
  | 'security_head'
  | 'other';
