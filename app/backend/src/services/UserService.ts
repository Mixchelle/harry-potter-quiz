import  bcrypt = require('bcrypt');
import User, { UserAttributes } from '../db/models/User';
import util from '../utils';

class UserService {
  public static async login(email: string, password: string): Promise<string | unknown> {
    const user = await User.findOne({
      where: { email },
    });

    if (!user) return null;

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return null;

    const token = util.generateToken({ email, password });

    return token;
  }


  public static async createUser(data: UserAttributes) {
    try {
      const { username, email, password, birthdate, house, avatar } = data;
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return { error: 'O email já está sendo usado por outro usuário.' };
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
        birthdate,
        house,
        avatar,
      });
  
      return { message: 'Usuário criado com sucesso.', user: newUser };
    } catch (error) {
      console.error(error);
      return { error: 'Erro ao criar novo usuário.' };
    }
  }
}

export default UserService;