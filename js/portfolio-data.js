const portfolioData = {
  name: "Vraj Patel",
  title: "Developer focused on web, mobile, data, and AI",
  roles: ["web experiences", "mobile apps", "data systems", "AI integrations"],
  bio: "Computer Science student at New York Institute of Technology concentrating in AI, with hands-on experience building responsive ecommerce, mobile finance, and database management systems. I like turning complex workflows into interfaces that feel clear, fast, and useful.",
  email: "vrajkp501@gmail.com",
  phone: "(646) 492-0266",
  location: "New York, United States",
  resumeLink: "assets/Vraj_Patel_Resume_Updated_2026.pdf",
  social: {
    github: "https://github.com/VPGHb",
    linkedin: "https://www.linkedin.com/in/P-Vraj",
    twitter: "#",
    youtube: "#",
    devto: "#"
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
      description: "Full-stack personal finance mobile app for tracking expenses, budgets, savings goals, recurring transactions, analytics, and AI-powered financial insights.",
      tech: ["React Native", "Expo", "Supabase", "TypeScript", "Groq API"],
      liveLink: "",
      githubLink: "https://github.com/VPGHb/LumenFinance",
      accent: "#00D4FF"
    },
    {
      title: "PolyDB Manager",
      description: "Unified JavaFX database manager for PostgreSQL, MySQL, and Oracle with table browsing, schema viewing, row and column editing, search, filtering, and validation feedback.",
      tech: ["Java", "JavaFX", "JDBC", "PostgreSQL", "MySQL", "Oracle"],
      liveLink: "",
      githubLink: "https://github.com/VPGHb/PolyDB-Manager",
      accent: "#FF6B6B"
    },
    {
      title: "Avanti Jewels",
      description: "Responsive production ecommerce website for a jewelry business with 9 product categories, product detail pages, filtering, sorting, image galleries, lightbox viewing, and theme persistence.",
      tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Custom Domain"],
      liveLink: "http://avantijewels.com/",
      githubLink: "https://github.com/VPGHb/Avanti-jewels",
      accent: "#6C63FF"
    },
    {
      title: "Lumen AI Insights",
      description: "Secure AI insight flow inside Lumen Finance that aggregates income, expense, and savings metrics, calls a Supabase Edge Function, and returns personalized guidance from Groq Llama 3.3 70B.",
      tech: ["Supabase Edge Functions", "Deno", "Groq", "RLS", "JWT"],
      liveLink: "",
      githubLink: "https://github.com/VPGHb/LumenFinance",
      accent: "#1DE9B6"
    },
    {
      title: "Online Store Management System",
      description: "Desktop store management application with three-tier access for customers, employees, and administrators, covering accounts, products, carts, coupons, orders, status updates, and order history.",
      tech: ["Java", "Swing", "MySQL", "JDBC", "Role-Based Access"],
      liveLink: "",
      githubLink: "https://github.com/VPGHb/OnlineStore",
      accent: "#FFD166"
    },
    {
      title: "Database Teaching Tool",
      description: "Academic database interface built to reduce friction for students and non-expert users by turning multi-database table operations into guided visual workflows.",
      tech: ["Java", "JavaFX", "JDBC", "OracleDB", "PostgreSQL", "MySQL"],
      liveLink: "",
      githubLink: "https://github.com/VPGHb/PolyDB-Manager",
      accent: "#00D4FF"
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
  testimonials: [
    {
      quote: "Built a polished ecommerce experience with the responsiveness and practical details a real storefront needs.",
      author: "Freelance Project Signal",
      role: "Avanti Jewels",
      rating: 5
    },
    {
      quote: "Turns database complexity into approachable workflows for learners and non-expert users.",
      author: "Academic Project Signal",
      role: "PolyDB Manager",
      rating: 5
    },
    {
      quote: "Pairs product thinking with AI tools to move faster while keeping the interface clear.",
      author: "Development Signal",
      role: "Lumen Finance",
      rating: 5
    }
  ],
  education: {
    school: "New York Institute of Technology",
    degree: "Bachelor of Computer Science, Concentration in AI",
    graduation: "Expected Dec 2026",
    gpa: "3.91"
  }
};
