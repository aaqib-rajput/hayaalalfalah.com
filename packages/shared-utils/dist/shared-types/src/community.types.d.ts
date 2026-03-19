export interface Announcement {
    id: string;
    mosqueId: string;
    title: string;
    content: string;
    category: AnnouncementCategory;
    isPinned: boolean;
    publishDate: string;
    expiryDate?: string;
    authorName: string;
    priority: 'low' | 'medium' | 'high';
    isActive: boolean;
    createdAt: string;
}
export type AnnouncementCategory = 'general' | 'prayer' | 'event' | 'urgent' | 'community' | 'education';
//# sourceMappingURL=community.types.d.ts.map