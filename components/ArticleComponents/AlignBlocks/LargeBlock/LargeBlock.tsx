import React, { FC, PropsWithChildren } from 'react'

import BlockStyles from './LargeBlock.module.css';

const LargeBlock: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={BlockStyles.block_large}>
        { children }
    </div>
  )
}

export {LargeBlock}