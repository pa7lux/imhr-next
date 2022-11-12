import { NextPage } from 'next';
import classNames from 'classnames/bind';

import HeadingStyles from './Heading.module.css';

type Props = {
    photoLeft: boolean,
    author: string,
    title: string,
    img: string,
    theme: 'theme-purple' | 'theme-turquoise' | 'theme-green' | 'theme-blue',
}



let cx = classNames.bind(HeadingStyles);

const Heading: NextPage<Props> = ({ photoLeft = false, author, title, img, theme }) => {
  return (
    <section className={cx({article_cover_two_columns: !photoLeft, article_cover_two_columns__reversed: photoLeft}, 'mt-2')}>
      <div className={cx(HeadingStyles.heading_box)}>
        <h1 className={cx(HeadingStyles.heading_large, "text-type-h1")}>{ title }</h1>
        <p className={cx(HeadingStyles.subheading, "text-type-p", "mt-1")}>Розповідає { author }</p>
      </div>
      <img
        className={cx(HeadingStyles.cover_image, "box-radius", theme)}
        src={img}
        alt=""/>
    </section>
  )
}

export default Heading