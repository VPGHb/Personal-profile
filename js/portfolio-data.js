const portfolioData = {
  name: "Vraj Patel",
  title: "Developer focused on web, mobile, data, and AI",
  roles: ["web experiences", "mobile apps", "data systems", "AI integrations"],
  bio: "I build things that work end to end: interfaces, databases, and the systems in between. Currently finishing a CS degree with an AI concentration at NYIT, freelancing on production e-commerce sites, and shipping side projects like an AI-powered finance app and a multi-database management tool used for student instruction.",
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
    { label: "Projects", value: "6+" },
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
      description: "Developed a responsive ecommerce platform with 10+ product category pages, filtering, sorting, pagination, dual theme persistence, image galleries, lightbox interactions, and custom domain setup.",
      highlights: ["JavaScript", "HTML", "CSS", "Responsive UI", "DNS"]
    },
    {
      company: "Signature Smile Dental",
      role: "Technical Mentorship - Clinical Systems & Workflow",
      location: "Bristol, PA",
      dates: "Dec 2022 - Mar 2023",
      liveLink: "",
      githubLink: "",
      description: "Analyzed EHR workflows, scheduling systems, digital radiography integration, clinical charting, insurance processing, and automated follow-up flows across 60+ hours of mentorship.",
      highlights: ["EHR", "Workflow Analysis", "Data Flow", "Clinical Systems"]
    }
  ],
  projects: [
    {
      title: "Lumen Finance",
      meta: "React Native\nExpo · Supabase",
      summary: "AI assisted mobile finance app for budgets, transactions, savings goals, and spending insight.",
      image: "",
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
      title: "Database Management System",
      meta: "Java\nJavaFX",
      summary: "A JavaFX teaching tool that makes multi database CRUD workflows approachable for non expert users.",
      image: "",
      points: [
        "Led development of a multiple DBMS application supporting PostgreSQL, MySQL, and Oracle with full CRUD operations, adopted by NYIT's Entrepreneurship Center for student instruction",
        "Architected a JavaFX frontend with JDBC connectivity, removing the need for deep SQL syntax knowledge across three database platforms",
        "Improved database management efficiency by 40% with a unified table, row, and column level interface for non expert users"
      ],
      tech: ["Java", "JavaFX", "JDBC", "PostgreSQL", "MySQL", "OracleDB"],
      liveLink: "",
      githubLink: "https://github.com/VPGHb",
      accent: "#FF6B6B"
    },
    {
      title: "Avanti Jewels",
      meta: "HTML5\nCSS3 · JavaScript",
      summary: "Production ecommerce storefront for a jewelry business with polished browsing and product discovery.",
      image: "",
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
    degree: "Bachelor of Computer Science, Concentration in AI",
    graduation: "Expected Dec 2026",
    gpa: "3.91"
  }
};
