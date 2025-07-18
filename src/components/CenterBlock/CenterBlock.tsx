import styles from './CenterBlock.module.css';
import PlayList from '../PlayList/Playlist';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import PlayListHeader from '../PlaylistHeader/PlaylistHeader';
import { Track } from '@/sharesTypes/sharesTypes';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import TrackSkeleton from '../TrackSkeleton';

export default function CenterBlock({
  title,
  tracks,
  isLoading,
}: {
  title: string;
  tracks: Track[];
  isLoading: boolean;
}) {
  return (
    <div className={styles.centerblock}>
      <Search />

      <h2 className={styles.centerblock__h2}>{title}</h2>
      <Filter tracks={tracks} />
      <div className={styles.centerblock__content}>
        <PlayListHeader />

        {isLoading ? (

            <TrackSkeleton/>
     
  
        
 
        
        ) : (
          <PlayList tracks={tracks} />
        )}
      </div>
    </div>
  );
}
