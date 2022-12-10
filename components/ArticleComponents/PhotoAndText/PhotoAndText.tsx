import React, { FC, useState, useEffect, PropsWithChildren } from 'react'
import cn from 'classnames'

import PhotoStyles from './PhotoAndText.module.css';

type Props = {
    src: string;
    className?: string;
}

const PhotoAndText: FC<PropsWithChildren<Props>> = ({children, src, className}) => {
  return (
    <div className={cn(PhotoStyles.photo_and_text, 'mb-1')}>
        <img src={src} alt='' className={cn(PhotoStyles.image, 'box-radius', className)} />
        {children}
    </div>
    
  )
}

export {PhotoAndText}