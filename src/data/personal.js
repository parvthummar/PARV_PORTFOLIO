export const personal = {
  name: "Parv Thummar",
  role: "Backend & AI Engineer",
  tagline: "Building agentic AI systems and backend infrastructure",
  email: "parvthummar8@gmail.com",
  phone: "+91 8780686131",
  location: "Gandhinagar, Gujarat, India",
  github: "https://github.com/parvthummar",
  githubHandle: "parvthummar",
  linkedin: "https://www.linkedin.com/in/parv-thummar-36aa7b258/",
  linkedinHandle: "parv-thummar",
  avatar: "https://avatars.githubusercontent.com/parvthummar",
  college: "IIIT Vadodara",
  degree: "B.Tech Computer Science & Engineering",
  gradYear: "2026",
  leetcode: "https://leetcode.com/u/parvthummar2003/",
  leetcodeHandle: "parvthummar2003",
  codeforces: "https://codeforces.com/profile/parvthummar",
  codeforcesHandle: "parvthummar",
};

export const aboutText = [
  "I'm a Computer Science student at IIIT Vadodara, focused on backend engineering and applied AI. I like building systems where the hard part is the infrastructure — retrieval pipelines that actually rank well, job queues that survive a crashed worker, and sandboxes that hold up against a red team.",
  "My core stack is Python and FastAPI, with LangGraph and LangChain for agentic workflows, PostgreSQL and Pinecone for storage and retrieval, and Docker for isolation and deployment. I also work in Java with Spring Boot and build front-ends in React.",
  "Recently I built CodeLens, a semantic code search platform that lifted success@5 from 75.8% to 87.1% using hybrid retrieval with Reciprocal Rank Fusion; a network-isolated agent sandbox validated against a 10-scenario red-team suite; and a multi-agent PR reviewer running four specialized agents over a shared LangGraph state graph. Alongside that I've solved 800+ competitive programming problems and hold Specialist on Codeforces.",
];

export const whatIDo = [
  {
    icon: "🤖",
    color: "orange",
    title: "Agentic AI & LLM Systems",
    desc: "Multi-agent orchestration with LangGraph, tool-calling workflows, prompt engineering, and human-in-the-loop review steps.",
  },
  {
    icon: "🔍",
    color: "green",
    title: "Retrieval & RAG",
    desc: "Hybrid dense + full-text retrieval, vector embeddings in Pinecone, and Reciprocal Rank Fusion measured on a golden-set harness.",
  },
  {
    icon: "⚡",
    color: "blue",
    title: "Backend Engineering",
    desc: "FastAPI and Spring Boot REST APIs, JWT auth, Pydantic validation, dependency injection, and centralized error handling.",
  },
  {
    icon: "🗄",
    color: "yellow",
    title: "Data & Job Systems",
    desc: "Relational schema design, query tuning and indexing, plus crash-safe Postgres + Redis/ARQ job queues with atomic claiming.",
  },
  {
    icon: "🔐",
    color: "red",
    title: "Security & Isolation",
    desc: "Docker network isolation, mitmproxy egress allowlists, AES-256-GCM secret vaults, and red-team validated agent sandboxes.",
  },
  {
    icon: "🧩",
    color: "teal",
    title: "DSA & Problem Solving",
    desc: "800+ problems solved across platforms, Codeforces Specialist, with a strong foundation in algorithms and OOP.",
  },
];

export const experience = [
  {
    role: "Backend Intern",
    company: "GrowIdeas Innovations",
    companyUrl: "https://growideasinnovations.com/",
    type: "Internship",
    period: "May 2025 — Jul 2025",
    location: "Ahmedabad, India",
    content: [
      "Developed REST APIs in FastAPI for a client-facing healthcare platform, using Pydantic models for request and response validation and dependency injection for database session and auth handling.",
      "Designed the relational schema and wrote the SQL queries backing the platform's core entity and reporting flows; improved query performance through indexing and query restructuring.",
      "Implemented JWT-based authentication and centralized error handling and logging across the service layer.",
    ],
    technologies: ["Python", "FastAPI", "Pydantic", "SQL", "JWT", "REST APIs"],
    prs: [],
  },
];

