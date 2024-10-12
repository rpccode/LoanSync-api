import { Request, Response, NextFunction } from 'express';
import { AuthServiceFactory } from '../factories/AuthServiceFactory';

export const authMiddleware = (authType: string) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers['authorization'];
    if (!token) {
      res.status(403).send('Access denied.');
      return; // Añadimos un 'return' para asegurar que no se siga ejecutando la función
    }

    try {
      const authService = AuthServiceFactory.createAuthService(authType);
      const decoded = authService.verifyToken(token);
      req.user = decoded;
      next(); // Si todo es exitoso, llamamos a 'next' sin devolver nada
    } catch (error) {
      res.status(400).send('Invalid token.');
      return; // Añadimos un 'return' para evitar que se devuelva Response implícitamente
    }
  };
};
