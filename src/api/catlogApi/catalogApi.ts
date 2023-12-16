import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE, apiBase, EReducersPath} from '@/utils/config';

export const catalogApi = createApi({
  reducerPath: EReducersPath.CATALOG_API,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    timeout: 30 * 1000,
  }),
  endpoints: build => ({
    getAllArtworks: build.query<any, void>({
      query: () => `${apiBase.endpoints.getArtworks}?limit=10`,
    }),
  }),
});

export const {useGetAllArtworksQuery} = catalogApi;
