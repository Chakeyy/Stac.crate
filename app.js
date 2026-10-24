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

const CURATORS = {
  "@charles": {
    name: "Charles Sevilla",
    handle: "@charles",
    initials: "CS",
    role: "BSIT Sophomore · Holy Name University (HNU)",
    bio: "BSIT Sophomore · Holy Name University (HNU) · Curating Web Systems & backend starter packs.",
    email: "charles.sevilla@hnu.edu.ph",
    pinnedSnippets: [
      {
        title: "Tailwind Play CDN (HTML Head)",
        code: '<script src="https://cdn.tailwindcss.com"></script>'
      },
      {
        title: "PHP PDO MySQL Strict Connection",
        code: '$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");'
      },
      {
        title: "JSONPlaceholder Fetch Template",
        code: "fetch('https://jsonplaceholder.typicode.com/posts/1').then(r => r.json()).then(console.log);"
      }
    ]
  },
  "@dev_miko": {
    name: "Miko Santos",
    handle: "@dev_miko",
    initials: "MS",
    role: "BSIT Junior · Holy Name University (HNU)",
    bio: "BSIT Junior · Holy Name University (HNU) · Building zero-budget REST APIs and backend tools.",
    email: "miko.santos@hnu.edu.ph",
    pinnedSnippets: [
      {
        title: "DummyJSON Mock Products Endpoint",
        code: "https://dummyjson.com/products"
      },
      {
        title: "Open-Meteo Weather API (Tagbilaran)",
        code: "https://api.open-meteo.com/v1/forecast?latitude=9.64&longitude=123.85&current_weather=true"
      },
      {
        title: "ipapi JSON Geolocation Lookup",
        code: "https://ipapi.co/json/"
      }
    ]
  },
  "@alyssa_ui": {
    name: "Alyssa Cruz",
    handle: "@alyssa_ui",
    initials: "AC",
    role: "BSIT Sophomore · Holy Name University (HNU)",
    bio: "BSIT Sophomore · Holy Name University (HNU) · Designing minimalist UI kits, SVG icons, and CSS systems.",
    email: "alyssa.cruz@hnu.edu.ph",
    pinnedSnippets: [
      {
        title: "Lucide Clean SVG Icon Template",
        code: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>'
      },
      {
        title: "Inter + JetBrains Mono Web Font Stack",
        code: '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">'
      },
      {
        title: "CSS Shadow Elevation Tokens",
        code: "--shadow-sm: 0 1px 2px rgba(0,0,0,0.05); --shadow-md: 0 4px 6px -1px rgba(0,0,0,0.1);"
      }
    ]
  },
  "@carlos_tech": {
    name: "Carlos Reyes",
    handle: "@carlos_tech",
    initials: "CR",
    role: "BSIT Senior · Holy Name University (HNU)",
    bio: "BSIT Senior · Holy Name University (HNU) · PHP, PDO database security, and SQL query optimization.",
    email: "carlos.reyes@hnu.edu.ph",
    pinnedSnippets: [
      {
        title: "PHP password_hash & verify Pattern",
        code: "$hash = password_hash($password, PASSWORD_BCRYPT);\nif (password_verify($password, $hash)) { return true; }"
      },
      {
        title: "PDO Bound Parameter SELECT",
        code: "$stmt = $pdo->prepare('SELECT id, name FROM users WHERE email = :email');\n$stmt->execute([':email' => $email]);"
      },
      {
        title: "Strict Session Cookie Headers",
        code: "session_set_cookie_params(['lifetime' => 86400, 'path' => '/', 'httponly' => true, 'samesite' => 'Strict']);"
      }
    ]
  },
  "@sarah_codes": {
    name: "Sarah Lim",
    handle: "@sarah_codes",
    initials: "SL",
    role: "BSIT Sophomore · Holy Name University (HNU)",
    bio: "BSIT Sophomore · Holy Name University (HNU) · Frontend layout architecture, CSS Grid, and responsive design.",
    email: "sarah.lim@hnu.edu.ph",
    pinnedSnippets: [
      {
        title: "CSS Grid Auto-Fit Responsive Columns",
        code: "grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\ngap: 16px;"
      },
      {
        title: "Modern Sticky Bottom Footer Pattern",
        code: "body { min-height: 100vh; display: flex; flex-direction: column; }\nmain { flex: 1; }"
      },
      {
        title: "Clamp Responsive Typography Formula",
        code: "font-size: clamp(1rem, 0.8rem + 1vw, 1.5rem);"
      }
    ]
  },
  "@miguel_data": {
    name: "Miguel Tan",
    handle: "@miguel_data",
    initials: "MT",
    role: "BSIT Junior · Holy Name University (HNU)",
    bio: "BSIT Junior · Holy Name University (HNU) · Open Philippine datasets, GeoJSON, and civic tech APIs.",
    email: "miguel.tan@hnu.edu.ph",
    pinnedSnippets: [
      {
        title: "PSGC Philippine Regions API Endpoint",
        code: "https://psgc.gitlab.io/api/regions/"
      },
      {
        title: "Leaflet Map Philippine Initializer",
        code: "const map = L.map('map').setView([12.8797, 121.7740], 6);\nL.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);"
      },
      {
        title: "PAGASA Tropical Cyclone GeoJSON",
        code: "https://bagong.pagasa.dost.gov.ph/weather/tropical-cyclone-bulletin"
      }
    ]
  }
};

