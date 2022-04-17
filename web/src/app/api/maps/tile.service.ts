import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Tile {
  id? : number;
  parent_map? : number;
  position : number[];
  biome : string;
  terrain? : string;
  habitation? : string;
}

@Injectable({
  providedIn: 'root'
})
export class TileService {

  constructor(private http : HttpClient) { }

  getTiles() : Observable <Tile[]> {
    return this.http.get<Tile[]>('/api/tiles/');
  }

  getTileByMap(mapId: number): Observable<Tile[]> {
    return this.http.get<Tile[]>('/api/tiles/', {
      params: {
        map: mapId,
      },
    });
  }
}
