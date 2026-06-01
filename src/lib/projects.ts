

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  video?: string;
  images?: string[];
  videos?: { title: string; url: string }[];
  tags: string[];
  link: string;
  github: string;
  category: 'software' | 'design' | 'videography' | 'github';
  featured: boolean;
  color: string;
}

export const projects: Project[] = [
  // UI/UX & SOFTWARE PROJECTS
  {
    id: "poul3y",
    title: "Poul3y App",
    description: "A poultry management platform built with Flutter and Firebase-backed workflows for flock records, disease tracking, resource planning, PDF reports, and farmer-focused operational dashboards.",
    image: "/assets/portfolio/AasimSafeer-Portfolio/Poul3y App/Poul3y Logo.png",
    images: [
      "/assets/projects/poul3y-ui/cover.png"
    ],
    tags: ["Flutter", "UI/UX", "Mobile App", "Figma"],
    link: "https://www.figma.com/proto/DlvNVRULKgxqMXLcuGbKaT/Poul3y?t=atrFCjSIZ2aDvBzX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=69-12885&starting-point-node-id=69%3A12885",
    github: "#",
    category: "software",
    featured: true,
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: "poultry-calculator",
    title: "Poultry Calculator",
    description: "A production Flutter utility for poultry feed estimation with broiler/layer calculations, generated receipts, sharing/export flows, localization, Firebase analytics, notifications, and ad monetization.",
    image: "/assets/portfolio/AasimSafeer-Portfolio/Poultry Calculator App/Poultry Calculator Logo.png",
    images: [
      "/assets/projects/poultry-calculator-ui/cover.png",
      "/assets/portfolio/AasimSafeer-Portfolio/Poultry Calculator App/UI Design/Screenshot 2026-01-08 at 1.05.30 PM.png",
      "/assets/portfolio/AasimSafeer-Portfolio/Poultry Calculator App/UI Design/Screenshot 2026-01-08 at 1.03.55 PM.png"
    ],
    tags: ["Flutter", "Firebase", "PDF", "Figma"],
    link: "https://www.figma.com/proto/o0QdbJi1Tqc0cSyW93V6E3/Poul3y-Calculator?node-id=1-1705&p=f&t=B2mmt5PBqMDExhEy-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
    github: "#",
    category: "software",
    featured: true,
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "flock-manager",
    title: "Flock Manager",
    description: "A poultry flock operations system across Flutter and Laravel, covering flock setup, mortality, feed, vaccine, medicine, warehouse items, catching, recoveries, reporting, and shared access workflows.",
    image: "/assets/portfolio/AasimSafeer-Portfolio/Poul3y App/Poul3y Logo.png",
    tags: ["Flutter", "Laravel", "Firebase", "Reports"],
    link: "#",
    github: "#",
    category: "software",
    featured: true,
    color: "from-orange-500/20 to-amber-500/20"
  },
  {
    id: "edux",
    title: "EduX School Management",
    description: "An offline-first Flutter school management system with Drift/SQLite data storage, attendance, fees, exams, expenses, canteen, guardian/staff modules, reporting, exports, and local sync services.",
    image: "/assets/projects/offline-resume/cover.png",
    tags: ["Flutter", "Drift", "SQLite", "Riverpod"],
    link: "#",
    github: "#",
    category: "software",
    featured: true,
    color: "from-sky-500/20 to-indigo-500/20"
  },
  {
    id: "nimbus-ai",
    title: "Nimbus AI",
    description: "An offline on-device AI assistant powered by Gemma with local chat, voice input, image/vision features, Drift persistence, model download management, and privacy-first mobile architecture.",
    image: "/assets/projects/promptly/cover.png",
    tags: ["Flutter", "Gemma", "Drift", "AI"],
    link: "#",
    github: "#",
    category: "software",
    featured: true,
    color: "from-violet-500/20 to-cyan-500/20"
  },
  {
    id: "sensor-fusion",
    title: "Sensor Fusion",
    description: "A Flutter Android app for real-time sensor streaming using motion, GPS, BLE, microphone, light, and proximity data, with HTTP/MQTT transport, live charts, background service, and a Python server.",
    image: "/assets/projects/sensor-fusion/cover.jpg",
    tags: ["Flutter", "MQTT", "HTTP", "Sensors"],
    link: "#",
    github: "#",
    category: "software",
    featured: false,
    color: "from-teal-500/20 to-blue-500/20"
  },
  {
    id: "boot-alarm",
    title: "BootAlarm",
    description: "An offline-first Flutter alarm app where programmers answer MCQs to dismiss alarms, with local SQLite question packs, adaptive difficulty, progress tracking, custom animations, and anti-cheat timing.",
    image: "/assets/projects/boot-alarm/cover.png",
    tags: ["Flutter", "SQLite", "Provider", "UX"],
    link: "#",
    github: "#",
    category: "software",
    featured: false,
    color: "from-indigo-500/20 to-fuchsia-500/20"
  },
  {
    id: "freezer",
    title: "Freezer",
    description: "A Play Store-conscious Flutter Android utility using Kotlin platform channels, local VPN controls, notification suppression, app schedules, profiles, activity logs, and local Hive storage.",
    image: "/assets/projects/freezer/cover.png",
    tags: ["Flutter", "Kotlin", "Riverpod", "Hive"],
    link: "#",
    github: "#",
    category: "software",
    featured: false,
    color: "from-cyan-500/20 to-slate-500/20"
  },
  {
    id: "promptly",
    title: "Promptly",
    description: "A Flutter prompt library and discovery app with authentication, admin tools, favorites, search, profile management, shared providers, and polished marketplace-style UI screens.",
    image: "/assets/projects/promptly/cover.png",
    images: [
      "/assets/projects/promptly/screen-1.png"
    ],
    tags: ["Flutter", "Firebase", "Search", "Admin"],
    link: "#",
    github: "#",
    category: "software",
    featured: false,
    color: "from-rose-500/20 to-violet-500/20"
  },
  {
    id: "scriptflow",
    title: "ScriptFlow",
    description: "A Flutter writing and practice tool with script management, editor workflows, speech/overlay controls, backups, file services, onboarding, and a structured local data layer.",
    image: "/assets/projects/scriptflow/cover.png",
    tags: ["Flutter", "Editor", "Speech", "Backup"],
    link: "#",
    github: "#",
    category: "software",
    featured: false,
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    id: "offline-resume",
    title: "Offline Resume Builder",
    description: "A Flutter and Next.js resume-building product for creating professional CVs offline, generating PDF output, managing templates, adding images, and sharing finalized documents.",
    image: "/assets/projects/offline-resume/cover.png",
    tags: ["Flutter", "Next.js", "PDF", "Templates"],
    link: "#",
    github: "#",
    category: "software",
    featured: false,
    color: "from-stone-500/20 to-sky-500/20"
  },
  {
    id: "dice-and-dares",
    title: "Dice & Dares",
    description: "A playful Flutter party game with game modes, player setup, animated dice flows, truth/dare content, theme screens, AI prompt concepts, and store-ready visual assets.",
    image: "/assets/projects/dice-and-dares/cover.png",
    images: [
      "/assets/projects/dice-and-dares/screen-1.png",
      "/assets/projects/dice-and-dares/screen-2.png"
    ],
    tags: ["Flutter", "Game UI", "Animation", "Mobile"],
    link: "#",
    github: "#",
    category: "software",
    featured: false,
    color: "from-pink-500/20 to-orange-500/20"
  },

  // GRAPHIC DESIGN PROJECTS
  {
    id: "cems-design",
    title: "CEMS Brand Identity",
    description: "Complete visual identity and social media campaign for Creative Engineering & Management Services. improved brand recognizability through consistent design language.",
    image: "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Creative Engineering and Management Services Logo.png",
    images: [
      "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Hiring Posts/1.png",
      "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Hiring Posts/2.png",
      "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Hiring Posts/3.png",
      "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Hiring Posts/4.png",
      "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Hiring Posts/5.png",
      "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Hiring Posts/6.png",
      "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Hiring Posts/7.png",
      "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Hiring Posts/8.png",
      "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Hiring Posts/9.png",
      "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Hiring Posts/2 (1).png",
      "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Hiring Posts/3 (1).png",
      "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Hiring Posts/4 (1).png",
      "/assets/portfolio/AasimSafeer-Portfolio/CEMS Job Ads/Hiring Posts/8 (1).png"
    ],
    tags: ["Social Media", "Branding", "Canva", "Adobe Suite"],
    link: "#",
    github: "#",
    category: "design",
    featured: true,
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    id: "ecosun-design",
    title: "EcoSun Global Branding",
    description: "Corporate branding package including brochures, business cards, and social media assets for a renewable energy company.",
    image: "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Ecosun Global Logo.png",
    images: [
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Brochures & Cards/Urdu version brochure.jpeg",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/1.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/2.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/3.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/4.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/5.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/6.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/7.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/8.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/9.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/10.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/11.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/12.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/13.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/14.png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/2 (1).png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/3 (1).png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/4 (1).png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/5 (1).png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/6 (1).png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/7 (1).png",
      "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Social Media Posts/Posts/8 (1).png"
    ],
    tags: ["Print Design", "Corporate Identity", "Marketing", "Canva"],
    link: "https://www.canva.com/design/DAGrWsjV3RY/_j6u0BRSt0Mi92Yu6Og2nA/edit",
    github: "#",
    category: "design",
    featured: false,
    color: "from-green-500/20 to-emerald-500/20"
  },

  // VIDEOGRAPHY PROJECTS
  {
    id: "florid-hotel",
    title: "Florid Hotel Cinematic Tour",
    description: "A series of cinematic promotional videos showcasing the luxury and ambiance of Florid Hotel. capturing the essence of hospitality through dynamic storytelling.",
    image: "/assets/portfolio/AasimSafeer-Portfolio/Florid Hotel/Florid Hotel Logo.png",
    video: "/assets/portfolio/AasimSafeer-Portfolio/Florid Hotel/lv_0_20241022195504.mp4",
    videos: [
      { title: "Hotel Ambiance", url: "/assets/portfolio/AasimSafeer-Portfolio/Florid Hotel/lv_0_20241022195504.mp4" },
      { title: "Guest Experience", url: "/assets/portfolio/AasimSafeer-Portfolio/Florid Hotel/lv_0_20241216222800.mp4" },
      { title: "Event Highlights", url: "/assets/portfolio/AasimSafeer-Portfolio/Florid Hotel/lv_0_20241202192743.mp4" }
    ],
    tags: ["Cinematography", "Video Editing", "Color Grading", "Hospitality"],
    link: "#",
    github: "#",
    category: "videography",
    featured: true,
    color: "from-amber-500/20 to-yellow-500/20"
  },
  {
    id: "ecosun-video",
    title: "EcoSun Site Walkthrough",
    description: "On-site promotional video demonstrating solar installation projects and company capabilities.",
    image: "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Ecosun Global Logo.png",
    video: "/assets/portfolio/AasimSafeer-Portfolio/EcoSun Global/Site Videos/Peshawar Hotel.MP4",
    tags: ["Site Visit", "Corporate Video", "Documentation"],
    link: "#",
    github: "#",
    category: "videography",
    featured: false,
    color: "from-sky-500/20 to-blue-500/20"
  }
];
