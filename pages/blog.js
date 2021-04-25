import BlogPreview from '../components/BlogPreview'
import client from '../client'
import BlockContent, { propTypes } from '@sanity/block-content-to-react'

export default function BlogPage({ ...info }) {

  // creates an array of posts to turn into components
  const infoArray = Object.values(info)

  // uses the map function to turn each piece of information to a component.
  const blogPreviews = infoArray.map(
    (post) => {
      return <BlogPreview
        title = {post.title}
        date = {post._createdAt}
        content = {post.body[0].children[0].text}
        slug = {post.slug.current}
      />
    }
  )

  return (
    <>
    {blogPreviews}
    </>
  )
}

BlogPage.getInitialProps = async function(context) {
  //returns a list of all of the posts
  const info = await client.fetch(`*[_type == "post"] | order(_createdAt desc)`)

  //returns the information to the component.
  return info
}