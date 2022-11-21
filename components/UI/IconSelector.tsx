import React, { FC } from 'react'
import { SVG } from '../../models/svg';
import Backpack from './backpack-icon/backpack-icon';
import Heart from './heart-icon/heart-icon';
import Insta from './insta-icon/insta-icon';
import Tiktok from './tiktok-icon/tiktok-icon';

type Props = {
    className?: string;
    svgKey: SVG;
}

const IconSelector: FC<Props> = ({ className, svgKey }) => {
    switch (svgKey) {
        case 'backpack':
            return <Backpack className={className} />
        
        case 'heart':
            return <Heart className={className} />

        case 'insta': 
            return <Insta className={className} />

        case 'tiktok': 
            return <Tiktok className={className} />
    
        default:
            return <Backpack />
    }
}

export default IconSelector