export const projects = [
  {
    name: "CodeLens",
    year: 2025,
    githubUrl: "https://github.com/parvthummar/CodeLens",
    description:
      "Semantic code search platform that indexes any public Python repo on GitHub and lets users query functions, classes, and methods in natural language via AST parsing, LLM-generated descriptions, and vector embeddings.",
    highlights: [
      "Raised success@5 from 75.8% to 87.1% on a golden-set evaluation harness via hybrid retrieval — dense Pinecone search fused with Postgres full-text through Reciprocal Rank Fusion.",
      "Profiled the query pipeline at p95 838ms with stage-level tracing, attributing 53% of latency on a remote Postgres deployment to per-request TLS connection setup rather than retrieval logic.",
      "Engineered a crash-safe job queue with Postgres-backed state and Redis/ARQ delivery, using atomic claiming, heartbeat dead-worker detection, and automatic reconciliation so a killed worker never strands a job.",
    ],
    technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "Pinecone", "OpenAI API", "React"],
  },
  {
    name: "Sandboxed AI Agent Platform",
    year: 2025,
    githubUrl: "https://github.com/parvthummar/SendBox_Agent",
    description:
      "Network-isolated execution sandbox for AI agents, where containment is enforced by infrastructure rather than by the agent's own code.",
    highlights: [
      "Architected a network-isolated agent sandbox using Docker internal-only bridge networking and a custom mitmproxy egress addon with per-agent domain allowlists, leaving a compromised agent zero route to unapproved hosts.",
      "Designed proxy-side secret injection from an AES-256-GCM vault so containers never hold API keys, with a FastAPI control plane managing container lifecycles under enforced CPU and memory limits.",
      "Validated the system with a 10-scenario red-team suite (fork bombs, DNS exfiltration, cloud metadata access, prompt injection), proving each attack is blocked by infrastructure, not agent code.",
    ],
    technologies: ["Python", "FastAPI", "LangGraph", "Docker", "mitmproxy", "AES-256-GCM"],
  },
  {
    name: "AI Code Reviewer",
    year: 2025,
    githubUrl: "https://github.com/parvthummar/ai-code-reviewer",
    description:
      "Multi-agent pull request review system that fetches unified diffs from GitHub and posts AI-generated review comments back onto the PR.",
    highlights: [
      "Built a multi-agent PR review system in LangGraph orchestrating 4 specialized agents — security, style, logic, and synthesis — over a shared state graph.",
      "Integrated the GitHub REST API to fetch unified diffs and post AI-generated review comments directly on pull requests as a human-in-the-loop approval step.",
      "Implemented conditional routing and early termination on fetch failures, keeping the graph resilient to upstream API errors mid-run.",
    ],
    technologies: ["Python", "LangGraph", "LangChain", "FastAPI", "React", "Gemini API"],
  },
];

export const skills = {
  languages: ["Python", "Java", "C++", "SQL"],
  frameworks: ["FastAPI", "LangGraph", "LangChain", "Spring Boot", "React"],
  databases: ["PostgreSQL", "MySQL", "Redis", "Pinecone"],
  ai: ["RAG", "Agentic Systems", "OpenAI API", "Gemini API", "Embeddings", "Prompt Engineering"],
  tools: ["Git", "Docker", "Postman", "mitmproxy"],
  core: [
    "RESTful API Design",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "System Design",
  ],
};

export const education = [
  {
    institution: "Indian Institute of Information Technology, Vadodara",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2022 — 2026",
    location: "Gandhinagar, Gujarat",
    tags: ["Computer Science", "Data Structures", "Algorithms", "Databases"],
  },
];

export const codingProfiles = [
  {
    name: "Codeforces",
    handle: "parvthummar",
    url: "https://codeforces.com/profile/parvthummar",
    note: "Specialist",
    color: "#1F8ACB",
  },
  {
    name: "LeetCode",
    handle: "parvthummar2003",
    url: "https://leetcode.com/u/parvthummar2003/",
    note: "800+ problems solved",
    color: "#FFA116",
  },
  {
    name: "GitHub",
    handle: "parvthummar",
    url: "https://github.com/parvthummar",
    color: "#111",
  },
  {
    name: "LinkedIn",
    handle: "parv-thummar",
    url: "https://www.linkedin.com/in/parv-thummar-36aa7b258/",
    color: "#0077B5",
  },
];

export const achievements = [
  {
    title: "Codeforces Specialist",
    detail: "Solved 800+ problems across multiple competitive programming platforms.",
    icon: "🏅",
  },
  {
    title: "NVIDIA Deep Learning Certificate",
    detail: "Completed NVIDIA's specialized deep learning course.",
    icon: "🎖️",
  },
  {
    title: "JEE Mains — Top 1.5%",
    detail: "Secured a position among the top 1.5% of candidates nationwide.",
    icon: "🥇",
  },
];

export const certifications = [
  {
    title: "Deep Learning",
    issuer: "NVIDIA",
    topics: "Neural networks, training workflows, model tuning",
    url: "https://learn.nvidia.com/certificates?id=gjdGi8EuSj-m68X9wtKBfw",
  },
];

export const navItems = [
  { label: "About Me", path: "/", icon: "👤" },
  { label: "Experience", path: "/experience", icon: "💼" },
  { label: "Projects", path: "/projects", icon: "📁" },
  { label: "Skills", path: "/skills", icon: "⚡" },
  { label: "Profiles", path: "/coding-profiles", icon: "🏆" },
  { label: "Education", path: "/education", icon: "🎓" },
  { label: "Contact", path: "/contact", icon: "📬" },
];
