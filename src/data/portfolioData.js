/**
 * Portfolio Data for Ashutosh Kumar Bharti
 * BRAND: ASHUTOSH | TAGLINE: Engineering Intelligence
 * Verified against Ashutosh_Resume.pdf and verified repositories.
 */

export const brandData = {
  name: "Ashutosh Kumar Bharti",
  nickname: "Ashu",
  brand: "ASHUTOSH",
  tagline: "Engineering Intelligence",
  roles: [
    "Android Developer",
    "AI Engineer",
    "Software Developer"
  ],
  headline: "Engineering Ideas Into Intelligent Products.",
  subhead: "I’m Ashutosh Kumar Bharti, a software developer focused on building modern Android applications, intelligent AI-powered systems, and scalable software solutions.",
  location: "Uttarakhand, India",
  email: "15bhartiashutosh@gmail.com",
  phone: "+91-9631945501",
  github: "https://github.com/Ashu-sosuke",
  linkedin: "https://www.linkedin.com/in/ashutosh-kumar-bharti/",
  resumeUrl: "/Ashutosh_Resume.pdf",
};

export const heroData = {
  ...brandData,
  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ]
};

export const aboutData = {
  heading: "Building Beyond the Code.",
  paragraph1: "I am a Computer Science student at Roorkee Institute of Technology (2024–Present) building high-performance Android applications and real-time AI backends.",
  paragraph2: "During my Android development internship at ParkVault, I expanded my scope from UI/UX work into full end-to-end feature ownership by independently architecting and shipping the app’s first payment gateway integration (Razorpay).",
  paragraph3: "My technical focus bridges native mobile engineering (Kotlin, Jetpack Compose, Clean Architecture) and high-throughput AI backends (FastAPI, LLM inference, real-time audio/vision microservices).",
  paragraph4: "I own being a student engineer honestly and confidently — pairing continuous learning with concrete, shipped production software, with the long-term goal of founding an AI-native engineering startup.",
  stats: [
    { value: "2", label: "Android Internships", sublabel: "OBJECTX & ParkVault" },
    { value: "5+", label: "Production & OSS Systems", sublabel: "Android, AI & Hardware" },
    { value: "1.15s", label: "Median SOS Dispatch", sublabel: "Faster-Whisper + Groq" },
    { value: "32.6ms", label: "Edge CPU Inference", sublabel: "MobileNetV2 Fine-Tuned" },
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
    number: 2,
    suffix: "",
    unit: "Android Internships",
    label: "ParkVault, OBJECTX",
    highlight: "Mobile Engineering"
  },
  {
    isNumeric: true,
    number: 5,
    suffix: "+",
    unit: "Production & OSS",
    label: "Shipped & Open-Source Projects",
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

export const skillsData = [
  {
    category: "Android Development",
    iconName: "Smartphone",
    accent: "#FF6B35",
    gradient: "from-[#FF6B35] to-[#FFA07A]",
    description: "Modern native Android engineering with declarative UI, reactive data streams, and Clean Architecture.",
    skills: [
      "Kotlin",
      "Java",
      "Jetpack Compose",
      "Material 3",
      "MVVM",
      "Clean Architecture",
      "Room",
      "Retrofit",
      "Coroutines",
      "StateFlow",
      "Hilt",
      "WorkManager",
      "CameraX"
    ]
  },
  {
    category: "Backend Development",
    iconName: "Server",
    accent: "#2EC4B6",
    gradient: "from-[#2EC4B6] to-[#3A6EA5]",
    description: "Asynchronous backend microservices, robust typed API contracts, and real-time database layers.",
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "Pydantic",
      "Firebase Firestore",
      "Firebase Auth",
      "MongoDB",
      "Supabase",
      "Docker"
    ]
  },
  {
    category: "AI / Machine Learning",
    iconName: "Cpu",
    accent: "#3A6EA5",
    gradient: "from-[#3A6EA5] to-[#2EC4B6]",
    description: "Edge and cloud machine learning, speech transcription, computer vision, and LLM reasoning pipelines.",
    skills: [
      "PyTorch",
      "OpenCV",
      "LLM Integration",
      "Groq API (Llama 3.3 70B)",
      "Faster-Whisper",
      "Librosa",
      "MediaPipe",
      "MobileNetV2",
      "OpenEnv Benchmark"
    ]
  },
  {
    category: "Tools & Workflow",
    iconName: "Wrench",
    accent: "#FFA07A",
    gradient: "from-[#FFA07A] to-[#FF6B35]",
    description: "Development environments, version control, automated testing, containerization, and deployment.",
    skills: [
      "Git",
      "GitHub",
      "Android Studio",
      "VS Code",
      "Postman",
      "Docker",
      "Render",
      "CI/CD Workflows",
      "Linux / Bash"
    ]
  }
];

export const projectsData = [
  {
    id: "astrasos",
    title: "AstraSOS: AI Emergency Response System",
    category: "AI / Systems",
    role: "Lead Engineer",
    github: "https://github.com/Ashu-sosuke/Astra_SOS",
    repoName: "github.com/Ashu-sosuke/Astra_SOS",
    status: "Live Architecture",
    badge: "Featured Flagship",
    whyItMatters: "Most emergency apps assume you have continuous network connectivity. AstraSOS architected multi-layered offline failover with sub-second AI triage.",
    description: "An intelligent emergency response ecosystem delivering SOS incidents from trigger to responder dashboard in a 1.15 s median with Faster-Whisper transcription, Librosa vocal-stress analysis, and Groq LLM reasoning.",
    bullets: [
      "Delivered SOS incidents from trigger to responder dashboard in a 1.15 s median (live-LLM runs, n=5) with Faster-Whisper transcription, Librosa vocal-stress analysis, and Groq LLM reasoning.",
      "Routed 33/33 labeled scenarios to the correct emergency service (Police/Fire/Hospital) and 32/33 to the exact threat category.",
      "Built dual-path SOS messaging with offline failover (local SIM and Twilio cloud), verified in 50 simulated trials, plus a news-fetcher module feeding verified incidents to the dashboard."
    ],
    metric: {
      value: "1.15 s",
      label: "Median Trigger to Dashboard",
      badge: "Faster-Whisper + Groq",
      accentColor: "#FF6B35",
      badgeColor: "#2EC4B6"
    },
    tags: ["Kotlin", "FastAPI", "Groq (Llama 3.3 70B)", "Faster-Whisper", "Librosa", "Twilio", "Supabase"],
    architecture: {
      client: "Native Android client capturing emergency triggers via hardware sensors, voice, and touch gestures.",
      processing: "FastAPI microservices pipeline processing audio via Faster-Whisper and acoustic stress through Librosa.",
      triage: "Groq-hosted Llama 3.3 70B executing structured JSON triage to route to Police, Hospital, or Fire services.",
      dispatch: "Dual-path SMS broadcast utilizing local SIM hardware with cloud Twilio automated failover."
    }
  },
  {
    id: "fitstore",
    title: "Pulse (FitStore): Offline-First Fitness & Nutrition App",
    category: "Android",
    role: "Full-Stack Developer",
    github: "https://github.com/Ashu-sosuke/FitStore",
    repoName: "github.com/Ashu-sosuke/FitStore",
    status: "Active Architecture",
    badge: "Offline-First + Edge AI",
    whyItMatters: "Fitness trackers fail when users train in underground gyms or offline environments. Pulse ensures zero data loss with instant edge inference.",
    description: "Offline-first fitness and nutrition platform built with Room and WorkManager sync, paired with an async FastAPI and MongoDB backend and fine-tuned MobileNetV2 food classifier.",
    bullets: [
      "Cut food-scan upload latency about 6x (median 412 to 69 ms, local benchmark) by downsampling camera frames to 640px JPEG before upload.",
      "Served a 16-class food classifier at 32.6 ms median CPU inference (p95 51 ms) by fine-tuning MobileNetV2 behind a FastAPI endpoint with CameraX capture.",
      "Held 0% errors at 100 concurrent users with an async FastAPI and MongoDB backend deployed on Render via Docker; offline-first Room + WorkManager sync on Android."
    ],
    metric: {
      value: "32.6 ms",
      label: "Median CPU Inference",
      badge: "MobileNetV2 (16-Class)",
      accentColor: "#FF6B35",
      badgeColor: "#2EC4B6"
    },
    tags: ["Kotlin", "Jetpack Compose", "Hilt", "Room", "WorkManager", "CameraX", "FastAPI", "MongoDB", "PyTorch", "Docker"],
    architecture: {
      client: "Jetpack Compose UI with Hilt dependency injection, Room local storage, and WorkManager background synchronization.",
      vision: "CameraX frame capture with adaptive downsampling to 640px JPEG before network dispatch.",
      inference: "Lightweight MobileNetV2 PyTorch classification running at 32.6 ms CPU median.",
      backend: "Async FastAPI service containerized in Docker and deployed to Render with MongoDB persistence."
    }
  },
  {
    id: "negotiation-open-env",
    title: "NegotiationOpenEnv: AI Negotiation Benchmark",
    category: "AI / Systems",
    role: "Creator",
    github: "https://github.com/Ashu-sosuke/NegotiationOpenEnv",
    repoName: "github.com/Ashu-sosuke/NegotiationOpenEnv",
    status: "Open Source",
    badge: "Reproducible AI Benchmark",
    whyItMatters: "Standardized benchmark environments are vital to quantify autonomous multi-agent negotiation tactics with exact mathematical reproducibility.",
    description: "Built a 3-tier multi-turn negotiation benchmark that passes openenv validate and 6/6 tests, using typed Pydantic Action/Observation/Reward schemas and a 50/30/20 grader.",
    bullets: [
      "Built a 3-tier multi-turn negotiation benchmark that passes openenv validate and 6/6 tests, using typed Pydantic Action/Observation/Reward schemas.",
      "Showed the 50/30/20 grader (agreement, ZOPA price efficiency, contract terms) separates strategy quality: 0.890 for a rule-based agent vs 0.422 for a random agent over 120 fixed-seed episodes.",
      "Guaranteed reproducible evaluation with seeded environments: 60/60 paired episodes matched exactly."
    ],
    metric: {
      value: "0.890 vs 0.422",
      label: "Rule-Based vs Random Agent",
      badge: "50/30/20 Grader",
      accentColor: "#2EC4B6",
      badgeColor: "#FF6B35"
    },
    tags: ["Python", "FastAPI", "Pydantic", "Docker", "OpenEnv"],
    architecture: {
      environment: "Gym-style step/reset interfaces running in Docker with seed-deterministic state transitions.",
      validation: "Full OpenEnv compliance passing all 6/6 verification suites and schema contracts.",
      grading: "50% agreement closure, 30% ZOPA economic surplus efficiency, 20% contract term fidelity."
    }
  },
  {
    id: "dristi",
    title: "DRISTI: AI Surveillance & 2-Axis Tracking",
    category: "Open Source",
    role: "Hardware & AI Engineer",
    github: "https://github.com/Ashu-sosuke/Face-Recognition",
    repoName: "github.com/Ashu-sosuke/Face-Recognition",
    status: "Hardware + AI",
    badge: "Closed-Loop Servo Control",
    whyItMatters: "Most facial recognition demos terminate at on-screen bounding boxes. DRISTI physically actuates camera gimbals to track unknown subjects in physical space.",
    description: "Real-time face detection and classification system (whitelist/blacklist/unknown) integrated with an ESP32-driven pan-tilt camera that physically tracks unrecognized individuals using closed-loop servo control.",
    bullets: [
      "Engineered real-time facial feature extraction and classification against known authorization databases using OpenCV.",
      "Architected low-latency closed-loop servo control on an ESP32 microcontroller over UDP telemetry to track targets dynamically across 2 axes."
    ],
    metric: {
      value: "2-Axis",
      label: "Physical Servo Gimbal",
      badge: "ESP32 + OpenCV",
      accentColor: "#FF6B35",
      badgeColor: "#2EC4B6"
    },
    tags: ["Python", "Flask", "OpenCV", "face_recognition", "ESP32", "MicroPython", "UDP"],
    architecture: {
      vision: "OpenCV and face_recognition embedding extraction running on the host server.",
      telemetry: "Sub-10ms UDP telemetry packets broadcasting coordinate error deltas to microcontroller.",
      hardware: "ESP32 running MicroPython driving dual servo motors with proportional-integral tracking."
    }
  },
  {
    id: "virtual-mouse",
    title: "AI Virtual Mouse: Gesture-Based Cursor Control",
    category: "Open Source",
    role: "Creator",
    github: "https://github.com/Ashu-sosuke/Virtual_Mouse",
    repoName: "github.com/Ashu-sosuke/Virtual_Mouse",
    status: "Open Source",
    badge: "Kalman Filtered Tracking",
    whyItMatters: "Optical cursor control is notoriously plagued by hand tremor and jitter. A dual-stage filter stabilizes pointing while preserving gesture velocity.",
    description: "A hand-gesture-controlled virtual mouse using MediaPipe hand tracking, with a dual-stage Kalman Filter + Adaptive EMA smoothing pipeline to eliminate cursor jitter.",
    bullets: [
      "Engineered high-accuracy 21-point hand skeleton tracking via MediaPipe to interpret 6 distinct user gestures (move, click, drag, scroll, pause).",
      "Eliminated cursor jitter while maintaining crisp velocity response using a dual-stage Kalman Filter coupled with adaptive exponential moving averages."
    ],
    metric: {
      value: "6 Gestures",
      label: "Zero-Jitter Control",
      badge: "MediaPipe + Kalman Filter",
      accentColor: "#2EC4B6",
      badgeColor: "#FF6B35"
    },
    tags: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "NumPy", "Kalman Filter"],
    architecture: {
      tracking: "MediaPipe Hands detecting 21 3D landmarks in real-time camera frames.",
      smoothing: "Dual-stage filtering: discrete Kalman filter for position prediction + velocity-weighted EMA.",
      actuation: "OS-level cursor events dispatched via PyAutoGUI with adaptive screen boundary clamping."
    }
  }
];

