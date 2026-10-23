// === DEFAULT DATA STORE ===
const DEFAULT_USER = {
  name: "Charles Sevilla",
  initials: "CS",
  handle: "charles",
  email: "charles.sevilla@hnu.edu.ph",
  role: "BSIT Sophomore · Holy Name University (HNU)",
  bio: "BSIT Sophomore · Holy Name University (HNU) · Curating Web Systems & backend starter packs.",
  profileViews: 348
};

const DEFAULT_CRATES = [
  {
    id: "ws101",
    slug: "ws101-starter-pack",
    shortUrl: "stac.crate/@charles/ws101",
    title: "WS101: Web Dev Starter Pack",
    handle: "@charles",
    authorName: "Charles Sevilla",
    authorInitials: "CS",
    category: "WS101 Web Dev",
    visibility: "Public",
    forks: 42,
    views: 184,
    updatedAt: "2d ago",
    description: "Essential provision kit for 2nd-year Web Systems: CDN styling, PDO database script, and mock APIs.",
    tools: [
      {
        id: "t1",
        name: "Tailwind CSS Play CDN",
        category: "Frontend",
        healthy: true,
        snippet: '<script src="https://cdn.tailwindcss.com"></script>',
        desc: "Drop directly into your HTML <head> for instant utility styling without npm.",
        tip: "Great for rapid lab prototypes without configuring a build step.",
        docsUrl: "https://tailwindcss.com/docs/installation/play-cdn"
      },
      {
        id: "t2",
        name: "PHP PDO MySQL Connection",
        category: "Backend",
        healthy: true,
        snippet: '$pdo = new PDO("mysql:host=localhost;dbname=app", $user, $pass);',
        desc: "Prepared-statement database connection wrapper preventing SQL injection.",
        tip: "Always use prepared statements with bound parameters in finals.",
        docsUrl: "https://www.php.net/manual/en/book.pdo.php"
      },
      {
        id: "t3",
        name: "JSONPlaceholder Fake REST",
        category: "APIs",
        healthy: true,
        snippet: "https://jsonplaceholder.typicode.com/posts",
        desc: "Zero-auth mock REST endpoint with dummy users, posts, and todos.",
        tip: "Test your JavaScript fetch() calls before wiring up your PHP backend.",
        docsUrl: "https://jsonplaceholder.typicode.com/"
      },
      {
        id: "t4",
        name: "Tabler Icons (5,200+ SVGs)",
        category: "Assets",
        healthy: true,
        snippet: '<svg stroke="currentColor" stroke-width="1.5" fill="none">...</svg>',
        desc: "Open-source MIT vector icons—copy inline SVG code with zero sign-up.",
        tip: "Set stroke-width=\"1.5\" to match modern minimalist interfaces.",
        docsUrl: "https://tabler.io/icons"
      },
      {
        id: "t5",
        name: "Coolors Hex Palette Studio",
        category: "Assets",
        healthy: true,
        snippet: "--ink: #1C1917; --accent: #C2410C; --paper: #F7F7F4;",
        desc: "Generate harmonious color palettes and export directly to CSS variables.",
        tip: "Paste exported variables straight into your :root stylesheet block.",
        docsUrl: "https://coolors.co/"
      },
      {
        id: "t6",
        name: "DevDocs Offline Reference",
        category: "Docs",
        healthy: true,
        snippet: "https://devdocs.io",
        desc: "Fast offline-ready documentation for HTML, CSS, JS, PHP, and MySQL.",
        tip: "Enable offline mode in your browser before lab exams.",
        docsUrl: "https://devdocs.io/"
      }
    ]
  },
  {
    id: "cs201-dsa",
    slug: "cs201-dsa-cpp",
    shortUrl: "stac.crate/@charles/cs201",
    title: "CS201: Data Structures in C++",
    handle: "@charles",
    authorName: "Charles Sevilla",
    authorInitials: "CS",
    category: "WS101 Web Dev",
    visibility: "Public",
    forks: 12,
    views: 92,
    updatedAt: "5d ago",
    description: "STL container cheatsheets, VisuAlgo graph visualizers, Big-O complexity table, and GCC compiler flags.",
    tools: [
      {
        id: "t7",
        name: "STL Vector Cheatsheet",
        category: "Docs",
        healthy: true,
        snippet: "#include <vector>\nstd::vector<int> numbers = {1, 2, 3};\nnumbers.push_back(4);",
        desc: "Quick syntax for push_back, size, iterators, and sorting.",
        tip: "Use reserve() when size is known to avoid reallocation overhead.",
        docsUrl: "https://en.cppreference.com/w/cpp/container/vector"
      },
      {
        id: "t8",
        name: "VisuAlgo Graph Visualizer",
        category: "Assets",
        healthy: true,
        snippet: "https://visualgo.net/en/graphds",
        desc: "Interactive animation of BFS, DFS, Dijkstra, and minimum spanning trees.",
        tip: "Great for tracing graph traversal algorithms step by step before finals.",
        docsUrl: "https://visualgo.net"
      },
      {
        id: "t9",
        name: "Big-O Complexity Reference",
        category: "Docs",
        healthy: true,
        snippet: "Array: O(1) access, O(n) search | BST: O(log n) avg | Hash: O(1) avg",
        desc: "Time and space complexity cheat sheet for sorting algorithms and data structures.",
        tip: "Bookmark this for algorithm analysis exams.",
        docsUrl: "https://www.bigocheatsheet.com/"
      },
      {
        id: "t10",
        name: "Clang-Format Lab Config",
        category: "Frontend",
        healthy: true,
        snippet: "BasedOnStyle: Google\nIndentWidth: 4\nColumnLimit: 100",
        desc: "Universal C++ code formatting file for clean lab submission indentation.",
        tip: "Place in repo root to auto-format files on save in VS Code.",
        docsUrl: "https://clang.llvm.org/docs/ClangFormat.html"
      }
    ]
  },
  {
    id: "git-survival",
    slug: "git-lab-survival",
    shortUrl: "stac.crate/@charles/git",
    title: "Git & GitHub Lab Survival",
    handle: "@charles",
    authorName: "Charles Sevilla",
    authorInitials: "CS",
    category: "WS101 Web Dev",
    visibility: "Public",
    forks: 7,
    views: 64,
    updatedAt: "1w ago",
    description: "Copy-paste terminal commands for branching, resolving merge conflicts, and pushing group lab repositories.",
    tools: [
      {
        id: "t11",
        name: "Git Feature Branch Workflow",
        category: "Backend",
        healthy: true,
        snippet: "git checkout -b feature/login\ngit add .\ngit commit -m \"Add auth\"\ngit push origin feature/login",
        desc: "Standard branch creation, staging, and push workflow for group assignments.",
        tip: "Never push directly to main during group sprint deadlines.",
        docsUrl: "https://git-scm.com/docs/git-checkout"
      },
      {
        id: "t12",
        name: "SSH Key Setup Snippet",
        category: "Backend",
        healthy: true,
        snippet: 'ssh-keygen -t ed25519 -C "charles.sevilla@hnu.edu.ph"',
        desc: "Generate modern ed25519 SSH keys for GitHub authentication without personal tokens.",
        tip: "Test connection with ssh -T git@github.com after adding to GitHub keys.",
        docsUrl: "https://docs.github.com/en/authentication"
      },
      {
        id: "t13",
        name: "Standard Node/PHP .gitignore",
        category: "Assets",
        healthy: true,
        snippet: "node_modules/\nvendor/\n.env\n*.log\n.DS_Store",
        desc: "Essential ignores for PHP, Composer, and Node.js web development assignments.",
        tip: "Add this before running git add . on fresh projects.",
        docsUrl: "https://git-scm.com/docs/gitignore"
      },
      {
        id: "t14",
        name: "Undo Last Commit Soft Reset",
        category: "Backend",
        healthy: true,
        snippet: "git reset --soft HEAD~1",
        desc: "Un-commit the most recent commit while keeping all modified files intact in stage.",
        tip: "Perfect when you forgot to include a file or typo'd the commit message.",
        docsUrl: "https://git-scm.com/docs/git-reset"
      }
    ]
  },
  {
    id: "hackathon-private",
    slug: "personal-hackathon-boilerplate",
    shortUrl: "stac.crate/@charles/hackathon",
    title: "Personal Hackathon Boilerplate",
    handle: "@charles",
    authorName: "Charles Sevilla",
    authorInitials: "CS",
    category: "Free APIs",
    visibility: "Private",
    forks: 0,
    views: 8,
    updatedAt: "1d ago",
    description: "Rapid auth, webhook testing, and transactional email helpers for 24-hour student hackathons.",
    tools: [
      {
        id: "t15",
        name: "Supabase JS Auth Client",
        category: "Backend",
        healthy: true,
        snippet: "const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);",
        desc: "Instant email & OAuth authentication client for web apps.",
        tip: "Store keys in .env.local before pushing to GitHub.",
        docsUrl: "https://supabase.com/docs"
      },
      {
        id: "t16",
        name: "Stripe Test Webhook CLI Docs",
        category: "APIs",
        healthy: false,
        brokenUrl: "https://stripe.com/docs/webhooks/test-local-v1",
        suggestedUrl: "https://docs.stripe.com/webhooks/quickstart",
        snippet: "https://stripe.com/docs/webhooks/test-local-v1",
        desc: "Local webhook forwarding documentation for payment events.",
        tip: "Flagged 404: Page moved to docs.stripe.com/webhooks/quickstart.",
        docsUrl: "https://stripe.com/docs/webhooks/test-local-v1"
      },
      {
        id: "t17",
        name: "Resend Transactional Email",
        category: "APIs",
        healthy: true,
        snippet: 'await resend.emails.send({ from: "onboarding@resend.dev", to, subject, html });',
        desc: "Zero-config transactional email API for student projects.",
        tip: "Free tier includes 3,000 emails/month with zero credit card.",
        docsUrl: "https://resend.com/docs"
      }
    ]
  },
  {
    id: "free-apis",
    slug: "zero-budget-student-apis",
    shortUrl: "stac.crate/@dev_miko/free-apis",
    title: "Zero-Budget Student APIs",
    handle: "@dev_miko",
    authorName: "Miko Santos",
    authorInitials: "MS",
    category: "Free APIs",
    visibility: "Public",
    isForkedByCharles: true,
    forkedFrom: "@dev_miko",
    forks: 29,
    views: 210,
    updatedAt: "3d ago",
    description: "Public REST APIs with CORS enabled and zero API keys. Ideal for practicing JavaScript fetch() and async UI.",
    tools: [
      {
        id: "t18",
        name: "DummyJSON Products & Users API",
        category: "APIs",
        healthy: true,
        snippet: "https://dummyjson.com/products",
        desc: "Rich fake eCommerce items, users, and carts for building store frontends.",
        tip: "Supports pagination with ?limit=10&skip=10 query parameters.",
        docsUrl: "https://dummyjson.com"
      },
      {
        id: "t19",
        name: "Open-Meteo Weather JSON",
        category: "APIs",
        healthy: true,
        snippet: "https://api.open-meteo.com/v1/forecast?latitude=9.64&longitude=123.85&current_weather=true",
        desc: "Free weather forecast API with Bohol / Tagbilaran coordinates pre-configured.",
        tip: "Completely open endpoint without API keys or rate limiting for student apps.",
        docsUrl: "https://open-meteo.com"
      },
      {
        id: "t20",
        name: "Public IP Geolocation JSON",
        category: "APIs",
        healthy: true,
        snippet: "https://ipapi.co/json/",
        desc: "Detect client IP, city, region, and ISP in a single JSON call.",
        tip: "Use for setting default language or country selection in checkout labs.",
        docsUrl: "https://ipapi.co"
      },
      {
        id: "t21",
        name: "REST Countries & Flags Endpoint",
        category: "APIs",
        healthy: true,
        snippet: "https://restcountries.com/v3.1/all?fields=name,flags,capital",
        desc: "Official country names, SVG flag images, and ISO alpha codes.",
        tip: "Filter fields in URL to minimize JSON payload size.",
        docsUrl: "https://restcountries.com"
      }
    ]
  },
  {
    id: "figma-ui-vault",
    slug: "figma-ui-asset-vault",
    shortUrl: "stac.crate/@alyssa_ui/figma-vault",
    title: "Figma & UI Asset Vault",
    handle: "@alyssa_ui",
    authorName: "Alyssa Cruz",
    authorInitials: "AC",
    category: "UI & Icons",
    visibility: "Public",
    isForkedByCharles: true,
    forkedFrom: "@alyssa_ui",
    forks: 35,
    views: 195,
    updatedAt: "4d ago",
    description: "Free SVG icon libraries, hex palette generators, and wireframe kits that export cleanly to HTML and CSS.",
    tools: [
      {
        id: "t22",
        name: "Lucide SVG Icons",
        category: "Assets",
        healthy: true,
        snippet: '<i data-lucide="folder-code"></i>\n<script src="https://unpkg.com/lucide@latest"></script>',
        desc: "Modern community-maintained SVG icon toolkit with 1,400+ vector glyphs.",
        tip: "Call lucide.createIcons() once in DOMContentLoaded.",
        docsUrl: "https://lucide.dev"
      },
      {
        id: "t23",
        name: "Google Fonts Inter & JetBrains Mono",
        category: "Frontend",
        healthy: true,
        snippet: '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">',
        desc: "Pairing high-contrast sans-serif body text with clean monospace code snippets.",
        tip: "Add preconnect links before the font stylesheet to avoid render block.",
        docsUrl: "https://fonts.google.com"
      },
      {
        id: "t24",
        name: "Modern CSS Reset Snippet",
        category: "Frontend",
        healthy: true,
        snippet: "*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }",
        desc: "Eliminates browser margin inconsistencies and fixes box model calculation.",
        tip: "Put this at line 1 of every project stylesheet.",
        docsUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS"
      },
      {
        id: "t25",
        name: "Unsplash Source Image URL",
        category: "Assets",
        healthy: true,
        snippet: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        desc: "High quality royalty-free placeholder image for developer portfolio demos.",
        tip: "Adjust w= query parameter to request correctly sized responsive images.",
        docsUrl: "https://unsplash.com"
      }
    ]
  },
  {
    id: "php-auth-sql",
    slug: "php-auth-sql-boilerplates",
    shortUrl: "stac.crate/@carlos_tech/php-auth",
    title: "PHP Auth & SQL Boilerplates",
    handle: "@carlos_tech",
    authorName: "Carlos Reyes",
    authorInitials: "CR",
    category: "PHP & MySQL",
    visibility: "Public",
    forks: 19,
    views: 142,
    updatedAt: "6d ago",
    description: "Session login handlers, bcrypt password hashing, and prepared statement wrappers for college finals.",
    tools: [
      {
        id: "t26",
        name: "PDO Prepared Statement Query",
        category: "Backend",
        healthy: true,
        snippet: '$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");\n$stmt->execute([$email]);\n$user = $stmt->fetch();',
        desc: "Parameterized PDO execution preventing SQL injections completely.",
        tip: "Never concatenate raw variables directly into SQL strings.",
        docsUrl: "https://www.php.net/manual/en/pdo.prepare.php"
      },
      {
        id: "t27",
        name: "Password Hash & Verify Bcrypt",
        category: "Backend",
        healthy: true,
        snippet: '$hash = password_hash($password, PASSWORD_BCRYPT);\nif (password_verify($input, $hash)) { echo "authenticated"; }',
        desc: "Secure standard cryptographic hashing algorithm built into modern PHP.",
        tip: "Store hashes in VARCHAR(255) columns in MySQL tables.",
        docsUrl: "https://www.php.net/manual/en/function.password-hash.php"
      },
      {
        id: "t28",
        name: "PHP Session Auth Guard",
        category: "Backend",
        healthy: true,
        snippet: 'session_start();\nif (!isset($_SESSION["user_id"])) {\n    header("Location: login.php");\n    exit();\n}',
        desc: "Essential authorization check protecting student dashboard routes.",
        tip: "Always invoke exit() immediately after sending a Location redirect.",
        docsUrl: "https://www.php.net/manual/en/book.session.php"
      },
      {
        id: "t29",
        name: "MySQL Users Table Schema",
        category: "Backend",
        healthy: true,
        snippet: "CREATE TABLE users (\n    id INT AUTO_INCREMENT PRIMARY KEY,\n    email VARCHAR(191) UNIQUE NOT NULL,\n    password_hash VARCHAR(255) NOT NULL,\n    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);",
        desc: "Strict utf8mb4 users table structure with unique index on email.",
        tip: "Use VARCHAR(191) for indexed columns under MySQL InnoDB limits.",
        docsUrl: "https://dev.mysql.com/doc/"
      }
    ]
  },
  {
    id: "css-flex-grid",
    slug: "css-flex-grid-cheatsheet",
    shortUrl: "stac.crate/@sarah_codes/css-grid",
    title: "CSS Flex & Grid Cheatsheet",
    handle: "@sarah_codes",
    authorName: "Sarah Lim",
    authorInitials: "SL",
    category: "UI & Icons",
    visibility: "Public",
    forks: 14,
    views: 118,
    updatedAt: "1w ago",
    description: "Interactive visual guides for centering layouts, grid template areas, and responsive mobile breakpoints.",
    tools: [
      {
        id: "t30",
        name: "Auto-Fit Responsive CSS Grid",
        category: "Frontend",
        healthy: true,
        snippet: "display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\ngap: 1.5rem;",
        desc: "Fluid card grid that wraps smoothly on smartphones without writing media queries.",
        tip: "The auto-fit keyword stretches columns to fill remaining container space.",
        docsUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
      },
      {
        id: "t31",
        name: "Flexbox Sticky Footer Layout",
        category: "Frontend",
        healthy: true,
        snippet: "body { min-height: 100vh; display: flex; flex-direction: column; }\nmain { flex: 1; }",
        desc: "Guarantees footer stays pinned to the viewport bottom on short pages.",
        tip: "Give the main content container flex: 1 to absorb remaining vertical height.",
        docsUrl: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox"
      },
      {
        id: "t32",
        name: "Clamp() Fluid Typography",
        category: "Frontend",
        healthy: true,
        snippet: "font-size: clamp(1.5rem, 4vw + 1rem, 3rem);",
        desc: "Scales heading font smoothly between minimum and maximum boundaries.",
        tip: "Replaces multiple font-size breakpoints with one single declaration.",
        docsUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp"
      }
    ]
  },
  {
    id: "ph-open-data",
    slug: "philippine-open-data-apis",
    shortUrl: "stac.crate/@miguel_data/ph-data",
    title: "Philippine Open Data & APIs",
    handle: "@miguel_data",
    authorName: "Miguel Tan",
    authorInitials: "MT",
    category: "Free APIs",
    visibility: "Public",
    forks: 22,
    views: 164,
    updatedAt: "3d ago",
    description: "Localized datasets for capstone projects: PH zip codes, PSGC geographic codes, and PAGASA weather feeds.",
    tools: [
      {
        id: "t33",
        name: "PSGC Regions & Provinces JSON",
        category: "APIs",
        healthy: true,
        snippet: "https://psgc.gitlab.io/api/regions/",
        desc: "Philippine Standard Geographic Code API listing all 17 administrative regions.",
        tip: "Access /api/provinces/ and /api/cities-municipalities/ for cascading dropdowns.",
        docsUrl: "https://psgc.gitlab.io/api/"
      },
      {
        id: "t34",
        name: "PH Postal & Zip Code Lookup",
        category: "APIs",
        healthy: true,
        snippet: "https://raw.githubusercontent.com/sunnyp/philippine-zip-codes/master/zipcodes.json",
        desc: "Raw JSON mapping of all Philippine postal zip codes by city and province.",
        tip: "Cache this JSON in localStorage to prevent repeated network requests.",
        docsUrl: "https://github.com/sunnyp/philippine-zip-codes"
      },
      {
        id: "t35",
        name: "PAGASA Tropical Cyclone Feed",
        category: "APIs",
        healthy: true,
        snippet: "https://bagong.pagasa.dost.gov.ph/weather/cyclone-bulletin",
        desc: "Official storm bulletins, typhoon tracks, and tropical cyclone warning signals.",
        tip: "Ideal for student disaster preparedness systems and capstone apps.",
        docsUrl: "https://bagong.pagasa.dost.gov.ph"
      }
    ]
  }
];

