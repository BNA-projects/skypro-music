import styles from './PlaylistHeader.module.css';
import classNames from 'classnames';

export default function PlayListHeader() {
  return (
    <div className={styles.content__title}>
      <div className={classNames(styles.playlistTitle__col, styles.col01)}>
        Track
      </div>
      <div className={classNames(styles.playlistTitle__col, styles.col02)}>
        Author
      </div>
      <div className={classNames(styles.playlistTitle__col, styles.col03)}>
        Album
      </div>
      <div className={classNames(styles.playlistTitle__col, styles.col04)}>
        <svg className={styles.playlistTitle__svg}>
          <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
        </svg>
      </div>
    </div>
  );
}
