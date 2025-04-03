import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');
  const navigate = useNavigate();

  const login = (email, password) => {

    setUser({ email });
    navigate('/');
  };

  const signup = (email, password) => {
    
    setUser({ email });
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    navigate('/login');
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, darkMode, toggleDarkMode }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);