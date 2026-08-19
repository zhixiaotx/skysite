import { Project, Article, TimelineItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Sky",
  title: "Full-Stack Engineer & AI Product Builder",
  tagline: "Crafting minimalist digital experiences, intelligent AI agents, and thoughtful software.",
  bio: "Hi, I'm Sky. I'm a software engineer and product creator passionate about the intersection of artificial intelligence, human-computer interaction, and clean minimalist design. I build tools that feel natural, fast, and delightful to use.",
  location: "San Francisco / Remote",
  email: "skylay199610@gmail.com",
  github: "https://github.com/skylay",
  twitter: "https://twitter.com/sky_builder",
  linkedin: "https://linkedin.com/in/sky-developer",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  stats: {
    yearsExperience: "5+",
    projectsShipped: "30+",
    openSourceRepos: "15+",
    happyClients: "20+"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "nexus-ai",
    title: "Nexus AI Assistant",
    description: "An ultra-fast contextual AI workspace for markdown notes and intelligent document querying.",
    longDescription: "Nexus AI combines local-first speed with powerful LLM orchestration. It allows users to query entire knowledge bases with semantic search, auto-generate summaries, and structure complex thoughts instantly.",
    category: "AI",
    tags: ["TypeScript", "React", "Gemini API", "TailwindCSS", "Vector DB"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    liveUrl: "https://example.com/nexus",
    githubUrl: "https://github.com/skylay/nexus-ai",
    featured: true,
    stars: 248,
    date: "2026-03"
  },
  {
    id: "zenith-ui",
    title: "Zenith Design System",
    description: "A meticulously crafted accessible component library built for high-performance web applications.",
    longDescription: "Zenith focuses on uncompromising typography, fluid micro-interactions, and pristine dark/light mode consistency. Adopted by over 50 indie developers worldwide.",
    category: "Design",
    tags: ["React", "Tailwind", "Radix UI", "Framer Motion", "Storybook"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
    liveUrl: "https://example.com/zenith",
    githubUrl: "https://github.com/skylay/zenith-ui",
    featured: true,
    stars: 512,
    date: "2025-11"
  },
  {
    id: "aurora-flow",
    title: "Aurora Flow Analytics",
    description: "Real-time product telemetry and user behavior analytics dashboard with zero bloat.",
    longDescription: "Designed for privacy-first SaaS products. Aurora Flow gives founders crystal clear insights into retention, funnels, and event streams without compromising user data.",
    category: "Full-Stack",
    tags: ["Node.js", "Express", "PostgreSQL", "React", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    liveUrl: "https://example.com/aurora",
    githubUrl: "https://github.com/skylay/aurora-flow",
    featured: true,
    stars: 184,
    date: "2025-08"
  },
  {
    id: "quantum-cli",
    title: "Quantum CLI",
    description: "Lightning-fast scaffolding tool for modern full-stack web applications.",
    longDescription: "A developer tool that generates production-ready boilerplates with pre-configured auth, databases, and CI/CD pipelines in under 3 seconds.",
    category: "Open Source",
    tags: ["TypeScript", "Node.js", "Commander", "CLI"],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1000",
    githubUrl: "https://github.com/skylay/quantum-cli",
    featured: false,
    stars: 92,
    date: "2025-05"
  },
  {
    id: "ether-notes",
    title: "Ether Notes",
    description: "Encrypted offline-first markdown journal with cloud sync capabilities.",
    longDescription: "A distraction-free writing sanctuary for creators and developers. Features markdown live-preview, vim bindings, and seamless end-to-end encryption.",
    category: "Full-Stack",
    tags: ["React", "IndexedDB", "Web Crypto", "Tailwind"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1000",
    liveUrl: "https://example.com/ether",
    githubUrl: "https://github.com/skylay/ether-notes",
    featured: false,
    stars: 135,
    date: "2025-02"
  },
  {
    id: "neural-canvas",
    title: "Neural Canvas",
    description: "Infinite collaborative whiteboard powered by AI vector embeddings.",
    longDescription: "Brainstorm ideas, cluster sticky notes automatically using LLMs, and export structured mind maps directly to markdown.",
    category: "AI",
    tags: ["Canvas API", "React", "WebSockets", "OpenAI / Gemini"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
    liveUrl: "https://example.com/canvas",
    githubUrl: "https://github.com/skylay/neural-canvas",
    featured: false,
    stars: 304,
    date: "2024-10"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    title: "Building Intuitive AI Interfaces in 2026",
    excerpt: "How streaming tokens, proactive agents, and invisible UI patterns are reshaping software design.",
    content: `As artificial intelligence becomes the underlying runtime for modern software, traditional UI paradigms like static forms and rigid wizards are giving way to fluid, conversational, and agentic interfaces.\n\n### 1. The Death of the Loading Spinner\nWhen users interact with AI agents, latency is inevitable. Instead of generic spinners, successful applications leverage streaming UI, skeleton thoughts, and progressive rendering to keep the user engaged.\n\n### 2. Contextual Proactivity\nGreat AI doesn't wait to be asked; it anticipates needs based on current workflow states. By surfacing relevant actions precisely when needed, we reduce cognitive load and friction.`,
    category: "AI & Design",
    readTime: "4 min read",
    date: "May 14, 2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    slug: "building-intuitive-ai-interfaces"
  },
  {
    id: "art-2",
    title: "Why Minimalism Wins in Full-Stack Architecture",
    excerpt: "Less code equals fewer bugs. A pragmatic guide to building robust, maintainable web systems.",
    content: `In an era of microservices proliferation and complex build toolchains, simplicity has become a radical superpower.\n\n### The Cost of Abstraction\nEvery dependency you introduce is a liability. By sticking to monolithic or modular full-stack frameworks with strong typing (like TypeScript end-to-end), engineering teams can iterate 3x faster with 80% fewer production incidents.`,
    category: "Engineering",
    readTime: "6 min read",
    date: "April 28, 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
    slug: "why-minimalism-wins"
  },
  {
    id: "art-3",
    title: "Designing Design Systems That Developers Actually Love",
    excerpt: "Bridging the gap between Figma components and production React code with zero friction.",
    content: `Design systems often fail when they are treated as static PDFs or overly complex component behemoths. To succeed, tokens must flow seamlessly from design tokens to Tailwind config with automated CI checks.`,
    category: "Design Systems",
    readTime: "5 min read",
    date: "March 12, 2026",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
    slug: "design-systems-developers-love"
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: "tl-1",
    year: "2024 - Present",
    role: "Founder & Independent Creator",
    organization: "Sky Studio / Open Source",
    description: "Building high-performance AI tools, design systems, and developer productivity software used by thousands globally.",
    type: "work"
  },
  {
    id: "tl-2",
    year: "2022 - 2024",
    role: "Senior Full-Stack Engineer",
    organization: "Nexus Tech",
    description: "Led core frontend architecture, migrated legacy monolith to modular React/Node micro-frontends, and optimized real-time data pipelines.",
    type: "work"
  },
  {
    id: "tl-3",
    year: "2020 - 2022",
    role: "Frontend Engineer & UI Designer",
    organization: "Vanguard Labs",
    description: "Designed and engineered customer-facing SaaS dashboards, interactive data visualizations, and component libraries.",
    type: "work"
  },
  {
    id: "tl-4",
    year: "2016 - 2020",
    role: "B.S. in Computer Science",
    organization: "University of California",
    description: "Focused on human-computer interaction, algorithms, and distributed systems.",
    type: "education"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "Frontend & UI",
    skills: [
      { name: "React / Next.js", level: 95, iconName: "Code2" },
      { name: "TypeScript", level: 90, iconName: "FileCode" },
      { name: "Tailwind CSS", level: 95, iconName: "Palette" },
      { name: "Framer Motion", level: 85, iconName: "Sparkles" }
    ]
  },
  {
    name: "Backend & AI",
    skills: [
      { name: "Node.js & Express", level: 90, iconName: "Server" },
      { name: "Python & FastAPI", level: 80, iconName: "Cpu" },
      { name: "Gemini / LLM APIs", level: 90, iconName: "Bot" },
      { name: "PostgreSQL / SQL", level: 85, iconName: "Database" }
    ]
  },
  {
    name: "Tools & Design",
    skills: [
      { name: "Git & CI/CD", level: 90, iconName: "GitBranch" },
      { name: "Figma / UI UX", level: 88, iconName: "Layout" },
      { name: "Docker & Cloud Run", level: 82, iconName: "Cloud" },
      { name: "Vite & Bundlers", level: 90, iconName: "Zap" }
    ]
  }
];
