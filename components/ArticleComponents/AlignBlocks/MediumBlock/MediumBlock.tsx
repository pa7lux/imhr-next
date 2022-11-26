import React, { FC } from 'react'

import BlockStyles from './MediumBlock.module.css';

type Props = {
    children: JSX.Element | JSX.Element[]
}

const MediumBlock: FC<Props> = ({ children }) => {
  return (
    <div className={BlockStyles.block_medium}>
        { children }
    </div>
  )
}

export default MediumBlock