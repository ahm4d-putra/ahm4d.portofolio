export const projects = [
  {
    id: 1,
    title: "Hand Gesture Control",
    subtitle: "Computer Vision-Based Interaction",
    problem:
      "Interacting with applications using traditional input devices like keyboard and mouse can be limiting, especially for more intuitive or touchless experiences.",
    solution:
      "Built a hand gesture recognition system using computer vision to detect and track hand movements in real-time, enabling basic interaction through gestures.",
    techStack: ["Python", "OpenCV (cv2)", "MediaPipe"],
    github: "https://github.com/ahm4d-putra/hand-gesture",
    featured: true,
  },
  {
    id: 2,
    title: "Financial Tracker",
    subtitle: "Simple Personal Finance Management",
    problem:
      "Many students struggle to track their daily expenses, often losing control of their spending due to lack of simple and accessible tools.",
    solution:
      "Developed a web-based financial tracker that allows users to record income and expenses, with real-time data storage using Supabase for easy access and updates.",
    techStack: ["HTML", "CSS", "JavaScript", "Supabase"],
    github: "https://github.com/ahm4d-putra/Fintrack-Pro",
    featured: true,
  },
  {
    id: 3,
    title: "TikTok Downloader",
    subtitle: "Video Download Tool Without Watermark",
    problem:
      "Users often want to download TikTok videos without watermarks, but many existing tools are filled with ads or have unreliable performance.",
    solution:
      "Created a backend service to fetch and process TikTok video data, combined with a clean frontend interface to provide a simple and fast downloading experience.",
    techStack: [
      "Node.js",
      "Express.js",
      "Axios",
      "CORS",
      "Helmet",
      "express-rate-limit",
      "Vanilla JavaScript",
      "HTML5",
      "CSS3",
    ],
    github: "https://github.com/ahm4d-putra/tiktok-downloader",
    featured: true,
  },
  {
    id: 4,
    title: "QR Code Generator",
    subtitle: "Desktop-Based QR Code Creator",
    problem:
      "Generating QR codes often requires using online tools, which may not always be efficient or available offline.",
    solution:
      "Built a desktop application that allows users to generate and store QR codes locally, using a simple GUI and local database for saving history.",
    techStack: ["Python", "Tkinter", "SQLite3", "qrcode"],
    github: "https://github.com/ahm4d-putra/qrcode-python",
    featured: false,
  },
];

export const insights = [
  {
    title: "Structured Components",
    description:
      "I organize UI into reusable components to keep code clean, easier to maintain, and consistent across the app.",
    icon: "Layers",
  },
  {
    title: "Simple State Handling",
    description:
      "Managing state using basic React patterns and keeping data flow simple to avoid unnecessary complexity.",
    icon: "Database",
  },
  {
    title: "Performance Awareness",
    description:
      "I try to keep applications lightweight by minimizing unnecessary re-renders and optimizing basic loading performance.",
    icon: "Gauge",
  },
  {
    title: "User-Focused Design",
    description:
      "Building interfaces that are simple, clear, and easy to use, with attention to layout and responsiveness.",
    icon: "Accessibility",
  },
];

export const journey = [
  {
    year: "2017",
    title: "First Exposure to Technology",
    description:
      "Started elementary school and became familiar with computers, learning basic operations and developing curiosity about how technology works.",
  },
  {
    year: "2022",
    title: "Curiosity About Coding",
    description:
      "During middle school, I became interested in programming and began exploring how websites and applications are built.",
  },
  {
    year: "2025",
    title: "Choosing Software Engineering",
    description:
      "Started studying at SMK 20, majoring in Software Engineering (RPL) to deepen my understanding and build real projects.",
  },
  {
    year: "Now",
    title: "Building & Improving",
    description:
      "Currently focused on improving my skills by building projects, learning new technologies, and strengthening my problem-solving mindset.",
  },
];

export const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "Python",
  "OpenCV",
  "MediaPipe",
  "MySQL",
  "SQLite",
  "Supabase",
];
