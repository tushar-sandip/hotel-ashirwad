export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'https://hotelashirwadlodging.com/sitemap.xml',
  }
}


