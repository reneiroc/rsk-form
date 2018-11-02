import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cons',
  templateUrl: './form-cons.component.html',
  styleUrls: ['./form-cons.component.css']
})
export class FormConsComponent implements OnInit {

  formGroup1: FormGroup;
  formGroup2: FormGroup;
  isOptional = false;
  formDate: Date = null;
  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup1 = this._fb.group({
      nombre: '',
      order: [''],
      planta: [''],
      client: [''],

    });
    this.formGroup2 = this._fb.group({
      formDate: ['null', Validators.required],
      container: '',
      motonave: '',
      importer: ''
    });
  }

}
