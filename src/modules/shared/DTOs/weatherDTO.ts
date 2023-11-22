export type WeatherDTO = Response[];

export interface Response {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}
