import React, { FC } from 'react'

import BlockStyles from './FullpageBlock.module.css';

type Props = {
    children: JSX.Element | JSX.Element[]
}

const FullpageBlock: FC<Props> = ({ children }) => {
  return (
    <div className={BlockStyles.block_fullpage}>
        { children }
    </div>
  )
}

export default FullpageBlock