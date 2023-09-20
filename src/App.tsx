import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import Dashboard from './screens/Dashboard/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />  // Rota para o Dashboard
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
