// src/App.tsx
import { useState } from 'react'
import { GithubLogo } from '@phosphor-icons/react'
import './App.css'
import './index.css'

const PY_SNIPPET = `from sigil_sdk import SigilClient

client = SigilClient(base_url="http://localhost:8000")

agent = client.agents.create(owner_id="my-app")
# → did:key:z6Mk...

delegation = client.delegations.issue(
    agent_id=agent.id,
    subject_did="did:key:z6MkAI...",
    scope=["read:calendar", "send:email"],
    expires_in=3600,
)

result = client.verify(delegation.credential)
# → { valid: True }`

const TS_SNIPPET = `import { SigilClient } from '@sigil/sdk'

const sigil = new SigilClient({ baseUrl: 'http://localhost:8000' })

const agent = await sigil.agents.create({ ownerId: 'my-app' })
// → did:key:z6Mk...

const delegation = await sigil.delegations.issue({
  agentId: agent.id,
  subjectDid: 'did:key:z6MkAI...',
  scope: ['read:calendar', 'send:email'],
  expiresIn: 3600,
})

const result = await sigil.verify(delegation.credential)
// → { valid: true }`

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="app">
      {/* Nav */}
      <nav className="nav">
        <span className="logo">SIGIL</span>
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#how" className="nav-link" onClick={() => setIsMenuOpen(false)}>How it works</a>
          <a href="#install" className="nav-link" onClick={() => setIsMenuOpen(false)}>Install</a>
          <a href="https://github.com/sha-riyat/sigil" target="_blank" className="nav-link github" onClick={() => setIsMenuOpen(false)}>
            <GithubLogo size={16} />
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-badge">Open Standard · MIT License · Self-hosted</div>
        <h1 className="hero-title">
          Signed Identity<br />for AI Agents
        </h1>
        <p className="hero-desc">
          When an AI agent acts on your behalf, SIGIL answers:<br />
          <em>who authorized this, and can you verify it cryptographically?</em>
        </p>
        <div className="hero-buttons">
          <a href="#install" className="btn primary">Get Started</a>
          <a href="https://github.com/sha-riyat/sigil" target="_blank" className="btn secondary">View on GitHub</a>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="how-section">
        <h2 className="section-title">How it works</h2>
        <div className="how-grid">
          {[
            { n: '01', title: 'Register', desc: 'Create an agent with a unique DID (W3C did:key). Ed25519 keypair generated locally.' },
            { n: '02', title: 'Delegate', desc: 'Issue a signed Verifiable Credential with explicit scope and expiry. No trust required.' },
            { n: '03', title: 'Verify', desc: 'Any party can verify the credential cryptographically — no central authority needed.' },
          ].map(s => (
            <div key={s.n} className="how-card">
              <div className="how-number">{s.n}</div>
              <h3 className="how-title">{s.title}</h3>
              <p className="how-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code */}
      <section className="code-section">
        <h2 className="section-title">10 lines of code</h2>
        <div className="code-grid">
          {[
            { lang: 'Python', code: PY_SNIPPET },
            { lang: 'TypeScript', code: TS_SNIPPET },
          ].map(({ lang, code }) => (
            <div key={lang} className="code-card">
              <div className="code-header">
                <span className="code-lang">{lang}</span>
              </div>
              <pre className="code-pre">{code}</pre>
            </div>
          ))}
        </div>
      </section>

      {/* Install */}
      <section id="install" className="install-section">
        <h2 className="section-title">Self-host in 60 seconds</h2>
        <div className="install-card">
          <pre className="install-pre">
{`git clone https://github.com/sha-riyat/sigil
cd sigil
cp .env.example .env
docker compose up`}
          </pre>
        </div>
        <p className="install-note">
          No AWS. No Stripe. No account. Your data stays on your infrastructure.
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span className="footer-logo">SIGIL</span>
        {' · '}MIT License{' · '}
        <a href="https://github.com/sha-riyat/sigil" className="footer-link">GitHub</a>
        {' · '}W3C DID + Verifiable Credentials
      </footer>
    </div>
  )
}