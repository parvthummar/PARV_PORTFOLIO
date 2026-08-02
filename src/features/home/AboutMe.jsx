import { useState } from 'react'
import SectionWrapper from '../../components/ui/SectionWrapper'
import HeroSection from './HeroSection'
import { aboutText, whatIDo, projects, skills, experience, personal } from '../../data/personal'
import { skillColors, skillSections } from '../../data/skillColors'

const timelineColors = ['#facc15', '#f97316', '#22c55e', '#3b82f6']

export default function AboutMe() {
  const [openProject, setOpenProject] = useState(0)
  const [openExp, setOpenExp] = useState(0)

  return (
    <>
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>

      <SectionWrapper>
        <div className="about-split">
          <div className="about-story">
            <h3>My Story</h3>
            {aboutText.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="about-whatido">
            <h3>What I Do</h3>
            {whatIDo.map((item, i) => (
              <div className="whatido-item" key={i}>
                <div className={`whatido-icon ${item.color}`}>
                  {item.icon}
                </div>
                <div className="whatido-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Experience">
        <div className="timeline">
          <div className="timeline-line" />
          {experience.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker">
                <div className="timeline-number"
                  style={{ background: timelineColors[i % timelineColors.length] }}>
                  {i + 1}
                </div>
                <div className="timeline-arrow" />
              </div>
              <div className={`timeline-card${openExp === i ? ' open' : ''}`}>
                <div className="timeline-card-header"
                  onClick={() => setOpenExp(openExp === i ? -1 : i)}>
                  <div>
                    <h3 className="timeline-role">
                      {exp.role}{exp.company ? ` · ${exp.company}` : ''}
                    </h3>
                    <div className="timeline-meta">
                      <span className="timeline-type">{exp.type}</span>
                      <span className="timeline-period">{exp.period}</span>
                    </div>
                  </div>
                  <span className="timeline-toggle">{openExp === i ? '−' : '+'}</span>
                </div>
                {openExp === i && (
                  <div className="timeline-card-body">
                    <ul>
                      {exp.content.map((item, j) => <li key={j}>{item}</li>)}
                    </ul>
                    <div className="project-card-tags">
                      {exp.technologies.map((t, j) => (
                        <span key={j} className="tag-brutal">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper title="Projects">
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className={`project-card-brutal${openProject === i ? ' open' : ''}`}>
              <div
                className="project-card-header"
                onClick={() => setOpenProject(openProject === i ? -1 : i)}
              >
                <div className="project-card-left">
                  <div className="project-card-icon">📁</div>
                  <div>
                    <h3 className="project-card-name">{p.name}</h3>
                    <span className="project-card-year">{p.year}</span>
                  </div>
                </div>
                <div className="project-card-actions">
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer"
                      className="project-card-link" onClick={(e) => e.stopPropagation()}>
                      GitHub ↗
                    </a>
                  )}
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer"
                      className="project-card-link" onClick={(e) => e.stopPropagation()}>
                      Demo ↗
                    </a>
                  )}
                  <span className="project-card-toggle">
                    {openProject === i ? '−' : '+'}
                  </span>
                </div>
              </div>
              {openProject === i && (
                <div className="project-card-body">
                  <p>{p.description}</p>
                  {p.highlights && (
                    <ul>
                      {p.highlights.map((h, j) => <li key={j}>{h}</li>)}
                    </ul>
                  )}
                  <div className="project-card-tags">
                    {p.technologies.map((t, j) => (
                      <span key={j} className="tag-brutal">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
          <a href={`mailto:${personal.email}`} className="btn btn-yellow">
            ✉ Hire Me
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="btn btn-default">
            📄 View All Repos
          </a>
        </div>
      </SectionWrapper>

      <SectionWrapper title="Skills">
        {skillSections.map((section) => (
          <div key={section.key} style={{ marginBottom: 20 }}>
            <h4 style={{ marginBottom: 10 }}>{section.title}</h4>
            <div className="skills-grid">
              {skills[section.key].map((skill) => (
                <div key={skill} className="skill-card">
                  <div className="skill-card-bar"
                    style={{ background: skillColors[skill] || '#888' }} />
                  <span className="skill-card-label">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </SectionWrapper>

    </>
  )
}
