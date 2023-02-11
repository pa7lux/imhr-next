import { GetServerSideProps } from 'next';
import * as fs from 'fs';
import React from 'react';

const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = 'https://imhr.top';
  const locales = ['ru', 'en', 'uk'];

  const staticPaths = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return ![
        'api',
        '_app.tsx',
        '_document.tsx',
        '404.tsx',
        'sitemap.xml.tsx',
        'index.tsx',
        'posts',
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      let trimmedPath = staticPagePath.replace('.tsx', '');
      return [
        `${BASE_URL}/${trimmedPath}`,
        `${BASE_URL}/ru/${trimmedPath}`,
        `${BASE_URL}/en/${trimmedPath}`,
      ];
    });

  const staticPathArray = staticPaths.reduce((acc, item) => {
    item.forEach((el) => acc.push(el));
    return acc;
  }, []);

  const files = fs.readdirSync(`${process.cwd()}/data/posts/uk`);

  const articlePaths = files
    .map((fileName) =>
      locales.map((locale) => {
        return {
          params: {
            slug: fileName.replace('.mdx', ''),
          },
          locale,
        };
      })
    )
    .flat();

  const dynamicPaths = articlePaths.map((article) => {
    if (article.locale === 'uk') {
      return `${BASE_URL}/${article.params.slug}`;
    }

    return `${BASE_URL}/${article.locale}/${article.params.slug}`;
  });

  const allPaths = [
    BASE_URL,
    `${BASE_URL}/en/`,
    `${BASE_URL}/ru/`,
    ...staticPathArray,
    ...dynamicPaths,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
