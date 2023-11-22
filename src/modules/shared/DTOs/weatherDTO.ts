export type WeatherDTO = Root2[];

export interface Root2 {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}
