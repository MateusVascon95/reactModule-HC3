import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Repositories from './pages/Repositories/Repositories.js';
import Home from './pages/Home';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repositories" element={<Repositories />} />
            </Routes>
        </BrowserRouter>
    )   
}   