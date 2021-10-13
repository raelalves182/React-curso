import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProtectedRoute from "./components/Helper/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/login/Login";
import User from "./components/User/User";
import { UserStorage } from "./UserContext";

const App = () => {
  return (
  <div>
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <ProtectedRoute path="conta/*" element={<User />} />
        </Routes>  
        <Footer />
      </UserStorage>
    </BrowserRouter>
  </div>
  )
};

export default App;