const STORAGE_KEY = "stac_crate_vault_v1";

// === APPLICATION STATE ===
const state = {
  user: null,
  crates: [],
  activeView: "landing",
  activeCrateId: "ws101",
  exploreCategory: "All",
  exploreAliveOnly: false,
  exploreSearchQuery: "",
  dashboardTab: "my-crates",
  profileTab: "published",
  crateCategoryFilter: "All",
  modalCrateDraftTools: []
};

// === STORAGE HELPERS ===
function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state.user = parsed.user || DEFAULT_USER;
      state.crates = Array.isArray(parsed.crates) && parsed.crates.length > 0 ? parsed.crates : DEFAULT_CRATES;
      return;
    }
  } catch (error) {
    console.error(error);
  }
  state.user = { ...DEFAULT_USER };
  state.crates = JSON.parse(JSON.stringify(DEFAULT_CRATES));
  saveStateToStorage();
}

function saveStateToStorage() {
  try {
    const payload = {
      user: state.user,
      crates: state.crates
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.error(error);
  }
}

function resetDemoData() {
  localStorage.removeItem(STORAGE_KEY);
  state.user = { ...DEFAULT_USER };
  state.crates = JSON.parse(JSON.stringify(DEFAULT_CRATES));
  saveStateToStorage();
  showToast("Demo data reset to factory default!", "success");
  renderAllViews();
}

// === CLIPBOARD & TOAST SYSTEM ===
function showToast(message, type = "normal") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type === "success" ? "toast-success" : ""}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.2s ease";
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 200);
  }, 2500);
}

