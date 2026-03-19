export interface PrayerTime {
    id: string;
    mosqueId: string;
    date: string;
    fajr: string;
    fajrIqama: string;
    sunrise: string;
    dhuhr: string;
    dhuhrIqama: string;
    asr: string;
    asrIqama: string;
    maghrib: string;
    maghribIqama: string;
    isha: string;
    ishaIqama: string;
    jummah?: string;
    jummahIqama?: string;
    isAutoCalculated: boolean;
}
export interface Event {
    id: string;
    mosqueId: string;
    title: string;
    description: string;
    category: EventCategory;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    location: string;
    locationType: 'onsite' | 'offsite' | 'online';
    speaker?: string;
    isRecurring: boolean;
    recurrencePattern?: RecurrencePattern;
    maxAttendees?: number;
    attendeeCount: number;
    imageUrl?: string;
    isActive: boolean;
    isFree?: boolean;
    price?: number;
    registrationRequired?: boolean;
    createdAt: string;
}
export type EventCategory = 'jummah' | 'lecture' | 'class' | 'quran_study' | 'youth_program' | 'sisters_program' | 'community_event' | 'fundraiser' | 'iftar' | 'eid' | 'other';
export type RecurrencePattern = 'daily' | 'weekly' | 'monthly' | 'yearly';
//# sourceMappingURL=event.types.d.ts.map