export const personalProjectsData = [
  {
    id: "repo-dog",
    title: "Repo Dog — Developer Workspace & GitHub Activity Tracker",
    role: "Creator & Lead Developer",
    github: "https://github.com/Ashu-sosuke/RepoDog",
    repoName: "github.com/Ashu-sosuke/RepoDog",
    status: "Personal Tool",
    whyItMatters: "Switching between disparate GitHub web tabs creates workflow friction; a unified high-density workspace keeps development telemetry in one view.",
    description: "A cross-platform developer workspace and GitHub activity tracker built with Flutter, FastAPI, Supabase, GitHub REST & GraphQL APIs, and Firebase Authentication. Unifies profile metadata, repo lists, branch/commit history, contribution heatmaps, pull requests, and CI/CD workflow runs into one GitHub-dark-themed dashboard.",
    bullets: [
      "Integrated dual GitHub GraphQL & REST API pipelines to stream live commit trees, PR review statuses, issue velocity, and GitHub Actions CI/CD runs with sub-second polling efficiency.",
      "Engineered an ergonomic GitHub-dark-inspired desktop/mobile UI in Flutter backed by Supabase & Firebase Auth for user profile states and repository pinning."
    ],
    tags: ["Flutter", "FastAPI", "Python", "Supabase", "GitHub GraphQL API", "Firebase Auth", "REST APIs"]
  },
  {
    id: "home-server",
    title: "Self-Hosted Home Server & Cloud Lab",
    role: "DevOps & Systems Administrator",
    github: "https://github.com/Ashu-sosuke/home-server-config",
    repoName: "github.com/Ashu-sosuke/home-server-config",
    status: "24/7 Self-Hosted",
    whyItMatters: "Hands-on Linux server administration and bare-metal orchestration build deeper systems intuition than purely hosted SaaS.",
    description: "A personally built and maintained server for local media streaming, private file storage, automated backups, and hosting side projects, leveraging Docker containers and Linux networking/operations tooling.",
    bullets: [
      "Architected a modular multi-container Docker Compose environment featuring reverse proxy routing (Nginx), automated container health monitoring, and persistent data volumes.",
      "Configured secure zero-trust remote access via WireGuard/Tailscale VPN, local DNS management, automated snapshot backups, and system resource telemetry."
    ],
    tags: ["Linux", "Docker", "Docker Compose", "Nginx", "Tailscale / VPN", "Bash", "Prometheus", "Self-Hosting"]
  }
];

