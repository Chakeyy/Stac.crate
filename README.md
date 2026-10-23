# Stac.crate · Developer Toolkits & Starter Packs

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-C2410C?style=for-the-badge&logo=github)](https://chakeyy.github.io/Stac.crate/)
[![Course](https://img.shields.io/badge/Course-WS101%20Web%20Systems-1C1917?style=for-the-badge)](https://github.com/Chakeyy/Stac.crate)
[![Degree](https://img.shields.io/badge/BSIT-2nd%20Year%20Finals-15803D?style=for-the-badge)](https://github.com/Chakeyy/Stac.crate)

> **Live Application**: [https://chakeyy.github.io/Stac.crate/](https://chakeyy.github.io/Stac.crate/)  
> **Course / Subject**: WS101 — Web Systems & Technologies (Finals Project)  
> **Academic Level**: 2nd-Year Bachelor of Science in Information Technology (BSIT)  
> **Institution**: Holy Name University (HNU) · College of Computer Studies  
> **GitHub Author**: [Chakeyy](https://github.com/Chakeyy) (`@Chakeyy`)  
> **Demo Student Persona**: Charles Sevilla (`charles.sevilla@hnu.edu.ph` · `@charles`, 2nd-year BSIT)

---

## 🌐 Live Demo

Explore the fully interactive Single Page Application hosted on GitHub Pages:

👉 **[https://chakeyy.github.io/Stac.crate/](https://chakeyy.github.io/Stac.crate/)**

*Tip: The app comes pre-seeded with 9 starter crates and student data. You can log in with `charles.sevilla@hnu.edu.ph` (any password) or explore as a guest.*

---

## 📦 About Stac.crate

**Stac.crate** is a minimalist, student-focused developer vault and starter pack manager created as a 2nd-year finals project for **WS101 (Web Systems and Technologies)** at **Holy Name University (HNU)**.

In undergraduate computer science and IT lab courses, students constantly lose track of CDN links, database connection boilerplates, API mock endpoints, and CSS cheatsheets scattered across Discord chats, Messenger threads, and temporary text files. **Stac.crate** solves this problem by providing a centralized, shareable crate repository with real-time link health verification.

### Key Capabilities
- **Pack Tools & Snippets**: Group CDN scripts, PDO connections, boilerplate templates, and mock API endpoints into clean, shareable crates.
- **Link Health Monitoring**: Verify HTTP status codes (`200 OK`) and alert on deprecated or broken links (`404 Alert`) before lab submissions and grading.
- **1-Click Forking & Raw Copying**: Clone classmates' crates directly to your personal vault with attribution preserved, or copy snippets with one click.
- **Global Command Palette (`⌘K` / `Ctrl+K`)**: Rapidly search across all tools, crates, categories, and snippets from anywhere in the app.
- **Zero-Dependency Architecture**: Built entirely with pure vanilla HTML5, CSS3 custom properties, and modern ES6+ JavaScript, persisting all state to `localStorage`.

---

## 🎨 Design System: Warm Paper & Ink

The user interface follows an editorial, minimalist **Warm Paper & Ink** design token specification inspired by high-quality stationery and clean developer documentation:

| Token | Hex Value | Role |
|---|---|---|
| `--bg` | `#F7F7F4` | Warm paper base canvas background |
| `--surface` | `#FFFFFF` | Primary card and modal container surface |
| `--surface-subtle` | `#FBFBF9` | Secondary card background and hover states |
| `--surface-muted` | `#EFEFEA` | Input backgrounds, code blocks, and chip pills |
| `--border` | `#E4E4DC` | Crisp hairline dividers |
| `--border-strong` | `#D6D6CE` | Interactive borders, card borders, and input outlines |
| `--ink` | `#1C1917` | High-contrast dark typography & primary dark buttons |
| `--ink-secondary` | `#57534E` | Body copy, secondary text, and descriptive labels |
| `--ink-muted` | `#78716C` | Metadata, timestamps, and placeholder hints |
| `--accent` | `#C2410C` | Warm terracotta brand highlight and primary actions |
| `--accent-bg` | `#FFF7ED` | Subtle terracotta tint for callouts and active pills |
| `--green` | `#15803D` | 200 OK Verified Alive status badge |
| `--red` | `#DC2626` | 404 Deprecated link alert |
| `--blue` | `#0284C7` | Informational highlights and category badges |

---

## 🖥️ Screen Architecture (7 Core Views + 4 Interactive Overlays)

The application implements a responsive Single Page Application (SPA) architecture with hash-based routing:

```
[ Navbar: Logo · Links · ⌘K Search · Auth Status Pill ]
   │
   ├── View 1: Landing Page (#view-landing)
   ├── View 2: Sign In (#view-signin)
   ├── View 3: Sign Up (#view-signup)
   ├── View 4: Explore Crates (#view-explore)
   ├── View 5: Crate Detail Workspace (#view-crate)
   ├── View 6: Dashboard Vault (#view-dashboard)
   └── View 7: Public Profile (#view-profile)
   │
   ├── Overlay 1: Create / Edit Crate Modal (#modal-create-crate)
   ├── Overlay 2: Command Palette (#modal-cmd-k)
   ├── Overlay 3: 1-Click Fork Crate Modal (#modal-fork-crate)
   └── Overlay 4: 404 Broken Link Auto-Fix Drawer (#drawer-fix-link)
```

### 1. Sticky Top Navigation Bar
- Dynamic routing across all views.
- Interactive `⌘K` command palette search trigger.
- Active route highlight indicator.
- Student authentication pill with quick jump to `@charles` profile.

### 2. View 1: Scrolling Landing Page (`#view-landing`)
- **Hero Section**: Live interactive handle availability checker (`stac.crate/@charles`).
- **Interactive Live Crate Card**: Interactive preview of `@charles/ws101` with working copy buttons.
- **Workflow Cards**: 3-step visual guide on packing, verifying link health, and 1-click cloning.
- **Trending Packs**: Live listing of top trending crates at Holy Name University (HNU).
- **CTA Banner & Footer**: Dark Ink callout banner with university details and a **↻ Reset Demo Data** button.

### 3. View 2: Sign In (`#view-signin`)
- Split-screen showcase layout with student perks list.
- Pre-seeded credentials card for instant demo evaluation (`charles.sevilla@hnu.edu.ph`).
- Interactive form with validation and quick-fill demo button.

### 4. View 3: Sign Up (`#view-signup`)
- Live student Identity Card preview updating in real time as the user types.
- Real-time handle format validator (`@username`).
- Dynamic password strength meter with visual bar feedback.

### 5. View 4: Explore Public Crates (`#view-explore`)
- Responsive 3-column crate grid with author handles and badges.
- Live text query search filtering crate titles, descriptions, and tags.
- Category filter pills (All, Web Systems, Data Structures, Git, APIs, UI/UX).
- **Verified Alive Only** toggle filter to hide crates containing dead links.

### 6. View 5: Crate Detail Workspace (`#view-crate`)
- Dedicated workspace for inspecting any crate (e.g., `@charles/ws101`).
- Copyable snippets with zero-friction copy buttons and visual confirmation.
- Direct links to official documentation.
- Curator notes, star counters, and 1-click fork trigger.

### 7. View 6: Dashboard Vault (`#view-dashboard`)
- Curator metrics dashboard: total crates, total forks, views, and link health rating.
- Animated live link scanner (`↻ Re-scan links`).
- 3 filterable tabs: `My Crates (4)`, `Forked from Peers (2)`, and `Starred Tools (12)`.
- Direct crate creation and 404 auto-repair triggers.

### 8. View 7: Public Student Profile (`#view-profile`)
- Student curator identity card with avatar, bio, and university credentials.
- Summary metrics strip (Crates, Community Forks, Starred Tools).
- Filterable tabs: `Published Crates` and `Forked from Classmates`.
- Pinned quick-copy snippet showcase.

---

### Interactive Overlays

- **Overlay 1: Create / Edit Crate Modal (`#modal-create-crate`)**:
  Allows students to author new crates or update existing ones, dynamically adding tools, snippet codes, docs URLs, and tags.
- **Overlay 2: Quick Search Command Palette (`#modal-cmd-k`)**:
  Triggered via keyboard shortcut `⌘K` or `Ctrl+K` (or navbar search button). Offers live fuzzy-matching search across all tools, crates, and snippets.
- **Overlay 3: 1-Click Fork Crate Modal (`#modal-fork-crate`)**:
  Enables students to clone any peer's crate to their own account with individual tool checkboxes and full author attribution preservation.
- **Overlay 4: Broken Link (404) Auto-Fix Drawer (`#drawer-fix-link`)**:
  Slide-over drawer that surfaces dead URLs (such as deprecated Stripe webhook docs) and provides a 1-click update to a verified active replacement URL, bringing crate health back to 100% OK.

---

## 💾 State Management & Persistence

All application data is stored in the browser's `localStorage` under the key:
```javascript
const STORAGE_KEY = 'stac_crate_vault_v1';
```

### Pre-Seeded Dataset
The app initializes automatically with realistic HNU student data:

- **Demo Persona**: Charles Sevilla (`charles.sevilla@hnu.edu.ph` · `@charles`), 2nd-year BSIT student at Holy Name University.
- **9 Pre-Configured Crates**:
  1. `ws101`: **WS101: Web Dev Starter Pack** (6 tools: Tailwind CDN, PDO connection, JSONPlaceholder, Tabler Icons, Coolors, DevDocs).
  2. `cs201-dsa`: **CS201: Data Structures in C++** (4 tools: STL Vector, VisuAlgo, Big-O Cheatsheet, Clang-Format).
  3. `git-survival`: **Git & GitHub Lab Survival** (4 tools: Feature branch workflow, SSH setup, .gitignore, Soft reset).
  4. `hackathon-private`: **Personal Hackathon Boilerplate** (Contains an intentional 404 Stripe docs link for testing the auto-fix drawer).
  5. `free-apis`: **Zero-Budget Student APIs** (Forked from `@dev_miko`).
  6. `figma-ui-vault`: **Figma & UI Asset Vault** (Forked from `@alyssa_ui`).
  7. `php-auth-sql`: **PHP Auth & SQL Boilerplates** (By `@carlos_tech`).
  8. `css-flex-grid`: **CSS Flex & Grid Cheatsheet** (By `@sarah_codes`).
  9. `ph-open-data`: **Philippine Open Data & APIs** (By `@miguel_data`).

> **Resetting Data**: If you modify or delete crates during testing, click **↻ Reset Demo Data** in the footer at any time to restore the initial state.

---

## 🚀 Getting Started & Local Development

Stac.crate is intentionally built without bundlers or package managers (`npm`/`yarn`) so any student can inspect, run, or submit it without environment setup.

### 1. Clone the repository
```bash
git clone https://github.com/Chakeyy/Stac.crate.git
cd Stac.crate
```

### 2. Run locally

You can open `index.html` directly in any modern browser, or run a local static server:

**Using Python 3:**
```bash
python3 -m http.server 8000
```
Then visit: `http://localhost:8000`

**Using Node.js:**
```bash
npx serve .
```

**Using PHP:**
```bash
php -S localhost:8000
```

---

## 📁 Repository Structure

```
Stac.crate/
├── index.html            # Main Single Page Application structure & templates
├── styles.css            # Design token variables & responsive styles
├── app.js                # State store, client router, & UI controllers
├── README.md             # Project documentation & overview
├── preview.html          # Wireframe preview gallery
├── *.svg                 # Figma wireframe exports & screen assets
└── .git/                 # Git version control
```

---

## 🎓 Academic Details & Attribution

- **Project**: WS101 Finals Project — Web Systems & Technologies
- **Curriculum**: Bachelor of Science in Information Technology (BSIT, 2nd Year)
- **Institution**: Holy Name University (HNU) · College of Computer Studies, Tagbilaran City, Bohol, Philippines
- **Author & GitHub Account**: [Chakeyy](https://github.com/Chakeyy) (`@Chakeyy`)
- **Demo Persona**: Charles Sevilla (`@charles` · `charles.sevilla@hnu.edu.ph`)
- **Live Deployment**: [https://chakeyy.github.io/Stac.crate/](https://chakeyy.github.io/Stac.crate/)
