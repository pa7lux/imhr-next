/** @type {import('next').NextConfig} */

const remarkFrontmatter = require('remark-frontmatter');
const { i18n } = require('./next-i18next.config.js');

// import remarkFrontmatter from 'remark-frontmatter';
// import { i18nConfig } from './next-i18next.config.js';

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkFrontmatter],
            rehypePlugins: [],
          },
        },
      ],
    });

    return config;
  },
  i18n,
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx', 'js'],
};
