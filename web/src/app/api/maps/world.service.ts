import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface World {
  id?: number;
  name : string;
  owner?  : number;
}

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  constructor(private http : HttpClient) { }

  getWorlds() : Observable <World[]> {
    return this.http.get<World[]>('/api/worlds/');
  }
}
