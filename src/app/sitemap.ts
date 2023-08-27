import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://buscaisb.com.br',
      lastModified: new Date(),
    },
    {
      url: 'https://www.buscaisbn.com.br',
      lastModified: new Date(),
    },
  ]
}