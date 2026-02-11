import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '2xisxa06', // Your exact Project ID
  dataset: 'production', // The default dataset name
  useCdn: true, // true = fast (cached), false = fresh (slower)
  apiVersion: '2024-02-10', // Today's date to use the latest API
})

// This helper function lets us easily get image URLs from Sanity
const builder = imageUrlBuilder(client)
export function urlFor(source) {
  return builder.image(source)
}