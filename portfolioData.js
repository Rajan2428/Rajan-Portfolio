export const portfolioData = {
  personal: {
    name: "RAJAN RAJA",
    firstName: "Rajan",
    lastName: "Raja",
    role: "B.Tech CSE Student",
    tagline: "B.Tech Student | AI & Technology Enthusiast",
    college: "JECRC UNIVERSITY",
    location: "Jaipur, Rajasthan, India",
    email: "rrraja2805@gmail.com",
    linkedin: "https://linkedin.com/in/rajan-raja",
    github: "https://github.com/rajan-raja",
    resumeUrl: "#contact", // or link to PDF
    bio: "I am a B.Tech Computer Science student deeply passionate about modern technology, artificial intelligence, web development, and digital productivity. Currently building practical applications, exploring generative AI workflows, and crafting sleek user experiences.",
    availability: "Available for internships, collaborative projects & freelance opportunities",
    stats: [
      { label: "Core Focus", value: "AI & Web Dev" },
      { label: "Projects Completed", value: "5+" },
      { label: "Tech Stack", value: "Python / JS / React" },
      { label: "University", value: "JECRC, Jaipur" }
    ]
  },
  
  about: {
    title: "About Me",
    subtitle: "Student, Builder & Technology Explorer",
    summary: "I am a B.Tech Computer Science student at JECRC University, Jaipur. My curiosity revolves around how modern software and artificial intelligence can solve everyday challenges and boost human productivity.",
    paragraphs: [
      "I am an enthusiastic B.Tech student interested in technology, artificial intelligence, web development, and digital productivity. Every day, I focus on learning modern technologies, understanding core computing concepts, and turning ideas into practical, real-world projects.",
      "Whether it's designing clean, responsive web user interfaces or experimenting with generative AI models and workflow automations, I strive to combine aesthetics with performance. I believe continuous learning and hands-on building are the fastest ways to grow as a developer."
    ],
    pillars: [
      {
        icon: "Cpu",
        title: "Artificial Intelligence",
        description: "Exploring machine learning basics, generative AI models, and prompt engineering to create intelligent assistants and workflows."
      },
      {
        icon: "Globe",
        title: "Modern Web Development",
        description: "Crafting responsive, visually engaging, and accessible web experiences using React, modern JavaScript, and Tailwind CSS."
      },
      {
        icon: "Zap",
        title: "Digital Productivity",
        description: "Building student-centric tools, personal productivity systems, and automating repetitive tasks for peak efficiency."
      }
    ],
    highlights: [
      { label: "Degree Program", value: "B.Tech in Computer Science & Engineering" },
      { label: "Institution", value: "JECRC University" },
      { label: "Campus City", value: "Jaipur, Rajasthan" },
      { label: "Current Focus", value: "Full Stack Web & GenAI Integration" },
      { label: "Primary Languages", value: "Python, JavaScript, HTML5/CSS3" },
      { label: "Collaboration", value: "Open to Internships & Hackathons" }
    ]
  },

  education: {
    institution: "JECRC UNIVERSITY",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science and Engineering (CSE)",
    location: "Jaipur, Rajasthan",
    duration: "2023 – 2027 (Undergraduate)",
    status: "Currently Enrolled",
    description: "Pursuing in-depth academic and practical studies in computer science, software design, and algorithmic problem-solving. Actively participating in technical societies and self-directed project development.",
    relevantAreas: [
      "Data Structures & Algorithms (DSA)",
      "Web Technologies & Architecture",
      "Artificial Intelligence & Machine Learning",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (OOP)",
      "Operating Systems & Linux",
      "Computer Networks",
      "Software Engineering Practices"
    ],
    milestones: [
      {
        year: "Current",
        title: "Specializing in AI & Web Development",
        details: "Building full-stack web applications and integrating Generative AI APIs into practical solutions."
      },
      {
        year: "Foundations",
        title: "Computer Science Core Fundamentals",
        details: "Mastered algorithmic thinking, programming with Python and JavaScript, and object-oriented systems design."
      }
    ]
  },

  skills: [
    {
      id: "html",
      name: "HTML",
      category: "Frontend & Web",
      level: "Advanced",
      percent: 92,
      icon: "Code2",
      color: "from-orange-500 to-amber-500",
      description: "Semantic layouts, accessibility (a11y), clean DOM structure, and SEO-friendly architectures."
    },
    {
      id: "css",
      name: "CSS",
      category: "Frontend & Web",
      level: "Advanced",
      percent: 90,
      icon: "Palette",
      color: "from-blue-500 to-cyan-500",
      description: "Responsive layouts with Flexbox & Grid, CSS animations, glassmorphism, and Tailwind CSS utility styling."
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "Frontend & Web",
      level: "Proficient",
      percent: 86,
      icon: "FileCode",
      color: "from-yellow-400 to-amber-500",
      description: "Modern ES6+ syntax, asynchronous programming (Async/Await), DOM manipulation, and interactive state management."
    },
    {
      id: "python",
      name: "Python",
      category: "Programming & AI",
      level: "Proficient",
      percent: 88,
      icon: "Terminal",
      color: "from-blue-400 to-indigo-500",
      description: "Data handling, scripting, object-oriented programming, and AI/ML foundations with clean idiomatic syntax."
    },
    {
      id: "ai",
      name: "Artificial Intelligence",
      category: "Programming & AI",
      level: "Intermediate",
      percent: 82,
      icon: "BrainCircuit",
      color: "from-purple-500 to-pink-500",
      description: "Understanding intelligent agent architectures, neural network basics, and practical AI application pipelines."
    },
    {
      id: "genai",
      name: "Generative AI",
      category: "Programming & AI",
      level: "Intermediate",
      percent: 85,
      icon: "Sparkles",
      color: "from-emerald-400 to-cyan-500",
      description: "Prompt engineering, LLM API integrations, conversational interfaces, and AI-augmented creative workflows."
    },
    {
      id: "webdev",
      name: "Web Development",
      category: "Frontend & Web",
      level: "Proficient",
      percent: 89,
      icon: "Layout",
      color: "from-cyan-400 to-blue-600",
      description: "Modern single-page applications, component-driven UI in React, Vite build tooling, and Vercel cloud deployment."
    },
    {
      id: "productivity",
      name: "Digital Productivity",
      category: "Tools & Systems",
      level: "Expert",
      percent: 94,
      icon: "Workflow",
      color: "from-violet-500 to-indigo-600",
      description: "System design for task tracking, Git/GitHub version control, automation scripts, and digital knowledge systems."
    }
  ],

  projects: [
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      category: "Web Development",
      shortDescription: "A modern, premium personal portfolio showcasing projects, education, and technical skills with responsive glassmorphism UI.",
      fullDescription: "A fully responsive personal portfolio website engineered from scratch using React, Vite, and Tailwind CSS. Features dynamic dark mode glassmorphism styling, smooth animated transitions, an interactive project modal viewer, and a validated contact system. Optimized for fast loading and seamless deployment on Vercel.",
      technologies: ["React", "Vite", "Tailwind CSS", "Lucide Icons", "JavaScript (ES6+)"],
      features: [
        "Interactive glassmorphism tech-themed design",
        "Fully responsive layout optimized for all viewports (mobile, tablet, desktop)",
        "Smooth navigation with active section detection",
        "Project modal deep-dives and dynamic skill metrics",
        "One-click email copying and verified contact form",
        "Production optimized bundle ready for Vercel"
      ],
      githubUrl: "https://github.com/rajan-raja/portfolio",
      liveUrl: "#",
      badge: "Featured • Live Now"
    },
    {
      id: "ai-website-project",
      title: "AI Website Project",
      category: "Artificial Intelligence",
      shortDescription: "An intelligent web application powered by Generative AI APIs for automated assistance, content synthesis, and dynamic user queries.",
      fullDescription: "An innovative web-based application designed to bridge human intent with generative AI models. The platform enables users to enter context-rich prompts, receive intelligent conversational solutions, and process text-based tasks with intuitive preview panels and responsive output formatting.",
      technologies: ["Python", "React", "Generative AI APIs", "Tailwind CSS", "REST API"],
      features: [
        "Real-time conversational interface with AI assistance",
        "Custom prompt optimization for structured outputs",
        "Interactive markdown rendering with code highlight support",
        "Clean, distraction-free UI with instant response streaming",
        "Modular backend ready for custom model fine-tuning"
      ],
      githubUrl: "https://github.com/rajan-raja/ai-website-project",
      liveUrl: "#",
      badge: "AI Powered"
    },
    {
      id: "student-productivity-project",
      title: "Student Productivity Project",
      category: "Digital Productivity",
      shortDescription: "A focused student productivity suite featuring intelligent task prioritization, Pomodoro focus cycles, and semester course tracking.",
      fullDescription: "Designed specifically to help B.Tech and college students conquer academic burnout and deadline stress. Integrates custom Eisenhower matrix task sorting, customizable Pomodoro study intervals with sound notifications, and semester syllabus checklists with persistent local storage.",
      technologies: ["JavaScript", "React", "LocalStorage API", "Tailwind CSS", "Audio API"],
      features: [
        "Custom Pomodoro study timer with break reminders",
        "Eisenhower matrix task prioritization (Urgent vs. Important)",
        "Semester subject progress tracker and grade goal calculator",
        "Zero-latency local storage state persistence",
        "Clean, dark-mode minimalist UI designed for deep focus"
      ],
      githubUrl: "https://github.com/rajan-raja/student-productivity-project",
      liveUrl: "#",
      badge: "Productivity Suite"
    }
  ],

  achievements: [
    {
      category: "Certifications",
      items: [
        {
          title: "Artificial Intelligence Foundations",
          issuer: "Online Learning Platform / Technical Academy",
          date: "2024",
          description: "Comprehensive certification covering machine learning principles, neural network architectures, and practical AI applications.",
          badge: "Certified"
        },
        {
          title: "Modern Web Development & React",
          issuer: "Frontend Developer Specialization",
          date: "2024",
          description: "Hands-on certification covering modern JavaScript ES6+, React component architecture, and responsive responsive UI design.",
          badge: "Certified"
        },
        {
          title: "Python Programming Mastery",
          issuer: "Programming Academy",
          date: "2023",
          description: "Foundational and object-oriented Python scripting, data structures, and computational problem solving.",
          badge: "Verified"
        }
      ]
    },
    {
      category: "Hackathons",
      items: [
        {
          title: "University Tech Hackathon Participant",
          issuer: "JECRC University Tech Fest",
          date: "2024",
          description: "Collaborated in an intensive team sprint to prototype a digital solution targeting college productivity and campus connectivity.",
          badge: "Hackathon"
        },
        {
          title: "Open Innovation Coding Challenge",
          issuer: "National Student Developer Community",
          date: "2023",
          description: "Developed and submitted an algorithmic solution demonstrating optimal time complexity and clean code structure.",
          badge: "Participant"
        }
      ]
    },
    {
      category: "Courses & Academics",
      items: [
        {
          title: "Data Structures & Algorithms Course",
          issuer: "Computer Science Department",
          date: "Academic Coursework",
          description: "Rigorous training in linear and non-linear data structures, searching/sorting algorithms, and asymptotic complexity analysis.",
          badge: "Academic"
        },
        {
          title: "Generative AI & Prompt Engineering Masterclass",
          issuer: "AI Developer Community",
          date: "2024",
          description: "Explored advanced prompt design, LLM parameters, temperature tuning, and system instructions for reliable AI outputs.",
          badge: "Course"
        }
      ]
    },
    {
      category: "Awards & Recognitions",
      items: [
        {
          title: "Academic Excellence & High Engagement",
          issuer: "JECRC University",
          date: "2023 - Present",
          description: "Recognized for consistent academic diligence, active laboratory participation, and enthusiasm for peer collaborative learning.",
          badge: "Honor"
        },
        {
          title: "More Milestones Coming Soon",
          issuer: "Continuous Learning",
          date: "Ongoing",
          description: "Actively preparing for upcoming national hackathons, open source contributions, and industry certifications.",
          badge: "Upcoming"
        }
      ]
    }
  ]
};
