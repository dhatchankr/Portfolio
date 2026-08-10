export interface AIAgentDetail {
  name: string;
  purpose: string;
  features: string[];
  input?: string;
  output?: string;
  example?: string;
}

export interface DetailedBlueprint {
  overview: string;
  problemStatement: string[];
  proposedSolution: string;
  solutionExample: string;
  architectureDiagram: string;
  aiAgents: AIAgentDetail[];
  techStackCategorized: {
    category: string;
    items: string[];
  }[];
  keyFeaturesDetailed: {
    title: string;
    description: string;
  }[];
  challengesAndSolutions: {
    challenge: string;
    solution: string;
  }[];
  futureEnhancements: string[];
}

export interface Project {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  gradient: string;
  accentColor: string;
  detailedBlueprint?: DetailedBlueprint;
}

export const projectsData: Project[] = [
  {
    id: "teachsphere",
    name: "TeachSphere AI",
    category: "Generative AI | Multi-Agent Systems | Cloud Application",
    badge: "Flagship AI Platform",
    description: "An intelligent education platform that uses specialized AI agents to automate teaching workflows, lesson planning, assessment generation, research assistance, placement prep, and student analytics through an event-driven architecture.",
    techStack: ["React.js", "Firebase", "Groq LLM API", "Multi-Agent Systems", "NLP", "OCR", "Knowledge Graph"],
    features: [
      "AI Lesson Planner Agent",
      "Assessment Generation Agent",
      "AI Research Assistant Agent",
      "AI Placement Preparation Agent",
      "Student Analytics Agent"
    ],
    githubUrl: "https://github.com/dhatchankr/TeachSphereAI.git",
    liveUrl: "#",
    gradient: "from-purple-900/40 via-blue-900/30 to-slate-900/60",
    accentColor: "border-purple-500/50 shadow-purple-500/20",
    detailedBlueprint: {
      overview: "TeachSphere AI is an intelligent education platform that uses multiple specialized AI agents to automate academic workflows for teachers and students. The platform acts as an AI teaching assistant that can generate lesson plans, create assessments, analyze student performance, assist research activities, and provide personalized learning recommendations. Instead of using a single AI model, TeachSphere AI uses a multi-agent architecture where each AI agent has a specific responsibility and communicates through an event-driven system.",
      problemStatement: [
        "Preparing comprehensive, week-wise lesson plans matched to university syllabi",
        "Creating custom assignments, quizzes, and difficulty-balanced question banks",
        "Tracking individual student progress and identifying skill gaps",
        "Preparing placement study materials, ATS resume optimization, and mock interview questions",
        "Filtering research resources and summarizing academic papers",
        "Existing generic AI tools lack specialized educational domain intelligence and workflow context"
      ],
      proposedSolution: "TeachSphere AI introduces a collaborative AI agent ecosystem where specialized agents work together synchronously and asynchronously to support all academic activities.",
      solutionExample: "Teacher uploads syllabus PDF → AI analyzes course content → Lesson Planner Agent creates teaching schedule → Assessment Agent generates quizzes → Analytics Agent evaluates student performance.",
      architectureDiagram: `
                 User Interface
                      |
              React Web Application
                      |
              API / Backend Layer
                      |
              AI Agent Orchestrator
                      |
        --------------------------------
        |        |        |            |
     Lesson    Quiz    Research   Placement
     Agent    Agent     Agent       Agent
        |        |        |            |
        --------------------------------
                      |
         Event Bus (Communication Layer)
                      |
         Knowledge Graph + Vector DB
                      |
               Firebase Cloud
`,
      aiAgents: [
        {
          name: "1. AI Lesson Planner Agent",
          purpose: "Creates structured, syllabus-aligned lesson plans automatically.",
          features: ["Syllabus PDF analysis & topic breakdown", "Learning objectives alignment", "Week-wise teaching schedule generation", "Automated outcome tracking"],
          input: "PDF syllabus, subject details, semester duration",
          output: "Week-wise structured lesson plan, teaching strategy, learning outcomes"
        },
        {
          name: "2. Assessment Generation Agent",
          purpose: "Automatically creates difficulty-classified assessments and question banks.",
          features: ["MCQ generation with automated answer keys", "Short-answer & descriptive questions", "Bloom's Taxonomy difficulty classification", "Real-time grading rubrics"],
          input: "Course Unit Topic (e.g. Machine Learning Unit 3)",
          output: "10 MCQs, 5 Descriptive Questions, Answer Key with Difficulty Matrix"
        },
        {
          name: "3. AI Research Assistant Agent",
          purpose: "Empowers students and researchers with automated literature discovery.",
          features: ["Academic paper summarization", "Literature survey synthesis", "Citation & reference extraction", "Related work exploration"],
          input: "Research paper PDF or topic keyphrase",
          output: "Executive summary, core methodology breakdown, reference graph"
        },
        {
          name: "4. AI Placement Preparation Agent",
          purpose: "Delivers hyper-personalized career and technical interview preparation.",
          features: ["Resume parsing & ATS score prediction", "Skill gap detection against market roles", "Custom coding roadmap generation", "AI mock interview feedback"],
          example: "Resume uploaded → AI detects missing skills (Docker, System Design, AWS) → Generates targeted cloud deployment learning path"
        },
        {
          name: "5. Student Analytics Agent",
          purpose: "Tracks and evaluates student academic performance trends.",
          features: ["Individual performance dashboard", "Weak area detection & early alert", "Adaptive learning resource recommendations"]
        }
      ],
      techStackCategorized: [
        { category: "Frontend", items: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"] },
        { category: "Backend & API", items: ["Node.js", "Express.js", "RESTful APIs", "Event Bus Orchestrator"] },
        { category: "Artificial Intelligence", items: ["Generative AI", "Groq LLM API", "Prompt Engineering", "Multi-Agent Systems", "NLP"] },
        { category: "Database & Knowledge", items: ["Firebase Firestore", "Vector DB", "Student Knowledge Graph"] },
        { category: "Document Processing", items: ["PDF.js", "Tesseract OCR", "Document AI Pipeline"] },
        { category: "Cloud & Deployment", items: ["Firebase Cloud", "Cloud Storage", "Serverless Functions"] }
      ],
      keyFeaturesDetailed: [
        {
          title: "Intelligent Document Processing Pipeline",
          description: "Users upload PDFs, lecture notes, or syllabus files. The system utilizes OCR and document parsing pipelines to convert raw text into structured JSON knowledge nodes."
        },
        {
          title: "Event-Driven Multi-Agent Communication",
          description: "Agents communicate through an asynchronous event bus: Lesson Agent completion emits an event → Quiz Agent catches event → Automatically constructs assessment matched to lesson outcomes."
        },
        {
          title: "Educational Knowledge Graph",
          description: "Stores interconnected entities between Students, Courses, Topics, Skill Sets, Performance Metrics, and Recommended Learning Resources for contextual recommendations."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Managing concurrent state and communication across multiple autonomous AI agents.",
          solution: "Implemented a centralized agent orchestrator using event-based communication patterns and stateful message passing."
        },
        {
          challenge: "Processing complex multi-format academic documents and PDFs accurately.",
          solution: "Constructed an automated OCR + PDF extraction pipeline with document layout parsing and chunking."
        },
        {
          challenge: "Maintaining personalized long-term recommendation context for each student.",
          solution: "Built a dynamic student knowledge graph in Firebase Firestore capturing progress snapshots and skill vectors."
        }
      ],
      futureEnhancements: [
        "Voice-based interactive AI professor / tutor",
        "AI classroom assistant integration",
        "Automated attendance tracking using face recognition",
        "LMS (Canvas / Moodle) native integration",
        "Cross-platform mobile application"
      ]
    }
  },
  {
    id: "convofriendly",
    name: "ConvoFriendly",
    category: "Full Stack + Real-Time AI",
    badge: "Real-Time AI Chat",
    description: "Real-time communication platform with AI-assisted messaging, end-to-end conversation intelligence, media sharing, and scalable WebSocket backend services.",
    techStack: ["MERN Stack", "Socket.IO", "MongoDB", "Gemini API", "Node.js"],
    features: [
      "Real-time WebSocket Chat",
      "Group Messaging & Channels",
      "Typing & Presence Indicators",
      "In-chat Gemini AI Smart Replies",
      "Secure Media & File Sharing"
    ],
    githubUrl: "https://github.com/dhatchankr/ConvoFriendly",
    liveUrl: "#",
    gradient: "from-cyan-900/40 via-blue-900/30 to-slate-900/60",
    accentColor: "border-cyan-500/50 shadow-cyan-500/20",
    detailedBlueprint: {
      overview: "ConvoFriendly is a full-stack real-time communication platform engineered with Node.js, Express, Socket.IO, and React, enriched with contextual AI capabilities. It allows seamless instant messaging while offering AI conversation summaries, smart reply suggestions, and translation on the fly.",
      problemStatement: [
        "Traditional messaging platforms lack real-time AI context awareness and conversation synthesis",
        "Managing low-latency WebSocket connections alongside persistent database logs",
        "High message volume processing requires clean pub/sub message architecture"
      ],
      proposedSolution: "Combines Socket.IO event channels with a Gemini API backend proxy to deliver latency-optimized chat with embedded smart assistant tools.",
      solutionExample: "User typing query in chat → Socket.IO broadcasts presence → AI assistant triggered on '@ai' call → Contextual answer streamed in channel.",
      architectureDiagram: `
         React Frontend (Socket Client)
                      |
          Socket.IO / Express Server
                      |
        -----------------------------
        |                           |
    MongoDB Log               Gemini AI Proxy
   (Persistence)              (Smart Replies)
`,
      aiAgents: [],
      techStackCategorized: [
        { category: "Frontend", items: ["React", "Tailwind CSS", "Framer Motion", "Socket.IO Client"] },
        { category: "Backend", items: ["Node.js", "Express.js", "Socket.IO Server"] },
        { category: "AI & DB", items: ["Gemini API", "MongoDB", "Mongoose"] }
      ],
      keyFeaturesDetailed: [
        {
          title: "Low-Latency WebSocket Engine",
          description: "Instant bidirectional message dispatch with fallback handling and typing state synchronization."
        },
        {
          title: "In-Context AI Companion",
          description: "Invoke AI in any room for message translation, summarization, or automated topic expansion."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Preventing rate limits on AI calls while maintaining real-time feel.",
          solution: "Implemented server-side request debouncing and stream chunking for instant feedback."
        }
      ],
      futureEnhancements: [
        "End-to-End Encryption (E2EE)",
        "Voice call and video rooms with WebRTC",
        "AI voice note transcription"
      ]
    }
  },
  {
    id: "ai-doc-intel",
    name: "AI Document Intelligence Platform",
    category: "RAG & Local LLM Application",
    badge: "Local RAG Pipeline",
    description: "Advanced Retrieval-Augmented Generation application enabling users to converse with complex PDFs, research papers, and structured data using local open-weight LLMs.",
    techStack: ["Python", "LangChain", "ChromaDB", "Ollama", "Streamlit"],
    features: [
      "PDF Upload & Semantic Chunking",
      "Vector Embedding Pipeline",
      "ChromaDB Similarity Search",
      "Privacy-Preserving Local RAG"
    ],
    githubUrl: "https://github.com/dhatchankr/AI-Document-Intelligence",
    liveUrl: "#",
    gradient: "from-blue-900/40 via-indigo-900/30 to-slate-900/60",
    accentColor: "border-blue-500/50 shadow-blue-500/20",
    detailedBlueprint: {
      overview: "An enterprise-grade local Retrieval-Augmented Generation (RAG) system running Ollama and ChromaDB, allowing zero-cloud data leak document analysis.",
      problemStatement: [
        "Enterprise document privacy prevents uploading sensitive files to cloud LLM APIs",
        "Large PDFs exceed standard context windows requiring semantic search"
      ],
      proposedSolution: "Local vector embedding with ChromaDB and Ollama (Llama 3 / Mistral) running completely on device.",
      solutionExample: "Upload 100-page report → LangChain creates embeddings → Query indexed in ChromaDB → Local LLM returns cited answer.",
      architectureDiagram: `
     PDF Document → Text Chunker → Vector Embeddings
                                        |
     User Query → Similarity Search → ChromaDB
                                        |
                           Ollama Local LLM → Answer
`,
      aiAgents: [],
      techStackCategorized: [
        { category: "Language & RAG", items: ["Python", "LangChain", "LlamaIndex"] },
        { category: "Vector Store", items: ["ChromaDB", "FAISS"] },
        { category: "Local LLM", items: ["Ollama", "Llama 3", "Mistral"] }
      ],
      keyFeaturesDetailed: [
        {
          title: "Zero-Cloud Data Privacy",
          description: "All processing and inference happen locally without transmitting byte payloads outside the machine."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Embedding accuracy for domain-specific tables and text.",
          solution: "Implemented hybrid semantic chunking and metadata filtering."
        }
      ],
      futureEnhancements: [
        "Multi-modal document support (charts & images)",
        "GPU-accelerated local index search"
      ]
    }
  },
  {
    id: "deepfake-detection",
    name: "Deepfake Detection System",
    category: "Computer Vision & Deep Learning",
    badge: "Computer Vision AI",
    description: "Deep learning based computer vision system capable of identifying manipulated video frames, synthetic facial artifacts, and deepfake media with high confidence evaluation.",
    techStack: ["Python", "OpenCV", "TensorFlow", "CNN", "Django"],
    features: [
      "Face Landmark Alignment",
      "CNN Feature Extraction",
      "Frame-by-Frame Deepfake Rating",
      "Forensic History Log"
    ],
    githubUrl: "https://github.com/dhatchankr/Deepfake-Detection",
    liveUrl: "#",
    gradient: "from-pink-900/40 via-purple-900/30 to-slate-900/60",
    accentColor: "border-pink-500/50 shadow-pink-500/20",
    detailedBlueprint: {
      overview: "Computer vision classification system trained on MesoNet and ResNet convolutional neural network architectures to flag facial synthesis artifacts in uploaded videos.",
      problemStatement: [
        "Proliferation of realistic AI-generated deepfake media causing identity fraud and disinformation",
        "Subtle temporal inconsistencies in synthetic video frames are hard for human eyes to spot"
      ],
      proposedSolution: "Extract facial frames, detect eye-blink anomalies and frequency domain distortion using trained CNN models.",
      solutionExample: "Upload MP4 → OpenCV extracts facial crops → CNN model scores probability → Heatmap flags synthetic region.",
      architectureDiagram: `
   Video Upload → Frame Extractor → Face Bounding Box
                                         |
                       CNN Model Artifact Inspection
                                         |
                         Deepfake Score & Report
`,
      aiAgents: [],
      techStackCategorized: [
        { category: "Core ML", items: ["Python", "TensorFlow", "Keras", "PyTorch"] },
        { category: "Vision", items: ["OpenCV", "dlib", "FaceNet"] },
        { category: "Backend", items: ["Django", "SQLite", "Celery Tasks"] }
      ],
      keyFeaturesDetailed: [
        {
          title: "Real-Time Frame Forensic Inspection",
          description: "Scans video frame-by-frame and outputs probability confidence score."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "High false positives on low-resolution videos.",
          solution: "Added face alignment pre-processing and frame temporal smoothing filters."
        }
      ],
      futureEnhancements: [
        "Real-time webcam video stream inspection",
        "Audio deepfake detection pipeline"
      ]
    }
  },
  {
    id: "spam-detection",
    name: "AI Spam Detection System",
    category: "Machine Learning & Natural Language Processing",
    badge: "ML NLP Classifier",
    description: "NLP-based text classification system that flags spam emails, suspicious messages, and phish payloads using supervised machine learning algorithms.",
    techStack: ["Python", "NLP", "Scikit-learn", "TF-IDF", "Pandas"],
    features: [
      "Text Normalization & Tokenization",
      "TF-IDF Vector Feature Extraction",
      "Multi-Model Benchmark (Naive Bayes, SVM, Logistic Regression)",
      "Real-time Inference API"
    ],
    githubUrl: "https://github.com/dhatchankr/AI-Spam-Detection",
    liveUrl: "#",
    gradient: "from-emerald-900/40 via-teal-900/30 to-slate-900/60",
    accentColor: "border-emerald-500/50 shadow-emerald-500/20",
    detailedBlueprint: {
      overview: "Supervised machine learning pipeline utilizing Naive Bayes, Support Vector Machines, and TF-IDF feature extraction to classify malicious text payloads.",
      problemStatement: [
        "Phishing and SMS spam clogging communication channels",
        "Evolving spam vocabulary bypassing rigid keyword filters"
      ],
      proposedSolution: "Statistical NLP feature vectorization combined with ensemble classification.",
      solutionExample: "Raw text input → Tokenization & Lemmatization → TF-IDF Matrix → SVM Prediction → Result: Spam (99.2% confidence).",
      architectureDiagram: `
  Raw Text → Lemmatization → TF-IDF Vectorizer → SVM Classifier → Prediction Result
`,
      aiAgents: [],
      techStackCategorized: [
        { category: "NLP & ML", items: ["Python", "NLTK", "Scikit-learn", "Pandas", "NumPy"] },
        { category: "Deployment", items: ["Flask", "Docker"] }
      ],
      keyFeaturesDetailed: [
        {
          title: "High Precision Text Analytics",
          description: "Achieves 98.6% classification accuracy across benchmark SMS/Email datasets."
        }
      ],
      challengesAndSolutions: [
        {
          challenge: "Handling slang and typos in spam messages.",
          solution: "Utilized character n-grams alongside word-level TF-IDF tokens."
        }
      ],
      futureEnhancements: [
        "Transformer-based BERT classifier integration",
        "Browser extension for inbox protection"
      ]
    }
  }
];
