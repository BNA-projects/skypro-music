import SidebarUserInfo from '../SideBarUserInfo/SideBarUserInfo';
import styles from './Sidebar.module.css';
import Image from 'next/image';
import Link from 'next/link';

function SideBar() {
  return (
    <div className={styles.main__sidebar}>
      <SidebarUserInfo />
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="/category/1">
             <div className={styles.sidebar__imgWrapper}>
              <Image
                className={styles.sidebar__img}
                src="/img/playlist.jpg"
                alt="day's playlist"
                width={250}
                height={170}
              />
               <span className={styles.sidebar__centerText}>Day playlist</span>
               </div>
            </Link>
          </div>
          <div className={styles.sidebar__item}>
           
            <Link className={styles.sidebar__link} href="/category/2">
                <div className={styles.sidebar__imgWrapper}>
              <Image
                className={styles.sidebar__img}
                src="/img/playlist.jpg"
                alt="dance-hits"
                width={250}
                height={170}
              />
                <span className={styles.sidebar__centerText}>Dance hits</span>
             </div>
            </Link>
           
          </div>
         <div className={styles.sidebar__item}>
  <Link className={styles.sidebar__link} href="/category/3">
    <div className={styles.sidebar__imgWrapper}>
      <Image
        className={styles.sidebar__img}
        src="/img/playlist.jpg"
        alt="indie-boost"
        width={250}
        height={170}
      />
      <span className={styles.sidebar__centerText}>Indie Boost</span>
    </div>
  </Link>
</div>

        </div>
      </div>
    </div>
  );
}

export default SideBar;