function copyToClipboard(text, triggerButton) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      handleCopySuccess(triggerButton);
    }).catch(() => {
      fallbackCopy(text, triggerButton);
    });
  } else {
    fallbackCopy(text, triggerButton);
  }
}

function fallbackCopy(text, triggerButton) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand("copy");
    handleCopySuccess(triggerButton);
  } catch (err) {
    showToast("Unable to copy to clipboard", "normal");
  }
  document.body.removeChild(textarea);
}

function handleCopySuccess(triggerButton) {
  showToast("✓ Copied to clipboard!", "success");
  if (triggerButton) {
    const originalText = triggerButton.getAttribute("data-original-text") || triggerButton.textContent;
    triggerButton.setAttribute("data-original-text", originalText);
    triggerButton.textContent = "✓ Copied";
    triggerButton.style.backgroundColor = "var(--green-bg)";
    triggerButton.style.borderColor = "var(--green-border)";
    triggerButton.style.color = "var(--green)";

    setTimeout(() => {
      triggerButton.textContent = originalText;
      triggerButton.style.backgroundColor = "";
      triggerButton.style.borderColor = "";
      triggerButton.style.color = "";
    }, 1800);
  }
}

// === ROUTING & NAVIGATION ===
function navigateTo(viewName, param = null) {
  const targetView = document.getElementById(`view-${viewName}`);
  if (!targetView) return;

  state.activeView = viewName;

  if (viewName === "crate") {
    if (param) state.activeCrateId = param;
    state.crateCategoryFilter = "All";
  }

  document.querySelectorAll(".view-panel").forEach(panel => {
    panel.classList.remove("active");
  });
  targetView.classList.add("active");

  updateNavActiveLinks();

  if (viewName === "landing") renderLandingView();
  else if (viewName === "explore") renderExploreView();
  else if (viewName === "crate") renderCrateDetailView();
  else if (viewName === "dashboard") renderDashboardView();
  else if (viewName === "profile") renderProfileView();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateNavActiveLinks() {
  document.querySelectorAll(".nav-link").forEach(link => {
    const v = link.getAttribute("data-view");
    if (v === state.activeView) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  renderNavAuthArea();
}

function renderNavAuthArea() {
  const container = document.getElementById("nav-auth-container");
  if (!container) return;

  if (state.user) {
    container.innerHTML = `
      <div class="nav-user-pill" id="nav-user-profile-btn" title="View Public Profile">
        <span class="user-avatar-xs">${state.user.initials || "CS"}</span>
        <span>@${state.user.handle}</span>
      </div>
      <a href="#dashboard" class="btn btn-xs btn-outline nav-extra-link">Dashboard</a>
      <button type="button" class="btn-out" id="nav-btn-logout" title="Sign Out">Out</button>
    `;

    const profilePill = document.getElementById("nav-user-profile-btn");
    if (profilePill) {
      profilePill.addEventListener("click", () => navigateTo("profile"));
    }

    const logoutBtn = document.getElementById("nav-btn-logout");
    if (logoutBtn) {
      logoutBtn.addEventListener("click", () => {
        state.user = null;
        saveStateToStorage();
        renderNavAuthArea();
        navigateTo("landing");
        showToast("Signed out of Stac.crate");
      });
    }
  } else {
    container.innerHTML = `
      <a href="#signin" class="btn btn-xs btn-outline">Sign In</a>
      <a href="#signup" class="btn btn-xs btn-accent nav-extra-link">Claim Handle →</a>
    `;
  }
}

// === NAVBAR RENDERING ===
function setupNavbarEvents() {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const view = link.getAttribute("data-view");
      const crateId = link.getAttribute("data-crate-id");
      navigateTo(view, crateId);
    });
  });

  const logo = document.getElementById("brand-logo");
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("landing");
    });
  }

  const searchTrigger = document.getElementById("nav-search-trigger");
  if (searchTrigger) {
    searchTrigger.addEventListener("click", () => openCommandPalette());
  }
}

