import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Map {
  id? : number;
  name : string;
  world : number;
  size? : number[];
  parent_tile? : number;
  map_type : MapType;
}

export interface MapForm {
  name : string;
  world : number;
  map_type : MapType;
}

export enum MapType {
  WORLD = "W",
  REGION = "R",
  ENCOUNTER = "E",
}

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http : HttpClient) { }

  getMaps() : Observable <Map[]> {
    return this.http.get<Map[]>('/api/maps/');
  }

  getMapsByWorld(worldId: number): Observable<Map[]> {
    return this.http.get<Map[]>('/api/maps/', {
      params: {
        world: worldId,
      },
    });
  }

  postMap(m : MapForm) {
    return this.http.post<Map>('/api/maps/', m);
  }
}
