import { AxiosError } from 'axios';
import { handleAxiosError } from '@/utils/handleAxiosError';

import { refreshToken } from '@/services/auth/authApi';
import { useAppSelector, useAppDispatch } from '@store/store';
import { setAccessToken } from '@store/features/authSlice';

type AuthorizedApiFunction<T> = (access: string) => Promise<T>;

export const useAuthApi = () => {
  const dispatch = useAppDispatch();
  const refresh = useAppSelector((state) => state.auth.refresh);

  const withReauth = async <T>(
    apiFunction: AuthorizedApiFunction<T>,
    
  ): Promise<T> => {
    try {
      return await apiFunction('');
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === 401) {
        try {
          const newAccessToken = await refreshToken(refresh);
          dispatch(setAccessToken(newAccessToken.access));
          return await apiFunction(newAccessToken.access);
        } catch (refreshError) {
          handleAxiosError(error);
        }
      }

      throw error;
    }
  };

  return { withReauth };
};
