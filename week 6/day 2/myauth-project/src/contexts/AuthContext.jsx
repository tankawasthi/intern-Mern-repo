import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// Mock API functions
const api = {
  signup: ({ name, email, password, role }) => {
    // In a real app, this would be an API call
    const users = JSON.parse(localStorage.getItem("nf_users") || "[]");
    
    // Check if user already exists
    if (users.find(user => user.email === email)) {
      return { error: "User already exists with this email" };
    }
    
    // Create new user
    const newUser = {
      id: Date.now(),
      name,
      email,
      password, // In real app, this would be hashed
      role,
      createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem("nf_users", JSON.stringify(users));
    
    return { ok: true };
  },
  
  login: ({ email, password }) => {
    // In a real app, this would be an API call
    const users = JSON.parse(localStorage.getItem("nf_users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      return { error: "Invalid email or password" };
    }
    
    // Remove password from returned user object
    const { password: _, ...userWithoutPassword } = user;
    
    return { 
      user: userWithoutPassword, 
      token: `mock-jwt-token-${user.id}` 
    };
  }
};

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Initialize user from localStorage
  useEffect(() => {
    const raw = localStorage.getItem("nf_user");
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        localStorage.removeItem("nf_user");
      }
    }
  }, []);

  // Save user to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("nf_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("nf_user");
    }
  }, [user]);

  // Signup function
  const signup = ({ name, email, password, role }) => {
    const res = api.signup({ name, email, password, role });
    if (res.error) {
      toast.error(res.error);
      return { error: res.error };
    }
    toast.success("Signup successful. Please login.");
    return { ok: true };
  };

  // Login function
  const login = ({ email, password }) => {
    const res = api.login({ email, password });
    if (res.error) {
      toast.error(res.error);
      return { error: res.error };
    }
    setUser({ ...res.user, token: res.token });
    toast.success("Logged in successfully");
    return { ok: true };
  };

  // Logout function
  const logout = () => {
    setUser(null);
    toast.info("Logged out");
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}