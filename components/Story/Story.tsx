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

const Story: FC<Props> = ({ title, author, theme, slug, svg, src }) => {
  if (!src) {
    return (
      <li className={cn(StoryStyles.story)}>
          <Link href={`/posts/${slug}`} legacyBehavior>
                <a className={StoryStyles.story_link}>
                  <article className={cn(StoryStyles.story_card, theme)}>
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

  return (
    <li className={cn(StoryStyles.story, StoryStyles.story__large)}>
      <Link href={`/posts/${slug}`} legacyBehavior>
        <a href="/odessa-tbilisi.html" className={cn(StoryStyles.story_link)}>
          <article className={cn(StoryStyles.story_card, theme)}>
            <img src={src} alt="" className={cn(StoryStyles.story_image)}/>
            <div className={cn(StoryStyles.story_info)}>
              <h2 className="text-type-h3">{title}</h2>
              <p className="text-type-p text-view-secondary">{author}</p>
            </div>
          </article>
        </a>
      </Link>
    </li>
  )
}

export default Story