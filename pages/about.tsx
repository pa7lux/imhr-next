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

import { MediumBlock } from '../components/ArticleComponents/AlignBlocks/MediumBlock/MediumBlock';
import { LargeBlock } from '../components/ArticleComponents/AlignBlocks/LargeBlock/LargeBlock';
import { FullpageBlock } from '../components/ArticleComponents/AlignBlocks/FullpageBlock/FullpageBlock';

import { Slider } from '../components/ArticleComponents/Slider/Slider';
import { Blockquote } from '../components/ArticleComponents/Blockquote/Blockquote';
import { PhotoFullPage } from '../components/ArticleComponents/PhotoFullPage/PhotoFullPage';
import { HorizontalPhoto } from '../components/ArticleComponents/HorizontalPhoto/HorizontalPhoto';
import { LinkList } from '../components/ArticleComponents/LinkList/LinkList';
import { LinkListItem } from '../components/ArticleComponents/LinkListItem/LinkListItem';
import { PhotoAndText } from '../components/ArticleComponents/PhotoAndText/PhotoAndText';
import { TextWithUnder } from '../components/ArticleComponents/TextWithUnder/TextWithUnder';
import { BorderedSection } from '../components/ArticleComponents/BorderedSection/BorderedSection';

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
            p: (props) => <p className="text-type-p" {...props} />,
            h1: (props) => <h1 className="text-type-h1" {...props} />,
            h2: (props) => <h2 className="text-type-h2" {...props} />,
            h3: (props) => <h3 className="text-type-h3" {...props} />,
            em: (props) => (
              <p className="text-type-caption">{props.children}</p>
            ),
            strong: (props) => (
              <p className="text-type-lead">{props.children}</p>
            ),
            li: (props) => <li className="text-type-list">{props.children}</li>,
            Medium: (props) => <MediumBlock {...props} />,
            Large: (props) => <LargeBlock {...props} />,
            Fullpage: (props) => <FullpageBlock {...props} />,

            blockquote: (props) => <Blockquote {...props} />,
            Slider: (props) => <Slider {...props} />,
            PhotoFullPage: (props) => <PhotoFullPage {...props} />,
            HorizontalPhoto: (props) => <HorizontalPhoto {...props} />,
            LinkList: (props) => <LinkList {...props} />,
            LinkListItem: (props) => <LinkListItem {...props} />,
            PhotoAndText: (props) => <PhotoAndText {...props} />,
            BigHeading: (props) => (
              <TextWithUnder {...props} author={frontmatter.author} />
            ),
            BorderedSection: (props) => <BorderedSection {...props} />,
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
