import fs from 'fs';
import matter from 'gray-matter';
import cn from 'classnames';
import type { NextPage } from 'next';
import Post from '../../models/post';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import PostStyles from '../../styles/Post.module.css';

const PostPage: NextPage<Post> = ({ slug, content, frontmatter }) => {
  return (
    <>
      <article className={cn(PostStyles.article)}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      </article>
    </>
  );
};

export default PostPage;

// Utils to get sigle content file from markdown

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/data/posts`);

  const paths = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace('.md', ''),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const file = fs.readFileSync(`data/posts/${slug}.md`).toString();
  const { data, content } = matter(file);

  return {
    props: {
      slug,
      content,
      frontmatter: { title: data.title, description: data.description },
    },
  };
}
