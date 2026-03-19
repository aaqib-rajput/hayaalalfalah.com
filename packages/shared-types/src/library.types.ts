// Library Domain Types

export interface LibraryBook {
  id: string;
  mosqueId: string;
  title: string;
  author: string;
  isbn?: string;
  category: BookCategory;
  language: string;
  description?: string;
  coverImageUrl?: string;
  publisher?: string;
  publishYear?: number;
  totalCopies: number;
  availableCopies: number;
  location: string;
  condition: BookCondition;
  addedBy: string;
  addedByName: string;
  status: LibraryItemStatus;
  approvedBy?: string;
  approvedDate?: string;
  rejectionReason?: string;
  tags?: string[];
  isReferenceOnly?: boolean;
  createdAt: string;
  updatedAt: string;
}

export type BookCategory =
  | 'quran'
  | 'hadith'
  | 'fiqh'
  | 'tafseer'
  | 'seerah'
  | 'arabic'
  | 'islamic_history'
  | 'spirituality'
  | 'children'
  | 'youth'
  | 'women'
  | 'comparative_religion'
  | 'general_islamic'
  | 'other';

export type BookCondition = 'new' | 'excellent' | 'good' | 'fair' | 'poor';

export type LibraryItemStatus =
  | 'pending_approval'
  | 'approved'
  | 'rejected'
  | 'archived';

export interface LibraryItem {
  id: string;
  mosqueId: string;
  name: string;
  type: LibraryItemType;
  category: string;
  description?: string;
  imageUrl?: string;
  quantity: number;
  availableQuantity: number;
  location: string;
  condition: BookCondition;
  addedBy: string;
  addedByName: string;
  status: LibraryItemStatus;
  approvedBy?: string;
  approvedDate?: string;
  rejectionReason?: string;
  createdAt: string;
  updatedAt: string;
}

export type LibraryItemType =
  | 'prayer_mat'
  | 'prayer_cap'
  | 'quran_stand'
  | 'audio_equipment'
  | 'educational_material'
  | 'display_item'
  | 'furniture'
  | 'other';

export interface BookBorrowing {
  id: string;
  bookId: string;
  mosqueId: string;
  borrowerName: string;
  borrowerEmail: string;
  borrowerPhone: string;
  borrowDate: string;
  dueDate: string;
  returnDate?: string;
  status: BorrowingStatus;
  notes?: string;
  createdAt: string;
}

export type BorrowingStatus = 'active' | 'returned' | 'overdue' | 'lost';
