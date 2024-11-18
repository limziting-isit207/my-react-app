import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './components/Form.css';  
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import AboutUs from './pages/AboutUs.js';
import Cats from './pages/Cats.js';
import Dogs from './pages/Dogs.js';
import AdoptPet from './pages/AdoptPet.js';
import ReleasePet from './pages/ReleasePet.js';
import Donate from './pages/Donate.js';
import LogIn from './pages/LogIn.js';
import Register from './pages/Register.js';
import SearchResults from './pages/SearchResults';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} /> 

      <div className = "container">
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/about-us" element={<AboutUs />} />
          <Route path = "/cats" element={<Cats />} />
          <Route path = "/dogs" element={<Dogs />} />
          <Route path = "/adopt-pet" element={<AdoptPet />} />
          <Route path = "/release-pet" element={<ReleasePet />} />
          <Route path = "/donate" element={<Donate />} />
          <Route path = "/login" element={<LogIn onLogin={handleLogin} />} />
          <Route path = "/register" element={<Register />} />
          <Route path = "/search" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
