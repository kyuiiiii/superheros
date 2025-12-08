import React, { createContext, useState, useContext, type ReactNode } from "react";

// 1. Define a type for your user
export interface AuthUser {
  // Adjust the fields based on your user object
  user: {
    name: string;
    email: string;
  } | null;
  
}

// 2. Define the context type
interface AuthContextType {
  authUser?: AuthUser;
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUser | undefined>>;
}

// 3. Create the context with default value
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 4. Type the provider props
interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const initialAuthUser = localStorage.getItem("Users");
  const [authUser, setAuthUser] = useState<AuthUser | undefined>(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// 5. Custom hook for easy access
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};


