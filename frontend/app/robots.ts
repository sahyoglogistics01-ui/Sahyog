import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard/', '/profile/'], // Hide private routes from Google
    },
    sitemap: 'https://sahyog.vercel.app/sitemap.xml', // Update with your actual URL
  };
}