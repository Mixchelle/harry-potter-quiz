import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../hooks/userFetch';
import logo from '../img/Hogwarts-logo.webp';
import './LoginPage.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await loginUser(email, password);
      if (response && typeof response === 'string') {
        navigate('/home');
      } else {
        setError('Credenciais inválidas');
      }
    } catch (error) {
      setError(`Erro ao fazer login, Erro:${error}`);
    }
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Hogwarts Logo" className="hogwarts-logo" />
      <h2 className="login-title">Harry Potter Quiz</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button type="submit" className="login-button">
            Login
          </button>
          <button onClick={handleSignup} className="signup-button">
            Criar Conta
          </button>
        </div>
      </form>
      {error && <p className="login-error">{error}</p>}
    </div>
  );
};

export default Login;

