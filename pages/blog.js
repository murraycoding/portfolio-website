import BlogPreview from '../components/BlogPreview'

export default function BlogPage() {
  return (
    <>
    <p>This is the blog page.</p>
    <BlogPreview
      title="Brian"
      date="cheese"
      content="This is the best content in the whole wide world."
    />
    </>
  )
}