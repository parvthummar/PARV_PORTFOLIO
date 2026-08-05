import { personal } from '../../data/personal'

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1 className="hero-heading">
          Backend & AI Engineer building{' '}
          <span className="highlight">agentic systems</span>
        </h1>

        <p className="hero-description">
          Python, FastAPI, and LangGraph. From hybrid retrieval pipelines and crash-safe
          job queues to network-isolated agent sandboxes — systems measured with real
          evaluation harnesses, not vibes. Codeforces Specialist with 800+ problems solved.
        </p>

        <div className="hero-info-cards">
          <div className="hero-info-card">
            <div className="info-label">Focus</div>
            <div className="info-value">Backend / AI Systems</div>
          </div>
          <div className="hero-info-card">
            <div className="info-label">Location</div>
            <div className="info-value">{personal.location}</div>
          </div>
          <div className="hero-info-card">
            <div className="info-label">Graduating</div>
            <div className="info-value">{personal.gradYear}</div>
          </div>
        </div>

        <div className="hero-actions">
          <a href={`mailto:${personal.email}`} className="btn btn-yellow">
            ✉ Hire Me
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-default">
            📄 View GitHub
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image">
          <img src={personal.avatar} alt={personal.name} />
        </div>
      </div>
    </div>
  )
}
