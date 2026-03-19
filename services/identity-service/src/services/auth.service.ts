import bcrypt from 'bcryptjs';
import { PrismaClient } from '../generated/client';
import { User, UserRole } from '@mosqueconnect/shared-types';
import { TokenService } from './token.service';
import { NotFoundError, UnauthorizedError } from '@mosqueconnect/shared-utils';

const prisma = new PrismaClient();

export class AuthService {
  async register(data: any): Promise<{ user: User; token: string }> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: hashedPassword,
        role: (data.role as any) || 'MEMBER',
      },
    });

    const token = TokenService.sign({ id: user.id, role: user.role, email: user.email });
    
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name ?? '',
        role: user.role as UserRole,
        createdAt: user.createdAt.toISOString(),
      },
      token,
    };
  }

  async login(data: any): Promise<{ user: User; token: string }> {
    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) throw new NotFoundError('User', data.email);

    const isValidPassword = await bcrypt.compare(data.password, user.password);
    if (!isValidPassword) throw new UnauthorizedError('Invalid credentials');

    const token = TokenService.sign({ id: user.id, role: user.role, email: user.email });

    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name ?? '',
        role: user.role as UserRole,
        createdAt: user.createdAt.toISOString(),
      },
      token,
    };
  }

  async getCurrentUser(userId: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) throw new NotFoundError('User', userId);

    return {
      id: user.id,
      email: user.email,
      name: user.name ?? '',
      role: user.role as UserRole,
      createdAt: user.createdAt.toISOString(),
    };
  }
}

export const authService = new AuthService();
