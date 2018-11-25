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
    {value: 'Uvas', viewValue: 'Uvas'},
    {value: 'Peras', viewValue: 'Peras'},
    {value: 'Frutillas', viewValue: 'Frutilla'},
    {value: 'Manzanas', viewValue: 'Manzanas'},
    {value: 'Ceresa', viewValue: 'Cereza'},
    {value: 'Durazno', viewValue: 'Durazno'},
  ];
  tipoCarga: Specie[] = [{value: 'Grua', viewValue: 'Grua'},
  {value: 'Grua', viewValue: 'Carro'},
  {value: 'Grua', viewValue: 'Camion'}
];
a = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iusto saepe nesciunt non';
b =  'ex itaque illum optio fugit, enim odit voluptate officiis voluptatum, similique est. Maiores dolor porro tenetur mollitia.';
comments = this.a.concat(this.b);
puertoCarga: Specie[] = [
  {value: 'Arica', viewValue: 'Arica'},
  {value: 'Iquique', viewValue: 'Iquique'},
  {value: 'Conquimbo', viewValue: 'Coquimbo'},
  {value: 'Valparaiso', viewValue: 'Valparaiso'},
  {value: 'San Antonio', viewValue: 'San Antonio'},
  {value: 'Talcahuano - San Vicente', viewValue: 'Talcahuano – San Vicente'},
  {value: 'Puerto Montt', viewValue: 'Puerto Mont'},
  {value: 'Chacabuco', viewValue: 'Chacabuco'},
  {value: 'Austral', viewValue: 'Austral'}
];
  esp = ['Uva', 'Pera', 'Fresa'];

  ngOnInit() {


    this.formGroup1 = this._fb.group({
      fecha: this.today.toLocaleString('en-GB'),
      order: ['',  Validators.required],
      planta: ['', Validators.required],
      client: 'Grower'

    });
    this.formGroup1.controls['client'].disable();
    this.formGroup1.controls['fecha'].disable();

    this.formGroup2 = this._fb.group({
      // formDate: ['null', Validators.required],
      container: [''],
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
      preEnfriado: '',
      buenEstado: '',
      tipoCarga: '',
      seteoContainer: '',
      ventilacion: '',
      anoContainer: '',
      pti: ['' ],
      quest: ''

    });
    this.formGroup4 = this._fb.group({
      coments: 'Lorem ipsum, dolor sit amet consectetur'
    });
    this.formGroup4.controls['coments'].setValue(this.comments);
  }
  onFileChange(event) {
    console.log (event);
    this.selectedFile = event.target.files[0];
    this.fileName = this.selectedFile.name;
    this.uploaded = true;
  }
  onClick(event) {
    // console.log (event);

  }

  getDatos() {
    // return this.formGroup1.get('aliases') as FormArray;
  }

}
