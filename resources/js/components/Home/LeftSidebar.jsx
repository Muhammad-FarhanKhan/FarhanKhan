import React from 'react';
import '../../../css/Home/LeftSidebar.css'; // Dedicated CSS Import

export default function LeftSidebar() {
    return (
        <div className="left-sidebar">
            <div>
                <h1 className="sidebar-name">Farhan Khan</h1>
                <h2 className="sidebar-title">Full-Stack Engineer & UI/UX Designer</h2>
                <p className="sidebar-bio">
                    I engineer robust, scalable backend architectures in <span className="highlight-text">Laravel</span> and craft high-performance, pixel-perfect interfaces using <span className="highlight-text">React</span>. Focused on turning complex data into seamless user experiences.
                </p>
                
                <ul className="nav-links">
                    <li><a href="#about"><span className="nav-line"></span><span>About</span></a></li>
                    <li><a href="#experience"><span className="nav-line"></span><span>Experience</span></a></li>
                    <li><a href="#projects"><span className="nav-line"></span><span>Projects</span></a></li>
                </ul>
            </div>

            {/* Premium Interactive Social Handles */}
            <div className="social-links">
                <a href="https://github.com/Muhammad-FarhanKhan" target="_blank" rel="noreferrer" className="social-icon github-icon" title="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-farhan-khan-764a373a6/" target="_blank" rel="noreferrer" className="social-icon linkedin-icon" title="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon instagram-icon" title="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                </a>
                <a href="wa.me/923232171866" target="_blank" rel="noreferrer" className="social-icon whatsapp-icon" title="WhatsApp">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-3.507c1.66.986 3.288 1.498 4.76 1.499 5.533 0 10.032-4.492 10.034-10.024.002-2.679-1.04-5.198-2.934-7.093-1.895-1.893-4.415-2.936-7.093-2.937-5.537 0-10.036 4.493-10.038 10.025-.001 1.834.493 3.626 1.429 5.212l-.993 3.63 3.735-.98c1.558.91 3.111 1.368 4.602 1.368zm11.353-7.464c-.302-.15-1.789-.882-2.066-.983-.277-.1-.478-.15-.68.15-.202.302-.782.983-.958 1.184-.176.201-.352.226-.655.075-1.2-.6-1.994-1.033-2.784-2.39-.208-.358.208-.332.597-1.107.065-.13.032-.244-.016-.344-.048-.1-.478-1.15-.655-1.575-.172-.414-.372-.358-.512-.365-.13-.006-.28-.008-.43-.008-.15 0-.395.056-.602.28-.207.225-.792.775-.792 1.89 0 1.115.81 2.194.922 2.345.113.15 1.59 2.43 3.853 3.407.538.232 1.02.387 1.368.497.541.172 1.032.148 1.421.09.434-.064 1.341-.548 1.53-.1.188-.442.188-.82 1.31-.07.056-.1.114-.15.225-.302m.202-.076z"/></svg>
                </a>
            </div>
        </div>
    );
}
