import { useMemo } from 'react';
import { BigStory, Story } from '../components/Story/Story';
import Post from '../models/post';

const useBigStory = (posts: Post[]) => {
  const firstBigStory = posts.find((item) => item.frontmatter.isBigStory);
  const indexOfFirstBigStory = firstBigStory
    ? posts.indexOf(firstBigStory)
    : -1;
  [posts[0], posts[indexOfFirstBigStory]] = [
    posts[indexOfFirstBigStory],
    posts[0],
  ];

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