// === LANDING VIEW RENDERING ===
function renderLandingView() {
  const trendingGrid = document.getElementById("landing-trending-grid");
  if (!trendingGrid) return;

  const featured = state.crates.slice(0, 3);
  trendingGrid.innerHTML = featured.map(crate => generateCrateCardHtml(crate)).join("");

  trendingGrid.querySelectorAll(".crate-card").forEach(card => {
    card.addEventListener("click", () => {
      const cid = card.getAttribute("data-id");
      navigateTo("crate", cid);
    });
  });

  const handleInput = document.getElementById("landing-handle-input");
  const handleStatus = document.getElementById("landing-handle-status");
  const claimBtn = document.getElementById("landing-claim-btn");

  if (handleInput && handleStatus) {
    handleInput.addEventListener("input", () => {
      const val = handleInput.value.trim().toLowerCase();
      if (val.length === 0) {
        handleStatus.textContent = "Enter handle";
        handleStatus.style.color = "var(--ink-muted)";
      } else {
        handleStatus.textContent = "✓ Available";
        handleStatus.style.color = "var(--green)";
      }
    });
  }

  if (claimBtn && handleInput) {
    claimBtn.addEventListener("click", () => {
      const val = handleInput.value.trim().toLowerCase() || "charles";
      const signupHandle = document.getElementById("signup-handle");
      if (signupHandle) signupHandle.value = val;
      navigateTo("signup");
    });
  }

  const ctaBtn = document.getElementById("cta-claim-btn");
  const ctaInput = document.getElementById("cta-handle-input");
  if (ctaBtn && ctaInput) {
    ctaBtn.addEventListener("click", () => {
      const val = ctaInput.value.trim().toLowerCase() || "charles";
      const signupHandle = document.getElementById("signup-handle");
      if (signupHandle) signupHandle.value = val;
      navigateTo("signup");
    });
  }
}

function generateCrateCardHtml(crate) {
  const allHealthy = crate.tools && crate.tools.every(t => t.healthy);
  const tagList = (crate.tools || []).slice(0, 2).map(t => `<span class="tool-chip">${escapeHtml(t.name)}</span>`).join("");
  const extraCount = (crate.tools || []).length > 2 ? `<span class="tool-chip">+${(crate.tools || []).length - 2}</span>` : "";

  return `
    <div class="crate-card" data-id="${crate.id}">
      <div class="crate-card-header">
        <div class="crate-card-status-title">
          <span class="${allHealthy ? "alive-dot" : "alert-dot-red"}"></span>
          <h3 class="crate-card-title">${escapeHtml(crate.title)}</h3>
        </div>
        <span class="visibility-pill">${escapeHtml(crate.visibility || "Public")}</span>
      </div>

      <p class="crate-card-desc">${escapeHtml(crate.description)}</p>

      <div class="crate-card-tags">
        ${tagList}
        ${extraCount}
      </div>

      <div class="crate-card-footer">
        <div class="crate-card-author">
          <span class="author-avatar-sm">${escapeHtml(crate.authorInitials || "CS")}</span>
          <span>${escapeHtml(crate.handle)}</span>
        </div>
        <div class="crate-card-forks">
          <span>🍴 ${crate.forks || 0}</span>
        </div>
      </div>
    </div>
  `;
}

// === AUTH VIEWS RENDERING ===
function setupAuthForms() {
  const formSignIn = document.getElementById("form-signin");
  if (formSignIn) {
    formSignIn.addEventListener("submit", () => {
      const email = document.getElementById("signin-email").value.trim();
      state.user = { ...DEFAULT_USER, email: email || DEFAULT_USER.email };
      saveStateToStorage();
      renderNavAuthArea();
      navigateTo("dashboard");
      showToast(`Welcome back, ${state.user.name}!`, "success");
    });
  }

  const formSignUp = document.getElementById("form-signup");
  if (formSignUp) {
    formSignUp.addEventListener("submit", () => {
      const name = document.getElementById("signup-name").value.trim() || DEFAULT_USER.name;
      const handle = document.getElementById("signup-handle").value.trim() || DEFAULT_USER.handle;
      const email = document.getElementById("signup-email").value.trim() || DEFAULT_USER.email;
      const initials = name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase() || "CS";

      state.user = {
        name,
        handle,
        email,
        initials,
        role: "BSIT Sophomore · Holy Name University (HNU)",
        bio: `BSIT Sophomore · Holy Name University (HNU) · Curating ${handle}'s starter packs.`,
        profileViews: 1
      };
      saveStateToStorage();
      renderNavAuthArea();
      navigateTo("dashboard");
      showToast(`Account @${handle} registered successfully!`, "success");
    });
  }

  const signupNameInput = document.getElementById("signup-name");
  const signupHandleInput = document.getElementById("signup-handle");
  const previewIdName = document.getElementById("preview-id-name");
  const previewIdUrl = document.getElementById("preview-id-url");

  if (signupNameInput && previewIdName) {
    signupNameInput.addEventListener("input", () => {
      previewIdName.textContent = signupNameInput.value.trim() || "Charles Sevilla";
    });
  }

  if (signupHandleInput && previewIdUrl) {
    signupHandleInput.addEventListener("input", () => {
      const h = signupHandleInput.value.trim() || "charles";
      previewIdUrl.textContent = `Public profile: stac.crate/@${h}`;
    });
  }
}

// === EXPLORE VIEW RENDERING ===
function renderExploreView() {
  const grid = document.getElementById("explore-crates-grid");
  if (!grid) return;

  const publicCrates = state.crates.filter(c => c.visibility === "Public");

  const filtered = publicCrates.filter(c => {
    if (state.exploreCategory !== "All" && c.category !== state.exploreCategory) {
      return false;
    }
    if (state.exploreAliveOnly) {
      const allHealthy = c.tools && c.tools.every(t => t.healthy);
      if (!allHealthy) return false;
    }
    if (state.exploreSearchQuery) {
      const q = state.exploreSearchQuery.toLowerCase();
      const inTitle = c.title.toLowerCase().includes(q);
      const inDesc = c.description.toLowerCase().includes(q);
      const inHandle = c.handle.toLowerCase().includes(q);
      const inTools = (c.tools || []).some(t => t.name.toLowerCase().includes(q) || (t.snippet && t.snippet.toLowerCase().includes(q)));
      if (!inTitle && !inDesc && !inHandle && !inTools) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: span 3; text-align: center; padding: 48px; background: var(--surface); border-radius: var(--radius-lg); border: 1px dashed var(--border-strong);">
        <h3 style="font-size: 16px; font-weight: 700; color: var(--ink);">No public crates found</h3>
        <p style="font-size: 13px; color: var(--ink-secondary); margin-top: 6px;">Try adjusting your search query or category filter.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(c => generateCrateCardHtml(c)).join("");

  grid.querySelectorAll(".crate-card").forEach(card => {
    card.addEventListener("click", () => {
      const cid = card.getAttribute("data-id");
      navigateTo("crate", cid);
    });
  });
}

function setupExploreEvents() {
  const categoryContainer = document.getElementById("explore-categories");
  if (categoryContainer) {
    categoryContainer.querySelectorAll(".filter-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        categoryContainer.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        state.exploreCategory = pill.getAttribute("data-category");
        renderExploreView();
      });
    });
  }

  const toggleAliveBtn = document.getElementById("explore-toggle-alive");
  if (toggleAliveBtn) {
    toggleAliveBtn.addEventListener("click", () => {
      state.exploreAliveOnly = !state.exploreAliveOnly;
      if (state.exploreAliveOnly) {
        toggleAliveBtn.classList.add("active");
      } else {
        toggleAliveBtn.classList.remove("active");
      }
      renderExploreView();
    });
  }

  const searchInput = document.getElementById("explore-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      state.exploreSearchQuery = searchInput.value.trim();
      renderExploreView();
    });
  }
}

