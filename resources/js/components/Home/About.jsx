import React from 'react';
import '../../../css/Home/About.css'; // Dedicated About CSS Import

export default function About() {
    return (
        <section id="about" className="about-section">
            <p className="about-paragraph">
                Back when I first started playing around with code, I realized I loved building things from scratch. Fast forward to today, and I’ve spent over <span className="text-badge">3+ years</span> working as a <span className="text-highlight">Full-Stack Engineer</span>—specializing in <span className="text-highlight">Laravel</span> and <span className="text-highlight">React</span>, while blending in my passion for UI/UX design via <span className="text-highlight">Figma</span>.
            </p>
            
            <p className="about-paragraph">
                Over the years, I’ve had the opportunity to build interfaces at <span className="text-company-tag">Digital Sphere</span> and engineer entire full-stack environments at <span className="text-company-tag">App Fusion</span>. These days, I’m working as a freelancer, helping clients bring their ideas to life, while actively looking for my next full-time team role.
            </p>

            <p className="about-paragraph">
                My core focus is simple: <span className="text-highlight">clean code and smooth performance</span>. But honestly, what matters to me the most is making the product feel completely intuitive and easy for the person using it. I enjoy diving into complex problems and writing code that is clean, optimized, and built to last.
            </p>
        </section>
    );
}
