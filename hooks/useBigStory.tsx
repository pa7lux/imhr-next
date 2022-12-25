import { useMemo } from 'react';
import { BigStory, Story } from '../components/Story/Story';
import Post from '../models/post';

interface BigStoryCondition {
  uk: string;
  ru: string;
  en: string;
}

const useBigStory = (
  posts: Post[],
  bigStoryCondition: BigStoryCondition,
  src: string
) => {
  const bigStory = posts
    .filter(
      (item) =>
        item.frontmatter.title.toLowerCase() ===
          bigStoryCondition.ru.toLowerCase() ||
        item.frontmatter.title.toLowerCase() ===
          bigStoryCondition.uk.toLowerCase() ||
        item.frontmatter.title.toLowerCase() ===
          bigStoryCondition.en.toLowerCase()
    )
    .map((item) => {
      return (
        <BigStory
          author={item.frontmatter.author}
          theme={item.frontmatter.theme}
          slug={item.slug}
          svg={item.frontmatter.svg}
          title={item.frontmatter.title}
          src={src}
          key={item.slug}
        />
      );
    });

  const stories = posts
    .filter(
      (item) =>
        item.frontmatter.title.toLowerCase() !==
          bigStoryCondition.uk.toLowerCase() &&
        item.frontmatter.title.toLowerCase() !==
          bigStoryCondition.ru.toLowerCase() &&
        item.frontmatter.title.toLowerCase() !==
          bigStoryCondition.en.toLowerCase()
    )
    .map((item) => {
      return (
        <Story
          author={item.frontmatter.author}
          theme={item.frontmatter.theme}
          slug={item.slug}
          svg={item.frontmatter.svg}
          title={item.frontmatter.title}
          key={item.slug}
        />
      );
    });

  return useMemo(() => {
    return {
      stories,
      bigStory,
    };
  }, [posts, bigStoryCondition]);
};

export { useBigStory };
