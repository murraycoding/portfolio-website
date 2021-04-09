import HeaderStyles from '../styles/Header.module.scss';
import NavLink from './NavLink'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <ul className={HeaderStyles.navlinks}>
          <NavLink name="about"/>
          <NavLink name="projects" />
          <NavLink name="services" />
          <NavLink name="resume" />
          <NavLink name="blog" />
        </ul>
      </nav>
      <div className={HeaderStyles.logoDivHolder}>
        <div className={`${HeaderStyles.first} text-xlarge`}>Brian</div>
        <Link href="/">
        <div className={HeaderStyles.logodiv}>
          <img src="/personal-logo.svg" />
        </div>
        </Link>
        <div className={`${HeaderStyles.last} text-xlarge`}>Murray</div>
      </div>
      <div className={HeaderStyles.externalLinks}>
        <div className={HeaderStyles.socialLinks}>
          <a href="https://github.com/murraycoding" target="_blank">
            <div className={HeaderStyles.temp}>
              <img src="/github.svg" />
            </div>
          </a>
          <a href="https://twitter.com/BrianMDeveloper" target="_blank" className="externalLink">
            <div className={HeaderStyles.temp}>
              <img src="/twitter2.svg" />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/brian-murray-3622b0188/" target="_blank" className="externalLink">
            <div className={HeaderStyles.temp}>
              <img src="/linkedin.svg" />
            </div>
          </a>
        </div>
        <button className={HeaderStyles.navbutton}><Link href="/contact">Contact Me</Link></button>
      </div>
    </header>
  )
}