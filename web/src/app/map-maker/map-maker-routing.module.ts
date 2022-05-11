import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapEditorComponent } from './map-editor/map-editor.component';
import { MapMakerComponent } from './map-maker.component';
import { WorldComponent } from './world/world.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'worlds/:worldId', component : WorldComponent },
  { path: ':mapId', component : MapEditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapMakerRoutingModule { }
