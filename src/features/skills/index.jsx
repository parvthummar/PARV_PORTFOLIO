import SectionWrapper from '../../components/ui/SectionWrapper'
import { skills } from '../../data/personal'
import { skillColors, skillSections } from '../../data/skillColors'

export default function SkillsPage() {
  return (
    <>
      {skillSections.map((section) => (
        <SectionWrapper key={section.key} title={`${section.icon} ${section.title}`}>
          <div className="skills-grid">
            {skills[section.key].map((skill) => (
              <div key={skill} className="skill-card">
                <div
                  className="skill-card-bar"
                  style={{ background: skillColors[skill] || '#888' }}
                />
                <span className="skill-card-label">{skill}</span>
              </div>
            ))}
          </div>
        </SectionWrapper>
      ))}
    </>
  )
}
