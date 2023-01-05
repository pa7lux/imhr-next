import fs from 'fs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MDXProvider } from '@mdx-js/react';
import matter from 'gray-matter';
import cn from 'classnames';
import type { NextPage } from 'next';
import Head from 'next/head';
import Frontmatter from '../models/frontmatter';
import { ContextProps } from '../models/themeContext';
import dynamic from 'next/dynamic';
import { withTheme } from '../store/context/themeContext';
import { ImageGrid } from '../components/ArticleComponents/ImageGrid/ImageGrid';
import { GridPhoto } from '../components/ArticleComponents/GridPhoto/GridPhoto';

import AboutStyles from '../styles/About.module.css';

interface Props extends ContextProps {
  slug: string;
  frontmatter: Frontmatter;
  locale: string;
}

const about: NextPage<Props> = withTheme<Props>(({ frontmatter, locale }) => {
  const Article = dynamic(() => import(`../data/about/${locale}/about.mdx`));

  return (
    <>
      <Head>
        <meta property="og:title" content={frontmatter.metaOgTitle} />
        <title>{frontmatter.metaTitle}</title>
        <meta name="description" content={frontmatter.metaDescription} />
        <meta property="og:image" content={frontmatter.metaOgImage} />
      </Head>
      <section className={cn(AboutStyles.about, frontmatter.theme)}>
        <MDXProvider
          components={{
            p: (props) => (
              <p
                className={cn(AboutStyles.about_heading, 'text-type-p')}
                {...props}
              />
            ),
            h1: (props) => (
              <h1
                className={cn(AboutStyles.about_heading, 'text-type-h1')}
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className={cn(AboutStyles.about_second_heading, 'text-type-h2')}
                {...props}
              />
            ),
            ImageGrid: (props) => <ImageGrid {...props} />,
            GridPhoto: (props) => <GridPhoto {...props} />,
          }}
        >
          <Article />
        </MDXProvider>
      </section>
    </>
  );
});

export async function getStaticProps({ locale }: { locale: string }) {
  const file = fs
    .readFileSync(`${process.cwd()}/data/about/${locale}/about.mdx`)
    .toString();
  const { data } = matter(file);

  return {
    props: {
      locale,
      frontmatter: {
        title: data.title,
        theme: data.theme,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        metaOgTitle: data.metaOgTitle,
        metaOgImage: data.metaOgImage,
      },
      ...(await serverSideTranslations(locale, [
        'components',
        'header',
        'footer',
      ])),
    },
  };
}

export default about;
