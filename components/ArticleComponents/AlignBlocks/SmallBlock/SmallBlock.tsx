import React, { FC } from 'react'

import BlockStyles from './SmallBlock.module.css';

type Props = {
    children: JSX.Element | JSX.Element[]
}

const SmallBlock: FC<Props> = ({ children }) => {
  return (
    <div className={BlockStyles.block_small}>
        { children }
    </div>
  )
}

export default SmallBlock