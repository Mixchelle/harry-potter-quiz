import { Request, Response } from 'express';
import UserService from '../services/UserService';
import { errorHandler } from '../utils/index';

class UserController {
  public static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    try {
      const token = await UserService.login(email, password);
      if (typeof token !== 'string') {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(401).json({ message: error });
    }
  }

  public static async createUser(req: Request, res: Response) {
    try {
      const result = await UserService.createUser(req.body);
      if (result.error) {
        return errorHandler(res, 400, result.error);
      }
      return res.status(201).json(result);
    } catch (error) {
      return errorHandler(res, 500, 'Erro ao criar novo usuário.');
    }
  }
}

export default UserController;