const DEFAULT_STARRED_TOOL_IDS = ["t1", "t2", "t3", "t4", "t5", "t6"];

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
    coverTheme: "theme-terracotta",
    stackIcons: ["assets/icons/tailwindcss.svg", "assets/icons/php.svg", "assets/icons/mysql.svg"],
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
        icon: "assets/icons/tailwindcss.svg",
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
        icon: "assets/icons/php.svg",
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
        icon: "assets/icons/json.svg",
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
        icon: "assets/icons/html5.svg",
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
        icon: "assets/icons/css3.svg",
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
        icon: "assets/icons/vscode.svg",
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
    coverTheme: "theme-slate",
    stackIcons: ["assets/icons/cplusplus.svg", "assets/icons/vscode.svg", "assets/icons/bash.svg"],
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
        icon: "assets/icons/cplusplus.svg",
        snippet: "vector<int> v; v.push_back(10); sort(v.begin(), v.end());",
        desc: "Dynamic contiguous array operations with automatic resizing.",
        tip: "Use reserve() when you know target capacity to avoid re-allocations.",
        docsUrl: "https://en.cppreference.com/w/cpp/container/vector"
      },
      {
        id: "t8",
        name: "VisuAlgo Graph Visualizer",
        category: "Assets",
        healthy: true,
        icon: "assets/icons/javascript.svg",
        snippet: "https://visualgo.net/en/graphds",
        desc: "Interactive tree, heap, graph, and DFS/BFS visualizer for lab quizzes.",
        tip: "Step through Dijkstra animations before writing code.",
        docsUrl: "https://visualgo.net"
      },
      {
        id: "t9",
        name: "Big-O Complexity Reference",
        category: "Docs",
        healthy: true,
        icon: "assets/icons/cplusplus.svg",
        snippet: "O(1) < O(log n) < O(n) < O(n log n) < O(n^2)",
        desc: "Handy runtime scaling guide for lab quiz asymptotic analysis.",
        tip: "Binary search on sorted arrays is O(log n).",
        docsUrl: "https://www.bigocheatsheet.com"
      },
      {
        id: "t10",
        name: "Clang-Format Lab Config",
        category: "Frontend",
        healthy: true,
        icon: "assets/icons/vscode.svg",
        snippet: "BasedOnStyle: Google, IndentWidth: 4, ColumnLimit: 100",
        desc: ".clang-format file for VS Code formatting to pass instructor auto-graders.",
        tip: "Place in the root of your lab repository.",
        docsUrl: "https://clang.llvm.org/docs/ClangFormatStyleOptions.html"
      }
    ]
  },
  {
    id: "git-survival",
    slug: "git-survival-guide",
    shortUrl: "stac.crate/@charles/git",
    title: "Git & GitHub Lab Survival",
    handle: "@charles",
    authorName: "Charles Sevilla",
    authorInitials: "CS",
    category: "WS101 Web Dev",
    visibility: "Public",
    coverTheme: "theme-charcoal",
    stackIcons: ["assets/icons/git.svg", "assets/icons/github.svg", "assets/icons/bash.svg"],
    forks: 28,
    views: 140,
    updatedAt: "1w ago",
    description: "Branching workflows, SSH key setup, clean commit conventions, and un-breaking merge conflicts.",
    tools: [
      {
        id: "t11",
        name: "Git Feature Branch Workflow",
        category: "Backend",
        healthy: true,
        icon: "assets/icons/git.svg",
        snippet: "git checkout -b feature/login && git push -u origin feature/login",
        desc: "Standard branching syntax for group projects to avoid pushing to main.",
        tip: "Always create a PR before merging into main.",
        docsUrl: "https://git-scm.com/doc"
      },
      {
        id: "t12",
        name: "SSH Key Setup Snippet",
        category: "Backend",
        healthy: true,
        icon: "assets/icons/bash.svg",
        snippet: 'ssh-keygen -t ed25519 -C \"student@school.edu\"',
        desc: "Ed25519 key generation command for GitHub passwordless push on lab PCs.",
        tip: "Save key in ~/.ssh/id_ed25519.",
        docsUrl: "https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
      },
      {
        id: "t13",
        name: "Standard Node/PHP .gitignore",
        category: "Assets",
        healthy: true,
        icon: "assets/icons/github.svg",
        snippet: "/vendor/\n/node_modules/\n.env\n.DS_Store",
        desc: "Prevent accidental pushes of vendor directories and secrets to public repos.",
        tip: "Commit this before running composer install or npm install.",
        docsUrl: "https://github.com/github/gitignore"
      },
      {
        id: "t14",
        name: "Undo Last Commit Soft Reset",
        category: "Backend",
        healthy: true,
        icon: "assets/icons/git.svg",
        snippet: "git reset --soft HEAD~1",
        desc: "Rewinds the latest commit while preserving all changes in your working directory.",
        tip: "Use when you committed before adding a forgotten file.",
        docsUrl: "https://git-scm.com/docs/git-reset"
      }
    ]
  },
  {
    id: "hackathon-private",
    slug: "hackathon-starter-kit",
    shortUrl: "stac.crate/@charles/hack",
    title: "Personal Hackathon Boilerplate",
    handle: "@charles",
    authorName: "Charles Sevilla",
    authorInitials: "CS",
    category: "WS101 Web Dev",
    visibility: "Private",
    coverTheme: "theme-emerald",
    stackIcons: ["assets/icons/supabase.svg", "assets/icons/javascript.svg", "assets/icons/json.svg"],
    forks: 3,
    views: 18,
    updatedAt: "3d ago",
    description: "Private scaffolding with pre-configured Supabase auth, Stripe test tokens, and transactional email keys.",
    tools: [
      {
        id: "t15",
        name: "Supabase JS Auth Client",
        category: "Backend",
        healthy: true,
        icon: "assets/icons/supabase.svg",
        snippet: "import { createClient } from '@supabase/supabase-js';\nconst supabase = createClient(URL, KEY);",
        desc: "Plug-and-play PostgreSQL and authentication client for quick 24h projects.",
        tip: "Enable Row Level Security (RLS) immediately in the dashboard.",
        docsUrl: "https://supabase.com/docs"
      },
      {
        id: "t16",
        name: "Stripe Test Webhook CLI Docs",
        category: "APIs",
        healthy: false,
        icon: "assets/icons/bash.svg",
        snippet: "stripe listen --forward-to localhost:4242/webhook",
        desc: "Local webhook forwarding tunnel for testing payment checkout callbacks.",
        tip: "Check signing secret matches STRIPE_WEBHOOK_SECRET in .env.",
        docsUrl: "https://stripe.com/docs/stripe-cli"
      },
      {
        id: "t17",
        name: "Resend Transactional Email",
        category: "APIs",
        healthy: true,
        icon: "assets/icons/javascript.svg",
        snippet: "resend.emails.send({ from: 'onboarding@resend.dev', to: user.email, subject: 'Welcome!' });",
        desc: "Zero-configuration modern SMTP alternative for email notifications.",
        tip: "Free tier supports up to 100 emails/day.",
        docsUrl: "https://resend.com/docs"
      }
    ]
  },
  {
    id: "free-apis",
    slug: "free-student-apis",
    shortUrl: "stac.crate/@dev_miko/free-apis",
    title: "Zero-Budget Student APIs",
    handle: "@dev_miko",
    authorName: "Miko Santos",
    authorInitials: "MS",
    category: "Free APIs",
    visibility: "Public",
    coverTheme: "theme-sky",
    stackIcons: ["assets/icons/json.svg", "assets/icons/javascript.svg", "assets/icons/html5.svg"],
    forks: 34,
    views: 210,
    updatedAt: "3d ago",
    description: "Hand-picked mock JSON APIs with zero authentication requirements: products, users, weather, and geolocation.",
    tools: [
      {
        id: "t18",
        name: "DummyJSON Products & Users API",
        category: "APIs",
        healthy: true,
        icon: "assets/icons/json.svg",
        snippet: "https://dummyjson.com/products",
        desc: "Mock REST API with 100+ items, categories, thumbnails, and search endpoints.",
        tip: "Supports pagination with ?limit=10&skip=10 query params.",
        docsUrl: "https://dummyjson.com"
      },
      {
        id: "t19",
        name: "Open-Meteo Weather JSON",
        category: "APIs",
        healthy: true,
        icon: "assets/icons/json.svg",
        snippet: "https://api.open-meteo.com/v1/forecast?latitude=9.65&longitude=123.85&current_weather=true",
        desc: "Completely open weather forecast API requiring zero API keys.",
        tip: "Coordinates preset for Tagbilaran City / Bohol coordinates.",
        docsUrl: "https://open-meteo.com"
      },
      {
        id: "t20",
        name: "Public IP Geolocation JSON",
        category: "APIs",
        healthy: true,
        icon: "assets/icons/json.svg",
        snippet: "https://ipapi.co/json/",
        desc: "Returns visitor city, country, postal code, and ISP information in JSON.",
        tip: "Great for automatically detecting student campus IP blocks.",
        docsUrl: "https://ipapi.co"
      },
      {
        id: "t21",
        name: "REST Countries & Flags Endpoint",
        category: "APIs",
        healthy: true,
        icon: "assets/icons/json.svg",
        snippet: "https://restcountries.com/v3.1/name/philippines",
        desc: "Country metadata, flag SVG URLs, borders, currencies, and languages.",
        tip: "Use fields filter like ?fields=name,flags,capital to reduce payload.",
        docsUrl: "https://restcountries.com"
      }
    ]
  },
  {
    id: "figma-ui-vault",
    slug: "figma-ui-vault",
    shortUrl: "stac.crate/@dev_miko/figma",
    title: "Figma & UI Asset Vault",
    handle: "@dev_miko",
    authorName: "Miko Santos",
    authorInitials: "MS",
    category: "UI Assets",
    visibility: "Public",
    coverTheme: "theme-violet",
    stackIcons: ["assets/icons/figma.svg", "assets/icons/css3.svg", "assets/icons/html5.svg"],
    forks: 21,
    views: 115,
    updatedAt: "4d ago",
    description: "Lucide icons, typography pairings, modern CSS resets, and Unsplash placeholder parameters.",
    tools: [
      {
        id: "t22",
        name: "Lucide SVG Icons",
        category: "Assets",
        healthy: true,
        icon: "assets/icons/figma.svg",
        snippet: '<script src="https://unpkg.com/lucide@latest"></script><script>lucide.createIcons();</script>',
        desc: "Clean, consistent icon set with official Lucide Figma community file.",
        tip: "Call lucide.createIcons() after dynamically appending HTML.",
        docsUrl: "https://lucide.dev"
      },
      {
        id: "t23",
        name: "Google Fonts Inter & JetBrains Mono",
        category: "Frontend",
        healthy: true,
        icon: "assets/icons/css3.svg",
        snippet: '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=JetBrains+Mono:wght@400;500&display=swap">',
        desc: "Clean typographic pairing for modern dashboard and code editors.",
        tip: "Add font-display: swap to prevent layout shifts.",
        docsUrl: "https://fonts.google.com"
      },
      {
        id: "t24",
        name: "Modern CSS Reset Snippet",
        category: "Frontend",
        healthy: true,
        icon: "assets/icons/css3.svg",
        snippet: "*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }",
        desc: "Standard box-sizing and padding reset snippet to eliminate default browser quirks.",
        tip: "Paste at the very top of your global CSS stylesheet.",
        docsUrl: "https://piccalil.li/blog/a-modern-css-reset/"
      },
      {
        id: "t25",
        name: "Unsplash Source Image URL",
        category: "Assets",
        healthy: true,
        icon: "assets/icons/html5.svg",
        snippet: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
        desc: "Curated high-resolution placeholder images for student web portfolio mockups.",
        tip: "Specify w= and q= parameters to ensure fast lab page loads.",
        docsUrl: "https://unsplash.com"
      }
    ]
  },
  {
    id: "php-auth-sql",
    slug: "php-auth-boilerplates",
    shortUrl: "stac.crate/@dev_miko/php",
    title: "PHP Auth & SQL Boilerplates",
    handle: "@dev_miko",
    authorName: "Miko Santos",
    authorInitials: "MS",
    category: "Boilerplates",
    visibility: "Public",
    coverTheme: "theme-indigo",
    stackIcons: ["assets/icons/php.svg", "assets/icons/mysql.svg", "assets/icons/bash.svg"],
    forks: 19,
    views: 160,
    updatedAt: "1w ago",
    description: "Bcrypt password hashing, prepared statement SELECT, session guards, and MySQL schema creation.",
    tools: [
      {
        id: "t26",
        name: "PDO Prepared Statement Query",
        category: "Backend",
        healthy: true,
        icon: "assets/icons/php.svg",
        snippet: '$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");\n$stmt->execute([$email]);\n$user = $stmt->fetch();',
        desc: "Secure parameter-bound SQL query preventing malicious user input.",
        tip: "Never concatenate PHP variables directly into SQL strings.",
        docsUrl: "https://www.php.net/manual/en/pdo.prepare.php"
      },
      {
        id: "t27",
        name: "Password Hash & Verify Bcrypt",
        category: "Backend",
        healthy: true,
        icon: "assets/icons/php.svg",
        snippet: '$hash = password_hash($pass, PASSWORD_BCRYPT);\nif (password_verify($pass, $hash)) { ... }',
        desc: "Official PHP password hashing standard with automatic cryptographic salting.",
        tip: "Always store passwords in a VARCHAR(255) column.",
        docsUrl: "https://www.php.net/manual/en/function.password-hash.php"
      },
      {
        id: "t28",
        name: "PHP Session Auth Guard",
        category: "Backend",
        healthy: true,
        icon: "assets/icons/php.svg",
        snippet: "session_start();\nif (!isset($_SESSION['user_id'])) {\n    header('Location: signin.php');\n    exit();\n}",
        desc: "Four-line route protector for authenticated student dashboard views.",
        tip: "Call session_start() at the top before any HTML output.",
        docsUrl: "https://www.php.net/manual/en/features.sessions.php"
      },
      {
        id: "t29",
        name: "MySQL Users Table Schema",
        category: "Backend",
        healthy: true,
        icon: "assets/icons/mysql.svg",
        snippet: "CREATE TABLE users (\n  id INT AUTO_INCREMENT PRIMARY KEY,\n  email VARCHAR(191) UNIQUE NOT NULL,\n  password_hash VARCHAR(255) NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);",
        desc: "Normalized SQL table blueprint for user accounts in XAMPP MySQL.",
        tip: "Use VARCHAR(191) to guarantee compatibility with utf8mb4 indexes.",
        docsUrl: "https://dev.mysql.com/doc"
      }
    ]
  },
  {
    id: "css-flex-grid",
    slug: "css-flex-grid-cheatsheet",
    shortUrl: "stac.crate/@dev_miko/css",
    title: "CSS Flex & Grid Cheatsheet",
    handle: "@dev_miko",
    authorName: "Miko Santos",
    authorInitials: "MS",
    category: "Cheatsheets",
    visibility: "Public",
    coverTheme: "theme-amber",
    stackIcons: ["assets/icons/css3.svg", "assets/icons/html5.svg", "assets/icons/figma.svg"],
    forks: 15,
    views: 89,
    updatedAt: "6d ago",
    description: "Responsive auto-fit grid, sticky footer layout, clamp() fluid typography, and centering tricks.",
    tools: [
      {
        id: "t30",
        name: "Auto-Fit Responsive CSS Grid",
        category: "Frontend",
        healthy: true,
        icon: "assets/icons/css3.svg",
        snippet: "display: grid;\ngrid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\ngap: 20px;",
        desc: "Zero-media-query responsive card grid that automatically wraps on mobile.",
        tip: "Use auto-fit rather than auto-fill to stretch cards across full width.",
        docsUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
      },
      {
        id: "t31",
        name: "Flexbox Sticky Footer Layout",
        category: "Frontend",
        healthy: true,
        icon: "assets/icons/css3.svg",
        snippet: "body { min-height: 100vh; display: flex; flex-direction: column; }\nmain { flex: 1; }",
        desc: "Keeps footer pinned to bottom of viewport even on short pages.",
        tip: "Apply flex: 1 to the direct container between navbar and footer.",
        docsUrl: "https://css-tricks.com/couple-takes-sticky-footer/"
      },
      {
        id: "t32",
        name: "Clamp() Fluid Typography",
        category: "Frontend",
        healthy: true,
        icon: "assets/icons/css3.svg",
        snippet: "font-size: clamp(1.5rem, 2.5vw + 1rem, 3rem);",
        desc: "Fluid text scaling from mobile to ultra-wide displays without breakpoint steps.",
        tip: "Minimum value is 1.5rem, preferred is 2.5vw + 1rem, maximum is 3rem.",
        docsUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS/clamp"
      }
    ]
  },
  {
    id: "ph-open-data",
    slug: "philippine-open-data",
    shortUrl: "stac.crate/@dev_miko/ph-data",
    title: "Philippine Open Data & APIs",
    handle: "@dev_miko",
    authorName: "Miko Santos",
    authorInitials: "MS",
    category: "Free APIs",
    visibility: "Public",
    coverTheme: "theme-teal",
    stackIcons: ["assets/icons/json.svg", "assets/icons/javascript.svg", "assets/icons/mysql.svg"],
    forks: 8,
    views: 64,
    updatedAt: "2w ago",
    description: "Philippine Standard Geographic Code (PSGC), zip codes, holiday calendar, and PAGASA cyclone data.",
    tools: [
      {
        id: "t33",
        name: "PSGC Regions & Provinces JSON",
        category: "APIs",
        healthy: true,
        icon: "assets/icons/json.svg",
        snippet: "https://psgc.gitlab.io/api/regions.json",
        desc: "Open static REST mirror for Philippine administrative regions, provinces, and cities.",
        tip: "Includes official 9-digit PSGC codes for address cascades.",
        docsUrl: "https://psgc.gitlab.io/api/"
      },
      {
        id: "t34",
        name: "PH Postal & Zip Code Lookup",
        category: "APIs",
        healthy: true,
        icon: "assets/icons/json.svg",
        snippet: "https://raw.githubusercontent.com/admix/ph-zip-codes/master/zipcodes.json",
        desc: "Crowdsourced raw JSON mapping of Philippine municipalities to 4-digit postal codes.",
        tip: "Cache in localStorage to prevent repeated network requests.",
        docsUrl: "https://github.com/admix/ph-zip-codes"
      },
      {
        id: "t35",
        name: "PAGASA Tropical Cyclone Feed",
        category: "APIs",
        healthy: true,
        icon: "assets/icons/json.svg",
        snippet: "https://bagong.pagasa.dost.gov.ph/weather/cyclone-bulletin",
        desc: "Official storm bulletins, typhoon tracks, and tropical cyclone warning signals.",
        tip: "Ideal for student disaster preparedness systems and capstone apps.",
        docsUrl: "https://bagong.pagasa.dost.gov.ph"
      }
    ]
  }
];

