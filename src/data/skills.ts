export interface SkillGroup {
  category: string;
  iconName: string;
  skills: { name: string; level?: string; tag?: string }[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "AI / Generative AI",
    iconName: "Cpu",
    skills: [
      { name: "Generative AI", tag: "LLMs & Prompting" },
      { name: "LangChain & LangGraph", tag: "Frameworks" },
      { name: "Local RAG Pipelines", tag: "Vector Search" },
      { name: "Ollama & Local LLMs", tag: "Zero-Cloud Privacy" },
      { name: "Vector Databases", tag: "ChromaDB / Qdrant" },
      { name: "Prompt Engineering", tag: "Structured Output" },
      { name: "Natural Language Processing", tag: "Tokenizers & NLTK" },
      { name: "Deep Learning & CNNs", tag: "TensorFlow / PyTorch" }
    ]
  },
  {
    category: "Multi-Agent Systems",
    iconName: "Sparkles",
    skills: [
      { name: "Multi-Agent Orchestration", tag: "Featured Core" },
      { name: "Event Bus & Pub/Sub", tag: "Async Communication" },
      { name: "Knowledge Graphs", tag: "CSKG Nodes" },
      { name: "Autonomous Workflows", tag: "Role-Based Agents" },
      { name: "Stateful Message Passing", tag: "Agent Synchronization" }
    ]
  },
  {
    category: "Full Stack",
    iconName: "Code2",
    skills: [
      { name: "React.js", tag: "Frontend Core" },
      { name: "Next.js", tag: "App Router / SSR" },
      { name: "TypeScript", tag: "Type Safety" },
      { name: "Node.js & Express", tag: "Backend APIs" },
      { name: "Tailwind CSS", tag: "Modern UI" },
      { name: "WebSockets & Socket.IO", tag: "Real-Time Chat" },
      { name: "RESTful API Design", tag: "Endpoints & Swagger" },
      { name: "PDF & Document OCR", tag: "Tesseract & PDF.js" }
    ]
  },
  {
    category: "Cloud",
    iconName: "Cloud",
    skills: [
      { name: "Google Cloud Platform", tag: "Cloud Run & Compute" },
      { name: "AWS Services", tag: "EC2 / S3" },
      { name: "Firebase & Firestore", tag: "Serverless BaaS" },
      { name: "Docker Containerization", tag: "Microservices" },
      { name: "Netlify & Vercel", tag: "Edge Deployments" }
    ]
  },
  {
    category: "Programming",
    iconName: "Terminal",
    skills: [
      { name: "C Language", tag: "Core Foundations" },
      { name: "C++", tag: "OOP & Algorithms" },
      { name: "Python", tag: "AI & ML Core" },
      { name: "JavaScript (ES6+)", tag: "Web Runtime" },
      { name: "TypeScript", tag: "Type-Safe Fullstack" },
      { name: "SQL", tag: "Relational Queries" },
      { name: "Bash / Shell", tag: "Linux Scripts" }
    ]
  },
  {
    category: "Databases & DevOps",
    iconName: "Layers",
    skills: [
      { name: "MongoDB & Mongoose", tag: "NoSQL Logs" },
      { name: "Firebase Firestore", tag: "Real-Time DB" },
      { name: "ChromaDB & FAISS", tag: "Vector Index" },
      { name: "GitHub Actions", tag: "CI/CD Workflows" },
      { name: "Linux System Admin", tag: "Server Config" },
      { name: "Postman & API Testing", tag: "API Verification" }
    ]
  }
];

