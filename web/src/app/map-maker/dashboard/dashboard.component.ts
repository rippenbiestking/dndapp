import { Component, OnInit } from '@angular/core';
import { WorldService } from 'src/app/api/maps/world.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateWorldDialog } from '../world/create-world/create-world.dialog';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  worlds$ = this.worldService.getWorlds();
  addWorldForm = this.formBuilder.group({
    name : ['',Validators.required,],
  });

  constructor( private worldService : WorldService, private dialog : MatDialog, private formBuilder : FormBuilder ) { }

  ngOnInit(): void {
  }

  openAddWorld() {
    this.dialog.open(CreateWorldDialog).afterClosed().pipe(
      filter(v => !!v),
      switchMap(d => this.worldService.postWorld(d))
    ).subscribe(() => this.worlds$ = this.worldService.getWorlds());
  }

}