function getToolIcon(tool, crate) {
  if (tool && tool.icon) return tool.icon;
  const name = (tool && tool.name ? tool.name.toLowerCase() : "");
  const cat = (tool && tool.category ? tool.category.toLowerCase() : "");
  if (name.includes("tailwind")) return "assets/icons/tailwindcss.svg";
  if (name.includes("php")) return "assets/icons/php.svg";
  if (name.includes("mysql") || name.includes("sql")) return "assets/icons/mysql.svg";
  if (name.includes("c++") || name.includes("stl") || name.includes("clang") || name.includes("gcc")) return "assets/icons/cplusplus.svg";
  if (name.includes("github")) return "assets/icons/github.svg";
  if (name.includes("git")) return "assets/icons/git.svg";
  if (name.includes("figma") || name.includes("lucide")) return "assets/icons/figma.svg";
  if (name.includes("css") || name.includes("flex") || name.includes("grid") || name.includes("font") || name.includes("palette")) return "assets/icons/css3.svg";
  if (name.includes("html") || name.includes("image")) return "assets/icons/html5.svg";
  if (name.includes("supabase")) return "assets/icons/supabase.svg";
  if (name.includes("json") || name.includes("api") || name.includes("weather") || name.includes("geo") || name.includes("pagasa") || name.includes("psgc") || name.includes("postal")) return "assets/icons/json.svg";
  if (name.includes("bash") || name.includes("ssh") || name.includes("cli") || name.includes("terminal")) return "assets/icons/bash.svg";
  if (name.includes("vscode") || name.includes("devdocs") || name.includes("editor")) return "assets/icons/vscode.svg";
  if (name.includes("js") || name.includes("javascript") || name.includes("visualgo") || name.includes("fetch")) return "assets/icons/javascript.svg";
  if (crate && Array.isArray(crate.stackIcons) && crate.stackIcons.length > 0) return crate.stackIcons[0];
  if (cat === "frontend") return "assets/icons/html5.svg";
  if (cat === "backend") return "assets/icons/php.svg";
  if (cat === "apis") return "assets/icons/json.svg";
  if (cat === "assets") return "assets/icons/figma.svg";
  return "assets/icons/vscode.svg";
}

