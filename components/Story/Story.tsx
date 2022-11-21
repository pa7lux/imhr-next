import { FC } from 'react'
import Link from "next/link"
import cn from 'classnames'

import StoryStyles from './Story.module.css';
import Backpack from '../UI/backpack-icon/backpack-icon';
import IconSelector from '../UI/IconSelector';
import Frontmatter from '../../models/frontmatter';

interface Props extends Frontmatter {
    slug: string;
}

const Story: FC<Props> = ({ title, author, theme, slug, svg }) => {
  return (
    <li className={cn(StoryStyles.story)}>
        <Link href={`/posts/${slug}`} legacyBehavior>
              <a className={StoryStyles.story_link}>
                <article className={cn(StoryStyles.story_card) + ` ${theme}`}>
                    <div className={cn(StoryStyles.story_info)}>
                        <h2 className="text-type-h3">{title}</h2>
                        <p className="text-type-p text-view-secondary">{author}</p>
                    </div>
                    <div className={cn(StoryStyles.story_graphics)}>
                        <IconSelector svgKey={svg}/>
                    </div>
                </article>
              </a>
        </Link>
    </li>
  )
}

export default Story