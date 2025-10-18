import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import axiosClient from "./api/axiosClient";
import Navbar from './components/navbar';
import Acceuil from './pages/Acceuil';
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import { AuthProvider, useAuth } from "./context/AuthContext";

function App () {
    const { user,logout} = useAuth();
  return (
  <Router>
         <Navbar user={user} logout={logout}/>
      <Routes>
        <Route path="/" element={<Acceuil/>}/>
        <Route path="/Acceuil" element={<Acceuil/>}/>
       {user && <Route path="/cours" element={<Acceuil/>}/>}
        {user && <Route path="/chatbot" element={<Acceuil/>}/>}
        {!user && <Route path="/register" element={<RegisterForm />} />}
        {!user && <Route path="/login" element={<LoginForm />} />}
      </Routes>
     </Router>
  );
}

export default App