// === CRATE DETAIL VIEW RENDERING ===
function renderCrateDetailView() {
  const crate = state.crates.find(c => c.id === state.activeCrateId) || state.crates[0];
  if (!crate) return;

  const breadHandle = document.getElementById("crate-bread-handle");
  const breadSlug = document.getElementById("crate-bread-slug");
  if (breadHandle) breadHandle.textContent = crate.handle;
  if (breadSlug) breadSlug.textContent = crate.slug || crate.id;

  const titleEl = document.getElementById("crate-detail-title");
  const descEl = document.getElementById("crate-detail-description");
  const visEl = document.getElementById("crate-detail-visibility");
  if (titleEl) titleEl.textContent = crate.title;
  if (descEl) descEl.textContent = crate.description;
  if (visEl) visEl.textContent = crate.visibility || "Public";

  const avatarEl = document.getElementById("crate-author-avatar");
  const metaEl = document.getElementById("crate-author-meta");
  if (avatarEl) avatarEl.textContent = crate.authorInitials || "CS";

  const tools = crate.tools || [];
  const healthyCount = tools.filter(t => t.healthy).length;
  const isAllHealthy = healthyCount === tools.length && tools.length > 0;

  if (metaEl) {
    metaEl.innerHTML = `Curated by ${escapeHtml(crate.authorName || "Charles Sevilla")} (${escapeHtml(crate.handle)}) · Updated ${escapeHtml(crate.updatedAt || "recently")} · <span class="${isAllHealthy ? "alive-dot" : "alert-dot-red"}"></span> ${healthyCount}/${tools.length} links healthy`;
  }

  const copyUrlBtn = document.getElementById("crate-copy-url-btn");
  const shortUrlText = document.getElementById("crate-short-url-text");
  const targetShortUrl = crate.shortUrl || `stac.crate/${crate.handle}/${crate.id}`;
  if (shortUrlText) shortUrlText.textContent = targetShortUrl;
  if (copyUrlBtn) copyUrlBtn.setAttribute("data-copy", targetShortUrl);

  const forkCount = document.getElementById("crate-fork-count");
  if (forkCount) forkCount.textContent = crate.forks || 0;

  const forkBtn = document.getElementById("crate-fork-btn");
  if (forkBtn) {
    forkBtn.onclick = () => openForkModal(crate);
  }

  renderCrateToolCategories(tools);
  renderCrateToolsGrid(tools);
}

function renderCrateToolCategories(tools) {
  const catContainer = document.getElementById("crate-tools-categories");
  if (!catContainer) return;

  const cats = new Set(["All"]);
  tools.forEach(t => {
    if (t.category) cats.add(t.category);
  });

  catContainer.innerHTML = Array.from(cats).map(cat => {
    const isActive = cat === state.crateCategoryFilter;
    const count = cat === "All" ? tools.length : tools.filter(t => t.category === cat).length;
    return `<button class="filter-pill ${isActive ? "active" : ""}" data-category="${cat}">${cat} (${count})</button>`;
  }).join("");

  catContainer.querySelectorAll(".filter-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      state.crateCategoryFilter = pill.getAttribute("data-category");
      catContainer.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      renderCrateToolsGrid(tools);
    });
  });
}

function renderCrateToolsGrid(tools) {
  const grid = document.getElementById("crate-tools-grid");
  if (!grid) return;

  const filtered = tools.filter(t => {
    if (state.crateCategoryFilter === "All") return true;
    return t.category === state.crateCategoryFilter;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="grid-column: span 2; color: var(--ink-muted); text-align: center; padding: 32px;">No tools in this category.</p>`;
    return;
  }

  grid.innerHTML = filtered.map(t => `
    <div class="tool-card">
      <div class="tool-card-header">
        <div class="tool-name-group">
          <span class="${t.healthy ? "alive-dot" : "alert-dot-red"}"></span>
          <h3 class="tool-card-name">${escapeHtml(t.name)}</h3>
          <span class="tool-category-badge">${escapeHtml(t.category || "General")}</span>
        </div>
        ${t.docsUrl ? `<a href="${escapeHtml(t.docsUrl)}" target="_blank" rel="noopener" class="tool-docs-link">Docs ↗</a>` : ""}
      </div>

      <p class="tool-card-desc">${escapeHtml(t.desc || "")}</p>

      <div class="tool-snippet-block">
        <code class="tool-code">${escapeHtml(t.snippet || "")}</code>
        <button class="btn btn-xs btn-outline copy-trigger" data-copy="${escapeHtml(t.snippet || "")}">Copy</button>
      </div>

      ${t.tip ? `<div class="tool-tip-box">💡 ${escapeHtml(t.tip)}</div>` : ""}
    </div>
  `).join("");

  attachCopyButtons(grid);
}

// === DASHBOARD VAULT VIEW RENDERING ===
function renderDashboardView() {
  const metricsStrip = document.getElementById("dashboard-metrics-strip");
  const healthBadge = document.getElementById("dashboard-health-badge");

  const myCrates = state.crates.filter(c => c.handle === "@charles");
  const forkedCrates = state.crates.filter(c => c.isForkedByCharles);

  let totalForks = 0;
  let totalTools = 0;
  let healthyTools = 0;

  myCrates.forEach(c => {
    totalForks += c.forks || 0;
    (c.tools || []).forEach(t => {
      totalTools++;
      if (t.healthy) healthyTools++;
    });
  });

  const brokenCount = totalTools - healthyTools;

  if (metricsStrip) {
    metricsStrip.innerHTML = `
      <span class="metric-item">${myCrates.length} Crates</span>
      <span class="metric-sep">·</span>
      <span class="metric-item">${totalForks} Total Forks</span>
      <span class="metric-sep">·</span>
      <span class="metric-item">${state.user ? state.user.profileViews || 348 : 348} Profile Views</span>
      <span class="metric-sep">·</span>
      <span class="metric-health-badge ${brokenCount === 0 ? "health-ok" : "health-warning"}" id="dashboard-health-badge">
        ${brokenCount === 0 ? `● ${healthyTools}/${totalTools} Links Alive` : `⚠️ ${healthyTools}/${totalTools} Links Alive (${brokenCount} Flagged 404)`}
      </span>
    `;
  }

  const tabMyCrates = document.getElementById("tab-my-crates");
  const tabForked = document.getElementById("tab-forked");
  if (tabMyCrates) tabMyCrates.textContent = `My Crates (${myCrates.length})`;
  if (tabForked) tabForked.textContent = `Forked from Peers (${forkedCrates.length})`;

  renderVaultRows(myCrates, forkedCrates);
}

function renderVaultRows(myCrates, forkedCrates) {
  const container = document.getElementById("vault-rows-list");
  if (!container) return;

  let activeList = [];
  if (state.dashboardTab === "my-crates") {
    activeList = myCrates;
  } else if (state.dashboardTab === "forked") {
    activeList = forkedCrates;
  } else if (state.dashboardTab === "starred") {
    activeList = myCrates.slice(0, 2);
  }

  if (activeList.length === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--ink-muted);">No crates in this tab.</div>`;
    return;
  }

  container.innerHTML = activeList.map(crate => {
    const tools = crate.tools || [];
    const healthyCount = tools.filter(t => t.healthy).length;
    const isHealthy = healthyCount === tools.length && tools.length > 0;
    const toolsSummary = tools.map(t => t.name).join(", ");
    const hasBrokenTool = tools.some(t => !t.healthy);

    return `
      <div class="vault-row">
        <div class="vault-row-main">
          <div class="vault-row-header">
            <span class="${isHealthy ? "alive-dot" : "alert-dot-red"}"></span>
            <span class="vault-row-title" data-crate-id="${crate.id}">${escapeHtml(crate.title)}</span>
            <span class="visibility-pill">${escapeHtml(crate.visibility || "Public")}</span>
            ${crate.isForkedByCharles ? `<span class="visibility-pill">Forked from ${escapeHtml(crate.forkedFrom || "@peer")}</span>` : ""}
          </div>
          <div class="vault-row-details">
            <span class="${isHealthy ? "status-alive" : "status-broken"}">
              ${isHealthy ? `${healthyCount}/${tools.length} Alive` : `${healthyCount}/${tools.length} Alive · 1 Broken (404)`}
            </span>
          </div>
          <div class="vault-row-meta">
            <span class="vault-tools-summary">${escapeHtml(toolsSummary)}</span>
            <span>·</span>
            <span>${crate.forks || 0} forks</span>
            <span>·</span>
            <span>${crate.views || 0} views</span>
          </div>
        </div>

        <div class="vault-row-actions">
          <button class="btn btn-xs btn-outline vault-open-btn" data-crate-id="${crate.id}">Open</button>
          ${hasBrokenTool ? `
            <button class="btn btn-xs btn-danger-outline vault-fix-btn" data-crate-id="${crate.id}">Fix Broken Link</button>
          ` : `
            <button class="btn btn-xs btn-outline vault-edit-btn" data-crate-id="${crate.id}">Edit Crate</button>
          `}
        </div>
      </div>
    `;
  }).join("");

  container.querySelectorAll(".vault-row-title, .vault-open-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cid = btn.getAttribute("data-crate-id");
      navigateTo("crate", cid);
    });
  });

  container.querySelectorAll(".vault-edit-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cid = btn.getAttribute("data-crate-id");
      const c = state.crates.find(item => item.id === cid);
      if (c) openCreateEditModal(c);
    });
  });

  container.querySelectorAll(".vault-fix-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cid = btn.getAttribute("data-crate-id");
      const c = state.crates.find(item => item.id === cid);
      if (c) openFixDrawer(c);
    });
  });
}

