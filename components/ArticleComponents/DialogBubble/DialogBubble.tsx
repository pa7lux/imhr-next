import React, { FC, PropsWithChildren } from 'react';
import cn from 'classnames';
import { authors } from './authors';

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
  const authorsArray = people.split(',');
  const bubbleAuthors = authorsArray.map((author) => {
    return authors.find((person) => person.id === parseInt(author));
  });
  return (
    <div
      className={cn(
        CardStyles.bubble_block,
        direction === 'rtl' && CardStyles['rtl-card']
      )}
    >
      <ul className={cn(CardStyles.people_list)}>
        {bubbleAuthors.map((person) => {
          return (
            <li key={person!.id}>
              <img src={person!.img} alt={`На фото ${person!.name}`} />
              <span>{person!.name}</span>
            </li>
          );
        })}
      </ul>
      <div className={cn(CardStyles.text)}>{children}</div>
    </div>
  );
};

export { DialogBubble };
