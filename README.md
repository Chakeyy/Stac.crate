# Stac.crate · Developer Toolkits & Starter Packs

> **Web Systems 101 (WS101) Capstone Provisioning Platform**  
> **Curator & Lead Developer**: Charles Sevilla (`charles.sevilla@hnu.edu.ph` · `@charles`)  
> **Institution**: Holy Name University (HNU) · College of Computer Studies  
> **Repository**: [https://github.com/Chakeyy/Stac.crate](https://github.com/Chakeyy/Stac.crate)

---

## 📦 About Stac.crate

**Stac.crate** is a minimalist, student-focused developer vault and starter pack manager. It solves the chaos of lost CDN scripts, database boilerplates, and mock API URLs scattered across group chats and Discord threads.

With Stac.crate, student developers can:
- **Pack tools & snippets**: Group CDN scripts, PDO connections, and mock endpoints into clean, shareable crates.
- **Auto-monitor link health**: Verify HTTP status codes (`200 OK`) and detect broken or deprecated links (`404 Alerts`) before lab grading.
- **1-Click Forking & Copying**: Clone stacks under personal handles or instantly copy raw code with clean zero-friction copy buttons.
- **Command Palette (`⌘K`)**: Rapidly search through all tools, snippets, and crates across the platform.

---

## 🎨 Design System: Warm Paper & Ink

The user interface follows the **Stac.crate Minimalist Warm Paper & Ink** design token specification:

| Token | Hex Value | Role |
|---|---|---|
| `--bg` | `#F7F7F4` | Warm paper base canvas background |
| `--surface` | `#FFFFFF` | Primary card and input surface |
| `--surface-subtle` | `#FBFBF9` | Secondary card background |
| `--surface-muted` | `#EFEFEA` | Input backgrounds and pill badges |
| `--border` | `#E4E4DC` | Crisp hairline dividers |
| `--border-strong` | `#D6D6CE` | Interactive borders & input outlines |
| `--ink` | `#1C1917` | High-contrast dark typography & primary buttons |
| `--ink-secondary` | `#57534E` | Body copy and explanatory labels |
| `--ink-muted` | `#78716C` | Metadata and placeholder hints |
| `--accent` | `#C2410C` | Warm terracotta brand highlight |
| `--accent-bg` | `#FFF7ED` | Subtle accent callout background |
| `--green` | `#15803D` | 200 OK Verified Alive status badge |
| `--red` | `#DC2626` | 404 Deprecated link alert |
| `--blue` | `#0284C7` | Information highlights |

---

## 🖥️ Screen Architecture (7 Core Views + 4 Interactive Overlays)

1. **Sticky Top Navbar**: Dynamic routing links, interactive `⌘K` search palette trigger, active page indicators, and real-time auth pill with `@charles` quick profile jump.
2. **View 1: Scrolling Landing Page (`#view-landing`)**:
   - Hero section with live interactive handle availability checker (`stac.crate/@charles`).
   - Interactive live browser card mockup displaying `@charles/ws101` with working copy buttons.
   - 3-step "How Stac.crate Works" cards with visual mini-previews.
   - Trending Starter Packs at Holy Name University (HNU).
   - Dark Ink CTA banner and university footer with **Reset Demo Data** button.
3. **View 2: Sign In (`#view-signin`)**: Split-screen showcase layout with pre-seeded student credentials (`charles.sevilla@hnu.edu.ph`).
4. **View 3: Sign Up (`#view-signup`)**: Live Identity Card preview displaying `@charles` HNU credentials, live handle validator, and password strength bar.
5. **View 4: Explore Public Crates (`#view-explore`)**: 3-column responsive grid, search bar with live text filter, category pills, and `Verified Alive Only` filter.
6. **View 5: Crate Detail View (`#view-crate`)**: Complete workspace for any crate (`@charles/ws101`, etc.) featuring copyable snippets, category filters, docs links, and curator tips.
7. **View 6: Dashboard Vault (`#view-dashboard`)**:
   - Dynamic metrics: Crates count, total forks, profile views, and link health summary.
   - Live link re-scan animation (`↻ Re-scan links`).
   - Working tabs: `My Crates (4)`, `Forked from Peers (2)`, `Starred Tools (12)`.
   - Direct edit and 404 fix actions.
8. **View 7: Public Handle Profile (`#view-profile`)**: Curator card with avatar, bio, metrics strip, tabs (`Published Crates` and `Forked from Classmates`), and pinned quick-copy snippets.

### Interactive Overlays:
- **Overlay 1: Create / Edit Crate Modal (`#modal-create-crate`)**: Supports creating new crates or editing existing ones with an active tool form builder.
- **Overlay 2: Quick Search Command Palette (`#modal-cmd-k`)**: Triggered via `⌘K` or `Ctrl+K`; provides instant search across all snippets and crates.
- **Overlay 3: 1-Click Fork Crate Modal (`#modal-fork-crate`)**: Lets users clone any crate to their own handle with tool checkboxes and attribution preservation.
- **Overlay 4: Broken Link (404) Auto-Fix Drawer (`#drawer-fix-link`)**: Slide-over drawer to resolve dead URLs (e.g., Stripe webhook docs redirect to quickstart) and update health status to 100% OK.

---

## 💾 State Management & Persistence

All application data is persisted to the browser's `localStorage` under the key `stac_crate_vault_v1`.

### Pre-Seeded Dataset:
- **Curator Profile**: Charles Sevilla (`charles.sevilla@hnu.edu.ph`, `@charles`, BSIT Sophomore at HNU).
- **9 Pre-Configured Crates**:
  1. `ws101`: WS101: Web Dev Starter Pack (6 verified tools: Tailwind CDN, PDO connection, JSONPlaceholder, Tabler Icons, Coolors, DevDocs).
  2. `cs201-dsa`: CS201: Data Structures in C++ (4 tools: STL Vector, VisuAlgo, Big-O table, Clang-Format).
  3. `git-survival`: Git & GitHub Lab Survival (4 tools: Feature branches, SSH setup, .gitignore, Soft reset).
  4. `hackathon-private`: Personal Hackathon Boilerplate (3 tools, includes flagged 404 Stripe link for auto-fix demonstration).
  5. `free-apis`: Zero-Budget Student APIs (Forked from `@dev_miko`).
  6. `figma-ui-vault`: Figma & UI Asset Vault (Forked from `@alyssa_ui`).
  7. `php-auth-sql`: PHP Auth & SQL Boilerplates (By `@carlos_tech`).
  8. `css-flex-grid`: CSS Flex & Grid Cheatsheet (By `@sarah_codes`).
  9. `ph-open-data`: Philippine Open Data & APIs (By `@miguel_data`).
- **Reset Demo Data**: Click `↻ Reset Demo Data` in the footer to restore the original state at any time.

---

## 🚀 Getting Started

No build tools or package managers (`npm`) are required. The project is built with vanilla HTML5, CSS3, and modern JavaScript.

1. Clone the repository:
   ```bash
   git clone https://github.com/Chakeyy/Stac.crate.git
   cd Stac.crate
   ```

2. Open `index.html` in any web browser, or launch a local static server:
   ```bash
   python3 -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser.
