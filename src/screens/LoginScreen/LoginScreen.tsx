import './LoginScreen.css';
import { useAuth } from '../../context/AuthContext';;
import React, { useState } from 'react';

const LoginScreen: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = () => {
    // Aqui você iria tratar o envio do login e senha.
  }

  return (
    <div className="login-container">
      <div className="logo-section">
        {/* Coloque o seu logo aqui */}
      </div>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Login" 
      />
      <div className="password-section">
        <input 
          type={showPassword ? "text" : "password"} 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Senha" 
        />
        <span onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "🙈" : "👁️"}
        </span>
      </div>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
}

export default LoginScreen;
