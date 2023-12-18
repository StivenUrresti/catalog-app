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
    getAllArtworks: build.query<CatalogEntity, {page: number}>({
      query: ({page}) =>
        `${apiBase.endpoints.getArtworks}?fields=id,title,artist_display,date_display,image_id,place_of_origin?page=${page}`,
    }),
    getArtWorksByCategory: build.query<ArtWorkEntity, number>({
      query: id =>
        `${apiBase.endpoints.getArtworks}/${id}
        ?fields=id,title,artist_display,date_display,image_id,
        place_of_origin,main_reference_number,place_of_origin,description,
        dimensions,medium_display,category_titles,
        artist_title,theme_titles,artwork_type_title,department_title,term_titles,copyright_notice`,
    }),
    getAllArtWorksToSearch: build.query<CatalogEntity, string>({
      query: search =>
        `${apiBase.endpoints.getArtworks}/search?q=${search}&fields=id,title,artist_display,date_display,image_id,place_of_origin`,
    }),
  }),
});

export const {
  useGetAllArtworksQuery,
  useGetArtWorksByCategoryQuery,
  useLazyGetAllArtworksQuery,
  useLazyGetAllArtWorksToSearchQuery,
} = catalogApi;
