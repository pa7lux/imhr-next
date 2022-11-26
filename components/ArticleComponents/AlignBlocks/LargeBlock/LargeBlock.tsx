import React, { FC } from 'react'

import BlockStyles from './LargeBlock.module.css';

type Props = {
    children: JSX.Element | JSX.Element[]
}

const LargeBlock: FC<Props> = ({ children }) => {
  return (
    <div className={BlockStyles.block_large}>
        { children }
    </div>
  )
}

export default LargeBlock