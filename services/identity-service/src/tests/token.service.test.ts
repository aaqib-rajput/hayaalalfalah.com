import { describe, it, expect, vi } from 'vitest';
import jwt from 'jsonwebtoken';
import { TokenService } from '../services/token.service';

describe('TokenService', () => {
  const payload = { id: '1', role: 'MEMBER', email: 'test@test.com' };

  it('should sign a token', () => {
    const token = TokenService.sign(payload);
    expect(token).toBeDefined();
    expect(typeof token).toBe('string');
  });

  it('should verify a valid token', () => {
    const token = TokenService.sign(payload);
    const decoded = TokenService.verify(token);
    expect(decoded).toMatchObject(payload);
  });

  it('should return null for an invalid token', () => {
    const invalidToken = 'invalid.token.here';
    const result = TokenService.verify(invalidToken);
    expect(result).toBeNull();
  });
});
