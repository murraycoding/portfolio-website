import client from '../../client'
import BlockContent from '@sanity/block-content-to-react'
import SectionTitle from '../../components/SectionTitle'

export default function Post({ ...info }) {

  const datePosted = new Date(info._createdAt);

  return (
    <> 
      <div className="blogTitle">
        <SectionTitle name={info.title}/>
        <span className="small">{datePosted.toLocaleDateString()}</span>
      </div>
      <BlockContent
        className="blogParagraph"
        blocks={info.body}
      />
    </>
  )
}

Post.getInitialProps = async function(context) {
  // this is just defined here so there are no errors in case of the data not loading.
  const { slug = ""} = context.query
  // the dollar sign slug is referring to the parameter at the end of the fetch statement
  const info = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`,{slug})

  //returns the information to the component.
  return info
}