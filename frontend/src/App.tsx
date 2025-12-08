// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/SignupPage";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthContext";
import HeroForm from "./components/HeroForm";
import About from "./pages/About";

const App: React.FC = () => {
  const { authUser } = useAuth();
    console.log(authUser);
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={authUser?<Dashboard />:<Navigate to="/login"/>} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/addhero" element={<HeroForm/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Toaster />
    </Router>
    
  );
};

export default App;
