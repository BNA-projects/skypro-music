import TrackItem from '../Track/Track';
import styles from './PlayList.module.css';
import {Track } from '@/sharesTypes/sharesTypes';

type PlayListProps = {
  tracks: Track [];
};

export default function PlayList({ tracks }: PlayListProps) {


  return (
    <div className={styles.content__playlist}>
      {tracks.map((item) => {
        return <TrackItem key={item._id} item={item} playList={tracks} />;
      })}
    </div>
  );
}
