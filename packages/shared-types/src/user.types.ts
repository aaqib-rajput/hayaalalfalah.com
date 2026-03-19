// User & Authentication Types

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  mosqueId?: string;
  avatarUrl?: string;
  phone?: string;
  createdAt: string;
}

export type UserRole = 'SUPER_ADMIN' | 'MOSQUE_ADMIN' | 'IMAM' | 'MEMBER';
