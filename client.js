import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'v0gmp5jr',
  dataset: 'production',
  useCdn: false
})