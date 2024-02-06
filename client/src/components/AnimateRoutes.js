// AnimateRoutes.js
import React from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import Contact from '../pages/Contact';
import LoginPage from '../pages/LoginPage';
import {AnimatePresence}  from 'framer-motion';

function AnimateRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    </AnimatePresence>
  );
}

export default AnimateRoutes;
