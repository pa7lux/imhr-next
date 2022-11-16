import { BlockquoteHTMLAttributes, DetailedHTMLProps, FC } from 'react'
import cn from 'classnames'

import QuoteStyles from './Blockquote.module.css'

type Props =  DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>

const Blockquote: FC<Props> = (props) => {
  return (
    <blockquote className={cn(QuoteStyles.quote, "text-type-quote")}>{props.children}</blockquote>
  )
}

export default Blockquote