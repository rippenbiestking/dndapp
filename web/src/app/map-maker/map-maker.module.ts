import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapMakerRoutingModule } from './map-maker-routing.module';
import { MapMakerComponent } from './map-maker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatListModule } from '@angular/material/list';
import { WorldComponent } from './world/world.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { CreateMapDialog } from './world/create-map/create-map.dialog';
import { CreateWorldDialog } from './world/create-world/create-world.dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MapEditorComponent } from './map-editor/map-editor.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    MapMakerComponent,
    DashboardComponent,
    WorldComponent,
    CreateMapDialog,
    CreateWorldDialog,
    MapEditorComponent
  ],
  imports: [
    CommonModule,
    MapMakerRoutingModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonToggleModule,
    FormsModule,
  ]
})
export class MapMakerModule { }
