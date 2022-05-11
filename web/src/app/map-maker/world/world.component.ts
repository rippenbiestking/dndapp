import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { filter, switchMap, tap, withLatestFrom } from 'rxjs';
import { MapService, MapType } from 'src/app/api/maps/map.service';
import { World, WorldService } from 'src/app/api/maps/world.service';
import { CreateMapDialog } from './create-map/create-map.dialog';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {

  maps$ = this.route.params.pipe(switchMap(params => this.mapService.getMapsByWorld(params['worldId'])));
  world$ = this.route.params.pipe(switchMap(params => this.worldService.getWorldById(params['worldId'])));

  constructor(private mapService : MapService, private route : ActivatedRoute, private worldService : WorldService, private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  openAddMap(isTravel : boolean = true) {
    this.dialog.open(CreateMapDialog).afterClosed().pipe(
      filter(v => !!v),
      withLatestFrom(this.world$),
      switchMap(([data, world]) => this.mapService.postMap({
        ...data,
        world : world.id,
        map_type : isTravel ? MapType.REGION : MapType.ENCOUNTER,
      }))
    ).subscribe(()=>this.maps$ = this.route.params.pipe(switchMap(params => this.mapService.getMapsByWorld(params['worldId']))));
  }
}
