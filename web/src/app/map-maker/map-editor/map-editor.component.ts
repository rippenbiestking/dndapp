import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, pluck, startWith, Subject, switchMap, takeUntil } from 'rxjs';
import { Tile } from 'src/app/api/maps/tile.service';

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.scss']
})
export class MapEditorComponent implements OnInit, AfterViewInit, OnDestroy {
  
  biomeTypes = [
    {name : "Ocean", value : "O", URL : "/assets/art/biomes/oceanTile64.png"},
    {name : "Grassland", value : "G", URL : "/assets/art/biomes/grassTile64.png"},
    {name : "Desert", value : "D", URL : "/assets/art/biomes/desertTile64.png"},
  ];
  terrainTypes = [
    {name : "Forest", value : "F", URL : "/assets/art/64pine.png"},
    {name : "Mountain", value : "M", URL : "/assets/art/64mountain.png"},
  ]
  selectedBiome = "O";
  selectedTerrain : string | null = null;
  selectedHabitation : string | null = null;
  transX = 0;
  transY = 0;
  scale  = 0.25;
  tiles : Tile[] = [];
  destroyed$ = new Subject<null>();

  @ViewChild('svg', {static : true})
  svgElement! : ElementRef<SVGElement>;

  constructor() { }

  ngOnDestroy(): void {
    this.destroyed$.next(null);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const svg = this.svgElement.nativeElement;
    const modifier = 1 / svg.clientWidth;

    fromEvent<MouseEvent>(svg, 'mousedown')
      .pipe(
        takeUntil(this.destroyed$),
        switchMap((clickEvent) => fromEvent<MouseEvent>(svg, 'mousemove').pipe(
          takeUntil(this.destroyed$),
          takeUntil(fromEvent<MouseEvent>(svg, 'mouseup')),
          takeUntil(fromEvent<MouseEvent>(svg, 'mouseleave')),
          startWith(clickEvent)
        ))
      ).subscribe(
        mouseEvent => {
          const x = Math.floor(
            (mouseEvent.offsetX * modifier - this.transX) / this.scale
          );
          const y = Math.floor(
            (mouseEvent.offsetY * modifier - this.transY) / this.scale
          );
          const tile = this.tiles.find(
            t => t.position[0] === x && t.position[1] === y
          );
          if (tile) {
            tile.biome = this.selectedBiome;
            tile.terrain = this.selectedTerrain;
            return;
          }
          this.tiles.push({position : [x,y], biome : this.selectedBiome, terrain : this.selectedTerrain, habitation : this.selectedHabitation});
        }
      );

    fromEvent<WheelEvent>(svg, 'wheel').subscribe(w => this.scale *= Math.pow(1.001, -w.deltaY));

    fromEvent<KeyboardEvent>(window, 'keydown')
      .pipe(takeUntil(this.destroyed$), pluck('key'))
      .subscribe((key) => {
        switch (key) {
          case 'a':
          case 'ArrowLeft':
            this.transX += 0.1 * this.scale;
            break;
          case 'd':
          case 'ArrowRight':
            this.transX -= 0.1 * this.scale;
            break;
          case 'w':
          case 'ArrowUp':
            this.transY += 0.1 * this.scale;
            break;
          case 's':
          case 'ArrowDown':
            this.transY -= 0.1 * this.scale;
            break;
        }
      });
  }

}
