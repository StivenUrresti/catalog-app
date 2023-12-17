export interface CatalogEntity {
  pagination: PaginationEntity;
  data: DataCatalogEntity[];
}

export interface DataCatalogEntity {
  id: number;
  title: string;
  date_display: string;
  artist_display: string;
  image_id: string;
  place_of_origin: string;
}

export interface PaginationEntity {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}

export interface ArtWorkEntity {
  data: IArtWorkEntity;
}

export interface IArtWorkEntity {
  id: number;
  title: string;
  date_display: string;
  artist_display: string;
  main_reference_number: string;
  place_of_origin: string;
  description: string;
  dimensions: string;
  medium_display: string;
  copyright_notice: string;
  artwork_type_title: string;
  department_title: string;
  artist_title: string[];
  category_titles: string[];
  term_titles: string[];
  theme_titles: string[];
  image_id: string;
}
