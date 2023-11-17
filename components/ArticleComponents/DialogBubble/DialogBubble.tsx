import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import CardStyles from './DialogBubble.module.css';

type Props = {
  people: string;
  direction?: 'ltr' | 'rtl';
};

const DialogBubble: FC<PropsWithChildren<Props>> = ({
  children,
  people,
  direction,
}) => {
  const { t } = useTranslation('bubble-authors');
  const peopleIdArray: string[] = people.split(',');

  return (
    <div
      className={cn(
        CardStyles.bubble_block,
        direction === 'rtl' && CardStyles['rtl-card']
      )}
    >
      <ul className={cn(CardStyles.people_list)}>
        {peopleIdArray.map((person) => {
          return (
            <li key={t(`${person}.name`)}>
              <img
                src={t(`${person}.img`) as string}
                alt={`На фото ${`${person}.name`}`}
              />
              <span>{t(`${person}.name`)}</span>
            </li>
          );
        })}
      </ul>
      <div className={cn(CardStyles.text)}>{children}</div>
    </div>
  );
};

export { DialogBubble };
