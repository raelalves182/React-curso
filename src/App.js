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
import Photo from './components/Photo/Photo';
import UserProfile from "./components/User/UserProfile";
import NotFound from "./components/NotFound";

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
          <Route path="foto/:id" element={<Photo />} />
          <Route path="perfil/:user" element={<UserProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>  
        <Footer />
      </UserStorage>
    </BrowserRouter>
  </div>
  )
};

export default App;
