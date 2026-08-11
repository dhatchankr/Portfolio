import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projectsData, Project } from "../data/projects";
import { Folder, Github, Sparkles, CheckCircle2, Cpu, X, ArrowRight, Layers, Terminal, AlertTriangle, Lightbulb, Workflow } from "lucide-react";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeBlueprintProject, setActiveBlueprintProject] = useState<Project | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<"overview" | "architecture" | "agents" | "stack" | "challenges">("overview");

  const filterCategories = ["All", "Generative AI", "Full Stack", "Machine Learning", "Computer Vision"];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === "All") return true;
    if (selectedFilter === "Generative AI") return p.category.includes("Generative AI") || p.category.includes("RAG");
    if (selectedFilter === "Full Stack") return p.category.includes("Full Stack");
    if (selectedFilter === "Machine Learning") return p.category.includes("Machine Learning");
    if (selectedFilter === "Computer Vision") return p.category.includes("Computer Vision");
    return true;
  });

  return (
    <section id="projects" style={{ padding: '90px 0', borderTop: '1px solid var(--border)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1060px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Section Header */}
        <h2 className="section-title">Featured Case Studies</h2>
        <p className="section-desc">
          Projects spanning AI agents, document intelligence, computer vision, and distributed backends.
        </p>

        {/* Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
          {filterCategories.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              style={{
                padding: '7px 16px',
                borderRadius: '6px',
                fontSize: '12px',
                fontFamily: 'var(--font-mono)',
                fontWeight: 500,
                cursor: 'pointer',
                border: selectedFilter === filter ? '1px solid var(--primary)' : '1px solid var(--border)',
                background: selectedFilter === filter ? 'linear-gradient(135deg, var(--primary), var(--secondary))' : 'var(--bg-subtle)',
                color: selectedFilter === filter ? '#fff' : 'var(--text-muted)',
                transition: 'all 0.25s ease',
                boxShadow: selectedFilter === filter ? '0 0 20px rgba(59,130,246,0.3)' : 'none'
              }}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {filteredProjects.map((project: Project, idx: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="glass-card"
              style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                padding: '24px', borderRadius: '16px'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                
                {/* Header Badge & Category */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', minHeight: '32px' }}>
                  <span className="project-meta" style={{ margin: 0, flex: 1, lineHeight: 1.3 }}>{project.category.split('|')[0].trim()}</span>
                  <span style={{
                    fontSize: '10px', fontFamily: 'var(--font-mono)', fontWeight: 600,
                    padding: '3px 8px', borderRadius: '12px',
                    background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.25)',
                    color: 'var(--secondary)', textTransform: 'uppercase', whiteSpace: 'nowrap', flexShrink: 0
                  }}>
                    {project.badge}
                  </span>
                </div>
                
                {/* Project Title (Fixed min-height for perfect line alignment) */}
                <div style={{ minHeight: '52px', display: 'flex', alignItems: 'flex-start' }}>
                  <h3 style={{ fontSize: '18.5px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)', margin: 0, lineHeight: 1.3 }}>
                    {project.name}
                  </h3>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.6,
                  fontFamily: 'var(--font-main)', margin: 0, height: '64px',
                  display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                }}>
                  {project.description}
                </p>

                {/* Key Features List (Max 3 items for compact layout) */}
                <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {project.features.slice(0, 3).map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12.5px', color: 'var(--text)' }}>
                        <span style={{ color: 'var(--accent)', fontWeight: 700, fontSize: '11px', flexShrink: 0 }}>✓</span>
                        <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Tech Stack & Action */}
              <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px', height: '52px', overflow: 'hidden', alignContent: 'flex-start' }}>
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="tech-badge" style={{ fontSize: '10.5px', padding: '2px 7px' }}>{tech}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    onClick={() => {
                      setActiveBlueprintProject(project);
                      setActiveModalTab("overview");
                    }}
                    className="btn btn-primary"
                    style={{ flex: 1, justifyContent: 'center', fontSize: '12px', padding: '9px 14px' }}
                  >
                    <Workflow size={13} />
                    <span>Architecture</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      padding: '9px 12px',
                      borderRadius: '8px',
                      background: 'var(--bg-subtle)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                      display: 'flex', alignItems: 'center',
                      transition: 'all 0.2s ease'
                    }}
                    title="GitHub Repository"
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--text)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                  >
                    <Github size={15} />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* ── DEEP ARCHITECTURAL CASE STUDY FULL SCREEN MODAL ── */}
      <AnimatePresence>
        {activeBlueprintProject && (
          <div style={{
            position: 'fixed', inset: 0, zIndex: 200,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
            background: 'rgba(6, 8, 14, 0.72)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)'
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '88%', maxWidth: '1000px', height: '80vh',
                background: 'rgba(12, 16, 28, 0.65)',
                backdropFilter: 'blur(24px) saturate(200%)',
                WebkitBackdropFilter: 'blur(24px) saturate(200%)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                borderRadius: '24px',
                boxShadow: '0 25px 80px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
                display: 'flex', flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              
              {/* Modal Header */}
              <div style={{
                padding: '20px 24px',
                background: 'rgba(9, 13, 22, 0.8)',
                borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      fontSize: '11px', fontFamily: 'var(--font-mono)', fontWeight: 600,
                      padding: '3px 10px', borderRadius: '12px',
                      background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)',
                      color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.04em'
                    }}>
                      {activeBlueprintProject.badge}
                    </span>
                    <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                      System Blueprint Architecture
                    </span>
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)', margin: 0 }}>
                    {activeBlueprintProject.name}
                  </h3>
                </div>

                <button
                  onClick={() => setActiveBlueprintProject(null)}
                  style={{
                    padding: '8px 12px', borderRadius: '8px',
                    background: 'var(--bg)', border: '1px solid var(--border)',
                    color: 'var(--text-muted)', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '6px',
                    fontSize: '12px', fontFamily: 'var(--font-mono)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--text)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
                >
                  <X size={16} />
                  <span>Esc</span>
                </button>
              </div>

              {/* Modal Navigation Tabs */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '12px 24px', background: 'rgba(4, 7, 13, 0.4)',
                borderBottom: '1px solid var(--border)', overflowX: 'auto', flexShrink: 0
              }}>
                {[
                  { id: "overview", label: "Problem & Solution" },
                  { id: "architecture", label: "System Architecture" },
                  ...(activeBlueprintProject.detailedBlueprint?.aiAgents && activeBlueprintProject.detailedBlueprint.aiAgents.length > 0
                    ? [{ id: "agents", label: `AI Multi-Agents (${activeBlueprintProject.detailedBlueprint.aiAgents.length})` }]
                    : []),
                  { id: "stack", label: "Tech Stack Breakdown" },
                  { id: "challenges", label: "Challenges & Future" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveModalTab(tab.id as any)}
                    style={{
                      padding: '8px 16px', borderRadius: '8px',
                      fontSize: '12px', fontFamily: 'var(--font-mono)', fontWeight: 500,
                      cursor: 'pointer', whiteSpace: 'nowrap',
                      border: activeModalTab === tab.id ? '1px solid var(--primary)' : '1px solid var(--border)',
                      background: activeModalTab === tab.id ? 'rgba(59, 130, 246, 0.15)' : 'var(--bg-subtle)',
                      color: activeModalTab === tab.id ? '#fff' : 'var(--text-muted)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Modal Body Content */}
              <div style={{ padding: '28px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* TAB 1: OVERVIEW & PROBLEM STATEMENT */}
                {activeModalTab === "overview" && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Sparkles size={16} style={{ color: 'var(--primary)' }} />
                        <span>Executive Summary</span>
                      </h4>
                      <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.7, fontFamily: 'var(--font-main)' }}>
                        {activeBlueprintProject.detailedBlueprint?.overview || activeBlueprintProject.description}
                      </p>
                    </div>

                    {activeBlueprintProject.detailedBlueprint?.problemStatement && (
                      <div style={{ padding: '20px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.06)', border: '1px solid rgba(239, 68, 68, 0.2)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#f87171', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <AlertTriangle size={15} />
                          <span>Problem Statement</span>
                        </h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '4px', listStyle: 'none' }}>
                          {activeBlueprintProject.detailedBlueprint.problemStatement.map((prob, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--text)' }}>
                              <span style={{ color: '#f87171', fontFamily: 'var(--font-mono)', marginTop: '2px' }}>•</span>
                              <span>{prob}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeBlueprintProject.detailedBlueprint?.proposedSolution && (
                      <div style={{ padding: '20px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.06)', border: '1px solid rgba(16, 185, 129, 0.2)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '13px', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Lightbulb size={15} />
                          <span>Proposed Solution</span>
                        </h4>
                        <p style={{ fontSize: '13.5px', color: 'var(--text)', lineHeight: 1.6 }}>
                          {activeBlueprintProject.detailedBlueprint.proposedSolution}
                        </p>
                        {activeBlueprintProject.detailedBlueprint.solutionExample && (
                          <div style={{ padding: '12px 16px', borderRadius: '8px', background: 'var(--bg)', border: '1px solid var(--border)', fontSize: '12.5px', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>
                            <strong>Workflow Example:</strong> {activeBlueprintProject.detailedBlueprint.solutionExample}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 2: SYSTEM ARCHITECTURE */}
                {activeModalTab === "architecture" && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Workflow size={16} style={{ color: 'var(--primary)' }} />
                        <span>System Architecture Diagram</span>
                      </h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-main)' }}>
                        Event-driven request flow from React interface down to vector databases and multi-agent orchestrator.
                      </p>
                    </div>

                    <div style={{
                      padding: '20px', borderRadius: '12px',
                      background: 'var(--bg)', border: '1px solid var(--border)',
                      fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--primary)',
                      overflowX: 'auto', lineHeight: 1.4
                    }}>
                      <pre>{activeBlueprintProject.detailedBlueprint?.architectureDiagram || "Architecture Schema Not Available"}</pre>
                    </div>

                    {activeBlueprintProject.detailedBlueprint?.keyFeaturesDetailed && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '12px' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Core System Features</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                          {activeBlueprintProject.detailedBlueprint.keyFeaturesDetailed.map((feat, i) => (
                            <div key={i} style={{ padding: '16px', borderRadius: '10px', background: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
                              <h5 style={{ fontSize: '13.5px', fontWeight: 700, color: 'var(--secondary)', fontFamily: 'var(--font-heading)', marginBottom: '4px' }}>{feat.title}</h5>
                              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{feat.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 3: AI MULTI-AGENTS */}
                {activeModalTab === "agents" && activeBlueprintProject.detailedBlueprint?.aiAgents && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Cpu size={16} style={{ color: 'var(--secondary)' }} />
                        <span>Specialized AI Agent Ecosystem</span>
                      </h4>
                      <p style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: 'var(--font-main)' }}>
                        Each agent executes specific tasks autonomously and coordinates through the central event bus.
                      </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px' }}>
                      {activeBlueprintProject.detailedBlueprint.aiAgents.map((agent, i) => (
                        <div key={i} style={{ padding: '20px', borderRadius: '12px', background: 'var(--bg-subtle)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
                            <h5 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--secondary)', fontFamily: 'var(--font-heading)', margin: 0 }}>{agent.name}</h5>
                            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--primary)', background: 'rgba(59,130,246,0.1)', padding: '2px 8px', borderRadius: '4px' }}>
                              Autonomous
                            </span>
                          </div>

                          <p style={{ fontSize: '13px', color: 'var(--text)', margin: 0 }}>
                            <strong>Purpose:</strong> {agent.purpose}
                          </p>

                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Capabilities:</span>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '6px' }}>
                              {agent.features.map((f, fIdx) => (
                                <div key={fIdx} style={{ fontSize: '12.5px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <span style={{ color: 'var(--accent)', fontWeight: 700 }}>✓</span>
                                  <span>{f}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {agent.input && (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '6px', fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                              <span style={{ background: 'var(--bg)', padding: '4px 8px', borderRadius: '4px', border: '1px solid var(--border)' }}>Input: {agent.input}</span>
                              <span style={{ background: 'var(--bg)', padding: '4px 8px', borderRadius: '4px', border: '1px solid var(--border)' }}>Output: {agent.output}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 4: TECH STACK BREAKDOWN */}
                {activeModalTab === "stack" && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Layers size={16} style={{ color: 'var(--accent)' }} />
                      <span>Categorized Technology Stack</span>
                    </h4>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                      {activeBlueprintProject.detailedBlueprint?.techStackCategorized ? (
                        activeBlueprintProject.detailedBlueprint.techStackCategorized.map((cat, i) => (
                          <div key={i} style={{ padding: '16px', borderRadius: '10px', background: 'var(--bg-subtle)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <h5 style={{ fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--accent)', textTransform: 'uppercase', margin: 0 }}>{cat.category}</h5>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                              {cat.items.map((item, itemIdx) => (
                                <span key={itemIdx} className="tech-badge">
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                          {activeBlueprintProject.techStack.map((t, i) => (
                            <span key={i} className="tech-badge">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* TAB 5: CHALLENGES & FUTURE */}
                {activeModalTab === "challenges" && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {activeBlueprintProject.detailedBlueprint?.challengesAndSolutions && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <Terminal size={16} style={{ color: '#ec4899' }} />
                          <span>Development Challenges &amp; Engineering Solutions</span>
                        </h4>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {activeBlueprintProject.detailedBlueprint.challengesAndSolutions.map((c, i) => (
                            <div key={i} style={{ padding: '16px', borderRadius: '10px', background: 'var(--bg-subtle)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                              <p style={{ fontSize: '13px', fontWeight: 700, color: '#ec4899', margin: 0 }}>Challenge {i + 1}: {c.challenge}</p>
                              <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}><strong>Solution:</strong> {c.solution}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeBlueprintProject.detailedBlueprint?.futureEnhancements && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-heading)' }}>Future Roadmap &amp; Enhancements</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '8px' }}>
                          {activeBlueprintProject.detailedBlueprint.futureEnhancements.map((f, i) => (
                            <div key={i} style={{ padding: '12px 14px', borderRadius: '8px', background: 'var(--bg-subtle)', border: '1px solid var(--border)', fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ color: 'var(--secondary)' }}>🚀</span>
                              <span>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

              </div>

              {/* Modal Footer */}
              <div style={{
                padding: '16px 24px',
                background: 'rgba(9, 13, 22, 0.8)',
                borderTop: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0
              }}>
                <a
                  href={activeBlueprintProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: '12px', padding: '10px 18px' }}
                >
                  <Github size={15} />
                  <span>View Repository on GitHub</span>
                </a>

                <button
                  onClick={() => setActiveBlueprintProject(null)}
                  className="btn btn-secondary"
                  style={{ fontSize: '12px', padding: '10px 18px' }}
                >
                  Close Case Study
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
