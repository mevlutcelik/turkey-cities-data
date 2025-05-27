declare module "turkey-cities-data" {
  export interface City {
    id: number;
    slug: string;
    label: string;
    plate: string;
    coord: {
      lat: number;
      lon: number;
    };
    region: {
      slug: string;
      label: string;
    };
    population: number;
  }

  const cities: City[];
  export default cities;
}
