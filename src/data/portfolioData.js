export const heroData = {
  name: "Ashutosh Kumar Bharti",
  nickname: "Ashu",
  title: "Android & AI Systems Engineer",
  subhead: "Building production Android apps in Kotlin/Jetpack Compose and real-time AI pipelines with FastAPI and LLM inference — while still in college.",
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]
};

export const keyFactsData = [
  {
    isNumeric: false,
    value: "B.Tech CSE",
    unit: "Degree",
    label: "B.Tech CSE — Roorkee Institute of Technology",
    highlight: "2024–Present"
  },
  {
    isNumeric: true,
    number: 1,
    suffix: "",
    unit: "Internship",
    label: "Completed Android Internship",
    highlight: "ParkVault (Mar–Jun 2026)"
  },
  {
    isNumeric: true,
    number: 3,
    suffix: "",
    unit: "Featured Work",
    label: "Shipped / In-Progress Projects",
    highlight: "Android & AI Systems"
  },
  {
    isNumeric: false,
    value: "2nd Runner-Up",
    unit: "National Hackathon",
    label: "Technomax Hackathon 2025",
    highlight: "Roorkee Institute of Technology"
  }
];

export const aboutData = {
  paragraph1: "I am a Computer Science student at Roorkee Institute of Technology (2024–Present) building high-performance Android applications and real-time AI backends.",
  paragraph2: "During my Android development internship at ParkVault, I expanded my scope from UI/UX work into full end-to-end feature ownership by independently architecting and shipping the app's first payment gateway integration (Razorpay).",
  paragraph3: "My technical focus bridges native mobile engineering (Kotlin, Jetpack Compose, Clean Architecture) and high-throughput AI backends (FastAPI, LLM inference, real-time audio/vision microservices).",
  paragraph4: "I own being a student engineer honestly and confidently — pairing continuous learning with concrete, shipped production software, with the long-term goal of founding an AI-native engineering startup."
};

export const experienceData = [
  {
    role: "Android Developer Intern",
    company: "ParkVault",
    period: "Mar 2026 – Jun 2026",
    type: "Remote",
    badge: "Completed Internship",
    points: [
      "Redesigned core user flows (home screen, parking-slot selection, login/logout) and independently implemented the app's first payment gateway integration (Razorpay), expanding scope beyond the original UI/UX role into full end-to-end feature ownership.",
      "Built and shipped scalable Android features using Kotlin and Jetpack Compose, delivering UI solutions in collaboration with a cross-functional startup team.",
      "Overhauled the application's data layer using Firebase Firestore for real-time sync, reducing data-fetch latency by 30%."
    ]
  }
];

export const projectsData = [
  {
    id: "astrasos",
    title: "AstraSOS — AI Emergency Response Ecosystem",
    role: "Lead Engineer",
    github: "https://github.com/Ashu-sosuke/Astra_SOS",
    repoName: "github.com/Ashu-sosuke/Astra_SOS",
    status: "Live & Deployed",
    whyItMatters: "Most emergency apps assume you have signal and a stable network. This one doesn't.",
    description: "Architected a 4-service AI ecosystem (Android client, FastAPI intelligence engine, React dashboard, geospatial crime-data scraper) routing SOS incidents from trigger to responder dashboard in under 2 seconds.",
    bullets: [
      "Built a multi-signal fusion pipeline (Faster-Whisper transcription → Librosa vocal-stress detection → Groq Llama 3.3 70B situational reasoning) to autonomously classify and route incidents.",
      "Implemented dual-path SMS dispatch (local SIM + Twilio cloud fallback) ensuring zero internet dependency; optimized Room DB background sync to cut foreground battery use by 20%."
    ],
    tags: ["Kotlin", "FastAPI", "Groq Llama 3.3 70B", "Librosa", "Faster-Whisper", "Twilio", "PostGIS", "React"]
  },
  {
    id: "fitstore",
    title: "FitStore — Offline-First Fitness Tracking App",
    role: "Full-Stack Developer",
    github: "https://github.com/Ashu-sosuke/FitStore",
    repoName: "github.com/Ashu-sosuke/FitStore",
    status: "In Progress",
    whyItMatters: "Guarantees zero-data-loss workout tracking offline while orchestrating edge computer vision models.",
    description: "Architecting an offline-first Android app (Clean Architecture, MVI/MVVM) with a WorkManager-driven sync engine performing idempotent reconciliation between a local Room cache and a FastAPI/MongoDB Atlas backend.",
    bullets: [
      "Built a CameraX-based food-scanning pipeline sending frames to a custom PyTorch MobileNetV2 microservice for real-time food classification, paired with ML Kit barcode detection.",
      "Integrated Android Health Connect and Jetpack Glance home-screen widgets for live steps, sleep, and calorie tracking."
    ],
    tags: ["Kotlin", "Jetpack Compose", "WorkManager", "FastAPI", "MongoDB", "PyTorch"]
  },
  {
    id: "negotiation-open-env",
    title: "NegotiationOpenEnv — AI Agent Negotiation Benchmark",
    role: "Creator",
    github: "https://github.com/Ashu-sosuke/NegotiationOpenEnv",
    repoName: "github.com/Ashu-sosuke/NegotiationOpenEnv",
    status: "Open Source",
    whyItMatters: "Standardized benchmark environments to quantify autonomous LLM agent negotiation tactics.",
    description: "Designed an OpenEnv-compliant simulation environment benchmarking AI agents' strategic reasoning and compromise-making across multi-turn commercial negotiations, using typed Pydantic Action/Observation/Reward schemas.",
    bullets: [
      "Implemented a weighted grading system (50% deal agreement, 30% price efficiency vs. Zone of Possible Agreement, 20% contract-term compliance) across 3 escalating task tiers."
    ],
    tags: ["Python", "FastAPI", "Pydantic", "Docker", "Gemini API", "OpenEnv"]
  }
];

export const skillsData = [
  {
    category: "Android",
    iconName: "Smartphone",
    skills: [
      "Kotlin", "Java", "Jetpack Compose", "Material 3", 
      "MVVM & Clean Architecture", "Coroutines", "StateFlow", "Room DB"
    ]
  },
  {
    category: "AI / Backend",
    iconName: "Cpu",
    skills: [
      "Python", "FastAPI", "Groq API (Llama 3.3 70B)", "Faster-Whisper", 
      "Librosa", "OpenCV", "Pydantic", "Firebase (Firestore, Auth, FCM)"
    ]
  },
  {
    category: "Tools",
    iconName: "Wrench",
    skills: [
      "Git", "GitHub", "Docker", "Android Studio", 
      "REST API Integration", "CI/CD", "Agile"
    ]
  }
];

export const achievementsData = [
  {
    title: "2nd Runner-Up",
    event: "Technomax Hackathon 2025",
    location: "Roorkee Institute of Technology",
    year: "2025",
    description: "Secured 3rd position nationally among competing engineering teams by building an innovative real-time solution within strict timeline constraints."
  },
  {
    title: "Participant",
    event: "HackIndia 2025",
    team: "Team Web Shinobi",
    year: "2025",
    description: "Competed in India's premier national hackathon, engineering real-time AI and mobile features under Team Web Shinobi."
  }
];

export const contactData = {
  headline: "Open to internships and interesting collaborations",
  body: "Having just completed an Android development internship at ParkVault, actively looking for the next internship opportunity. Interested in connecting with founders and engineers working on AI-native products.",
  email: "15bhartiashutosh@gmail.com",
  linkedin: "https://linkedin.com/in/ashutosh-kumar-bharti",
  github: "https://github.com/Ashu-sosuke",
  location: "Roorkee, Uttarakhand, India"
};
