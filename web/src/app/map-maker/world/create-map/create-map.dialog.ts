import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MapForm, MapService } from 'src/app/api/maps/map.service';

@Component({
  selector: 'app-create-map',
  templateUrl: './create-map.dialog.html',
  styleUrls: ['./create-map.dialog.scss']
})
export class CreateMapDialog implements OnInit {

  addMapForm = this.formBuilder.group({
    name : ['',Validators.required,],
  });

  constructor(private dialogRef : MatDialogRef<CreateMapDialog>, private mapService : MapService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {
    this.dialogRef.close(this.addMapForm.value);
  }

}
