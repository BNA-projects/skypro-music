'use client';

import styles from './PopUp.module.css';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '@store/store';
import {
  toggleAuthor,
  toggleGenre,
  setSortOption,
  resetFilters,
} from '@store/features/trackSlice';
import { useEffect } from 'react';

type PopUpProps = {
  options: string[];
  isVisible: boolean;
  title: string;
};

export default function PopUp({ options, isVisible, title }: PopUpProps) {
  const dispatch = useAppDispatch();
  const { selectedAuthors, selectedGenres, sortOption } = useAppSelector(
    (state) => state.tracks
  );

  useEffect(() => {
    return () => {
      dispatch(resetFilters());
    };
  }, []);

  const handleToggleItem = (itemName: string) => {
    if (title === 'author') {
      dispatch(toggleAuthor(itemName));
    } else if (title === 'genre') {
      dispatch(toggleGenre(itemName));
    } else if (title === 'release year') {
      dispatch(setSortOption(itemName));
    }
  };

  const isItemActive = (item: string) => {
    if (title === 'author') {
      return selectedAuthors.includes(item);
    } else if (title === 'genre') {
      return selectedGenres.includes(item);
    } else if (title === 'release year') {
      return sortOption === item;
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
