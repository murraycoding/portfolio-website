import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'v0gmp5jr',
  dataset: 'production',
  apiVersion: '2021-04-19',
  useCdn: false
})