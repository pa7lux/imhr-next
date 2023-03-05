import fs from 'fs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MDXProvider } from '@mdx-js/react';
import matter from 'gray-matter';
import cn from 'classnames';
import type { NextPage } from 'next';
import Script from 'next/script';
import Head from 'next/head';
import Frontmatter from '../models/frontmatter';
import { ContextProps } from '../models/themeContext';
import dynamic from 'next/dynamic';
import { withTheme } from '../store/context/themeContext';
import { ImageGrid } from '../components/ArticleComponents/ImageGrid/ImageGrid';
import { GridPhoto } from '../components/ArticleComponents/GridPhoto/GridPhoto';
import { BlankLink } from '../components/UI/BlankLink/BlankLink';
import { PhotoFullPage } from '../components/ArticleComponents/PhotoFullPage/PhotoFullPage';

import ComicBook from '../styles/ComicBook.module.css';

interface Props extends ContextProps {
  slug: string;
  frontmatter: Frontmatter;
  locale: string;
}

const about: NextPage<Props> = withTheme<Props>(({ frontmatter, locale }) => {
  const Article = dynamic(
    () => import(`../data/comic-book/${locale}/comic-book.mdx`)
  );

  return (
    <>
      <Head>
        <meta property="og:title" content={frontmatter.metaOgTitle} />
        <title>{frontmatter.metaTitle}</title>
        <meta name="description" content={frontmatter.metaDescription} />
        <meta property="og:url" content={frontmatter.ogUrl} />
        <meta property="og:image" content={frontmatter.metaOgImage} />
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2KMKDPW1DR"
      ></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());

      gtag('config', 'G-2KMKDPW1DR')`,
        }}
      ></Script>
      <section className={cn(ComicBook.about, frontmatter.theme)}>
        <MDXProvider
          components={{
            p: (props) => (
              <p
                className={cn(ComicBook.about_heading, 'text-type-p')}
                {...props}
              />
            ),
            h1: (props) => (
              <h1
                className={cn(ComicBook.about_heading, 'text-type-h1')}
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className={cn(ComicBook.about_second_heading, 'text-type-h2')}
                {...props}
              />
            ),
            ImageGrid: (props) => (
              <div className={cn(ComicBook.about_wrapper)}>
                <ImageGrid {...props} />
              </div>
            ),
            GridPhoto: (props) => <GridPhoto {...props} />,
            BlankLink: (props) => <BlankLink {...props} />,
            PhotoFullPage: (props) => (
              <div className={cn(ComicBook.about_wrapper)}>
                <PhotoFullPage {...props} />
              </div>
            ),
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
    .readFileSync(`${process.cwd()}/data/comic-book/${locale}/comic-book.mdx`)
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
        ogUrl: data.ogUrl,
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
