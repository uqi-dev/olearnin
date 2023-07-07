import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://olearnin.com',
      lastModified: new Date(),
    },
  ]
}