import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import IconSelector from '../components/UI/IconSelector';

import NotFoundStyles from '../styles/NotFound.module.css';

type Props = {
  locale: string;
};

const Custom404 = ({ locale }: Props) => {
  const { t } = useTranslation('common');
  return (
    <div className={NotFoundStyles.not_found}>
      <Image
        src={'/images/icons/sun.png'}
        alt="sun"
        width={110}
        height={110}
        className={NotFoundStyles.icon_sun}
      />
      <div className={NotFoundStyles.text}>
        <h1 className={NotFoundStyles.h1}>404</h1>
        <h1 className={NotFoundStyles.not_found_text}>{t('home.notFound')}</h1>
      </div>

      <Image
        src={'/images/icons/heart.png'}
        alt="heart"
        width={130}
        height={130}
        className={NotFoundStyles.icon_heart}
      />
    </div>
  );
};

export default Custom404;

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, [
        'components',
        'header',
        'footer',
        'common',
      ])),
    },
  };
};
