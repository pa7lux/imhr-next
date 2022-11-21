import { FC } from 'react'
import cn from 'classnames'

import PhotoFullStyles from './PhotoFullPage.module.css';

type Props = {
    src: string,
    text: string
}

const PhotoFullPage: FC<Props> = ({ src, text }) => {
  return (
    <div className={cn(PhotoFullStyles.image_block_full_page, 'mb-2')}>
      <img
        className={cn(PhotoFullStyles.picture_full_page, "box-radius")}
        src={src}
        alt="" />
        <p className="caption text-type-caption">{ text }</p>
    </div>
  )
}

export default PhotoFullPage