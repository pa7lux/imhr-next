import React, {FC} from 'react'
import cn from 'classnames'

import BorderStyles from './BorderedSection.module.css';

type Props = {
    children: JSX.Element | JSX.Element[]
    text: string;
}

const BorderedSection: FC<Props> = ({ children, text }) => {
  return (
    <section className={cn(BorderStyles.advice_section)}>
        <div className={cn(BorderStyles.advice_section_badge)}>{text}</div>
        {children}
  </section>
  )
}

export default BorderedSection