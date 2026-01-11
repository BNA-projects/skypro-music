import styles from './Sidebar.module.css';
import Image from 'next/image';
import Link from 'next/link';

const playlists = [
  { id: 1, title: 'Day playlist', href: '/category/1', alt: "day's playlist" },
  { id: 2, title: 'Dance hits', href: '/category/2', alt: 'dance-hits' },
  { id: 3, title: 'Indie Boost', href: '/category/3', alt: 'indie-boost' },
];

function SideBar() {
  return (
    <div className={styles.main__sidebar}>
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          {playlists.map((p) => (
            <div key={p.id} className={styles.sidebar__item}>
              <Link className={styles.sidebar__link} href={p.href}>
                <div className={styles.sidebar__card}>
                  <Image
                    className={styles.sidebar__img}
                    src="/img/playlist.jpg"
                    alt={p.alt}
                    width={250}
                    height={170}
                  />
                  <span className={styles.sidebar__centerText}>{p.title}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
