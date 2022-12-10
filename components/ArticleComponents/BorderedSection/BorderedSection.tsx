import React, {FC, PropsWithChildren} from 'react'
import cn from 'classnames'

import BorderStyles from './BorderedSection.module.css';

type Props = {
    text: string;
}

const BorderedSection: FC<PropsWithChildren<Props>> = ({ children, text }) => {
  return (
    <section className={cn(BorderStyles.advice_section)}>
        <div className={cn(BorderStyles.advice_section_badge)}>{text}</div>
        {children}
  </section>
  )
}

export {BorderedSection}