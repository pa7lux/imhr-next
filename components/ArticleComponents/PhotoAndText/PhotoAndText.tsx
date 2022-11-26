import React, { FC, useState, useEffect } from 'react'
import cn from 'classnames'

import PhotoStyles from './PhotoAndText.module.css';

type Props = {
    children?: JSX.Element | JSX.Element[];
    src: string;
    className?: string;
}

const PhotoAndText: FC<Props> = ({children, src, className}) => {
  return (
    <div className={cn(PhotoStyles.photo_and_text, 'mb-1')}>
        <img src={src} alt='' className={cn(PhotoStyles.image, 'box-radius', className)} />
        {children}
    </div>
    
  )
}

export default PhotoAndText