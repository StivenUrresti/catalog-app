import Config from 'react-native-config';

console.log('Config', Config);
console.log('API_BASE:', Config?.API_BASE);

export const API_BASE = Config.API_BASE;

export enum EReducersPath {
  CATALOG_API = 'catalogApi',
}

export const apiBase = {
  baseUrl: API_BASE,
  endpoints: {
    getArtworks: 'artworks',
  },
};
