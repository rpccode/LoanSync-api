import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload; // Dependiendo de lo que almacenes en el token
    }
  }
}
