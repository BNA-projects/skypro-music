import TrackItem from '../Track/Track';
import styles from './PlayList.module.css';
import { Track } from '@/sharesTypes/sharesTypes';
import { useAppSelector } from '@store/store';
import { useMemo } from 'react';

type PlayListProps = {
  tracks: Track[];
};

export default function PlayList({ tracks }: PlayListProps) {
  const allTracks = tracks;
  const selectedAuthors = useAppSelector(
    (state) => state.tracks.selectedAuthors,
  );
  const selectedGenres = useAppSelector((state) => state.tracks.selectedGenres);

  const sortOption = useAppSelector((state) => state.tracks.sortOption);

  console.log(allTracks);

  const filteredTracks = useMemo(() => {
    return allTracks

      .filter((track) =>
        selectedAuthors.length > 0
          ? selectedAuthors.includes(track.author)
          : true,
      )

      .filter((track) =>
        selectedGenres.length > 0
          ? track.genre.some((g: string) => selectedGenres.includes(g))
          : true,
      )

      .sort((a, b) => {
        const yearA = new Date(a.release_date).getFullYear();
        const yearB = new Date(b.release_date).getFullYear();

        if (sortOption === 'Сначала новые') return yearB - yearA;
        if (sortOption === 'Сначала старые') return yearA - yearB;
        return 0;
      });
  }, [allTracks, selectedAuthors, selectedGenres, sortOption]);
  return (
    <div className={styles.content__playlist}>
      {filteredTracks.map((item) => {
        return <TrackItem key={item._id} item={item} playList={tracks} />;
      })}
    </div>
  );
}
