import React from 'react';
import '../css/ProjectsArchive.css'; // New Dedicated Archive CSS Import

export default function ProjectsArchive() {
    // Demo archive array - Future me aap is array me mazeed rows add krte jayenge
    const archiveList = [
        { year: "2026", title: "Employee Management System", madeAt: "App Fusion", tags: ["Laravel", "React", "MySQL", "Pure CSS"], link: "#" },
        { year: "2026", title: "Spotify Web App Interface", madeAt: "Personal", tags: ["React", "Spotify API", "JavaScript"], link: "#" },
        { year: "2026", title: "Multi-Vendor E-Commerce Platform", madeAt: "Personal", tags: ["Laravel", "PHP", "MySQL"], link: "#" },
        { year: "2025", title: "Automated Figma UI Component Kit", madeAt: "Personal", tags: ["Figma", "UI/UX", "Design Systems"], link: "#" },
        { year: "2025", title: "Data Metrics Analytics Dashboard", madeAt: "Personal", tags: ["Python", "MySQL", "Analytics"], link: "#" },
        { year: "2025", title: "Custom Customer Management App", madeAt: "Digital Sphere", tags: ["React", "State Management"], link: "#" },
        { year: "2024", title: "Demo Project Framework Block", madeAt: "Freelance", tags: ["HTML", "CSS", "JS Boilerplate"], link: "#" } // Demo placeholder for future edits
    ];

    return (
        <div className="archive-container">
            {/* Back to Home Link */}
            <div className="back-home-box">
                <a href="/" className="back-link">← Farhan Khan</a>
            </div>

            <h1 className="archive-main-title">All Projects</h1>
            <p className="archive-subtitle">A historical log of things I've built, experimented with, and deployed.</p>

            {/* Archive Data Table Layout */}
            <div className="archive-table-wrapper">
                <table className="archive-table">
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Project</th>
                            <th className="hide-mobile">Made at</th>
                            <th>Built with</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {archiveList.map((item, index) => (
                            <tr key={index} className="archive-row">
                                <td className="row-year">{item.year}</td>
                                <td className="row-title">{item.title}</td>
                                <td className="row-made hide-mobile">{item.madeAt}</td>
                                <td>
                                    <div className="archive-tags-flex">
                                        {item.tags.map((tag, i) => (
                                            <span className="archive-mini-tag" key={i}>{tag}</span>
                                        ))}
                                    </div>
                                </td>
                                <td>
                                    <a href={item.link} className="archive-row-link" target="_blank" rel="noreferrer">
                                        Demo <span className="archive-arrow">↗</span>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
