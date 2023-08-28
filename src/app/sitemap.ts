import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.buscaisbn.com.br',
      lastModified: new Date(),
    },
  ]
}