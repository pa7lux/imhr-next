import { useMemo } from 'react';
import { BigStory, Story } from '../components/Story/Story';
import Post from '../models/post';

const useBigStory = (posts: Post[]) => {
  posts.sort((a, b) => {
    return (
      new Date(b.frontmatter.createdAt).setHours(0, 0, 0, 0) -
      new Date(a.frontmatter.createdAt).setHours(0, 0, 0, 0)
    );
  });
  const stories = posts.map((item) => {
    if (item.frontmatter.isBigStory) {
      return (
        <BigStory slug={item.slug} {...item.frontmatter} key={item.slug} />
      );
    }

    return <Story {...item.frontmatter} slug={item.slug} key={item.slug} />;
  });

  return useMemo(() => {
    return stories;
  }, [posts]);
};

export { useBigStory };
