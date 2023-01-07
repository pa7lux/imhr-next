import { FC } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';

import SendStoryStyles from './SendStory.module.css';

const SendStory: FC = () => {
  const { t } = useTranslation('common');

  return (
    <li className={cn(SendStoryStyles.story)}>
      <a
        href="https://t.me/+tiiH3XpLUB03YWFi"
        target="_blank"
        className={
          cn(SendStoryStyles.story_link, SendStoryStyles.telegram_link) +
          ' theme-blue'
        }
      >
        <article className={cn(SendStoryStyles.story_card)}>
          <div className={cn(SendStoryStyles.story_info)}>
            <h2 className={cn(SendStoryStyles.story_heading)}>
              {t('home.sendStory')}
            </h2>
          </div>
          <div className={cn(SendStoryStyles.story_graphics) + ' theme-yellow'}>
            <svg
              className={cn(SendStoryStyles.svg, SendStoryStyles.svg_telegram)}
              width="419"
              height="226"
              viewBox="0 0 419 226"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M376.719 20.0449C368.633 24.0943 367.961 24.9563 361.723 29.258C357.52 32.1565 353.581 36.0197 349.617 39.3116C347.188 41.3289 346.634 38.9636 344.452 37.4455C338.923 33.5978 328.5 28.4892 326.923 24.9999C325.381 21.5894 346.787 19.4017 355.923 16.5C367.901 12.6956 378.684 9.68913 390.386 5.23736C392.056 4.60207 394.263 3.52136 396.195 3.71259C397.95 3.88632 395.205 8.44915 395.029 9.02058C389.833 25.8991 379.589 41.5854 375.594 58.4392C374.925 61.2583 373.14 60.7816 371.394 59.2124C366.339 54.6695 360.289 49.062 354.778 45.2269C353.71 44.4837 351.906 46.932 349.88 62.1185"
                stroke="var(--accent-color)"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <path
                d="M26.4551 195.722C20.9916 181.517 14.8484 166.152 14.432 150.744C14.1927 141.892 18.6346 131.989 28.4346 138.721C40.0448 146.697 42.723 161.256 52.6554 170.453C59.3069 176.612 67.9501 176.791 68.7832 166.377C69.827 153.329 62.2634 136.115 72.1601 124.981C77.1558 119.361 87.7193 118.991 94.0519 122.157C106.419 128.341 118.033 153.939 134.364 148.363C141.762 145.837 142.878 135.953 141.969 129.202C140.493 118.235 141.035 102.056 154.575 98.8095C166.864 95.8628 175.576 106.652 184.21 112.696C191.326 117.677 201.556 120.157 206.306 110.833C210.379 102.837 212.877 89.0766 223.364 85.8628C238.265 81.2962 245.364 87.2523 259.114 91.2114C264.331 92.7135 268.209 92.5656 272.864 89.8628C282.068 84.5184 283.998 75.6516 289.507 67.864C295.423 59.5 303.077 56 313.423 56C317.388 56 328.423 58 337.923 50"
                stroke="var(--accent-color)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </article>
      </a>
    </li>
  );
};

export { SendStory };
