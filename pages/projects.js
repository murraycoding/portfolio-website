import SectionTitle from '../components/SectionTitle'
import NewProjectCard from '../components/NewProjectCard'

export default function ProjectsPage() {
  return (
      <div className="cardHolder">
        <NewProjectCard 
        title="murray math tutoring"
        description="Murray Math Tutoring is a static website built with NextJS which features a unique mobile navigation menu."
        github="https://github.com/murraycoding/murray-math-tutoring"
        link="https://www.murraymathtutoring.com" />
        <NewProjectCard 
        title="portfolio website"
        description="This is a test of the new project card This is a test of the new project card This is a test of the new project card This is a test of the new project card This is a test of the new project card"
        github="https://github.com/murraycoding/portfolio-website"
        link="/" />
        <NewProjectCard 
        title="murray math tutoring"
        description="This is a test of the new project card"
        github="https://github.com/murraycoding/murray-math-tutoring"
        link="https://www.murraymathtutoring.com" />
        <NewProjectCard 
        title="murray math tutoring"
        description="This is a test of the new project card"
        github="https://github.com/murraycoding/murray-math-tutoring"
        link="https://www.murraymathtutoring.com" />
      </div>
  )
}