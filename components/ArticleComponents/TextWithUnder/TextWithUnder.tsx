import React, { FC} from 'react';
import cn from 'classnames'

import TextStyles from './TextWithUnder.module.css'

type Props = {
    children: JSX.Element | JSX.Element[]
}

const TextWidthUnder: FC<Props> = ({children}) => {
  return (
    <section className={cn(TextStyles.big_heading_and_text, 'content-section')}>
      {children}
    </section>
  )
}

export default TextWidthUnder