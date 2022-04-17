import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface World {
  id?: number;
  name : string;
  owner?  : number;
}

export interface WorldFormData {
  name : string;
}

@Injectable({
  providedIn: 'root'
})
export class WorldService {

  constructor(private http : HttpClient) { }

  getWorlds() : Observable <World[]> {
    return this.http.get<World[]>('/api/worlds/');
  }

  getWorldById(w : number) : Observable <World> {
    return this.http.get<World>(`/api/worlds/${w}/`);
  }

  postWorld(w : WorldFormData) {
    return this.http.post<World>('/api/worlds/', w);
  }
}
