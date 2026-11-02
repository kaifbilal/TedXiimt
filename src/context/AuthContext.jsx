import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('tedx_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [profile, setProfile] = useState(() => {
    const saved = localStorage.getItem('tedx_profile');
    return saved ? JSON.parse(saved) : null;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const token = localStorage.getItem('tedx_access_token');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const data = await api.get('/api/accounts/me/');
        if (data.user) {
          setUser(data.user);
          setProfile(data.profile);
          localStorage.setItem('tedx_user', JSON.stringify(data.user));
          if (data.profile) localStorage.setItem('tedx_profile', JSON.stringify(data.profile));
        }
      } catch (err) {
        console.log('[Auth] Token verification failed or server offline.');
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  const login = async (email, password) => {
    const data = await api.post('/api/accounts/login/', { email, password });

    if (!data?.access || !data?.refresh || !data?.user?.role) {
      throw new Error('The login service returned an incomplete response.');
    }

    api.setToken(data.access);
    localStorage.setItem('tedx_refresh_token', data.refresh);
    setUser(data.user);
    setProfile(data.profile || null);
    localStorage.setItem('tedx_user', JSON.stringify(data.user));
    if (data.profile) {
      localStorage.setItem('tedx_profile', JSON.stringify(data.profile));
    } else {
      localStorage.removeItem('tedx_profile');
    }

    return { success: true, user: data.user };
  };

  const loginAsRole = (role) => {
    const roleEmails = {
      admin: 'admin@tedxiimt.com',
      lead: 'lead@tedxiimt.com',
      volunteer: 'volunteer@tedxiimt.com',
      speaker: 'speaker@tedxiimt.com',
      attendee: 'attendee@tedxiimt.com',
    };
    return login(roleEmails[role] || 'attendee@tedxiimt.com', 'Demo@123');
  };

  const register = async (formData) => {
    try {
      const data = await api.post('/api/accounts/register/', formData);
      if (data.access) {
        api.setToken(data.access);
        if (data.refresh) localStorage.setItem('tedx_refresh_token', data.refresh);
      }
      if (data.user) {
        setUser(data.user);
        localStorage.setItem('tedx_user', JSON.stringify(data.user));
      }
      return { success: true, data };
    } catch (err) {
      const mockUser = {
        id: Date.now(),
        email: formData.email,
        name: formData.name,
        role: formData.role || 'attendee',
      };
      setUser(mockUser);
      localStorage.setItem('tedx_user', JSON.stringify(mockUser));
      return { success: true, data: { user: mockUser } };
    }
  };

  const logout = async () => {
    try {
      const refresh = localStorage.getItem('tedx_refresh_token');
      if (refresh) {
        await api.post('/api/accounts/logout/', { refresh }).catch(() => {});
      }
    } finally {
      api.setToken(null);
      localStorage.removeItem('tedx_refresh_token');
      localStorage.removeItem('tedx_user');
      localStorage.removeItem('tedx_profile');
      setUser(null);
      setProfile(null);
    }
  };

  const value = {
    user,
    profile,
    loading,
    login,
    loginAsRole,
    register,
    logout,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isLead: user?.role === 'lead',
    isVolunteer: user?.role === 'volunteer',
    isSpeaker: user?.role === 'speaker',
    isAttendee: user?.role === 'attendee',
    isStaff: ['admin', 'lead', 'volunteer'].includes(user?.role),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
