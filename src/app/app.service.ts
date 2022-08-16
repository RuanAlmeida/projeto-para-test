import { ResultPlanets } from './resulto-planets';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<ResultPlanets> {
    return this.http.get<ResultPlanets>('https://swapi.dev/api/planets/');
  }

}
