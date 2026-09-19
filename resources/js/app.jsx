import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../js/Home';
import ProjectsArchive from '../js/ProjectsArchive'; // Archive Page Route Import

if (document.getElementById('root')) {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <Routes>
                {/* Default Main Home Page */}
                <Route path="/" element={<Home />} />
                
                {/* Full Project Archive Page */}
                <Route path="/projects" element={<ProjectsArchive />} />
            </Routes>
        </BrowserRouter>
    );
}