const STORAGE_KEY = "stac_crate_vault_v2";

// === APPLICATION STATE ===
const state = {
  isAuthenticated: false,
  user: null,
  crates: [],
  starredToolIds: [],
  activeView: "landing",
  activeCrateId: "ws101",
  activeProfileHandle: "@charles",
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
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      raw = localStorage.getItem("stac_crate_vault_v1");
    }
    if (raw) {
      const parsed = JSON.parse(raw);
      state.isAuthenticated = parsed.isAuthenticated === true;
      state.user = parsed.user || { ...DEFAULT_USER };
      const rawCrates = Array.isArray(parsed.crates) && parsed.crates.length > 0 ? parsed.crates : DEFAULT_CRATES;
      state.crates = rawCrates.map(crate => {
        const defaultMatch = DEFAULT_CRATES.find(d => d.id === crate.id);
        const coverTheme = crate.coverTheme || (defaultMatch ? defaultMatch.coverTheme : "theme-terracotta");
        const stackIcons = (Array.isArray(crate.stackIcons) && crate.stackIcons.length > 0)
          ? crate.stackIcons
          : (defaultMatch ? defaultMatch.stackIcons : ["assets/icons/vscode.svg", "assets/icons/javascript.svg", "assets/icons/html5.svg"]);
        const tools = (crate.tools || []).map(t => {
          const defaultTool = defaultMatch ? (defaultMatch.tools || []).find(dt => dt.id === t.id) : null;
          return {
            ...t,
            icon: t.icon || (defaultTool ? defaultTool.icon : getToolIcon(t, crate))
          };
        });
        return {
          ...crate,
          coverTheme,
          stackIcons,
          tools
        };
      });
      state.starredToolIds = Array.isArray(parsed.starredToolIds) ? parsed.starredToolIds : [...DEFAULT_STARRED_TOOL_IDS];
      saveStateToStorage();
      return;
    }
  } catch (error) {
    console.error(error);
  }
  state.isAuthenticated = false;
  state.user = { ...DEFAULT_USER };
  state.crates = JSON.parse(JSON.stringify(DEFAULT_CRATES));
  state.starredToolIds = [...DEFAULT_STARRED_TOOL_IDS];
  saveStateToStorage();
}

