// src/services/JwtAuthService.ts

import jwt from 'jsonwebtoken';
import { AuthService } from './authService';

export class JwtAuthService implements AuthService {
  private readonly secret = process.env.JWT_SECRET || 'your_jwt_secret';

  generateToken(data: any): string {
    return jwt.sign(data, this.secret, { expiresIn: '1h' });
  }

  verifyToken(token: string): any {
    return jwt.verify(token, this.secret);
  }
}
