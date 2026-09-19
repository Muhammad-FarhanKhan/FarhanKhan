import React from 'react';
import '../css/Home/Home.css'; // Home Page core layout CSS
import LeftSidebar from '../js/components/Home/LeftSidebar';
import About from '../js/components/Home/About'; // ✨ Naya import add kiya
import Experience from '../js/components/Home/Experience';
import Projects from '../js/components/Home/Projects';

export default function Home() {
    return (
        <div className="portfolio-container">
            {/* Left Side Component (Fixed) */}
            <LeftSidebar />

            {/* Right Side Content (Scrollable Sections) */}
            <div className="right-content">
                
                {/* ABOUT SECTION COMPONENT */}
                <About />

                {/* EXPERIENCE SECTION COMPONENT */}
                <Experience />

                {/* PROJECTS SECTION COMPONENT */}
                <Projects />

            </div>
        </div>
    );
}
