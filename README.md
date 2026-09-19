# Farhan Khan - Full Stack Portfolio 🚀

A premium, fast, and human-centric developer portfolio built using the power of **Laravel (PHP)** for backend integrity and **React** for a modular, smooth frontend layout. This project features a fixed side navigation layout inspired by modern high-end UX standards, with custom pure CSS component styling.

---

## 🛠️ Tech Stack & Architecture

- **Backend:** Laravel 11+ (PHP 8.2+)
- **Frontend:** React 18+ (Component-Driven Structure)
- **Styling:** Pure CSS (Dedicated component-level styles)
- **Database:** SQLite / MySQL
- **Build Tool:** Vite (Super fast hot-reloading compiler)

---

## ✨ Features Delivered

- **Modern Split Layout:** Fixed structural Left Sidebar that anchors name and brand-adaptive social icons, alongside a smooth-scrolling Right Content block.
- **Brand Adaptive Glow Handles:** SVG social media badges (GitHub, LinkedIn, Instagram, WhatsApp) that transition smoothly to their official brand colors on hover.
- **Humanized Copywriting:** Clean, professional, and authentic narrative tone for the About and Experience layers—completely free from generic AI phrasing.
- **Modular File Management:** Every dynamic piece (`About`, `Experience`, `Projects`) lives in its own standalone folder structure with dedicated `.css` configuration maps.
- **Dynamic Projects Matrix:** Displays 8 high-fidelity application logs, including a detailed entry for the **Employee Management System** (built for App Fusion).
- **Tabular Project Archive Page:** A scalable historical route built using `react-router-dom` to log every current and future enterprise framework delivery.

---

## 📁 Key File Structure

```text
farhan-khan-portfolio/
├── app/
├── config/
├── database/
│   └── database.sqlite
├── resources/
│   ├── css/
│   │   └── Home/
│   │       ├── Home.css
│   │       ├── LeftSidebar.css
│   │       ├── About.css
│   │       ├── Experience.css
│   │       └── Projects.css
│   └── js/
│       ├── components/
│       │   └── Home/
│       │       ├── LeftSidebar.jsx
│       │       ├── About.jsx
│       │       ├── Experience.jsx
│       │       └── Projects.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   └── ProjectsArchive.jsx
│       └── app.jsx (Main Router Engine)
├── routes/
│   └── web.php (Universal fallback route)
└── package.json
```

---

## 🚀 Local Installation Steps

Follow these steps to spin up the local ecosystem environment on your machine:

### 1. Clone & Dependencies setup
```bash
# Enter project root directory folder
cd farhan-khan-portfolio

# Install backend composer utilities
composer install

# Install frontend dynamic node extensions
npm install
```

### 2. Configuration & Secure Initialization
```bash
# Setup environment file template config
copy .env.example .env

# Generate secure cryptographic runtime application code
php artisan key:generate

# Seed initial structural session layouts onto database architecture
copy nul database\database.sqlite
php artisan migrate
```

### 3. Ignition Run Servers
Open two standalone terminal dashboard screens to execute concurrently:

**Terminal Window A (Laravel Local Engine)**
```bash
php artisan serve
```

**Terminal Window B (Vite Live Compilation Pipeline)**
```bash
npm run dev
```

Now, navigate your browser viewport to `http://127.0.0.1:8000` to review the dashboard framework live!

---
Developed with clean code priorities by [Farhan Khan](https://github.com).
