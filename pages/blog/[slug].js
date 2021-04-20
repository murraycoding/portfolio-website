import client from '../../client'
import BlockContent from '@sanity/block-content-to-react'

const Post = (props) => {
  
  return (
    <article>
      <h1>{props.slug.current}</h1>
      <BlockContent
        blocks={body}
        projectId={client.config().projectId}
        dataset={client.config().dataset}
      />
    </article>
  )
}

Post.getInitialProps = async function(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { body = "" } = context.query
  const { slug = "" } = context.query
  return await client.fetch(`
    *[_type == "post" && slug.current == $slug][0]{slug, title, body}
  `, { slug, body })
}

export default Post