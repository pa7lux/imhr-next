import fs from 'fs';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import matter from 'gray-matter';
import cn from 'classnames';
import type { NextPage } from 'next';
import Post from '../models/post';
import { BigStory, Story } from '../components/Story/Story';
import { SendStory } from '../components/SendStory/SendStory';
import Head from 'next/head';
import Frontmatter from '../models/frontmatter';

import HomeStyles from '../styles/Home.module.css';
import { useBigStory } from '../hooks/useBigStory';

interface HomeProps {
  posts: Post[];
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  const { t } = useTranslation('');

  const { stories, bigStory } = useBigStory(
    posts,
    {
      uk: 'Від Одеси до Тбілісі за 4 дні',
      ru: 'От Одессы до Тбилиси за 4 дня',
      en: 'From Odessa to Tbilisi in 4 days',
    },
    '/images/sasha/stambyl.jpg'
  );

  return (
    <>
      <Head>
        <title>{t('home.pageTitle')}</title>
      </Head>

      <section className={cn(HomeStyles.cover)}>
        <picture>
          <source
            srcSet="/images/index/cover_mobile_1x.jpg, /images/index/cover_mobile_2x.jpg 2x"
            media="(max-width: 600px)"
          />
          <source
            srcSet="/images/index/cover_desktop_1x.jpg, /images/index/cover_desktop_2x.jpg 2x"
            media="(min-width: 601px)"
          />

          <img
            src="/images/index/cover_desktop_1x.jpg"
            alt="Фото редакції"
            className={cn(HomeStyles.cover_image)}
          />
        </picture>
        <div className={cn(HomeStyles.heading_box)}>
          <h1 className={cn(HomeStyles.cover_title, 'text-type-h1')}>
            I am here
          </h1>
          <p
            className={cn(HomeStyles.cover_subheading, 'text-type-p')}
            dangerouslySetInnerHTML={{ __html: t('home.subTitle') }}
          ></p>
        </div>
      </section>
      <section className={cn(HomeStyles.stories)}>
        <ul className={cn(HomeStyles.stories_list)}>
          {bigStory}
          {stories}
          <SendStory />
        </ul>
      </section>
    </>
  );
};

export default Home;

// util to get multiple files from markdown directory

export async function getStaticProps({ locale }: { locale: string }) {
  const files = fs.readdirSync(`${process.cwd()}/data/posts/${locale}`);

  const posts: Post[] = files.map((fileName) => {
    const file = fs.readFileSync(`data/posts/${locale}/${fileName}`).toString();

    const { data } = matter(file);
    const frontmatter: Frontmatter = {
      title: data.title,
      theme: data.theme,
      author: data.author,
      svg: data.svg,
    };

    return {
      slug: fileName.replace('.mdx', ''),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, [
        'common',
        'header',
        'components',
        'footer',
      ])),
    },
  };
}