export const experienceData = [
  {
    role: "Android Developer (Full-Stack) Intern",
    company: "OBJECTX Innovatech Pvt. Ltd.",
    period: "Sep 2026 – Present",
    type: "Remote",
    badge: "Current Role",
    stack: "Kotlin · Jetpack Compose",
    points: [
      "Developing Android application features in Kotlin and Jetpack Compose as part of the Product & Technology team."
    ]
  },
  {
    role: "Android Developer Intern",
    company: "ParkVault",
    period: "Mar 2026 – Jun 2026",
    type: "Remote",
    badge: "Completed Internship",
    stack: "Kotlin · Jetpack Compose · Firebase Firestore · Razorpay SDK",
    points: [
      "Cut data-fetch latency by 30% by moving the data layer to Firebase Firestore with real-time sync.",
      "Independently integrated Razorpay, the app’s first online payment flow, going beyond the original UI/UX role into end-to-end feature ownership.",
      "Streamlined parking booking by redesigning the home, slot-selection, and login flows in Jetpack Compose."
    ]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Roorkee Institute of Technology",
    location: "Roorkee, Uttarakhand, India",
    period: "2024 – Present",
    focus: "Mobile Computing, Cloud Architectures, Machine Learning & Algorithms",
    status: "Undergraduate Student Engineer"
  }
];

