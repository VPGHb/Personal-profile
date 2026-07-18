const portfolioData = {
  name: "Vraj Patel",
  title: "Developer focused on web, mobile, data, and AI",
  roles: ["web experiences", "mobile apps", "data systems", "AI integrations", "scroll-driven interfaces"],
  bio: "I build practical software end to end: responsive web interfaces, mobile apps, databases, AI-assisted tools, and the systems that connect them. I am finishing a Computer Science degree with an AI concentration at NYIT, carrying a 3.91 GPA, freelancing on production websites, and building projects that help me learn by shipping.",
  email: "vrajkp501@gmail.com",
  phone: "(646) 492-0266",
  location: "New York, United States",
  resumeLink: "assets/Vraj_Patel_Resume_Updated_2026.pdf",
  social: {
    github: "https://github.com/VPGHb",
    linkedin: "https://www.linkedin.com/in/P-Vraj"
  },
  stats: [
    { label: "GPA", value: "3.91" },
    { label: "Public repos", value: "9+" },
    { label: "Clinical + tech hours", value: "60+" },
    { label: "Graduation", value: "2026" }
  ],
  experience: [
    {
      company: "Avanti Jewels E-commerce Website",
      role: "Front-End Web Developer (Freelance)",
      location: "Hicksville, NY",
      dates: "Dec 2025 - Jan 2026",
      liveLink: "http://avantijewels.com/",
      githubLink: "https://github.com/VPGHb/Avanti-jewels",
      description: "Launched a responsive production ecommerce site for a jewelry business with 9 product categories, product detail pages, filtering, sorting, image galleries, lightbox viewing, theme persistence, and custom-domain deployment.",
      highlights: ["JavaScript", "HTML", "CSS", "GitHub Pages", "DNS"]
    },
    {
      company: "Signature Smile Dental",
      role: "Intern, Clinical Systems & Workflow",
      location: "Bristol, PA",
      dates: "Dec 2022 - Mar 2023",
      liveLink: "",
      githubLink: "",
      description: "Analyzed EHR, appointment scheduling, and digital radiography workflows across 60+ mentorship hours by observing patient intake, charting, insurance processing, and follow-up scheduling.",
      highlights: ["EHR", "Workflow Analysis", "Data Flow", "Clinical Systems"]
    }
  ],
  projects: [
    {
      title: "Lumen Finance",
      meta: "React Native\nExpo / Supabase",
      summary: "AI assisted mobile finance app for budgets, transactions, savings goals, and spending insight.",
      image: "assets/lumen-finance-logo.jpeg",
      points: [
        "Built a full stack mobile finance app with secure auth, transaction management, budget tracking, and savings goals, using Supabase Row Level Security",
        "Integrated AI powered financial insights via Groq's Llama 3.3 70B through Supabase Edge Functions to deliver personalized spending recommendations",
        "Developed interactive analytics dashboards with period based bar charts and category breakdowns using TypeScript and NativeWind"
      ],
      tech: ["React Native", "Expo", "Supabase", "TypeScript"],
      liveLink: "",
      githubLink: "https://github.com/VPGHb",
      accent: "#00D4FF"
    },
    {
      title: "Gmail AI Agent",
      meta: "Python\nGmail API / Gemini",
      summary: "Secure CLI assistant for Gmail summaries, configurable priority alerts, and local reply recommendations.",
      image: "",
      imageLabel: "AI MAIL",
      points: [
        "Built a secure Python CLI assistant for Gmail summaries, priority alerts, and local reply recommendations by integrating Gmail OAuth, optional Gemini generation, and deterministic fallback rules",
        "Reduced automation risk with read-only OAuth by default, two-flag write authorization, dry-run mutation suppression, sensitive log redaction, and offline unit tests",
        "Structured the project into core Gmail/API services, security gates, agents, CLI commands, configuration, and tests for maintainable future expansion"
      ],
      tech: ["Python", "Gmail API", "Gemini", "OAuth", "Pytest"],
      liveLink: "",
      githubLink: "https://github.com/VPGHb/gmail-ai-agent",
      accent: "#9BE0A8"
    },
    {
      title: "GPU Scroll Sequence",
      meta: "HTML / CSS / JavaScript\nGSAP / Canvas",
      summary: "Apple-style scroll animation that maps scroll progress to individual AI-generated GPU frames.",
      image: "",
      imageLabel: "GPU",
      points: [
        "Created a standalone product-style scroll experience using Google Flow generated motion frames, EZGIF frame slicing, GSAP ScrollTrigger, and canvas rendering",
        "Preloaded 50 frame assets, pinned the canvas during scroll, and mapped scroll progress to exact image frames for a smooth scrubbed animation",
        "Added parallax intro content, sticky walkthrough panels, responsive layout rules, reduced-motion support, and GitHub Pages deployment"
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "GSAP", "Canvas", "Google Flow"],
      liveLink: "https://vpghb.github.io/Web-GPU-scroll-sequence/",
      githubLink: "https://github.com/VPGHb/Web-GPU-scroll-sequence",
      accent: "#C2CABB"
    },
    {
      title: "Database Management System",
      meta: "Java\nJavaFX",
      summary: "A JavaFX teaching tool that makes multi database CRUD workflows approachable for non expert users.",
      image: "",
      imageLabel: "NYIT",
      points: [
        "Led development of a multiple DBMS application supporting PostgreSQL, MySQL, and Oracle with full CRUD operations, adopted by NYIT's Entrepreneurship Center for student instruction",
        "Architected a JavaFX frontend with JDBC connectivity, removing the need for deep SQL syntax knowledge across three database platforms",
        "Improved database management efficiency by 40% with a unified table, row, and column level interface for non expert users"
      ],
      tech: ["Java", "JavaFX", "JDBC", "PostgreSQL", "MySQL", "OracleDB"],
      liveLink: "",
      githubLink: "https://github.com/VPGHb/PolyDB-Manager",
      accent: "#FF6B6B"
    },
    {
      title: "Personal Portfolio",
      meta: "HTML / CSS / JavaScript\nThree.js / Anime.js",
      summary: "Dark cinematic portfolio website built to present web, mobile, data, and AI projects to recruiters.",
      image: "assets/vraj-profile.png",
      points: [
        "Designed and deployed a responsive developer portfolio with a continuously animated Three.js starfield, editorial dark UI, scroll-triggered reveals, project detail dialogs, and contact workflow",
        "Built data-driven portfolio content in JavaScript so projects, socials, experience, and contact details can be updated without rewriting page structure",
        "Published through GitHub Pages from the docs folder and hardened the site for module loading through local and hosted static servers"
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Three.js", "Anime.js"],
      liveLink: "https://vpghb.github.io/Personal-profile/",
      githubLink: "https://github.com/VPGHb/Personal-profile",
      accent: "#F8FAFC"
    },
    {
      title: "Avanti Jewels",
      meta: "HTML5\nCSS3 / JavaScript",
      summary: "Production ecommerce storefront for a jewelry business with polished browsing and product discovery.",
      image: "assets/avanti-jewels-logo.png",
      points: [
        "Responsive production ecommerce website for a jewelry business with 9 product categories, product detail pages, filtering, sorting, image galleries, lightbox viewing, and theme persistence"
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Custom Domain"],
      liveLink: "http://avantijewels.com/",
      githubLink: "https://github.com/VPGHb/Avanti-jewels",
      accent: "#C2CABB"
    }
  ],
  skills: [
    { name: "HTML5", percentage: 95, icon: "fa-html5", detail: "Semantic structure, responsive markup, forms" },
    { name: "CSS3", percentage: 92, icon: "fa-css3-alt", detail: "Grid, animation, glass UI, mobile-first systems" },
    { name: "JavaScript", percentage: 90, icon: "fa-js", detail: "DOM apps, interactions, data-driven interfaces" },
    { name: "React", percentage: 84, icon: "fa-react", detail: "Component thinking through React Native and Expo" },
    { name: "Three.js", percentage: 78, icon: "fa-cube", detail: "Interactive 3D scenes, particles, motion" },
    { name: "Node.js", percentage: 74, icon: "fa-node-js", detail: "Tooling foundations and JavaScript ecosystem" },
    { name: "Python", percentage: 82, icon: "fa-python", detail: "CS coursework, automation, problem solving" },
    { name: "Git", percentage: 88, icon: "fa-git-alt", detail: "GitHub workflows, versioning, project collaboration" },
    { name: "Docker", percentage: 62, icon: "fa-docker", detail: "Learning containerized development workflows" },
    { name: "AWS", percentage: 58, icon: "fa-aws", detail: "EC2/S3 fundamentals and cloud basics" },
    { name: "TypeScript", percentage: 80, icon: "fa-code", detail: "Typed mobile app logic and safer interfaces" },
    { name: "Next.js", percentage: 64, icon: "fa-layer-group", detail: "Modern React app architecture fundamentals" }
  ],
  education: {
    school: "New York Institute of Technology",
    degree: "Bachelor of Science in Computer Science, AI Concentration",
    graduation: "Expected Dec 2026",
    gpa: "3.91"
  },
  certifications: [
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      date: "Issued Jul 2026",
      detail: "Generative AI model understanding, prompt engineering, responsible use, and AI-powered business workflows.",
      link: "https://www.linkedin.com/learning/certificates/7cdd06f0d83fbc3f52c3200e625dcea14527aa605b1e64f3a655a0cfe354f1ee/?trk=share_certificate"
    },
    {
      title: "Responsible AI: Applying AI Principles with Google Cloud",
      issuer: "Google",
      date: "Issued Jul 2026",
      detail: "Responsible AI principles, bias and fairness awareness, transparency, governance, and risk evaluation.",
      link: "https://www.linkedin.com/in/p-vraj/"
    },
    {
      title: "NYS Real Estate Salesperson License",
      issuer: "New York State / RealEstateU",
      date: "Jun 2026 - Jun 2028",
      detail: "NYS licensed; completed the RealEstateU 77-hour salesperson licensing course.",
      link: "https://www.linkedin.com/in/p-vraj/"
    },
    {
      title: "25 Hour ETIC Certificate Program",
      issuer: "New York Institute of Technology",
      date: "Issued Jul 2025",
      detail: "Applied project experience connected to Java, Oracle Database, and software development.",
      link: "https://www.linkedin.com/in/p-vraj/"
    }
  ]
};
