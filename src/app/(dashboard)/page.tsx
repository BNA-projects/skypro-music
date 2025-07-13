'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { fetchAllTracks } from '@/services/tracks/tracksApi';

import { useAppDispatch, useAppSelector } from '@store/store';
import { useEffect, useCallback } from 'react';
import { setCurrentPlayList } from '@store/features/trackSlice';
import { handleAxiosError } from '@/utils/handleAxiosError';

export default function Home() {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.tracks.playList);

  const getAllTracks = useCallback(async () => {
    try {
      const data = await fetchAllTracks();
      if (data) dispatch(setCurrentPlayList(data));
    } catch (error) {
      handleAxiosError(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getAllTracks();
  }, [getAllTracks]);

  return (
    <>
      <CenterBlock title="Треки" tracks={tracks} />
    </>
  );
}
