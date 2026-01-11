import styles from './PlaylistHeader.module.css';
import classNames from 'classnames';

const cols = [
  { key: 'track', label: 'Track', colClass: styles.col01 },
  { key: 'author', label: 'Author', colClass: styles.col02 },
  { key: 'album', label: 'Album', colClass: styles.col03 },
  { key: 'time', icon: true, colClass: styles.col04 },
] as const;

export default function PlayListHeader() {
  return (
    <div className={styles.content__title}>
      {cols.map((c) => (
        <div
          key={c.key}
          className={classNames(styles.playlistTitle__col, c.colClass)}
        >
          {'icon' in c ? (
            <svg className={styles.playlistTitle__svg}>
              <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
            </svg>
          ) : (
            c.label
          )}
        </div>
      ))}
    </div>
  );
}

