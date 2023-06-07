// userFetch.ts
import { User } from '../types';

const API_URL = 'http://localhost:3001';

interface LoginResponse {
  token: string;
}
 async function loginUser(email: string, password: string): Promise<string | null> {
  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const data: LoginResponse = await response.json();
    return data.token;
  }

  return null;
}

 async function createUser(user: User): Promise<boolean> {
  const response = await fetch(`${API_URL}/users/newUser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  return response.ok;
}

export { loginUser, createUser };
