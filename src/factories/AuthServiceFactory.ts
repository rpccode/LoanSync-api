// src/factories/AuthServiceFactory.ts

import { AuthService } from '../services/authService';
import { JwtAuthService } from '../services/JwtAuthService';
import { OAuthAuthService } from '../services/OAuthAuthService';

export class AuthServiceFactory {
  static createAuthService(type: string): AuthService {
    if (type === 'jwt') {
      return new JwtAuthService();
    } else if (type === 'oauth') {
      return new OAuthAuthService();
    } else {
      throw new Error('Invalid authentication type');
    }
  }
}
