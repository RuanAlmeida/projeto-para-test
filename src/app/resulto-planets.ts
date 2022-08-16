import { Planet } from './planets';

export interface ResultPlanets {
  count: string,
  next:string,
  previous: string,
  results: Planet[],
}