function setupDashboardEvents() {
  document.querySelectorAll(".dash-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".dash-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.dashboardTab = tab.getAttribute("data-tab");
      renderDashboardView();
    });
  });

  const rescanBtn = document.getElementById("dashboard-btn-rescan");
  if (rescanBtn) {
    rescanBtn.addEventListener("click", () => {
      const icon = rescanBtn.querySelector(".rescan-icon");
      if (icon) icon.classList.add("spinning");

      showToast("Scanning link health across all crates...", "normal");

      setTimeout(() => {
        if (icon) icon.classList.remove("spinning");
        const hasBroken = state.crates.some(c => c.handle === "@charles" && (c.tools || []).some(t => !t.healthy));
        if (hasBroken) {
          showToast("Scan finished: 17 OK, 1 Flagged 404 in Personal Hackathon Boilerplate", "normal");
        } else {
          showToast("Scan finished: 100% Verified Alive (200 OK)!", "success");
        }
        renderDashboardView();
      }, 900);
    });
  }

  const newCrateBtn = document.getElementById("dashboard-btn-new-crate");
  if (newCrateBtn) {
    newCrateBtn.addEventListener("click", () => {
      openCreateEditModal(null);
    });
  }
}

// === PUBLIC PROFILE VIEW RENDERING ===
function renderProfileView() {
  const grid = document.getElementById("profile-crates-grid");
  if (!grid) return;

  const myCrates = state.crates.filter(c => c.handle === "@charles" && c.visibility === "Public");
  const forkedCrates = state.crates.filter(c => c.isForkedByCharles);

  const activeList = state.profileTab === "published" ? myCrates : forkedCrates;

  const ptabPub = document.getElementById("ptab-published");
  const ptabFork = document.getElementById("ptab-forked");
  if (ptabPub) ptabPub.textContent = `Published Crates (${myCrates.length})`;
  if (ptabFork) ptabFork.textContent = `Forked from Classmates (${forkedCrates.length})`;

  grid.innerHTML = activeList.map(c => generateCrateCardHtml(c)).join("");

  grid.querySelectorAll(".crate-card").forEach(card => {
    card.addEventListener("click", () => {
      const cid = card.getAttribute("data-id");
      navigateTo("crate", cid);
    });
  });
}

function setupProfileEvents() {
  document.querySelectorAll(".profile-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".profile-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.profileTab = tab.getAttribute("data-tab");
      renderProfileView();
    });
  });
}

// === CREATE EDIT CRATE MODAL ===
function openCreateEditModal(crateToEdit = null) {
  const modal = document.getElementById("modal-create-crate");
  if (!modal) return;

  const titleEl = document.getElementById("modal-create-title");
  const subtitleEl = document.getElementById("modal-create-subtitle");
  const formTitle = document.getElementById("crate-form-title");
  const formCategory = document.getElementById("crate-form-category");
  const formVis = document.getElementById("crate-form-visibility");
  const formDesc = document.getElementById("crate-form-desc");
  const editIdInput = document.getElementById("modal-crate-edit-id");
  const submitBtn = document.getElementById("modal-create-btn-submit");

  if (crateToEdit) {
    titleEl.textContent = "Edit Crate";
    subtitleEl.textContent = crateToEdit.shortUrl || `stac.crate/@charles/${crateToEdit.slug}`;
    formTitle.value = crateToEdit.title;
    formCategory.value = crateToEdit.category || "WS101 Web Dev";
    formVis.value = crateToEdit.visibility || "Public";
    formDesc.value = crateToEdit.description || "";
    editIdInput.value = crateToEdit.id;
    submitBtn.textContent = "Save Changes →";
    state.modalCrateDraftTools = JSON.parse(JSON.stringify(crateToEdit.tools || []));
  } else {
    titleEl.textContent = "Create New Crate";
    subtitleEl.textContent = "stac.crate/@charles/new-pack";
    formTitle.value = "";
    formCategory.value = "WS101 Web Dev";
    formVis.value = "Public";
    formDesc.value = "";
    editIdInput.value = "";
    submitBtn.textContent = "Publish Crate →";
    state.modalCrateDraftTools = [];
  }

  renderModalDraftTools();
  hideToolEditorBox();

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeCreateEditModal() {
  const modal = document.getElementById("modal-create-crate");
  if (modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
}

function renderModalDraftTools() {
  const list = document.getElementById("modal-tools-list");
  const countEl = document.getElementById("modal-tools-count");
  if (!list) return;

  countEl.textContent = state.modalCrateDraftTools.length;

  if (state.modalCrateDraftTools.length === 0) {
    list.innerHTML = `<p style="font-size: 12px; color: var(--ink-muted); padding: 8px 0;">No tools added yet. Click below to add your first snippet or link.</p>`;
    return;
  }

  list.innerHTML = state.modalCrateDraftTools.map((t, idx) => `
    <div class="modal-tool-row">
      <div class="modal-tool-info">
        <span class="modal-tool-name">${escapeHtml(t.name)}</span>
        <span class="modal-tool-snippet">${escapeHtml(t.snippet || "")}</span>
      </div>
      <div class="modal-tool-actions">
        <button type="button" class="btn btn-xs btn-outline btn-edit-draft-tool" data-index="${idx}">Edit</button>
        <button type="button" class="btn-icon-remove btn-del-draft-tool" data-index="${idx}">✕</button>
      </div>
    </div>
  `).join("");

  list.querySelectorAll(".btn-del-draft-tool").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      state.modalCrateDraftTools.splice(idx, 1);
      renderModalDraftTools();
    });
  });

  list.querySelectorAll(".btn-edit-draft-tool").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-index"), 10);
      const tool = state.modalCrateDraftTools[idx];
      showToolEditorBox(tool, idx);
    });
  });
}

function showToolEditorBox(tool = null, editingIndex = -1) {
  const box = document.getElementById("tool-editor-box");
  const heading = document.getElementById("tool-editor-heading");
  const nameInput = document.getElementById("editor-tool-name");
  const catInput = document.getElementById("editor-tool-category");
  const snippetInput = document.getElementById("editor-tool-snippet");
  const tipInput = document.getElementById("editor-tool-tip");
  const doneBtn = document.getElementById("editor-btn-done");

  if (!box) return;

  if (tool) {
    heading.textContent = `Edit: ${tool.name}`;
    nameInput.value = tool.name;
    catInput.value = tool.category || "Frontend";
    snippetInput.value = tool.snippet || "";
    tipInput.value = tool.tip || "";
    doneBtn.setAttribute("data-editing-index", editingIndex);
  } else {
    heading.textContent = "Add Tool to Crate";
    nameInput.value = "";
    catInput.value = "Frontend";
    snippetInput.value = "";
    tipInput.value = "";
    doneBtn.removeAttribute("data-editing-index");
  }

  box.classList.add("active");
  nameInput.focus();
}

function hideToolEditorBox() {
  const box = document.getElementById("tool-editor-box");
  if (box) box.classList.remove("active");
}

