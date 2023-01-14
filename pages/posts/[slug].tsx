import fs from 'fs';
import matter from 'gray-matter';
import cn from 'classnames';
import { NextPage } from 'next';
import Frontmatter from '../../models/frontmatter';
import dynamic from 'next/dynamic';
import { MDXProvider } from '@mdx-js/react';
import { Heading } from '../../components/ArticleComponents/Heading/Heading';
import PostStyles from './Post.module.css';
import { Slider } from '../../components/ArticleComponents/Slider/Slider';
import { Blockquote } from '../../components/ArticleComponents/Blockquote/Blockquote';
import { PhotoFullPage } from '../../components/ArticleComponents/PhotoFullPage/PhotoFullPage';
import { HorizontalPhoto } from '../../components/ArticleComponents/HorizontalPhoto/HorizontalPhoto';
import { withTheme } from '../../store/context/themeContext';
import { ContextProps } from '../../models/themeContext';
import { useEffect } from 'react';
import { AuthorCard } from '../../components/ArticleComponents/AuthorCard/AuthorCard';
import IconSelector from '../../components/UI/IconSelector';
import { LinkList } from '../../components/ArticleComponents/LinkList/LinkList';
import { LinkListItem } from '../../components/ArticleComponents/LinkListItem/LinkListItem';
import { PhotoAndText } from '../../components/ArticleComponents/PhotoAndText/PhotoAndText';
import { TextWithUnder } from '../../components/ArticleComponents/TextWithUnder/TextWithUnder';
import { BorderedSection } from '../../components/ArticleComponents/BorderedSection/BorderedSection';
import { MediumBlock } from '../../components/ArticleComponents/AlignBlocks/MediumBlock/MediumBlock';
import { LargeBlock } from '../../components/ArticleComponents/AlignBlocks/LargeBlock/LargeBlock';
import { FullpageBlock } from '../../components/ArticleComponents/AlignBlocks/FullpageBlock/FullpageBlock';
import { VerticalVideoAndText } from '../../components/ArticleComponents/VerticalVideoAndText/VerticalVideoAndText';
import { VerticalPhoto } from '../../components/ArticleComponents/VerticalPhoto/VerticalPhoto';
import { BlankLink } from '../../components/UI/BlankLink/BlankLink';
import Head from 'next/head';
import Script from 'next/script';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface Props extends ContextProps {
  slug: string;
  frontmatter: Frontmatter;
  locale: string;
}

const PostPage: NextPage<Props> = withTheme<Props>(
  ({ slug, frontmatter, onChange, locale }) => {
    const Article = dynamic(
      () => import(`../../data/posts/${locale}/${slug}.mdx`)
    );

    useEffect(() => {
      onChange(frontmatter.theme);
    }, [frontmatter.theme]);

    useEffect(() => {
      console.log(frontmatter.title);
    }, [frontmatter.title]);

    return (
      <>
        <Head>
          <meta property="og:title" content={frontmatter.metaOgTitle} />
          <title>{frontmatter.metaTitle}</title>
          <meta name="description" content={frontmatter.metaDescription} />
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
        <article className={cn(PostStyles.article, frontmatter.theme)}>
          <main className={PostStyles.main}>
            <MDXProvider
              components={{
                Heading: (props) => (
                  <Heading
                    author={frontmatter.author}
                    title={frontmatter.title}
                    {...props}
                  />
                ),
                p: (props) => <p className="text-type-p" {...props} />,
                h1: (props) => <h1 className="text-type-h1" {...props} />,
                h2: (props) => <h2 className="text-type-h2" {...props} />,
                h3: (props) => <h3 className="text-type-h3" {...props} />,
                blockquote: (props) => <Blockquote {...props} />,
                em: (props) => (
                  <p className="text-type-caption">{props.children}</p>
                ),
                strong: (props) => (
                  <p className="text-type-lead">{props.children}</p>
                ),
                a: (props) => (
                  <a
                    className={cn(PostStyles.a_article, 'center')}
                    {...props}
                  />
                ),
                li: (props) => (
                  <li className="text-type-list">{props.children}</li>
                ),
                Slider: (props) => <Slider {...props} />,
                PhotoFullPage: (props) => <PhotoFullPage {...props} />,
                HorizontalPhoto: (props) => <HorizontalPhoto {...props} />,
                AuthorCard: (props) => <AuthorCard {...props} />,
                Icon: (props) => <IconSelector {...props} />,
                LinkList: (props) => <LinkList {...props} />,
                LinkListItem: (props) => <LinkListItem {...props} />,
                PhotoAndText: (props) => <PhotoAndText {...props} />,
                BigHeading: (props) => (
                  <TextWithUnder {...props} author={frontmatter.author} />
                ),
                BorderedSection: (props) => <BorderedSection {...props} />,
                Medium: (props) => <MediumBlock {...props} />,
                Large: (props) => <LargeBlock {...props} />,
                Fullpage: (props) => <FullpageBlock {...props} />,
                VerticalVideoAndText: (props) => (
                  <VerticalVideoAndText {...props} />
                ),
                BlankLink: (props) => <BlankLink {...props} />,
                VerticalPhoto: (props) => <VerticalPhoto {...props} />,
              }}
            >
              <Article />
            </MDXProvider>
          </main>
        </article>
      </>
    );
  }
);

export default PostPage;

// Utils to get sigle content file from markdown

export async function getStaticPaths({ locales }: { locales: [string] }) {
  const files = fs.readdirSync(`${process.cwd()}/data/posts/uk`);

  const paths = files
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

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
  locale,
}: {
  params: { slug: string };
  locale: string;
}) {
  const file = fs.readFileSync(`data/posts/${locale}/${slug}.mdx`).toString();
  const { data } = matter(file);

  return {
    props: {
      locale,
      slug,
      frontmatter: {
        title: data.title,
        theme: data.theme,
        author: data.author,
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
