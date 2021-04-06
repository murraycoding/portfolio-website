import SectionTitleStyles from '../styles/SectionTitle.module.scss'

export default function SectionTitle({ name }) {
  return (
    <div className={SectionTitleStyles.sectionTitleClass}>
      <h2>{name}</h2>
      <div/>
    </div>
  )
}
