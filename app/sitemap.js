export default async function sitemap() {
  const base = 'https://hotelashirwadlodging.com';
  const now = new Date().toISOString();
  const routes = [
    '',
    '/about-us',
    '/amenities',
    '/blog',
    '/booking',
    '/contact',
    '/events',
    '/faq',
    '/food',
    '/gallery',
    '/packages',
    '/room',
    '/room-details-delux',
    '/room-details-luxury',
    '/room-details-single',
    '/room-details-VIP',
    '/services1',
    '/services2',
    '/team',
    '/testimonials',
  ];
  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : 0.7,
  }));
}


