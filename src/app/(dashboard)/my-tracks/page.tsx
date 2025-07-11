'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { useEffect, useCallback, useState } from 'react';

import { fetchAllFavoriteTracks } from '@/services/tracks/tracksApi';
import { handleAxiosError } from '@/utils/handleAxiosError';
import { useAppSelector } from '@store/store';
import { setFavoritePlayList } from '@store/features/trackSlice';

export default function MyTracks() {
  const access = useAppSelector((state) => state.auth.access);
  const tracks = useAppSelector((state) => state.tracks.favoritePlayList);

  const getAllFavoriteTracks = useCallback(async () => {
    try {
      const data = await fetchAllFavoriteTracks(access);
      if (data) setFavoritePlayList(data);
    } catch (error) {
      handleAxiosError(error);
    }
  }, []);

  useEffect(() => {
    getAllFavoriteTracks();
  }, []);

  return (
    <>
      <CenterBlock title="Мои треки" tracks={tracks} />
    </>
  );
}