export const achievementsData = [
  {
    title: "2nd Runner-Up",
    event: "Technomax Hackathon 2025",
    location: "Roorkee Institute of Technology",
    year: "2025",
    badge: "National Hackathon",
    description: "Awarded 2nd Runner-Up at Technomax Hackathon 2025 for engineering an innovative hardware and software prototype under tight competitive constraints."
  },
  {
    title: "Participant & Finalist",
    event: "HackIndia 2025",
    team: "Team Web Shinobi",
    location: "National Level",
    year: "2025",
    badge: "National Hackathon",
    description: "Selected to compete in HackIndia 2025 representing Team Web Shinobi, collaborating on intensive technical problem solving and rapid product iteration."
  },
  {
    title: "Spoken Tutorial Certification in C",
    event: "IIT Bombay",
    location: "Remote / Online",
    year: "2024",
    badge: "System Programming",
    description: "Completed rigorous coursework and assessment in C programming, memory management, and pointers under the Spoken Tutorial project by IIT Bombay."
  }
];

export const contactData = {
  headline: "Have an Idea? Let's Build It.",
  subhead: "I’m always open to discussing new Android engineering challenges, AI systems integration, and high-impact software projects.",
  body: "Whether you’re looking to build an offline-first mobile app in Kotlin & Jetpack Compose, architect a high-throughput AI backend with FastAPI, or explore innovative engineering collaborations, let’s connect.",
  email: "15bhartiashutosh@gmail.com",
  phone: "+91-9631945501",
  linkedin: "https://www.linkedin.com/in/ashutosh-kumar-bharti/",
  github: "https://github.com/Ashu-sosuke",
  resume: "/Ashutosh_Resume.pdf",
  location: "Roorkee, Uttarakhand, India",
  availability: "Available for internships, contracts & engineering discussions"
};
