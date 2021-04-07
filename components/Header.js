import HeaderStyles from '../styles/Header.module.scss';
import NavLink from './NavLink'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav>
        <ul className={HeaderStyles.navlinks}>
          <NavLink name="about"/>
          <NavLink name="work" />
          <NavLink name="services" />
          <NavLink name="skills" />
          <NavLink name="blog" />
        </ul>
      </nav>
      <div className={HeaderStyles.logoDivHolder}>
        <div className={`${HeaderStyles.first} text-xlarge`}>Brian</div>
        <div className={HeaderStyles.logodiv}>
          <img src="/personal-logo.svg" />
        </div>
        <div className={`${HeaderStyles.last} text-xlarge`}>Murray</div>
      </div>
      <div className={HeaderStyles.externalLinks}>
        <div className={HeaderStyles.socialLinks}>
          <div className={HeaderStyles.temp} />
          <div className={HeaderStyles.temp} />
          <div className={HeaderStyles.temp} />
        </div>
        <button className={HeaderStyles.navbutton}><Link href="/contact">Contact Me</Link></button>
      </div>
    </header>
  )
}