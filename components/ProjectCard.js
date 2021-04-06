import ProjectCardStyles from '../styles/ProjectCard.module.scss'

export default function ProjectCard({ title, description, github, link, inset}) {
  return (
    <div className={inset ? ProjectCardStyles.projectCardInset : ProjectCardStyles.projectCard}>
      <div className={`${ProjectCardStyles.innerBox} ${inset ? ProjectCardStyles.innerBoxInset : ''}`}>
        <h3 className={ProjectCardStyles.projectTitle}>{title}</h3>
        <div className={ProjectCardStyles.projectLinks}>
          <button><a href={github} target="_blank">Github</a></button>
          <button><a href={link} target="_blank">Link</a></button>
        </div>
        <div className={ProjectCardStyles.projectCardBottom}>
          <div className={ProjectCardStyles.projectTech}>
            <p>{description}</p>
          </div>
          <div className={ProjectCardStyles.projectLogo}>
            <div />
          </div>
        </div>
      </div>
    </div>
  )
}