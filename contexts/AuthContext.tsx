'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  user_id: string;
  username: string;
  email: string;
  full_name?: string;
  role: 'admin' | 'readonly' | 'user';
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Auto-authenticate on mount - no login required
  useEffect(() => {
    const defaultUser: User = {
      user_id: 'medev-user',
      username: 'user',
      email: 'user@medev.ai',
      full_name: 'Medev User',
      role: 'admin',
    };
    const defaultToken = 'medev-session-' + Date.now();

    setToken(defaultToken);
    setUser(defaultUser);
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Demo mode - accept specific credentials
      if (email === 'demo@medev.ai' && password === 'demo') {
        const demoUser: User = {
          user_id: 'demo-001',
          username: 'demo',
          email: 'demo@medev.ai',
          full_name: 'Demo User',
          role: 'admin',
        };

        const demoToken = 'demo-token-' + Date.now();

        // Store token and user
        localStorage.setItem('medev_token', demoToken);
        localStorage.setItem('medev_user', JSON.stringify(demoUser));
        setToken(demoToken);
        setUser(demoUser);
        return;
      }

      // In production, this would call a real API
      throw new Error('Invalid credentials. Use demo@medev.ai / demo');
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('medev_token');
    localStorage.removeItem('medev_user');
    setToken(null);
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    token,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

