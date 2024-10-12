
// src/services/AuthService.ts
export interface AuthService {
  generateToken(data: any): string;
  verifyToken(token: string): any;
}

