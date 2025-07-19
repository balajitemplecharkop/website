const fs = require('fs');
const routes = [
  '/',
  '/annadanam',
  '/seva',
  '/seva/:id',
  '/development',
  '/guruji',
  '/gallery',
  '/mantra',
  '/calendar',
  '/join-us',
  '/terms',
  '/privacy',
  '/refund',
];
const baseUrl = 'https://balajimandircharkop.com';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>\n    <loc>${baseUrl}${route.replace(':id','')}</loc>\n  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync('./client/sitemap.xml', sitemap);
console.log('sitemap.xml generated!'); 