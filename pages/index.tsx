import fs from 'fs';
import matter from 'gray-matter';
import cn from 'classnames';
import Link from 'next/link';
import type { NextPage } from 'next';
import Post from '../models/post';

import indexStyles from '../styles/Home.module.css';

type HomeProps = {
  posts: Array<Post>;
};

const Home: NextPage<HomeProps> = ({ posts }: HomeProps) => {
  return (
    <>
      <h2>Образец</h2>
      <div className={cn(indexStyles['card-list'])}>
        {posts.map((post, idx) => {
          return (
            <Link href={`/posts/${post.slug}`} key={idx} passHref={true}>
              <article className={cn(indexStyles['card'])}>
                <h3>{post.frontmatter.title}</h3>
                <p>{post.frontmatter.description}</p>
              </article>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;

// util to get multiple files from markdown directory

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/data/posts`);

  const posts: Array<Post> = files.map((fileName) => {
    const file = fs.readFileSync(`data/posts/${fileName}`).toString();

    const { data, content } = matter(file);
    const frontmatter = { title: data.title, description: data.description };

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
