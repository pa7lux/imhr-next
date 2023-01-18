import { FC } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import IconSelector from '../UI/IconSelector';
import Frontmatter from '../../models/frontmatter';
import { useRouter } from 'next/router';

import StoryStyles from './Story.module.css';

interface Props extends Frontmatter {
  slug: string;
}

const Story: FC<Props> = ({ title, author, theme, slug, svg }) => {
  const { locale } = useRouter();

  return (
    <li className={cn(StoryStyles.story)}>
      <Link href={`/posts/${slug}`} legacyBehavior locale={locale}>
        <a className={StoryStyles.story_link}>
          <article className={cn(StoryStyles.story_card, theme)}>
            <div className={cn(StoryStyles.story_info)}>
              <h2 className={cn(StoryStyles.story_heading)}>{title}</h2>
              <p
                className={cn(StoryStyles.story_author, 'text-view-secondary')}
              >
                {author}
              </p>
            </div>
            <div className={cn(StoryStyles.story_graphics)}>
              <IconSelector icon={svg} />
            </div>
          </article>
        </a>
      </Link>
    </li>
  );
};

const BigStory: FC<Props> = ({ slug, bigImageLink, theme, title, author }) => {
  const { locale } = useRouter();

  return (
    <li className={cn(StoryStyles.story, StoryStyles.story__large)}>
      <Link href={`/posts/${slug}`} legacyBehavior locale={locale}>
        <a href="/odessa-tbilisi.html" className={cn(StoryStyles.story_link)}>
          <article className={cn(StoryStyles.story_card, theme)}>
            <img
              src={bigImageLink}
              alt=""
              className={cn(StoryStyles.story_image)}
            />
            <div className={cn(StoryStyles.story_info)}>
              <h2 className={cn(StoryStyles.story_heading)}>{title}</h2>
              <p
                className={cn(StoryStyles.story_author, 'text-view-secondary')}
              >
                {author}
              </p>
            </div>
          </article>
        </a>
      </Link>
    </li>
  );
};

export { Story, BigStory };
