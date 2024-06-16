import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { Store } from '@ngrx/store';
import { FileUploader } from 'ng2-file-upload';

import { LayoutService } from '../../services';
import * as actions from '../../state/actions';

import {
  AbstractControl,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
  Validators
} from '@angular/forms';

import { AddVideoModel } from '../../models'

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrl: './add-video.component.sass'
})
export class AddVideoComponent implements OnInit{
  form: UntypedFormGroup;
  selected = new UntypedFormControl(0);
  file: any;

  constructor( 
    private dialogRef: MatDialogRef<AddVideoComponent>,
    private store$: Store,
    private layoutService: LayoutService ){
    this.form = new UntypedFormGroup(
      {
        link: new UntypedFormControl,
        tags_description: new UntypedFormControl
      },
    );
  }
  ngOnInit(): void {

  }
  onFileChange(event: any) {
    this.file = event.target.files[0];
  }


  add(){
    switch (this.selected.value){
      case 0: this.addFromLink()
            break;
      case 1: this.addFromFile()
            break;
    }
  }

  addFromLink(): void {
    if (this.form.valid) {
      const data = this.form.getRawValue() as AddVideoModel;
      this.store$.dispatch(actions.addVideo({addVideoModel: data}));
      this.dialogRef.close();
    }
    else{
      this.form.markAllAsTouched();
    } 
  }

  addFromFile(): void {
    this.layoutService.addFile(this.file);
    this.dialogRef.close();
  }
}
