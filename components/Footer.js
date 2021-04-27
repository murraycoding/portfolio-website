// import FooterStyles from '../styles/Footer.module.scss'
import FooterContent from './FooterContent'
import client from '../client'

export default function Footer({...info}){

  console.log("This is the info")
  console.log(info)

  return (
    <footer>
      <div className="cardHolder">
        <FooterContent title="Get In Touch">
          Email: murraycoding@gmail.com Twitter: @murraycoding
        </FooterContent>
        <FooterContent title="Work with Me">
          My freelance experience is tailored to help small businesses better their website to attract more customers.
        </FooterContent>
        <FooterContent title="Twitter">
          I use twitter to share my experience, make connections with other developers and learn from others about the latest tech.
        </FooterContent>
        <FooterContent title="My Latest Project">
          This is the content.
        </FooterContent>
      </div>
    </footer>
  )
}

// fetch project information
Footer.getInitialProps = async function(context) {
  //returns a list of all of the posts
  const projects = await client.fetch(`*[_type == "project"]`)
  //returns the information to the component.
  return projects
}
