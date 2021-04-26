import FooterStyles from '../styles/Footer.module.scss'
import FooterContent from './FooterContent'

export default function Footer(){
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
          This is the content.
        </FooterContent>
        <FooterContent title="My Latest Project">
          This is the content.
        </FooterContent>
      </div>
    </footer>
  )
}