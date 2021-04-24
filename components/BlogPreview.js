import BlogPreviewStyles from '../styles/BlogPreview.module.scss'
import SectionTitle from '../components/SectionTitle'
import Link from 'next/link'

export default function BlogPreview({ title, date, content, slug }) {

  const datePosted = new Date(date)

  return (
    <div className={BlogPreviewStyles.blogPreviewContainer}>
      <SectionTitle
        className={BlogPreviewStyles.blogTitle}
        name={title}
      />
      <button className={BlogPreviewStyles.blogLink}><Link href={`/blog/${slug}`}>View Post</Link></button>
      <span className={BlogPreviewStyles.blogDatePosted}>{datePosted.toLocaleDateString()}</span>
      <p className={BlogPreviewStyles.blogContent}>{content}</p>
    </div>
  )
}