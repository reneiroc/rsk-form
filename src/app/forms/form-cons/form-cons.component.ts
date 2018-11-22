import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MAT_STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

// import {MatCheckbox } from '@angular/material/checkbox';

export interface Specie {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-cons',
  templateUrl: './form-cons.component.html',
  styleUrls: ['./form-cons.component.scss'],
  providers: [{
    provide: MAT_STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class FormConsComponent implements OnInit {

  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  formGroup4: FormGroup;
  fileUrl:  'http://rcwebmaster.com/images/avatars/cliente_2.jpg';
  fileName: string;
  isOptional = false;
  uploaded = false;
  selectedFile: File = null;
  constructor(private _fb: FormBuilder) {}
  isValidForm = false;
  today = new Date();
  // specie = ['Uva', 'Pera', 'Frutilla', 'Manzana'];
  mySpecie: Specie[] = [
    {value: 'uva-0', viewValue: 'Uvas'},
    {value: 'frutilla-1', viewValue: 'Peras'},
    {value: 'pera-2', viewValue: 'Frutilla'},
    {value: 'manzana-4', viewValue: 'Manzanas'},
    {value: 'manzana-4', viewValue: 'Manzanas'},
    {value: 'manzana-4', viewValue: 'Manzanas'},
    {value: 'manzana-4', viewValue: 'Manzanas'},
    {value: 'manzana-4', viewValue: 'Manzanas'},
    {value: 'manzana-4', viewValue: 'Manzanas'},
    {value: 'manzana-4', viewValue: 'Manzanas'},
    {value: 'manzana-4', viewValue: 'Manzanas'},
    {value: 'manzana-4', viewValue: 'Manzanas'},
    {value: 'manzana-4', viewValue: 'Manzanas'},
    {value: 'manzana-4', viewValue: 'Manzanas'}
  ];
  tipoCarga: Specie[] = [{value: 'Grua', viewValue: 'Grua'},
  {value: 'Grua', viewValue: 'Carro'},
  {value: 'Grua', viewValue: 'Camion'}
];
  esp = ['Uva', 'Pera', 'Fresa'];
  ngOnInit() {


    this.formGroup1 = this._fb.group({
      fecha: this.today.toLocaleString('en-GB'),
      order: ['Prueba',  Validators.required],
      planta: ['Prueba', Validators.required],
      client: 'Grower'

    });
    this.formGroup1.controls['client'].disable();
    this.formGroup1.controls['fecha'].disable();

    this.formGroup2 = this._fb.group({
      // formDate: ['null', Validators.required],
      container: ['2323'],
      motonave: '',
      importer: '',
      portDest: '',
      portOrig: '',
      espices: '',
      patenteCamion: '',
      patenteCarro: '',
      booking: '',
      empresaTrasnporte: '',
      cantPallets: '',
      horaCarga: '',
      nroSeroContainer: '',
      nroBolsas: ''
    });
    this.formGroup3 = this._fb.group({
      limpio: '',
      preEnfriado: [false],
      buenEstado: '',
      tipoCarga: '',
      seteoContainer: '',
      ventilacion: ''

    });
    this.formGroup4 = this._fb.group({
      coments: ''
    });

  }
  onFileChange(event) {
    console.log (event);
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name;
    this.uploaded = true;
  }
  onClick(event) {
    console.log (event);
  }
}