function saveStateToStorage() {
  try {
    const payload = {
      isAuthenticated: state.isAuthenticated,
      user: state.user,
      crates: state.crates,
      starredToolIds: state.starredToolIds
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch (error) {
    console.error(error);
  }
}

function resetDemoData() {
  localStorage.removeItem(STORAGE_KEY);
  state.isAuthenticated = false;
  state.user = { ...DEFAULT_USER };
  state.crates = JSON.parse(JSON.stringify(DEFAULT_CRATES));
  state.starredToolIds = [...DEFAULT_STARRED_TOOL_IDS];
  state.activeProfileHandle = "@charles";
  state.dashboardTab = "my-crates";
  saveStateToStorage();
  showToast("Demo data reset to factory default!", "success");
  renderAllViews();
  navigateTo("landing");
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
    triggerButton.classList.add("btn-copied");

    setTimeout(() => {
      triggerButton.textContent = originalText;
      triggerButton.classList.remove("btn-copied");
    }, 1800);
  }
}

function toggleStarTool(toolId) {
  if (!toolId) return;
  const idx = state.starredToolIds.indexOf(toolId);
  if (idx >= 0) {
    state.starredToolIds.splice(idx, 1);
    showToast("Removed from Starred Tools", "normal");
  } else {
    state.starredToolIds.push(toolId);
    showToast("★ Added to Starred Tools!", "success");
  }
  saveStateToStorage();
}

function getStarredTools() {
  const list = [];
  const seenIds = new Set();
  state.crates.forEach(crate => {
    (crate.tools || []).forEach(tool => {
      if (state.starredToolIds.includes(tool.id) && !seenIds.has(tool.id)) {
        seenIds.add(tool.id);
        list.push({
          ...tool,
          crateTitle: crate.title,
          crateId: crate.id,
          crateHandle: crate.handle
        });
      }
    });
  });
  return list;
}

// === ROUTING & NAVIGATION ===
function navigateTo(viewName, param = null) {
  const targetView = document.getElementById(`view-${viewName}`);
  if (!targetView) return;

  state.activeView = viewName;

  if (viewName === "crate") {
    if (param) state.activeCrateId = param;
    state.crateCategoryFilter = "All";
  } else if (viewName === "profile") {
    state.activeProfileHandle = param || state.activeProfileHandle || "@charles";
    state.profileTab = "published";
  }

  document.querySelectorAll(".view-panel").forEach(panel => {
    panel.classList.remove("active");
  });
  targetView.classList.add("active");

  renderNavbar();

  if (viewName === "landing") renderLandingView();
  else if (viewName === "explore") renderExploreView();
  else if (viewName === "crate") renderCrateDetailView();
  else if (viewName === "dashboard") renderDashboardView();
  else if (viewName === "profile") renderProfileView();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// === NAVBAR RENDERING ===
function renderNavbar() {
  const navLinks = document.getElementById("nav-links-section");
  const authContainer = document.getElementById("nav-auth-container");
  if (!navLinks || !authContainer) return;

  if (state.isAuthenticated) {
    navLinks.innerHTML = `
      <a href="#explore" class="nav-link ${state.activeView === "explore" ? "active" : ""}" data-view="explore">Explore</a>
      <a href="#dashboard" class="nav-link ${state.activeView === "dashboard" ? "active" : ""}" data-view="dashboard">My Vault</a>
      <a href="#profile" class="nav-link ${state.activeView === "profile" && state.activeProfileHandle === "@charles" ? "active" : ""}" data-view="profile" data-handle="@charles">Public Profile</a>
    `;

    authContainer.innerHTML = `
      <button class="btn btn-sm btn-outline nav-new-crate-btn" id="nav-btn-new-crate" type="button">+ New Crate</button>
      <div class="user-menu-wrapper" id="user-menu-wrapper">
        <button class="nav-user-dropdown-btn" id="nav-user-dropdown-btn" type="button" aria-haspopup="true" aria-expanded="false">
          <span class="user-avatar-xs">${state.user.initials || "CS"}</span>
          <span class="user-handle-desktop">@${state.user.handle || "charles"}</span>
          <span class="dropdown-chevron">▾</span>
        </button>
        <div class="user-dropdown-menu" id="user-dropdown-menu" aria-hidden="true">
          <div class="dropdown-user-header">
            <span class="dropdown-user-name">${escapeHtml(state.user.name || "Charles Sevilla")}</span>
            <span class="dropdown-user-email">${escapeHtml(state.user.email || "charles.sevilla@hnu.edu.ph")}</span>
          </div>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item" id="menu-item-profile" type="button">
            <span class="menu-icon">👤</span> Public Profile (@${state.user.handle || "charles"})
          </button>
          <button class="dropdown-item" id="menu-item-vault" type="button">
            <span class="menu-icon">📦</span> My Vault (Dashboard)
          </button>
          <button class="dropdown-item" id="menu-item-starred" type="button">
            <span class="menu-icon">⭐</span> Starred Tools
          </button>
          <button class="dropdown-item" id="menu-item-new-crate" type="button">
            <span class="menu-icon">➕</span> Create New Crate
          </button>
          <button class="dropdown-item" id="menu-item-explore" type="button">
            <span class="menu-icon">🧭</span> Explore All Crates
          </button>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item text-danger" id="menu-item-signout" type="button">
            <span class="menu-icon">🚪</span> Sign Out
          </button>
        </div>
      </div>
    `;

    const newCrateBtn = document.getElementById("nav-btn-new-crate");
    if (newCrateBtn) {
      newCrateBtn.addEventListener("click", () => openCreateEditModal(null));
    }

    const dropdownBtn = document.getElementById("nav-user-dropdown-btn");
    const dropdownMenu = document.getElementById("user-dropdown-menu");
    const userMenuWrapper = document.getElementById("user-menu-wrapper");

    if (dropdownBtn && dropdownMenu && userMenuWrapper) {
      dropdownBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = dropdownMenu.classList.contains("open");
        if (isOpen) {
          dropdownMenu.classList.remove("open");
          userMenuWrapper.classList.remove("open");
          dropdownBtn.setAttribute("aria-expanded", "false");
        } else {
          dropdownMenu.classList.add("open");
          userMenuWrapper.classList.add("open");
          dropdownBtn.setAttribute("aria-expanded", "true");
        }
      });
    }

    const itemProfile = document.getElementById("menu-item-profile");
    if (itemProfile) {
      itemProfile.addEventListener("click", () => {
        closeUserDropdown();
        navigateTo("profile", "@charles");
      });
    }

    const itemVault = document.getElementById("menu-item-vault");
    if (itemVault) {
      itemVault.addEventListener("click", () => {
        closeUserDropdown();
        state.dashboardTab = "my-crates";
        navigateTo("dashboard");
      });
    }

    const itemStarred = document.getElementById("menu-item-starred");
    if (itemStarred) {
      itemStarred.addEventListener("click", () => {
        closeUserDropdown();
        state.dashboardTab = "starred";
        navigateTo("dashboard");
      });
    }

    const itemNewCrate = document.getElementById("menu-item-new-crate");
    if (itemNewCrate) {
      itemNewCrate.addEventListener("click", () => {
        closeUserDropdown();
        openCreateEditModal(null);
      });
    }

    const itemExplore = document.getElementById("menu-item-explore");
    if (itemExplore) {
      itemExplore.addEventListener("click", () => {
        closeUserDropdown();
        navigateTo("explore");
      });
    }

    const itemSignout = document.getElementById("menu-item-signout");
    if (itemSignout) {
      itemSignout.addEventListener("click", () => {
        closeUserDropdown();
        state.isAuthenticated = false;
        saveStateToStorage();
        renderNavbar();
        showToast("Signed out of Stac.crate", "normal");
        navigateTo("landing");
      });
    }
  } else {
    navLinks.innerHTML = `
      <a href="#explore" class="nav-link ${state.activeView === "explore" ? "active" : ""}" data-view="explore">Explore</a>
      <a href="#how-it-works" class="nav-link" id="nav-link-how-it-works">How It Works</a>
    `;

    authContainer.innerHTML = `
      <a href="#signin" id="nav-btn-signin" class="btn btn-sm btn-ghost nav-auth-signin ${state.activeView === "signin" ? "active" : ""}" data-view="signin">Sign In</a>
      <a href="#signup" id="nav-btn-signup" class="btn btn-sm btn-primary nav-auth-claim ${state.activeView === "signup" ? "active" : ""}" data-view="signup">Claim Handle →</a>
    `;

    const howItWorksLink = document.getElementById("nav-link-how-it-works");
    if (howItWorksLink) {
      howItWorksLink.addEventListener("click", (e) => {
        e.preventDefault();
        if (state.activeView !== "landing") {
          navigateTo("landing");
          setTimeout(() => {
            const section = document.getElementById("how-it-works");
            if (section) section.scrollIntoView({ behavior: "smooth" });
          }, 100);
        } else {
          const section = document.getElementById("how-it-works");
          if (section) section.scrollIntoView({ behavior: "smooth" });
        }
      });
    }

    authContainer.querySelectorAll("[data-view]").forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const v = link.getAttribute("data-view");
        navigateTo(v);
      });
    });
  }

  navLinks.querySelectorAll("[data-view]").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const v = link.getAttribute("data-view");
      const handle = link.getAttribute("data-handle");
      navigateTo(v, handle);
    });
  });

  const exploreMobilePill = document.querySelector(".nav-explore-pill");
  if (exploreMobilePill) {
    if (state.activeView === "explore") {
      exploreMobilePill.classList.add("active");
    } else {
      exploreMobilePill.classList.remove("active");
    }
  }
}

