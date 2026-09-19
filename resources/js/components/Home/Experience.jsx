import React from 'react';
import '../../../css/Home/Experience.css'; // Dedicated CSS Import

export default function Experience() {
    const experiences = [
{
    date: "2026 — PRESENT",
    title: "Freelance Full-Stack Engineer",
    company: "Self-Employed",
    desc: "Collaborating directly with clients to turn their business ideas into fully functional web applications. Managing the entire lifecycle of projects—from designing MySQL databases and writing Laravel backend logic to building React frontends and deploying the final product live.",
    skills: ["Laravel", "React", "PHP", "MySQL", "Freelance Engineering", "API Integration", "Postman", "Git & GitHub", "Client Communication"]
}
, {
    date: "2026",
    title: "Full-Stack Developer",
    company: "App Fusion",
    desc: "Leveled up my skills by transitioning into full-stack development. Learned and worked extensively with PHP, Laravel, and MySQL database management from scratch. Built dynamic backend systems, wrote efficient database logic, and developed secure APIs to tie everything together perfectly.",
    skills: ["Laravel", "PHP", "MySQL", "Eloquent ORM", "API Development", "Database Architecture", "Backend Development", "Full-Stack Integration"]
}

,
 {
    date: "2025",
    title: "Frontend Web Developer",
    company: "Digital Sphere",
    desc: "Mastered frontend development by working on real-world projects. Learned and applied HTML, CSS, JavaScript, and React from scratch to build fully responsive interfaces, turning Figma designs into clean, functional websites that work perfectly on all screens.",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Tailwind CSS", "Figma to Code", "Responsive Web Design", "Frontend Development"]
}
,
{
    date: "TRAINING",
    title: "UI/UX Designer",
    company: "YouTube · Code With Harry",
    desc: "Started my journey into the tech world by learning visual design. Focused on understanding user experience (UX) principles, mastering Figma tools, and learning how to create beautiful, user-friendly website layouts from scratch through practical design tutorials.",
    skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Visual Design", "User Interface Design"]
}
   ];

    return (
        <section id="experience" className="experience-section-wrapper">
            <h2 className="section-heading">Experience</h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div className="experience-card" key={index}>
                        <div className="exp-date">{exp.date}</div>
                        <div className="exp-content">
                            <h3 className="exp-title">
                                {exp.title} <span className="exp-company-separator">·</span> <span className="exp-company">{exp.company}</span>
                            </h3>
                            <p className="exp-desc">{exp.desc}</p>
                            <div className="skills-list">
                                {exp.skills.map((skill, i) => (
                                    <span className="skill-tag" key={i}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
