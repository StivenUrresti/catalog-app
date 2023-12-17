import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_BASE, apiBase, EReducersPath} from '@/utils/config';
import {ArtWorkEntity, CatalogEntity} from './entities/catalogEntity';

export const catalogApi = createApi({
  reducerPath: EReducersPath.CATALOG_API,
  refetchOnReconnect: true,
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE,
    timeout: 30 * 1000,
  }),
  endpoints: build => ({
    getAllArtworks: build.query<CatalogEntity, void>({
      query: () =>
        `${apiBase.endpoints.getArtworks}?fields=id,title,artist_display,date_display,image_id,?limit=10`,
    }),
    getArtWorksByCategory: build.query<ArtWorkEntity, number>({
      query: id =>
        `${apiBase.endpoints.getArtworks}/${id}
        ?fields=id,title,artist_display,date_display,image_id,
        place_of_origin,main_reference_number,place_of_origin,description,
        dimensions,medium_display,category_titles,
        artist_title,theme_titles,artwork_type_title,department_title,term_titles,copyright_notice`,
    }),
  }),
});

export const {useGetAllArtworksQuery, useGetArtWorksByCategoryQuery} =
  catalogApi;
