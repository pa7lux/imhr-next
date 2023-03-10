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
import { HeadingCustomSubtitle } from '../components/ArticleComponents/HeadingCustomSubtitle/HeadingCustomSubtitle';
import { MediumBlock } from '../components/ArticleComponents/AlignBlocks/MediumBlock/MediumBlock';
import { LargeBlock } from '../components/ArticleComponents/AlignBlocks/LargeBlock/LargeBlock';
import { ImageGrid } from '../components/ArticleComponents/ImageGrid/ImageGrid';
import { GridPhoto } from '../components/ArticleComponents/GridPhoto/GridPhoto';
import { BlankLink } from '../components/UI/BlankLink/BlankLink';
import { PhotoFullPage } from '../components/ArticleComponents/PhotoFullPage/PhotoFullPage';
import { ArticleButton } from '../components/ArticleComponents/ArticleButton/ArticleButton';

import { RequestForm } from '../components/ArticleComponents/RequestForm/RequestForm';

import ComicBook from '../styles/ComicBook.module.css';

interface Props extends ContextProps {
  slug: string;
  frontmatter: Frontmatter;
  locale: string;
}

const comicBook: NextPage<Props> = withTheme<Props>(
  ({ frontmatter, locale }) => {
    const Article = dynamic(
      () => import(`../data/comic-book/${locale}/comic-book.mdx`)
    );

    const labels = {
      // userName: t('form.userName'),
    };

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
        <section className={cn(ComicBook['comic-book'], frontmatter.theme)}>
          <article className={cn(ComicBook['comic-book__article'])}>
            <MDXProvider
              components={{
                p: (props) => (
                  <p
                    className={cn(ComicBook['comic-book__text'], 'text-type-p')}
                    {...props}
                  />
                ),
                h1: (props) => (
                  <h1
                    className={cn(
                      ComicBook['comic-book__heading'],
                      'text-type-h1'
                    )}
                    {...props}
                  />
                ),
                h2: (props) => (
                  <h2
                    className={cn(
                      ComicBook['comic-book__second-hrading'],
                      'text-type-h2'
                    )}
                    {...props}
                  />
                ),
                strong: (props) => (
                  <span className="text-type-lead">{props.children}</span>
                ),
                ImageGrid: (props) => (
                  <div className={cn(ComicBook['comic-book__wrapper'])}>
                    <ImageGrid {...props} />
                  </div>
                ),
                HeadingCustomSubtitle: (props) => (
                  <HeadingCustomSubtitle
                    title={frontmatter.title}
                    subtitle={frontmatter.subtitle}
                    {...props}
                  />
                ),
                Medium: (props) => <MediumBlock {...props} />,
                Large: (props) => <LargeBlock {...props} />,
                GridPhoto: (props) => <GridPhoto {...props} />,
                BlankLink: (props) => <BlankLink {...props} />,
                ArticleButton: (props) => {
                  return (
                    <ArticleButton {...props} onClick={props.clickHandler} />
                  );
                },
                PhotoFullPage: (props) => (
                  <div className={cn(ComicBook['comic-book__wrapper'])}>
                    <PhotoFullPage {...props} />
                  </div>
                ),
                RequestForm: () => {
                  return (
                    <div className="mb-4">
                      <RequestForm />
                    </div>
                  );
                },
              }}
            >
              <Article />
            </MDXProvider>
          </article>
        </section>
      </>
    );
  }
);

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
        subtitle: data.subtitle,
        theme: data.theme,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        metaOgTitle: data.metaOgTitle,
        metaOgImage: data.metaOgImage,
        ogUrl: data.ogUrl,
      },
      ...(await serverSideTranslations(locale, [
        'header',
        'footer',
        'requestform',
      ])),
    },
  };
}

export default comicBook;
