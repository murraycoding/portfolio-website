import { useRouter } from 'next/router'
import Link from 'next/link'
import NavLinkStyles from '../styles/NavLink.module.scss'

export default function NavLink({ name }) {
  // router object
  const router = useRouter()
  let currentPage = false

  console.log("This is a test")
  console.log(router.pathname)

  // checks to see if the current page matches with the link
  if (router.pathname == `/${name}`) {
    console.log("The page name matches")
    currentPage = true
  }

  return (
    <li className={`${NavLinkStyles.specialLi} ${currentPage ?  NavLinkStyles.currentPage : ""}`}><Link href={`/${name}`}>{name}</Link></li>
  )
}