function setupCreateEditModalEvents() {
  const closeBtn = document.getElementById("modal-create-close");
  const cancelBtn = document.getElementById("modal-create-btn-cancel");
  if (closeBtn) closeBtn.addEventListener("click", closeCreateEditModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeCreateEditModal);

  const showEditorBtn = document.getElementById("btn-show-tool-editor");
  if (showEditorBtn) {
    showEditorBtn.addEventListener("click", () => showToolEditorBox(null));
  }

  const cancelEditorBtn = document.getElementById("editor-btn-cancel");
  if (cancelEditorBtn) {
    cancelEditorBtn.addEventListener("click", hideToolEditorBox);
  }

  const doneEditorBtn = document.getElementById("editor-btn-done");
  if (doneEditorBtn) {
    doneEditorBtn.addEventListener("click", () => {
      const nameInput = document.getElementById("editor-tool-name");
      const catInput = document.getElementById("editor-tool-category");
      const snippetInput = document.getElementById("editor-tool-snippet");
      const tipInput = document.getElementById("editor-tool-tip");

      const name = nameInput.value.trim();
      const snippet = snippetInput.value.trim();
      if (!name) {
        showToast("Please enter a tool name", "normal");
        nameInput.focus();
        return;
      }

      const editingIndexStr = doneEditorBtn.getAttribute("data-editing-index");
      const isEditing = editingIndexStr !== null && editingIndexStr !== undefined && editingIndexStr !== "";

      const toolData = {
        id: isEditing ? state.modalCrateDraftTools[parseInt(editingIndexStr, 10)].id : `t_${Date.now()}`,
        name,
        category: catInput.value,
        healthy: true,
        snippet: snippet || name,
        desc: `${name} reference for rapid student development.`,
        tip: tipInput.value.trim() || "Ready for instant deployment in lab work.",
        docsUrl: snippet.startsWith("http") ? snippet : "https://devdocs.io"
      };

      if (isEditing) {
        state.modalCrateDraftTools[parseInt(editingIndexStr, 10)] = toolData;
      } else {
        state.modalCrateDraftTools.push(toolData);
      }

      renderModalDraftTools();
      hideToolEditorBox();
    });
  }

  const form = document.getElementById("form-create-crate");
  if (form) {
    form.addEventListener("submit", () => {
      const titleInput = document.getElementById("crate-form-title");
      const catInput = document.getElementById("crate-form-category");
      const visInput = document.getElementById("crate-form-visibility");
      const descInput = document.getElementById("crate-form-desc");
      const editIdInput = document.getElementById("modal-crate-edit-id");

      const title = titleInput.value.trim();
      if (!title) {
        showToast("Please provide a crate title", "normal");
        titleInput.focus();
        return;
      }

      const editId = editIdInput.value;
      const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

      if (editId) {
        const crateIndex = state.crates.findIndex(c => c.id === editId);
        if (crateIndex !== -1) {
          state.crates[crateIndex].title = title;
          state.crates[crateIndex].category = catInput.value;
          state.crates[crateIndex].visibility = visInput.value;
          state.crates[crateIndex].description = descInput.value.trim();
          state.crates[crateIndex].tools = [...state.modalCrateDraftTools];
          state.crates[crateIndex].updatedAt = "Just now";
        }
        showToast("Crate saved successfully!", "success");
      } else {
        const newId = `crate_${Date.now()}`;
        const newCrate = {
          id: newId,
          slug,
          shortUrl: `stac.crate/@charles/${slug}`,
          title,
          handle: "@charles",
          authorName: "Charles Sevilla",
          authorInitials: "CS",
          category: catInput.value,
          visibility: visInput.value,
          forks: 0,
          views: 1,
          updatedAt: "Just now",
          description: descInput.value.trim() || `Curated toolpack by Charles Sevilla for ${catInput.value}.`,
          tools: state.modalCrateDraftTools.length > 0 ? [...state.modalCrateDraftTools] : [
            {
              id: `t_${Date.now()}`,
              name: "Starter Toolkit CDN",
              category: "Frontend",
              healthy: true,
              snippet: '<script src="https://cdn.tailwindcss.com"></script>',
              desc: "Quick initialization script.",
              tip: "Verified 200 OK.",
              docsUrl: "https://devdocs.io"
            }
          ]
        };
        state.crates.unshift(newCrate);
        showToast("New crate published to your vault!", "success");
      }

      saveStateToStorage();
      closeCreateEditModal();
      renderAllViews();
      navigateTo("dashboard");
    });
  }
}

// === COMMAND PALETTE MODAL ===
function openCommandPalette() {
  const modal = document.getElementById("modal-cmd-k");
  const input = document.getElementById("cmd-search-input");
  if (!modal || !input) return;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  input.value = "";
  input.focus();
  renderCommandPaletteResults("");
}

function closeCommandPalette() {
  const modal = document.getElementById("modal-cmd-k");
  if (modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
}

function renderCommandPaletteResults(query) {
  const container = document.getElementById("cmd-results-area");
  if (!container) return;

  const q = query.trim().toLowerCase();

  const matchingSnippets = [];
  const matchingCrates = [];

  state.crates.forEach(c => {
    const inCrateTitle = c.title.toLowerCase().includes(q);
    const inCrateDesc = c.description.toLowerCase().includes(q);
    const inCrateHandle = c.handle.toLowerCase().includes(q);

    if (q === "" || inCrateTitle || inCrateDesc || inCrateHandle) {
      matchingCrates.push(c);
    }

    (c.tools || []).forEach(t => {
      const inToolName = t.name.toLowerCase().includes(q);
      const inSnippet = (t.snippet || "").toLowerCase().includes(q);
      const inTip = (t.tip || "").toLowerCase().includes(q);

      if (q === "" || inToolName || inSnippet || inTip) {
        if (matchingSnippets.length < 5) {
          matchingSnippets.push({
            tool: t,
            crateTitle: c.title,
            crateHandle: c.handle,
            crateId: c.id
          });
        }
      }
    });
  });

  let html = "";

  if (matchingSnippets.length > 0) {
    html += `
      <div class="cmd-group">
        <div class="cmd-group-label">MATCHING SNIPPETS — PRESS ENTER TO COPY</div>
        ${matchingSnippets.map((item, idx) => `
          <div class="cmd-result-item ${idx === 0 ? "highlighted" : ""}" data-type="snippet" data-copy="${escapeHtml(item.tool.snippet || "")}">
            <div class="cmd-item-info">
              <span class="cmd-item-title">${escapeHtml(item.tool.name)}</span>
              <span class="cmd-item-context">in ${escapeHtml(item.crateHandle)}/${escapeHtml(item.crateId)}</span>
              <code class="cmd-item-snippet">${escapeHtml(item.tool.snippet || "")}</code>
            </div>
            <button class="btn btn-xs btn-outline copy-trigger" data-copy="${escapeHtml(item.tool.snippet || "")}">↵ Copy Code</button>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (matchingCrates.length > 0) {
    html += `
      <div class="cmd-group">
        <div class="cmd-group-label">MATCHING PUBLIC CRATES (${matchingCrates.length})</div>
        ${matchingCrates.slice(0, 4).map(c => `
          <div class="cmd-result-item" data-type="crate" data-crate-id="${c.id}">
            <div class="cmd-item-info">
              <span class="cmd-item-title">${escapeHtml(c.title)}</span>
              <div class="cmd-item-sub">stac.crate/${escapeHtml(c.handle)}/${escapeHtml(c.id)} · ${(c.tools || []).length} tools · ${c.forks || 0} forks</div>
            </div>
            <button class="btn btn-xs btn-accent">Open →</button>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (matchingSnippets.length === 0 && matchingCrates.length === 0) {
    html = `<p style="text-align: center; color: var(--ink-muted); padding: 24px;">No matching tools, snippets, or crates found.</p>`;
  }

  container.innerHTML = html;

  container.querySelectorAll('.cmd-result-item[data-type="snippet"]').forEach(item => {
    item.addEventListener("click", () => {
      const code = item.getAttribute("data-copy");
      copyToClipboard(code, item.querySelector("button"));
      setTimeout(closeCommandPalette, 500);
    });
  });

  container.querySelectorAll('.cmd-result-item[data-type="crate"]').forEach(item => {
    item.addEventListener("click", () => {
      const cid = item.getAttribute("data-crate-id");
      closeCommandPalette();
      navigateTo("crate", cid);
    });
  });
}

function setupCommandPaletteEvents() {
  const escBtn = document.getElementById("cmd-btn-esc");
  if (escBtn) escBtn.addEventListener("click", closeCommandPalette);

  const input = document.getElementById("cmd-search-input");
  if (input) {
    input.addEventListener("input", () => {
      renderCommandPaletteResults(input.value);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeCommandPalette();
      } else if (e.key === "Enter") {
        const firstSnippet = document.querySelector('.cmd-result-item[data-type="snippet"]');
        if (firstSnippet) {
          const code = firstSnippet.getAttribute("data-copy");
          copyToClipboard(code, firstSnippet.querySelector("button"));
          setTimeout(closeCommandPalette, 500);
        }
      }
    });
  }

  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const modal = document.getElementById("modal-cmd-k");
      if (modal && modal.classList.contains("open")) {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
    }
  });
}

