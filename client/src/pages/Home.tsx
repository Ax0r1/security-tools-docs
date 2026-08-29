/* Design direction: Open Defense Atlas — editorial brutalism, warm paper, deep navy ink, burnt signal orange, asymmetric technical layout. */
import { ArrowUpRight, Check, Copy, Github, Menu, Shield, Terminal, X } from "lucide-react";
import { useState } from "react";

const tools = [
  {
    number: "01",
    name: "SentinelMesh",
    eyebrow: "DEFENSIVE GATEWAY",
    description: "Connect security agents to your own provider API, normalize findings, and keep risk scoring explainable.",
    tags: ["REST", "AGENTS", "MIT"],
    repo: "https://github.com/Ax0r1/sentinelmesh",
    accent: "orange",
  },
  {
    number: "02",
    name: "Security Report Copilot",
    eyebrow: "REPORTS + TRIAGE",
    description: "Turn structured findings into concise security reports with bring-your-own models and deterministic fallback.",
    tags: ["LLM", "BYO API", "DOCKER"],
    repo: "https://github.com/Ax0r1/ai-security-report-copilot",
    accent: "sage",
  },
  {
    number: "03",
    name: "Log Anomaly Detector",
    eyebrow: "SIGNAL DETECTION",
    description: "Score suspicious log patterns locally, then add an LLM explanation only when your team chooses to.",
    tags: ["LOGS", "LOCAL-FIRST", "PYTHON"],
    repo: "https://github.com/Ax0r1/llm-log-anomaly-detector",
    accent: "ink",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const command = "git clone https://github.com/Ax0r1/llm-log-anomaly-detector.git";

  const copyCommand = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Open Defensive Security Tools home">
          <img src="/manus-storage/open-defense-mark_444a5871.png" alt="" className="brand-mark" />
          <span>open defense<br /><b>tools</b></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          <a href="#tools" onClick={() => setMenuOpen(false)}>Tools <span>03</span></a>
          <a href="#workflow" onClick={() => setMenuOpen(false)}>Workflow</a>
          <a href="#docs" onClick={() => setMenuOpen(false)}>Docs</a>
          <a href="https://github.com/Ax0r1" target="_blank" rel="noreferrer" className="nav-github"><Github size={15} /> GitHub</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker"><span className="status-dot" /> OPEN-SOURCE / DEFENSIVE / LOCAL-FIRST</p>
          <h1>Read the<br /><em>signal.</em><br />Keep the evidence.</h1>
          <p className="hero-lede">A small atlas of practical security tools for teams who want useful automation without giving up control of their data, models, or workflow.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#tools">Explore the tools <ArrowUpRight size={17} /></a>
            <a className="text-link" href="https://github.com/Ax0r1" target="_blank" rel="noreferrer">View on GitHub <span>↗</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Abstract network illustration">
          <img src="/manus-storage/open-defense-atlas-hero_73c41d3a.png" alt="Abstract illustration of connected defensive security signals" />
          <div className="art-caption"><span>FIG. 001</span><span>DEFENSIVE SIGNAL MAP</span></div>
        </div>
        <div className="hero-index">A / 2026<br /><span>FIELD GUIDE</span></div>
      </section>

      <section className="manifesto">
        <div className="section-marker">/ 00 — WHY THIS EXISTS</div>
        <div className="manifesto-copy"><p>Security tooling should make evidence <strong>clearer</strong>, not make ownership <strong>murkier.</strong></p><span className="manifesto-rule" /></div>
        <div className="manifesto-note">Built for researchers, defenders, and engineering teams who prefer transparent primitives over black-box promises.</div>
      </section>

      <section className="tools-section" id="tools">
        <div className="section-heading"><div><p className="section-marker">/ 01 — THE COLLECTION</p><h2>Three tools.<br /><span>One defensive loop.</span></h2></div><p className="section-intro">Collect signals. Explain what matters. Keep the next action close to the evidence.</p></div>
        <div className="tool-list">
          {tools.map((tool) => (
            <article className={`tool-card accent-${tool.accent}`} key={tool.number}>
              <div className="tool-number">{tool.number}</div>
              <div className="tool-main"><p className="tool-eyebrow">{tool.eyebrow}</p><h3>{tool.name}</h3><p className="tool-description">{tool.description}</p><div className="tag-row">{tool.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
              <a className="tool-arrow" href={tool.repo} target="_blank" rel="noreferrer" aria-label={`Open ${tool.name} repository`}><ArrowUpRight size={24} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow-section" id="workflow">
        <div className="workflow-heading"><p className="section-marker">/ 02 — THE LOOP</p><h2>From raw signal<br />to <em>useful context.</em></h2></div>
        <div className="workflow-rail">
          {["COLLECT", "NORMALIZE", "TRIAGE", "EXPLAIN"].map((step, index) => <div className="workflow-step" key={step}><span>0{index + 1}</span><div className="step-line" /><strong>{step}</strong><small>{["Agents & logs", "One clear schema", "Priority, not noise", "Evidence-aware output"][index]}</small></div>)}
        </div>
        <div className="workflow-foot"><Shield size={17} /><span>Local-first by default. Your provider, your credentials, your call.</span></div>
      </section>

      <section className="docs-section" id="docs">
        <div className="docs-copy"><p className="section-marker">/ 03 — START HERE</p><h2>Bring your<br /><em>own model.</em></h2><p>Every repository ships with a deterministic path first. Add your own OpenAI-compatible endpoint when an explanation layer earns its place in the workflow.</p><a className="button button-dark" href="https://github.com/Ax0r1/llm-log-anomaly-detector#readme" target="_blank" rel="noreferrer">Read the docs <ArrowUpRight size={17} /></a></div>
        <div className="terminal-card"><div className="terminal-top"><span><i /> <i /> <i /></span><small>QUICK START / LOCAL</small></div><div className="terminal-body"><p><span className="prompt">$</span> {command}</p><p><span className="prompt">$</span> cd llm-log-anomaly-detector</p><p><span className="prompt">$</span> python -m venv .venv</p><p className="comment"># no API key required for baseline detection</p><button className="copy-button" onClick={copyCommand}>{copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy clone command</>}</button></div></div>
      </section>

      <footer className="footer"><div className="footer-brand"><img src="/manus-storage/open-defense-mark_444a5871.png" alt="" /><span>open defense tools</span></div><p>Open primitives for a clearer security practice.</p><div className="footer-links"><a href="https://github.com/Ax0r1/sentinelmesh" target="_blank" rel="noreferrer">SentinelMesh</a><a href="https://github.com/Ax0r1/ai-security-report-copilot" target="_blank" rel="noreferrer">Report Copilot</a><a href="https://github.com/Ax0r1/llm-log-anomaly-detector" target="_blank" rel="noreferrer">Anomaly Detector</a></div><small>© 2026 / OPEN SOURCE / MIT</small></footer>
    </main>
  );
}
