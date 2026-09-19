import React from 'react';
import '../../../css/Home/Projects.css'; // Dedicated CSS Import

export default function Projects() {
    // Exactly 8 items structured with human-written vocabulary and links
    const projectList = [
{ 
    title: "Test Preparation MCQs& Job Portal", 
    desc: "Built a fast web app for student exam preparation and job alerts for a freelance client in just 15 days. Created features for live quizzes, past papers, and a job board. Also made an easy admin panel to manage content, optimizing everything so pages load in milliseconds.", 
    tags: ["Laravel", "PHP", "MySQL", "Quiz Feature", "Admin Panel", "Fast Load Time"], 
    link: "https://github.com" 
}
,
 { 
    title: "Movie & TV Series Streaming Site", 
    desc: "Built a movie and TV series streaming website using Laravel. Added features for video playback, a search bar, and genre filters. Connected third-party APIs to load movie data dynamically, and made an admin dashboard so the owner can easily upload and manage streaming links.", 
    tags: ["Laravel", "PHP", "API Integration", "Video Player", "Search & Filters", "Custom CSS"], 
    link: "https://123freemovies.space/" 
}

,
        { 
    title: "Complaint Management System", 
    desc: "Made a complete complaint system for App Fusion using Laravel and React. Built a secure login system with separate dashboards for users and admins. Users can easily file complaints and track if they are pending or accepted, while the admin can view all complaints, change their status, and manage the user list.", 
    tags: ["Laravel", "React", "MySQL", "Login System", "Live Tracking", "Admin Panel"], 
    link: "https://github.com/Muhammad-FarhanKhan/online-complaint-management-system" 
}
,
 { 
    title: "Employee Management System", 
    desc: "Built a full-stack internal tool for App Fusion to help the owner manage employee records easily. Used Laravel for the backend and React with custom CSS for the frontend. The system lets the owner add new employees, view and update their profiles, and safely store all company records in a MySQL database using fast APIs.", 
    tags: ["Laravel", "React", "PHP", "MySQL", "API Integration", "Custom CSS"], 
    link: "https://github.com/Muhammad-FarhanKhan/Employee-Management-System" 
}
,
        { 
    title: "FusionAcademy Web Portal", 
    desc: "Built a responsive frontend web application for an educational platform called FusionAcademy during my time at Digital Sphere. Created a clean user registration and login flow, and added a custom theme switcher so users can toggle between light and dark modes easily. Used React with pure CSS for styling and managed user sessions on the frontend using LocalStorage.", 
    tags: ["React", "Custom CSS", "LocalStorage", "Theme Switcher", "Responsive UI", "Frontend Flow"], 
    link: "https://fusion-academy.vercel.app/signup" 
}
    ];

    return (
        <section id="projects" className="projects-section-wrapper">
            <h2 className="section-heading">Projects</h2>
            <div className="projects-list">
                {projectList.map((project, index) => (
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="project-card-link" 
                        key={index}
                    >
                        <div className="project-card">
                            <div className="project-img-box">
                                <div className="img-frame-placeholder">Code Box</div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">
                                    {project.title} <span className="inline-arrow">↗</span>
                                </h3>
                                <p className="project-desc">{project.desc}</p>
                                <div className="skills-list">
                                    {project.tags.map((tag, i) => (
                                        <span className="skill-tag" key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

<div className="archive-button-container">
    <button className="view-archive-btn" onClick={() => window.location.href = '/projects'}>
        View Full Project Archive <span className="btn-arrow">→</span>
    </button>
</div>

        </section>
    );
}