// === FORK CRATE MODAL ===
let crateBeingForked = null;

function openForkModal(crate) {
  crateBeingForked = crate;
  const modal = document.getElementById("modal-fork-crate");
  if (!modal) return;

  const subtitle = document.getElementById("fork-modal-subtitle");
  const destUrl = document.getElementById("fork-dest-url");
  const checklist = document.getElementById("fork-tools-checklist");
  const label = document.getElementById("fork-selection-label");
  const attrText = document.getElementById("fork-attr-text");

  const targetSlug = `${crate.slug || crate.id}`;
  if (subtitle) subtitle.textContent = `Clone ${crate.handle}/${crate.id} under your handle @charles to customize.`;
  if (destUrl) destUrl.textContent = `stac.crate/@charles/${targetSlug}`;
  if (attrText) attrText.textContent = `Forked from ${crate.authorName || crate.handle} (${crate.handle}). Original curator credit preserved.`;

  const tools = crate.tools || [];
  if (label) label.textContent = `SELECT TOOLS TO INCLUDE (${tools.length} OF ${tools.length} SELECTED)`;

  if (checklist) {
    checklist.innerHTML = tools.map((t, idx) => `
      <div class="fork-tool-row">
        <label class="fork-tool-check-group" for="fork-tool-${idx}">
          <input type="checkbox" id="fork-tool-${idx}" checked data-tool-idx="${idx}">
          <span>${escapeHtml(t.name)}</span>
        </label>
        <span class="status-alive">● 200 OK</span>
      </div>
    `).join("");
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeForkModal() {
  const modal = document.getElementById("modal-fork-crate");
  if (modal) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }
}

function setupForkModalEvents() {
  const closeBtn = document.getElementById("modal-fork-close");
  const cancelBtn = document.getElementById("modal-fork-btn-cancel");
  const submitBtn = document.getElementById("modal-fork-btn-submit");

  if (closeBtn) closeBtn.addEventListener("click", closeForkModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeForkModal);

  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      if (!crateBeingForked) return;

      const checkedBoxes = document.querySelectorAll("#fork-tools-checklist input[type='checkbox']:checked");
      const selectedTools = [];
      checkedBoxes.forEach(cb => {
        const idx = parseInt(cb.getAttribute("data-tool-idx"), 10);
        if (crateBeingForked.tools[idx]) {
          selectedTools.push({ ...crateBeingForked.tools[idx] });
        }
      });

      const forkedCrate = {
        id: `fork_${Date.now()}`,
        slug: `${crateBeingForked.slug}-fork`,
        shortUrl: `stac.crate/@charles/${crateBeingForked.slug}-fork`,
        title: `${crateBeingForked.title} (My Fork)`,
        handle: "@charles",
        authorName: "Charles Sevilla",
        authorInitials: "CS",
        category: crateBeingForked.category,
        visibility: "Public",
        isForkedByCharles: true,
        forkedFrom: crateBeingForked.handle,
        forks: 0,
        views: 1,
        updatedAt: "Just now",
        description: `Forked from ${crateBeingForked.handle}. ${crateBeingForked.description}`,
        tools: selectedTools
      };

      crateBeingForked.forks = (crateBeingForked.forks || 0) + 1;

      state.crates.unshift(forkedCrate);
      saveStateToStorage();

      closeForkModal();
      showToast(`Forked "${crateBeingForked.title}" into your vault!`, "success");
      renderAllViews();
      navigateTo("dashboard");
    });
  }
}

// === FIX BROKEN LINK DRAWER ===
let crateBeingFixed = null;
let toolBeingFixed = null;

function openFixDrawer(crate) {
  crateBeingFixed = crate;
  const drawer = document.getElementById("drawer-fix-link");
  if (!drawer) return;

  const brokenTool = (crate.tools || []).find(t => !t.healthy) || (crate.tools && crate.tools[0]);
  toolBeingFixed = brokenTool;

  const contextEl = document.getElementById("drawer-crate-context");
  const nameEl = document.getElementById("drawer-tool-name");
  const brokenUrlEl = document.getElementById("drawer-broken-url");
  const suggestedUrlEl = document.getElementById("drawer-suggested-url");
  const manualInput = document.getElementById("drawer-manual-input");

  if (contextEl) contextEl.textContent = `Crate: ${crate.title} · Checked 14 mins ago`;
  if (nameEl && brokenTool) nameEl.textContent = brokenTool.name;
  if (brokenUrlEl && brokenTool) brokenUrlEl.textContent = brokenTool.brokenUrl || brokenTool.snippet || "https://stripe.com/docs/webhooks/test-local-v1";

  const suggested = (brokenTool && brokenTool.suggestedUrl) ? brokenTool.suggestedUrl : "https://docs.stripe.com/webhooks/quickstart";
  if (suggestedUrlEl) suggestedUrlEl.textContent = suggested;
  if (manualInput) manualInput.value = suggested;

  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeFixDrawer() {
  const drawer = document.getElementById("drawer-fix-link");
  if (drawer) {
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
  }
}

function setupFixDrawerEvents() {
  const closeBtn = document.getElementById("drawer-btn-close");
  if (closeBtn) closeBtn.addEventListener("click", closeFixDrawer);

  const useSuggestedBtn = document.getElementById("drawer-btn-use-suggested");
  const manualInput = document.getElementById("drawer-manual-input");
  const suggestedUrlEl = document.getElementById("drawer-suggested-url");

  if (useSuggestedBtn && manualInput && suggestedUrlEl) {
    useSuggestedBtn.addEventListener("click", () => {
      manualInput.value = suggestedUrlEl.textContent.trim();
      showToast("Verified URL loaded into input", "normal");
    });
  }

  const saveBtn = document.getElementById("drawer-btn-save");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      if (!crateBeingFixed || !toolBeingFixed) return;

      const newUrl = manualInput.value.trim() || "https://docs.stripe.com/webhooks/quickstart";
      toolBeingFixed.healthy = true;
      toolBeingFixed.snippet = newUrl;
      toolBeingFixed.docsUrl = newUrl;
      toolBeingFixed.tip = "Verified 200 OK: Updated to modern Stripe Quickstart documentation.";

      saveStateToStorage();
      closeFixDrawer();
      showToast("Link verified 200 OK! All 18 tools are now healthy.", "success");
      renderAllViews();
    });
  }

  const removeBtn = document.getElementById("drawer-btn-remove-tool");
  if (removeBtn) {
    removeBtn.addEventListener("click", () => {
      if (!crateBeingFixed || !toolBeingFixed) return;

      crateBeingFixed.tools = crateBeingFixed.tools.filter(t => t.id !== toolBeingFixed.id);
      saveStateToStorage();
      closeFixDrawer();
      showToast("Broken tool removed from crate.", "normal");
      renderAllViews();
    });
  }
}

// === GLOBAL EVENT LISTENERS & INITIALIZATION ===
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function attachCopyButtons(rootElement = document) {
  rootElement.querySelectorAll(".copy-trigger").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const textToCopy = btn.getAttribute("data-copy");
      if (textToCopy) {
        copyToClipboard(textToCopy, btn);
      }
    });
  });
}

function renderAllViews() {
  updateNavActiveLinks();
  if (state.activeView === "landing") renderLandingView();
  else if (state.activeView === "explore") renderExploreView();
  else if (state.activeView === "crate") renderCrateDetailView();
  else if (state.activeView === "dashboard") renderDashboardView();
  else if (state.activeView === "profile") renderProfileView();
  attachCopyButtons(document);
}

document.addEventListener("DOMContentLoaded", () => {
  loadStateFromStorage();
  setupNavbarEvents();
  setupAuthForms();
  setupExploreEvents();
  setupDashboardEvents();
  setupProfileEvents();
  setupCreateEditModalEvents();
  setupCommandPaletteEvents();
  setupForkModalEvents();
  setupFixDrawerEvents();

  const resetBtn = document.getElementById("footer-reset-demo");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (confirm("Reset demo vault data back to the default 9 crates?")) {
        resetDemoData();
      }
    });
  }

  const initialHash = window.location.hash.replace("#", "") || "landing";
  const knownViews = ["landing", "signin", "signup", "explore", "crate", "dashboard", "profile"];
  const targetView = knownViews.includes(initialHash) ? initialHash : "landing";

  navigateTo(targetView);
  attachCopyButtons(document);
});
