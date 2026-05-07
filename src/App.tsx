// src/App.tsx
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
  return (
    <div style={{ background: '#0D0D14', color: '#F0EEE8', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Nav */}
      <nav style={{ borderBottom: '1px solid #1E1E2E', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#7B5EA7', fontWeight: 700, letterSpacing: '0.2em', fontSize: '1.1rem' }}>SIGIL</span>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a href="#how" style={{ color: '#8A8898', textDecoration: 'none', fontSize: '0.875rem' }}>How it works</a>
          <a href="#install" style={{ color: '#8A8898', textDecoration: 'none', fontSize: '0.875rem' }}>Install</a>
          <a href="https://github.com/TON_USERNAME/sigil" target="_blank" style={{ background: '#7B5EA7', color: 'white', padding: '0.4rem 1rem', borderRadius: '6px', textDecoration: 'none', fontSize: '0.875rem' }}>GitHub →</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '6rem 2rem 4rem', textAlign: 'center' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#7B5EA7', fontSize: '0.75rem', letterSpacing: '0.3em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>Open Standard · MIT License · Self-hosted</div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}>
          Signed Identity<br />for AI Agents
        </h1>
        <p style={{ color: '#8A8898', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: '560px', margin: '0 auto 2.5rem' }}>
          When an AI agent acts on your behalf, SIGIL answers:<br />
          <em style={{ color: '#F0EEE8' }}>who authorized this, and can you verify it cryptographically?</em>
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#install" style={{ background: '#7B5EA7', color: 'white', padding: '0.75rem 1.75rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 500 }}>Get Started</a>
          <a href="https://github.com/TON_USERNAME/sigil" target="_blank" style={{ border: '1px solid #1E1E2E', color: '#F0EEE8', padding: '0.75rem 1.75rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 500 }}>View on GitHub</a>
        </div>
      </section>

      {/* How it works */}
      <section id="how" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
        <h2 style={{ textAlign: 'center', fontWeight: 600, marginBottom: '3rem', color: '#8A8898', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.875rem' }}>How it works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {[
            { n: '01', title: 'Register', desc: 'Create an agent with a unique DID (W3C did:key). Ed25519 keypair generated locally.' },
            { n: '02', title: 'Delegate', desc: 'Issue a signed Verifiable Credential with explicit scope and expiry. No trust required.' },
            { n: '03', title: 'Verify', desc: 'Any party can verify the credential cryptographically — no central authority needed.' },
          ].map(s => (
            <div key={s.n} style={{ background: '#13131E', border: '1px solid #1E1E2E', borderRadius: '12px', padding: '1.5rem' }}>
              <div style={{ fontFamily: 'JetBrains Mono, monospace', color: '#7B5EA7', fontSize: '0.75rem', marginBottom: '0.75rem' }}>{s.n}</div>
              <h3 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>{s.title}</h3>
              <p style={{ color: '#8A8898', fontSize: '0.875rem', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '2rem 2rem 4rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '0.875rem', color: '#8A8898', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem' }}>10 lines of code</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            { lang: 'Python', code: PY_SNIPPET },
            { lang: 'TypeScript', code: TS_SNIPPET },
          ].map(({ lang, code }) => (
            <div key={lang} style={{ background: '#06060A', border: '1px solid #1E1E2E', borderRadius: '8px', overflow: 'hidden' }}>
              <div style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #1E1E2E', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.75rem', color: '#4A4A5E' }}>{lang}</span>
              </div>
              <pre style={{ padding: '1rem', margin: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', lineHeight: 1.6, color: '#8A8898', overflowX: 'auto' }}>{code}</pre>
            </div>
          ))}
        </div>
      </section>

      {/* Install */}
      <section id="install" style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem 2rem 4rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '0.875rem', color: '#8A8898', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem' }}>Self-host in 60 seconds</h2>
        <div style={{ background: '#06060A', border: '1px solid #1E1E2E', borderRadius: '8px', padding: '1.5rem' }}>
          <pre style={{ margin: 0, fontFamily: 'JetBrains Mono, monospace', fontSize: '0.8rem', color: '#8A8898', lineHeight: 1.8 }}>
{`git clone https://github.com/sha-riyat/sigil
cd sigil
cp .env.example .env
docker compose up`}
          </pre>
        </div>
        <p style={{ textAlign: 'center', color: '#4A4A5E', fontSize: '0.8rem', marginTop: '1rem' }}>
          No AWS. No Stripe. No account. Your data stays on your infrastructure.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #1E1E2E', padding: '2rem', textAlign: 'center', color: '#4A4A5E', fontSize: '0.8rem' }}>
        <span style={{ fontFamily: 'JetBrains Mono, monospace', color: '#7B5EA7' }}>SIGIL</span>
        {' · '}MIT License{' · '}
        <a href="https://github.com/TON_USERNAME/sigil" style={{ color: '#8A8898' }}>GitHub</a>
        {' · '}W3C DID + Verifiable Credentials
      </footer>
    </div>
  )
}