import { MemberEducation, MemberPreviousRole, ImamEducation, ImamPosition } from './mosque.types';
export interface ShuraMember {
    id: string;
    name: string;
    title: ShuraTitle;
    photoUrl?: string;
    biography: string;
    email: string;
    phone: string;
    education: MemberEducation[];
    expertise: string[];
    languages: string[];
    yearsInShura: number;
    previousPositions: MemberPreviousRole[];
    responsibilities: string[];
    assignedRegions?: string[];
    certifications?: string[];
    personalStatement?: string;
    availability: string;
    officeHours?: string;
    socialMedia?: {
        linkedin?: string;
        twitter?: string;
    };
    appointmentDate: string;
    termEndDate?: string;
    isActive: boolean;
    createdAt: string;
}
export type ShuraTitle = 'chairman' | 'vice_chairman' | 'secretary_general' | 'treasurer' | 'religious_advisor' | 'education_head' | 'outreach_coordinator' | 'member';
export interface MosqueVisit {
    id: string;
    mosqueId: string;
    shuraMemberId: string;
    visitType: VisitType;
    scheduledDate: string;
    scheduledTime: string;
    actualDate?: string;
    duration?: number;
    status: VisitStatus;
    purpose: string;
    agenda: string[];
    attendees: string[];
    findings?: string;
    recommendations?: string[];
    followUpRequired: boolean;
    followUpDate?: string;
    followUpNotes?: string;
    rating?: MosqueVisitRating;
    createdAt: string;
    updatedAt: string;
}
export type VisitType = 'routine_inspection' | 'imam_meeting' | 'management_meeting' | 'special_assessment' | 'follow_up' | 'emergency' | 'inauguration' | 'lecture_delivery';
export type VisitStatus = 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'postponed';
export interface MosqueVisitRating {
    overallRating: number;
    categories: {
        cleanliness: number;
        prayerServices: number;
        educationPrograms: number;
        communityEngagement: number;
        financialTransparency: number;
        managementEfficiency: number;
        imamPerformance: number;
        youthPrograms: number;
        womenFacilities: number;
        safetyCompliance: number;
    };
    strengths: string[];
    areasForImprovement: string[];
    comments?: string;
}
export interface ShuraMeeting {
    id: string;
    title: string;
    meetingType: ShuraMeetingType;
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    isVirtual: boolean;
    meetingLink?: string;
    attendees: ShuraMeetingAttendee[];
    mosqueId?: string;
    imamId?: string;
    agenda: ShuraAgendaItem[];
    minutes?: string;
    decisions?: string[];
    actionItems?: ShuraActionItem[];
    status: MeetingStatus;
    createdBy: string;
    createdAt: string;
    updatedAt: string;
}
export type ShuraMeetingType = 'shura_council' | 'mosque_review' | 'imam_interview' | 'imam_evaluation' | 'dispute_resolution' | 'planning_session' | 'emergency' | 'training' | 'community_outreach';
export type MeetingStatus = 'draft' | 'scheduled' | 'in_progress' | 'completed' | 'cancelled';
export interface ShuraMeetingAttendee {
    id: string;
    name: string;
    role: string;
    isShuraMember: boolean;
    attendance?: 'present' | 'absent' | 'excused' | 'pending';
}
export interface ShuraAgendaItem {
    id: string;
    title: string;
    description?: string;
    presenter?: string;
    duration: number;
    priority: 'high' | 'medium' | 'low';
    status: 'pending' | 'discussed' | 'deferred';
    notes?: string;
}
export interface ShuraActionItem {
    id: string;
    description: string;
    assignedTo: string;
    dueDate: string;
    status: 'pending' | 'in_progress' | 'completed' | 'overdue';
    priority: 'high' | 'medium' | 'low';
}
export interface MosqueRegistration {
    id: string;
    mosqueName: string;
    address: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
    contactPerson: string;
    contactEmail: string;
    contactPhone: string;
    estimatedCapacity: number;
    establishedYear?: number;
    currentImamName?: string;
    facilities: string[];
    description?: string;
    submittedDate: string;
    status: RegistrationStatus;
    reviewedBy?: string;
    reviewDate?: string;
    reviewNotes?: string;
    assignedShuraMember?: string;
    visitScheduled?: string;
    documents?: RegistrationDocument[];
    createdAt: string;
}
export type RegistrationStatus = 'pending_review' | 'under_review' | 'visit_scheduled' | 'approved' | 'rejected' | 'on_hold' | 'more_info_needed';
export interface RegistrationDocument {
    id: string;
    name: string;
    type: 'registration_cert' | 'tax_exempt' | 'bylaws' | 'photos' | 'other';
    url: string;
    uploadedAt: string;
}
export interface MosqueAssessment {
    id: string;
    mosqueId: string;
    overallRating: number;
    totalVisits: number;
    lastVisitDate: string;
    status: MosqueComplianceStatus;
    categoryRatings: {
        cleanliness: number;
        prayerServices: number;
        educationPrograms: number;
        communityEngagement: number;
        financialTransparency: number;
        managementEfficiency: number;
        imamPerformance: number;
        youthPrograms: number;
        womenFacilities: number;
        safetyCompliance: number;
    };
    certificationLevel?: 'gold' | 'silver' | 'bronze' | 'basic';
    nextScheduledVisit?: string;
    notes?: string;
    updatedAt: string;
}
export type MosqueComplianceStatus = 'excellent' | 'good' | 'satisfactory' | 'needs_improvement' | 'under_review' | 'probation';
export interface ImamAppointment {
    id: string;
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string;
    photoUrl?: string;
    targetMosqueId: string;
    position: string;
    qualifications: ImamEducation[];
    experience: ImamPosition[];
    references: ImamReference[];
    interviewDate?: string;
    interviewNotes?: string;
    status: AppointmentStatus;
    reviewedBy: string[];
    decision?: 'approved' | 'rejected' | 'deferred';
    decisionDate?: string;
    decisionNotes?: string;
    appointmentDate?: string;
    createdAt: string;
}
export type AppointmentStatus = 'application_received' | 'under_review' | 'interview_scheduled' | 'interview_completed' | 'pending_decision' | 'approved' | 'rejected' | 'appointed';
export interface ImamReference {
    name: string;
    position: string;
    organization: string;
    phone: string;
    email: string;
    relationship: string;
}
//# sourceMappingURL=governance.types.d.ts.map