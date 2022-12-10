import { NextPage } from 'next';
import Image from 'next/image';
import cn from 'classnames';
import AboutStyles from '../styles/About.module.css';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const about: NextPage = () => {
  const { t } = useTranslation('about');

  return (
    <>
      <Head>
        <meta property="og:title" content="imhr.top — про проєкт" />
        <title>imhr.top — про проєкт</title>
      </Head>
      <section className={cn(AboutStyles.about)}>
        <h1 className={cn(AboutStyles.about_heading, 'text-type-h1')}>
          {t('about.aboutProject')}
        </h1>
        <p className={cn(AboutStyles.about_lead, 'text-type-lead')}>
          {t('about.text1')}
        </p>
        <p className={cn(AboutStyles.about_paragraph, 'text-type-p')}>
          {t('about.text2')}
        </p>

        <div className={cn(AboutStyles.image_grid, 'mt-2')}>
          <Image
            src="/images/name/sasha.jpg"
            sizes="(max-width: 760px) 310px,
                       (max-width: 1080px) 540px,
                       780px"
            width={40}
            height={40}
            alt="Search"
            className={cn(
              AboutStyles.image_grid_picture,
              'box-radius'
            )}
          />
          <Image
            src="/images/name/vika.jpg"
            sizes="(max-width: 760px) 310px,
                       (max-width: 1080px) 540px,
                       780px"
            width={40}
            height={40}
            alt="Search"
            className={cn(
              AboutStyles.image_grid_picture,
              'box-radius'
            )}
          />
          <Image
            src="/images/name/maks-vika.jpg"
            sizes="(max-width: 760px) 310px,
                       (max-width: 1080px) 540px,
                       780px"
            width={40}
            height={40}
            alt="Search"
            className={cn(
              AboutStyles.image_grid_picture,
              'box-radius'
            )}
          />
          <Image
            src="/images/name/maks.jpg"
            sizes="(max-width: 760px) 310px,
                       (max-width: 1080px) 540px,
                       780px"
            alt="Search"
            width={40}
            height={40}
            className={cn(
              AboutStyles.image_grid_picture,
              'box-radius'
            )}
          />

          <Image
            src="/images/name/pes.jpg"
            sizes="(max-width: 760px) 310px,
                       (max-width: 1080px) 540px,
                       780px"
            alt="Search"
            width={40}
            height={40}
            className={cn(
              AboutStyles.image_grid_picture,
              'box-radius'
            )}
          />

          <Image
            src="/images/name/kate.jpg"
            sizes="(max-width: 760px) 310px,
                       (max-width: 1080px) 540px,
                       780px"
            alt="Search"
            width={40}
            height={40}
            className={cn(
              AboutStyles.image_grid_picture,
              'box-radius'
            )}
          />
        </div>

        <h2
          className={cn(
            AboutStyles.about_second_heading,
            'text-type-h2'
          )}
        >
          {t('about.projectCouratorsTitle')}
        </h2>
        <p className={cn(AboutStyles.about_paragraph, 'text-type-p')}>
          {t('about.projectCourators')}
        </p>

        <h2
          className={cn(
            AboutStyles.about_second_heading,
            'text-type-h2'
          )}
        >
          {t('about.sayThanksTitle')}
        </h2>
        <p className={cn(AboutStyles.about_paragraph, 'text-type-p')}>
          {t('about.sayThanks')}
        </p>

        <h2
          className={cn(
            AboutStyles.about_second_heading,
            'text-type-h2'
          )}
        >
          {t('about.somethingToSayTitle')}
        </h2>
        <p className={cn(AboutStyles.about_paragraph, 'text-type-p')}>
          {t('about.somethingToSay')}
        </p>
        <p className={cn(AboutStyles.about_paragraph, 'text-type-p')}>
          {t('about.weAreWaiting')}
          <a
            href="https://t.me/+tiiH3XpLUB03YWFi"
            target="_blank"
            className="link"
          >
            {t('about.telegram')}
          </a>
          .
        </p>
      </section>
    </>
  );
};

export const getStaticProps = async ({
  locale,
}: {
  locale: string;
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'about',
        'header',
        'footer',
      ])),
    },
  };
};

export default about;
