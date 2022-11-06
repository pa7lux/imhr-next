import fs from 'fs';
import matter from 'gray-matter';
import cn from 'classnames';
import Link from 'next/link';
import type { NextPage } from 'next';
import Post from '../models/post';

import HomeStyles from '../styles/Home.module.css';
import Story from '../components/Story/Story';
import SendStory from '../components/SendStory/SendStory';

type HomeProps = {
  posts: Post[];
};

interface IData {
  theme: 'theme-purple' | 'theme-turquoise' | 'theme-green' | 'theme-blue';
  title: string;
  author: string;
}

const Home: NextPage<HomeProps> = ({ posts }) => {

  return (
    <>
      <section className={cn(HomeStyles.cover)}>
      <picture>
        <source srcSet="/images/index/cover_mobile_1x.jpg, /images/index/cover_mobile_2x.jpg 2x" media="(max-width: 600px)" />
        <source srcSet="/images/index/cover_desktop_1x.jpg, /images/index/cover_desktop_2x.jpg 2x" media="(min-width: 601px)" />
        
        <img src="/images/index/cover_desktop_1x.jpg" alt="Фото редакції" className={cn(HomeStyles.cover_image)} />
      </picture>
      <div className={cn(HomeStyles.heading_box)}>
        <h1 className={cn(HomeStyles.cover_title) + ' text-type-h1'}>I am here</h1>
        <p className={cn(HomeStyles.cover_subheading) + 'text-type-p'}>Підлітки з&nbsp;України<br />розповідають свої історії</p>
      </div>
      </section>
      <section className={cn(HomeStyles.stories)}>
        <ul className={cn(HomeStyles.stories_list)}>
          {posts.map((item: Post) => {
            return <Story title={item.frontmatter.title} author={item.frontmatter.author} theme={item.frontmatter.theme} slug={item.slug} />
          })}
          <SendStory />
        </ul>
      </section>
    </>
    
  );
};

export default Home;

// util to get multiple files from markdown directory

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/data/posts`);

  const posts: Post[] = files.map((fileName) => {
    const file = fs.readFileSync(`data/posts/${fileName}`).toString();

    const { data, content } = matter(file);
    const frontmatter = { title: data.title, theme: data.theme, author: data.author };

    return {
      slug: fileName.replace('.md', ''),
      content: content,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
