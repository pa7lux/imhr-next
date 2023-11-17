import React, { FC } from 'react';
import { SVG } from '../../models/svg';
import { Backpack } from './backpack-icon/backpack-icon';
import { Grecha } from './grecha-icon/grecha-icon';
import { Heart } from './heart-icon/heart-icon';
import { Insta } from './insta-icon/insta-icon';
import { Tiktok } from './tiktok-icon/tiktok-icon';
import { Fire } from './fire-icon/fire-icon';
import { Route } from './route-icon/route-icon';
import { Star } from './star-icon/star-icon';
import { Lightning } from './lightning-icon/lightning-icon';
import { Rain } from './rain-icon/rain-icon';
import { IsraelStar } from './israel-star-icon/israel-star-icon';

type Props = {
  className?: string;
  icon: SVG;
};

const IconSelector: FC<Props> = ({ className, icon }) => {
  switch (icon) {
    case 'backpack':
      return <Backpack className={className} />;

    case 'heart':
      return <Heart className={className} />;

    case 'insta':
      return <Insta className={className} />;

    case 'tiktok':
      return <Tiktok className={className} />;

    case 'grecha':
      return <Grecha className={className} />;

    case 'fire':
      return <Fire className={className} />;

    case 'route':
      return <Route className={className} />;

    case 'star':
      return <Star className={className} />;

    case 'lightning':
      return <Lightning className={className} />;

    case 'rain':
      return <Rain className={className} />;

    case 'israel-star':
      return <IsraelStar className={className} />;

    default:
      return <Backpack />;
  }
};

export default IconSelector;
