import { Router } from 'express';
import UserRouter from './UserRouter';

const router = Router();
 router.use('/user', UserRouter);

export default router;
