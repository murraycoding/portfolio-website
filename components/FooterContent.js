import FooterContentStyles from '../styles/FooterContent.module.scss'

export default function FooterContent({ title, children }) {
  return (
    <div className={FooterContentStyles.footerContent}>
      <h3><span className={FooterContentStyles.footerContentTitle}>{title}</span></h3>
      {children}
    </div>
  )
}