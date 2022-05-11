import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { WorldService } from 'src/app/api/maps/world.service';

@Component({
  selector: 'app-create-world',
  templateUrl: './create-world.dialog.html',
  styleUrls: ['./create-world.dialog.scss']
})
export class CreateWorldDialog implements OnInit {

  addWorldForm = this.formBuilder.group({
    name : ['',Validators.required,],
  });

  constructor(private formBuilder : FormBuilder, private dialogRef : MatDialogRef<CreateWorldDialog>) { }

  ngOnInit(): void {
  }

  submit() {
    this.dialogRef.close(this.addWorldForm.value);
  }
}
