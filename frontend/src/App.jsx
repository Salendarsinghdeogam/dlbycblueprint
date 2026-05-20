import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Music from "./pages/Music";
import Art from "./pages/Art";
import Scripts from "./pages/Scripts";
import Festivals from "./pages/Festivals";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admin from "./pages/Admin";

// Styles
import "./styles/globals.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/art" element={<Art />} />
          <Route path="/scripts" element={<Scripts />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
