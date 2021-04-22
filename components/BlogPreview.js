import BlogPreviewStyles from '../styles/BlogPreview.module.scss'
import SectionTitle from '../components/SectionTitle'

export default function BlogPreview({ title, date, content }) {

  const datePosted = new Date(date)

  return (
    <div className={BlogPreviewStyles.blogPreviewContainer}>
      <SectionTitle
        className={BlogPreviewStyles.blogTitle}
        name={title}
      />
      <span className={BlogPreviewStyles.blogDatePosted}>{datePosted.toLocaleDateString()}</span>
      <p className={BlogPreviewStyles.blogContent}>{content}</p>

    </div>
  )
}