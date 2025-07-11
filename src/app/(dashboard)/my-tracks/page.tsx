'use client';

import CenterBlock from '@/components/CenterBlock/CenterBlock';
import { useEffect } from 'react';
import { fetchAllFavoriteTracks } from '@/services/tracks/tracksApi';
import { handleAxiosError } from '@/utils/handleAxiosError';
import { useAppDispatch, useAppSelector } from '@store/store';
import { setFavoritePlayList } from '@store/features/trackSlice';

export default function MyTracks() {
  const access = useAppSelector((state) => state.auth.access);
  const tracks = useAppSelector((state) => state.tracks.favoritePlayList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!access) return;

    const getAllFavoriteTracks = async () => {
      try {
        const data = await fetchAllFavoriteTracks(access);
        if (data) dispatch(setFavoritePlayList(data));
      } catch (error) {
        handleAxiosError(error);
      }
    };

    getAllFavoriteTracks();
  }, [access, dispatch]);

  if (!access) {
    return (
      <div
      style={{
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        border: '2px solid #e53e3e',
        borderRadius: '8px',
        backgroundColor: '#fff5f5',
        color: '#c53030',
        fontWeight: '600',
        fontSize: '18px',
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(229, 62, 62, 0.3)',
      }}
    >
        Для просмотра плейлиста необходимо авторизоваться
      </div>
    );
  }

  return <CenterBlock title="Мои треки" tracks={tracks} />;
}
