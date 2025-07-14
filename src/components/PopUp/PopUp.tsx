'use client';

import styles from './PopUp.module.css';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@store/store';
import { toggleAuthor, toggleGenre, setYear } from '@store/features/trackSlice';

type PopUpProps = {
  options: string[];
  isVisible: boolean;
  title: string;
};

export default function PopUp({ options, isVisible, title }: PopUpProps) {
  const dispatch = useAppDispatch();
  const { selectedAuthors, selectedGenres, selectedYear } = useAppSelector(
    (state) => state.tracks,
  );

  const handleToggleItem = (itemName: string) => {
    if (title === 'исполнителю') {
      dispatch(toggleAuthor(itemName));
    } else if (title === 'жанру') {
      dispatch(toggleGenre(itemName));
    } else if (title === 'году выпуска') {
      dispatch(setYear(itemName));
    }
  };

  const isItemActive = (item: string) => {
    if (title === 'исполнителю') {
      return selectedAuthors.includes(item);
    } else if (title === 'жанру') {
      return selectedGenres.includes(item);
    } else if (title === 'году выпуска') {
      return selectedYear === item;
    }
    return false;
  };

  return (
    <div
      className={styles.wrapper}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <ul className={styles.filter__list}>
        {options.map((item, index) => (
          <li
            key={index}
            className={classNames(styles.filter__item, {
              [styles.active]: isItemActive(item),
            })}
            onClick={() => handleToggleItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
