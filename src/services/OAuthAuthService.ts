// src/services/OAuthAuthService.ts

import { AuthService } from "./authService";


export class OAuthAuthService implements AuthService {
  generateToken(data: any): string {
    // Lógica específica para generar un token OAuth
    return 'oauth_token';
  }

  verifyToken(token: string): any {
    // Lógica para verificar un token OAuth
    return { id: 'oauth_user' };
  }
}
