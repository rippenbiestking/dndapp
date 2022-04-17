import { Component, OnInit } from '@angular/core';
import { Tile } from 'src/app/api/maps/tile.service';

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss']
})
export class MapEditorComponent implements OnInit {
  
  biomeTypes = [
    {name : "Ocean", value : "O"},
    {name : "Grassland", value : "G"},
    {name : "Desert", value : "D"},
  ];
  selectedBiome = "O";
  transX = 0;
  transY = 0;
  scale  = 0.25;
  tiles : Tile[] = [{id : 1, position : [0,0], biome : "O"},{id : 2, position : [0,1], biome : "G"},{id : 3, position : [0,2], biome : "D"}];

  constructor() { }

  ngOnInit(): void {
  }

}
