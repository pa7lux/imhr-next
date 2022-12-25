// /** @type {import('next').NextConfig} */

import i18nConfig from './next-i18next.config.js';
import remarkFrontmatter from 'remark-frontmatter';

const { i18n } = i18nConfig;

export default {
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
