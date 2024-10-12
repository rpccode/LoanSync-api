// src/routes/exampleRoutes.ts
import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/protected', authMiddleware('jwt'), (req, res) => {
  res.send('This is a protected route using JWT authentication');
});

router.get('/oauth-protected', authMiddleware('oauth'), (req, res) => {
  res.send('This is a protected route using OAuth authentication');
});

export default router;
