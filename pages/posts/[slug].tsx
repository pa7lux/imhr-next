import fs from 'fs';
import matter from 'gray-matter';
import cn from 'classnames';
import type { NextPage } from 'next';
import Post from '../../models/post';
import Frontmatter from '../../models/frontmatter';
import dynamic from 'next/dynamic';
import {MDXProvider} from '@mdx-js/react'
import Heading from '../../components/Heading/Heading';
import PostStyles from './Post.module.css';
import Slider from '../../components/Slider/Slider';
import Blockquote from '../../components/Blockquote/Blockquote';
import PhotoFullPage from '../../components/PhotoFullPage/PhotoFullPage';
import HorizontalPhoto from '../../components/HorizontalPhoto/HorizontalPhoto';
import { withTheme } from '../../store/context/context';
import { ContextProps } from '../../models/themeContext';
import { useEffect } from 'react';
 
interface Props extends ContextProps {
  slug: string;
  frontmatter: Frontmatter;
}

const PostPage: NextPage<Props> = withTheme<Props>(({ slug, frontmatter, onChange }) => {

  const Article = dynamic(() => import(`../../data/posts/${slug}.mdx`))

  useEffect(() => {
    onChange(frontmatter.theme)
  }, [frontmatter.theme])

  return (
    <>
      <article className={cn(PostStyles.article, frontmatter.theme)}>
        <main className={PostStyles.main}>
          <MDXProvider components={{
            Heading: (props) => <Heading {...props} />,
            p: (props) => <p className='text-type-p' {...props} />,
            h1: (props) => <h1 className='text-type-h2 mt-2' {...props} />,
            blockquote: (props) => <Blockquote {...props} />,
            Slider: (props) => <Slider {...props} />,
            PhotoFullPage: (props) => <PhotoFullPage {...props} />,
            HorizontalPhoto: (props) => <HorizontalPhoto {...props} /> 
          }}>
            <Article />
          </MDXProvider>
        </main>
      </article>
    </>
  );
});

export default PostPage;

// Utils to get sigle content file from markdown

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/data/posts`);

  const paths = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace('.mdx', ''),
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
  const file = fs.readFileSync(`data/posts/${slug}.mdx`).toString();
  const { data } = matter(file);

  return {
    props: {
      slug,
      frontmatter: { title: data.title, description: data.description, theme: data.theme },
    },
  };
}