function closeUserDropdown() {
  const menu = document.getElementById("user-dropdown-menu");
  const wrapper = document.getElementById("user-menu-wrapper");
  const btn = document.getElementById("nav-user-dropdown-btn");
  if (menu) menu.classList.remove("open");
  if (wrapper) wrapper.classList.remove("open");
  if (btn) btn.setAttribute("aria-expanded", "false");
}

function setupNavbarEvents() {
  const logo = document.getElementById("brand-logo");
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("landing");
    });
  }

  const exploreMobilePill = document.querySelector(".nav-explore-pill");
  if (exploreMobilePill) {
    exploreMobilePill.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("explore");
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
    card.addEventListener("click", (e) => {
      if (e.target.closest(".author-link") || e.target.closest(".copy-trigger")) return;
      const cid = card.getAttribute("data-id");
      navigateTo("crate", cid);
    });
  });

  const heroMockup = document.getElementById("hero-live-mockup");
  if (heroMockup) {
    heroMockup.onclick = (e) => {
      if (e.target.closest(".copy-trigger") || e.target.closest(".author-link")) return;
      navigateTo("crate", "ws101");
    };
  }

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
  const healthyCount = (crate.tools || []).filter(t => t.healthy).length;
  const totalCount = (crate.tools || []).length;
  const allHealthy = totalCount > 0 && healthyCount === totalCount;
  const themeClass = crate.coverTheme || "theme-terracotta";
  const icons = (Array.isArray(crate.stackIcons) && crate.stackIcons.length > 0)
    ? crate.stackIcons
    : ["assets/icons/vscode.svg", "assets/icons/javascript.svg", "assets/icons/html5.svg"];

  const stackHtml = icons.slice(0, 3).map(icon => `
    <div class="hero-icon-tile">
      <img src="${escapeHtml(icon)}" alt="" class="tech-icon-img" />
    </div>
  `).join("");

  const tagList = (crate.tools || []).slice(0, 2).map(t => `<span class="tool-chip">${escapeHtml(t.name)}</span>`).join("");
  const extraCount = (crate.tools || []).length > 2 ? `<span class="tool-chip">+${(crate.tools || []).length - 2}</span>` : "";

  return `
    <div class="crate-card" data-id="${crate.id}">
      <div class="crate-card-hero ${escapeHtml(themeClass)}">
        <div class="crate-hero-stack">
          ${stackHtml}
        </div>
        <div class="crate-hero-badges">
          <span class="crate-category-badge">${escapeHtml(crate.category || "General")}</span>
          <span class="crate-status-badge ${allHealthy ? "status-alive" : "status-warning"}">
            <span class="status-indicator-dot"></span>
            ${healthyCount}/${totalCount} Alive
          </span>
        </div>
      </div>

      <div class="crate-card-body">
        <div class="crate-card-header">
          <h3 class="crate-card-title">${escapeHtml(crate.title)}</h3>
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
            <span class="author-link" data-handle="${escapeHtml(crate.handle)}">${escapeHtml(crate.handle)}</span>
          </div>
          <div class="crate-card-forks">
            <span>🍴 ${crate.forks || 0}</span>
          </div>
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
      state.isAuthenticated = true;
      state.user = { ...DEFAULT_USER, email: email || DEFAULT_USER.email };
      saveStateToStorage();
      renderNavbar();
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

      state.isAuthenticated = true;
      state.user = {
        name,
        handle: handle.replace("@", ""),
        email,
        initials,
        role: "BSIT Sophomore · Holy Name University (HNU)",
        bio: `BSIT Sophomore · Holy Name University (HNU) · Curating ${handle}'s starter packs.`,
        profileViews: 1
      };
      saveStateToStorage();
      renderNavbar();
      navigateTo("dashboard");
      showToast(`Account @${state.user.handle} registered successfully!`, "success");
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
    card.addEventListener("click", (e) => {
      if (e.target.closest(".author-link") || e.target.closest(".copy-trigger")) return;
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
  if (breadHandle) {
    breadHandle.textContent = crate.handle;
    breadHandle.setAttribute("data-handle", crate.handle);
  }
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

  const heroEl = document.getElementById("crate-detail-hero");
  const heroStackEl = document.getElementById("crate-detail-hero-stack");
  const heroBadgesEl = document.getElementById("crate-detail-hero-badges");
  const themeClass = crate.coverTheme || "theme-terracotta";
  const icons = (Array.isArray(crate.stackIcons) && crate.stackIcons.length > 0)
    ? crate.stackIcons
    : ["assets/icons/vscode.svg", "assets/icons/javascript.svg", "assets/icons/html5.svg"];

  if (heroEl) {
    heroEl.className = `crate-detail-hero-banner ${themeClass}`;
  }
  if (heroStackEl) {
    heroStackEl.innerHTML = icons.slice(0, 3).map(icon => `
      <div class="hero-icon-tile">
        <img src="${escapeHtml(icon)}" alt="" class="tech-icon-img" />
      </div>
    `).join("");
  }
  if (heroBadgesEl) {
    heroBadgesEl.innerHTML = `
      <span class="crate-category-badge">${escapeHtml(crate.category || "General")}</span>
      <span class="crate-status-badge ${isAllHealthy ? "status-alive" : "status-warning"}">
        <span class="status-indicator-dot"></span>
        ${healthyCount}/${tools.length} Alive
      </span>
    `;
  }

  if (metaEl) {
    metaEl.innerHTML = `Curated by <span class="author-link" data-handle="${escapeHtml(crate.handle)}">${escapeHtml(crate.authorName || "Charles Sevilla")} (${escapeHtml(crate.handle)})</span> · Updated ${escapeHtml(crate.updatedAt || "recently")} · <span class="${isAllHealthy ? "alive-dot" : "alert-dot-red"}"></span> ${healthyCount}/${tools.length} links healthy`;
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

  const crate = state.crates.find(c => c.id === state.activeCrateId);
  grid.innerHTML = filtered.map(t => {
    const isStarred = state.starredToolIds.includes(t.id);
    const toolIcon = getToolIcon(t, crate);
    return `
      <div class="tool-card">
        <div class="tool-card-header">
          <div class="tool-name-group">
            <span class="tool-tech-icon-badge">
              <img src="${escapeHtml(toolIcon)}" alt="" class="tech-icon-img" />
            </span>
            <span class="${t.healthy ? "alive-dot" : "alert-dot-red"}"></span>
            <h3 class="tool-card-name">${escapeHtml(t.name)}</h3>
            <span class="tool-category-badge">${escapeHtml(t.category || "General")}</span>
          </div>
          <div class="tool-card-actions">
            <button type="button" class="tool-star-btn ${isStarred ? "starred" : ""}" data-tool-id="${escapeHtml(t.id)}" title="${isStarred ? "Remove from Starred" : "Star this tool"}">
              <span class="star-icon">${isStarred ? "★" : "☆"}</span>
              <span class="star-label">${isStarred ? "Starred" : "Star"}</span>
            </button>
            ${t.docsUrl ? `<a href="${escapeHtml(t.docsUrl)}" target="_blank" rel="noopener" class="tool-docs-link">Docs ↗</a>` : ""}
          </div>
        </div>

        <p class="tool-card-desc">${escapeHtml(t.desc || "")}</p>

        <div class="tool-snippet-block">
          <code class="tool-code">${escapeHtml(t.snippet || "")}</code>
          <button class="btn btn-xs btn-outline copy-trigger" data-copy="${escapeHtml(t.snippet || "")}">Copy</button>
        </div>

        ${t.tip ? `<div class="tool-tip-box">💡 ${escapeHtml(t.tip)}</div>` : ""}
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".tool-star-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const tid = btn.getAttribute("data-tool-id");
      toggleStarTool(tid);
      const isStarred = state.starredToolIds.includes(tid);
      btn.classList.toggle("starred", isStarred);
      const icon = btn.querySelector(".star-icon");
      const label = btn.querySelector(".star-label");
      if (icon) icon.textContent = isStarred ? "★" : "☆";
      if (label) label.textContent = isStarred ? "Starred" : "Star";
      btn.title = isStarred ? "Remove from Starred" : "Star this tool";

      const tabStarred = document.getElementById("tab-starred");
      if (tabStarred) tabStarred.textContent = `Starred Tools (${state.starredToolIds.length})`;
    });
  });

  attachCopyButtons(grid);
}

// === DASHBOARD VAULT VIEW RENDERING ===
function renderDashboardView() {
  const metricsStrip = document.getElementById("dashboard-metrics-strip");

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
  const tabStarred = document.getElementById("tab-starred");
  if (tabMyCrates) tabMyCrates.textContent = `My Crates (${myCrates.length})`;
  if (tabForked) tabForked.textContent = `Forked from Peers (${forkedCrates.length})`;
  if (tabStarred) tabStarred.textContent = `Starred Tools (${state.starredToolIds.length})`;

  document.querySelectorAll(".dash-tab").forEach(tab => {
    if (tab.getAttribute("data-tab") === state.dashboardTab) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  renderVaultRows(myCrates, forkedCrates);
}

function renderVaultRows(myCrates, forkedCrates) {
  const container = document.getElementById("vault-rows-list");
  if (!container) return;

  if (state.dashboardTab === "starred") {
    const starredTools = getStarredTools();
    if (starredTools.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--surface); border-radius: var(--radius-lg); border: 1px dashed var(--border-strong);">
          <h3 style="font-size: 15px; font-weight: 600; color: var(--ink);">No starred tools yet</h3>
          <p style="font-size: 13px; color: var(--ink-secondary); margin-top: 4px;">Click the ☆ Star button on any tool in a crate to bookmark it here for instant reference.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="starred-tools-grid">
        ${starredTools.map(t => {
          const toolIcon = getToolIcon(t);
          return `
          <div class="tool-card starred-item-card">
            <div class="tool-card-header">
              <div class="tool-name-group">
                <span class="tool-tech-icon-badge">
                  <img src="${escapeHtml(toolIcon)}" alt="" class="tech-icon-img" />
                </span>
                <span class="${t.healthy ? "alive-dot" : "alert-dot-red"}"></span>
                <h3 class="tool-card-name">${escapeHtml(t.name)}</h3>
                <span class="tool-category-badge">${escapeHtml(t.category || "General")}</span>
              </div>
              <div class="tool-card-actions">
                <button type="button" class="tool-star-btn starred" data-tool-id="${escapeHtml(t.id)}" title="Remove from Starred">
                  <span class="star-icon">★</span>
                  <span class="star-label">Starred</span>
                </button>
                ${t.docsUrl ? `<a href="${escapeHtml(t.docsUrl)}" target="_blank" rel="noopener" class="tool-docs-link">Docs ↗</a>` : ""}
              </div>
            </div>

            <div class="starred-origin-row">
              <span class="origin-label">Saved from:</span>
              <span class="origin-crate-link" data-crate-id="${escapeHtml(t.crateId)}">${escapeHtml(t.crateTitle)}</span>
              <span class="origin-sep">·</span>
              <span class="author-link" data-handle="${escapeHtml(t.crateHandle)}">${escapeHtml(t.crateHandle)}</span>
            </div>

            <p class="tool-card-desc">${escapeHtml(t.desc || "")}</p>

            <div class="tool-snippet-block">
              <code class="tool-code">${escapeHtml(t.snippet || "")}</code>
              <button class="btn btn-xs btn-outline copy-trigger" data-copy="${escapeHtml(t.snippet || "")}">Copy</button>
            </div>

            ${t.tip ? `<div class="tool-tip-box">💡 ${escapeHtml(t.tip)}</div>` : ""}
          </div>
        `;
        }).join("")}
      </div>
    `;

    container.querySelectorAll(".origin-crate-link").forEach(link => {
      link.addEventListener("click", () => {
        const cid = link.getAttribute("data-crate-id");
        navigateTo("crate", cid);
      });
    });

    container.querySelectorAll(".tool-star-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const tid = btn.getAttribute("data-tool-id");
        toggleStarTool(tid);
        renderDashboardView();
      });
    });

    attachCopyButtons(container);
    return;
  }

  let activeList = [];
  if (state.dashboardTab === "my-crates") {
    activeList = myCrates;
  } else if (state.dashboardTab === "forked") {
    activeList = forkedCrates;
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
    const primaryIcon = (Array.isArray(crate.stackIcons) && crate.stackIcons.length > 0) ? crate.stackIcons[0] : "assets/icons/vscode.svg";

    return `
      <div class="vault-row">
        <div class="vault-row-body">
          <div class="vault-row-icon-tile">
            <img src="${escapeHtml(primaryIcon)}" alt="" class="tech-icon-img" />
          </div>
          <div class="vault-row-main">
            <div class="vault-row-header">
              <span class="${isHealthy ? "alive-dot" : "alert-dot-red"}"></span>
              <span class="vault-row-title" data-crate-id="${crate.id}">${escapeHtml(crate.title)}</span>
              <span class="visibility-pill">${escapeHtml(crate.visibility || "Public")}</span>
              ${crate.isForkedByCharles ? `<span class="visibility-pill">Forked from <span class="author-link" data-handle="${escapeHtml(crate.forkedFrom || "@peer")}">${escapeHtml(crate.forkedFrom || "@peer")}</span></span>` : ""}
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
  const handle = state.activeProfileHandle || "@charles";
  const curator = CURATORS[handle] || {
    name: handle.replace("@", ""),
    handle: handle,
    initials: handle.replace("@", "").substring(0, 2).toUpperCase(),
    role: "BSIT Student · Holy Name University (HNU)",
    bio: "Curating starter packs and developer tools at Holy Name University.",
    email: `${handle.replace("@", "")}@hnu.edu.ph`,
    pinnedSnippets: []
  };

  const avatarLarge = document.querySelector(".profile-avatar-large");
  const nameEl = document.querySelector(".profile-name");
  const handlePill = document.querySelector(".profile-handle-pill");
  const bioEl = document.querySelector(".profile-bio");
  const shareBtn = document.getElementById("profile-share-btn");
  const statsStrip = document.querySelector(".profile-stats-strip");
  const pinnedTitle = document.querySelector(".pinned-section-title");

  if (avatarLarge) avatarLarge.textContent = curator.initials;
  if (nameEl) nameEl.textContent = curator.name;
  if (handlePill) handlePill.textContent = curator.handle;
  if (bioEl) bioEl.textContent = curator.bio;

  if (shareBtn) {
    const shareUrl = `stac.crate/${curator.handle}`;
    shareBtn.setAttribute("data-copy", shareUrl);
    const span = shareBtn.querySelector("span:not(.copy-pill-badge)");
    if (span) span.textContent = shareUrl;
  }

  if (pinnedTitle) {
    pinnedTitle.textContent = `Pinned Quick-Copy Snippets by ${curator.handle}`;
  }

  const publishedCrates = state.crates.filter(c => c.handle.toLowerCase() === curator.handle.toLowerCase() && c.visibility === "Public");
  const forkedCrates = curator.handle === "@charles" ? state.crates.filter(c => c.isForkedByCharles) : [];

  let totalForks = 0;
  let totalTools = 0;
  let healthyTools = 0;

  publishedCrates.forEach(c => {
    totalForks += c.forks || 0;
    (c.tools || []).forEach(t => {
      totalTools++;
      if (t.healthy) healthyTools++;
    });
  });

  if (statsStrip) {
    statsStrip.innerHTML = `
      <span>📦 ${publishedCrates.length} Public Crate${publishedCrates.length === 1 ? "" : "s"}</span>
      <span class="stat-sep">·</span>
      <span>🍴 ${totalForks} Total Classmate Forks</span>
      <span class="stat-sep">·</span>
      <span class="stat-status-alive">● ${healthyTools}/${totalTools} Public Links Verified 200 OK</span>
    `;
  }

  const ptabPub = document.getElementById("ptab-published");
  const ptabFork = document.getElementById("ptab-forked");
  if (ptabPub) ptabPub.textContent = `Published Crates (${publishedCrates.length})`;
  if (ptabFork) ptabFork.textContent = `Forked from Classmates (${forkedCrates.length})`;

  document.querySelectorAll(".profile-tab").forEach(tab => {
    if (tab.getAttribute("data-tab") === state.profileTab) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });

  const grid = document.getElementById("profile-crates-grid");
  if (grid) {
    const activeList = state.profileTab === "published" ? publishedCrates : forkedCrates;
    if (activeList.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--surface); border-radius: var(--radius-lg); border: 1px dashed var(--border-strong);">
          <h3 style="font-size: 15px; font-weight: 600; color: var(--ink);">No ${state.profileTab === "published" ? "published" : "forked"} crates yet</h3>
          <p style="font-size: 13px; color: var(--ink-secondary); margin-top: 4px;">Check back later or explore other student crates.</p>
        </div>
      `;
    } else {
      grid.innerHTML = activeList.map(c => generateCrateCardHtml(c)).join("");
      grid.querySelectorAll(".crate-card").forEach(card => {
        card.addEventListener("click", (e) => {
          if (e.target.closest(".author-link") || e.target.closest(".copy-trigger")) return;
          const cid = card.getAttribute("data-id");
          navigateTo("crate", cid);
        });
      });
    }
  }

  const pinnedGrid = document.querySelector(".pinned-snippets-grid");
  if (pinnedGrid) {
    const snippets = curator.pinnedSnippets && curator.pinnedSnippets.length > 0 ? curator.pinnedSnippets : CURATORS["@charles"].pinnedSnippets;
    pinnedGrid.innerHTML = snippets.map(ps => `
      <div class="pinned-snippet-card">
        <div class="pinned-header">
          <span class="pinned-tool-title">${escapeHtml(ps.title)}</span>
          <button class="btn btn-xs btn-outline copy-trigger" data-copy="${escapeHtml(ps.code)}">Copy</button>
        </div>
        <code class="pinned-code-block">${escapeHtml(ps.code)}</code>
      </div>
    `).join("");
    attachCopyButtons(pinnedGrid);
  }
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

      if (!state.isAuthenticated) {
        state.isAuthenticated = true;
        state.user = { ...DEFAULT_USER };
        renderNavbar();
      }

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
          coverTheme: "theme-terracotta",
          stackIcons: ["assets/icons/vscode.svg", "assets/icons/javascript.svg", "assets/icons/html5.svg"],
          forks: 0,
          views: 1,
          updatedAt: "Just now",
          description: descInput.value.trim() || `Curated toolpack by Charles Sevilla for ${catInput.value}.`,
          tools: (state.modalCrateDraftTools.length > 0 ? [...state.modalCrateDraftTools] : [
            {
              id: `t_${Date.now()}`,
              name: "Starter Toolkit CDN",
              category: "Frontend",
              healthy: true,
              icon: "assets/icons/tailwindcss.svg",
              snippet: '<script src="https://cdn.tailwindcss.com"></script>',
              desc: "Quick initialization script.",
              tip: "Verified 200 OK.",
              docsUrl: "https://devdocs.io"
            }
          ]).map(t => ({
            ...t,
            icon: t.icon || getToolIcon(t)
          }))
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

      if (!state.isAuthenticated) {
        state.isAuthenticated = true;
        state.user = { ...DEFAULT_USER };
        renderNavbar();
      }

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
        coverTheme: crateBeingForked.coverTheme || "theme-terracotta",
        stackIcons: (Array.isArray(crateBeingForked.stackIcons) && crateBeingForked.stackIcons.length > 0) ? [...crateBeingForked.stackIcons] : ["assets/icons/vscode.svg", "assets/icons/javascript.svg", "assets/icons/html5.svg"],
        isForkedByCharles: true,
        forkedFrom: crateBeingForked.handle,
        forks: 0,
        views: 1,
        updatedAt: "Just now",
        description: `Forked from ${crateBeingForked.handle}. ${crateBeingForked.description}`,
        tools: selectedTools.map(t => ({ ...t, icon: t.icon || getToolIcon(t, crateBeingForked) }))
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
  renderNavbar();
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

  document.addEventListener("click", (e) => {
    const authorLink = e.target.closest(".author-link");
    if (authorLink) {
      e.preventDefault();
      e.stopPropagation();
      let handle = authorLink.getAttribute("data-handle") || "@charles";
      if (!handle.startsWith("@")) handle = "@" + handle;
      navigateTo("profile", handle);
      return;
    }

    const wrapper = document.getElementById("user-menu-wrapper");
    if (wrapper && !wrapper.contains(e.target)) {
      closeUserDropdown();
    }
  });

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
