import client from '../../client'
import BlockContent from '@sanity/block-content-to-react'

export default function Post({ ...info }) {

  console.log(info.body[0].children[0].text)

  return (
    <>
      <p>{info.body[0].children[0].text}</p>
    </>
  )
}

Post.getInitialProps = async function(context) {
  console.log("calling")
  const { body = ""} = context.query
  const info = await client.fetch(`*[_type == "post"][0]`,{ body })

  // // It's important to default the slug so that it doesn't return "undefined"
  // const { body = "" } = context.query
  // const { slug = "" } = context.query
  // return await client.fetch(`
  //   *[_type == "post" && slug.current == $slug][0]
  // `, { slug, body })

  console.log(info)

  return info
}