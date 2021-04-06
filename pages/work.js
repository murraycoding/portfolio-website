import SectionTitle from '../components/SectionTitle'
import ProjectCard from '../components/ProjectCard'

export default function WorkPage() {
  return (
    <>
      <SectionTitle name="projects" />
      <div className="cardHolder">
        <ProjectCard 
          title="Murray Math Tutoring"
          description="A static site with a unique mobile navigation menu built with NextJS."
          github="https://github.com/murraycoding/murray-math-tutoring"
          link="http://www.murraymathtutoring.com"
          />
        <ProjectCard 
          title="Murray Math Tutoring"
          description="A static site with a unique mobile navigation menu built with NextJS."
          github="https://github.com/murraycoding/murray-math-tutoring"
          link="http://www.murraymathtutoring.com"
          />
          <ProjectCard 
          title="Murray Math Tutoring"
          description="A static site with a unique mobile navigation menu built with NextJS."
          github="https://github.com/murraycoding/murray-math-tutoring"
          link="http://www.murraymathtutoring.com"
          />
      </div>
      <SectionTitle name="work experience" />
      <div className="cardHolder">
        <ProjectCard 
            title="Murray Math Tutoring"
            description="A static site with a unique mobile navigation menu built with NextJS."
            github="https://github.com/murraycoding/murray-math-tutoring"
            link="http://www.murraymathtutoring.com"
            inset={true}
            />
          <ProjectCard 
            title="Murray Math Tutoring"
            description="A static site with a unique mobile navigation menu built with NextJS."
            github="https://github.com/murraycoding/murray-math-tutoring"
            link="http://www.murraymathtutoring.com"
            inset={true}
            />
            <ProjectCard 
            title="Murray Math Tutoring"
            description="A static site with a unique mobile navigation menu built with NextJS."
            github="https://github.com/murraycoding/murray-math-tutoring"
            link="http://www.murraymathtutoring.com"
            inset={true}
            />
      </div>
    </>
  )
}