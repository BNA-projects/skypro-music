'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { useParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { Track } from '@/sharesTypes/sharesTypes';
import { setIsLoading, setCurrentPlayList } from '@store/features/trackSlice';
import {  fetchAllTracks, fetchTracksByID } from '@/services/tracks/tracksApi';
import { handleAxiosError } from '@/utils/handleAxiosError';
import { useAppSelector, useAppDispatch } from '@store/store';
import { playlistNameMap } from '@/utils/playlistNameMap';

export default function CategoriesPlaylist() {
  const params = useParams();
  const idTracks = Number(params.id);
  const isLoading = useAppSelector((state) => state.tracks.isLoading);
  const tracks = useAppSelector((state) => state.tracks.playList);
  const dispatch = useAppDispatch();
  const [titlePlayList, settitlePlayList] = useState('');
  const [filteredTracks, setFilteredTracks] = useState<Track[]>([]);

  const getTracksById = useCallback(async () => {
     dispatch(setIsLoading(true));
    try {
      let allTracksdata = tracks;
      if (allTracksdata.length === 0) {
      allTracksdata = await fetchAllTracks();
      dispatch(setCurrentPlayList(allTracksdata));
    }
      const data = await fetchTracksByID(idTracks);

      if (data) {  const englishName = playlistNameMap[data.name] || data.name;
  settitlePlayList(englishName)}

      const filteredSortedTracks = data.items
        .map((id:number) => allTracksdata.find((track) => track._id === id))
        .filter((track: Track) => track !== undefined);

      setFilteredTracks(filteredSortedTracks);
    } catch (error) {
      handleAxiosError(error);
    }
    finally {
      dispatch(setIsLoading(false));
    }
  }, [idTracks,dispatch]);

  useEffect(() => {
    getTracksById();
  }, []);

  return (
    <>
      <CenterBlock
        title={titlePlayList}
        tracks={filteredTracks}
        isLoading={isLoading}
      />
    </>
  );
}
