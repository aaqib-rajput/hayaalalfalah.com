import { beforeEach, describe, expect, it, vi } from 'vitest';
import bcrypt from 'bcryptjs';

const { mockPrisma, mockTokenService } = vi.hoisted(() => ({
  mockPrisma: {
    user: {
      create: vi.fn(),
      findUnique: vi.fn(),
    },
  },
  mockTokenService: {
    sign: vi.fn(),
  },
}));

vi.mock('bcryptjs', () => ({
  default: {
    hash: vi.fn(),
    compare: vi.fn(),
  },
}));

vi.mock('../generated/client', () => ({
  PrismaClient: class {
    user = mockPrisma.user;
  },
}));

vi.mock('../services/token.service', () => ({
  TokenService: mockTokenService,
}));

import { NotFoundError, UnauthorizedError } from '@mosqueconnect/shared-utils';
import { AuthService } from '../services/auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(() => {
    vi.clearAllMocks();
    authService = new AuthService();
  });

  it('registers a user and returns a session token payload', async () => {
    const createdAt = new Date('2026-03-18T00:00:00.000Z');
    const createdUser = {
      id: 'user-1',
      email: 'test@example.com',
      name: 'Test User',
      password: 'hashed-password',
      role: 'MEMBER',
      createdAt,
    };

    (bcrypt.hash as any).mockResolvedValue('hashed-password');
    mockPrisma.user.create.mockResolvedValue(createdUser);
    mockTokenService.sign.mockReturnValue('fake-jwt-token');

    const result = await authService.register({
      email: 'test@example.com',
      name: 'Test User',
      password: 'password123',
      role: 'MEMBER',
    });

    expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
    expect(mockPrisma.user.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          email: 'test@example.com',
          name: 'Test User',
          password: 'hashed-password',
          role: 'MEMBER',
        }),
      })
    );
    expect(result).toEqual({
      user: {
        id: 'user-1',
        email: 'test@example.com',
        name: 'Test User',
        role: 'MEMBER',
        createdAt: createdAt.toISOString(),
      },
      token: 'fake-jwt-token',
    });
  });

  it('logs in an existing user with a valid password', async () => {
    const user = {
      id: 'user-2',
      email: 'login@example.com',
      name: 'Login User',
      password: 'hashed-password',
      role: 'MOSQUE_ADMIN',
      createdAt: new Date('2026-03-17T00:00:00.000Z'),
    };

    mockPrisma.user.findUnique.mockResolvedValue(user);
    (bcrypt.compare as any).mockResolvedValue(true);
    mockTokenService.sign.mockReturnValue('login-token');

    const result = await authService.login({
      email: 'login@example.com',
      password: 'secret',
    });

    expect(mockPrisma.user.findUnique).toHaveBeenCalledWith({
      where: { email: 'login@example.com' },
    });
    expect(bcrypt.compare).toHaveBeenCalledWith('secret', 'hashed-password');
    expect(result.token).toBe('login-token');
    expect(result.user.role).toBe('MOSQUE_ADMIN');
  });

  it('throws when a user does not exist during login', async () => {
    mockPrisma.user.findUnique.mockResolvedValue(null);

    await expect(
      authService.login({
        email: 'missing@example.com',
        password: 'secret',
      })
    ).rejects.toBeInstanceOf(NotFoundError);
  });

  it('throws when the password is invalid', async () => {
    mockPrisma.user.findUnique.mockResolvedValue({
      id: 'user-3',
      email: 'wrong@example.com',
      name: 'Wrong User',
      password: 'hashed-password',
      role: 'MEMBER',
      createdAt: new Date(),
    });
    (bcrypt.compare as any).mockResolvedValue(false);

    await expect(
      authService.login({
        email: 'wrong@example.com',
        password: 'incorrect',
      })
    ).rejects.toBeInstanceOf(UnauthorizedError);
  });

  it('returns the current user profile by id', async () => {
    const user = {
      id: 'user-4',
      email: 'profile@example.com',
      name: 'Profile User',
      password: 'hashed-password',
      role: 'IMAM',
      createdAt: new Date('2026-03-16T00:00:00.000Z'),
    };

    mockPrisma.user.findUnique.mockResolvedValue(user);

    await expect(authService.getCurrentUser('user-4')).resolves.toEqual({
      id: 'user-4',
      email: 'profile@example.com',
      name: 'Profile User',
      role: 'IMAM',
      createdAt: user.createdAt.toISOString(),
    });
  });
});
