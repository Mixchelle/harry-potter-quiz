import { Router } from 'express';
import UserController from '../controllers/UserController';
import validateLogin from '../midlewares/loginValidate';

const router = Router();

router.post('/login', validateLogin, UserController.login);
router.post('/create', UserController.createUser);

export default router;
