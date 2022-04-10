import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Map {
  id? : number;
  name : string;
  world : number;
  size : number[];
  parent_tile? : number;
  map_type : string;
}

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http : HttpClient) { }

  getMaps() : Observable <Map[]> {
    return this.http.get<Map[]>('/api/maps/');
  }
}
