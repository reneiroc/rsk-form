import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MAT_STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import { FormService } from '../../form.service';
import { Informe } from 'src/app/models/informe';

const uploadUrl = 'http://localhost:3000/api/informe/uploader'; // para definir servidor de upload

// import {MatCheckbox } from '@angular/material/checkbox';

export interface Specie {
  value: string;
  viewValue: string;
}
// Datos ejempl
const record =  { 'orden':  '47488393',
      'planta': 'PLANATA info',
      'cliente': 'Labtera',
      'container': 'MMM8888881',
      'motonave': 'motonave',
      'inporter': 'Importer dato',
      'portDest': 'Puerto Destino',
      'portOrig': 'Puerto Origen',
      'espices': 'Manzana',
      'patenteCamion': '88patente',
      'patenteCarro': '788carro patente',
      'booking': 'bookeing 55',
      'empresaTransporte': 'Empresa de Transporte',
      'cantPallets': 89,
      'horaCarga': '2018/12/02:55:48',
      'nroSeteoContainer': 4444,
      'nroBolsas': 89,
      'limpio': true,
      'preEnfriado': false,
      'buenEstado': false,
      'tipoCarga': 'tipo Carga dato',
      'ventilacion': 33,
      'coments': 'sds dasf ashd asfdas da oiasfa fa'
    };

@Component({
  selector: 'app-form-cons',
  templateUrl: './form-cons.component.html',
  styleUrls: ['./form-cons.component.scss'],
  providers: [
    FormService, // Agregado FormService ya que el servicio no esta funcioando (probando)
    { provide:  MAT_STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class FormConsComponent implements OnInit {
  fileNames = Array(); // Para almacenar nombre de archivos subidos
  formGroup1: FormGroup;
  formGroup2: FormGroup;
  formGroup3: FormGroup;
  formGroup4: FormGroup;
  container: '';
  fomrGroupContainer: FormGroup;
  fileUrl:  'http://rcwebmaster.com/images/avatars/cliente_2.jpg';
  fileName: string;
  isOptional = false;
  uploaded = false;
  selectedFile: File = null;
  isValidForm = false;
  today = new Date();
  enviado = false;
  selected = false;
  constructor(private _fb: FormBuilder, private formService: FormService, private http: HttpClient) {}


  // Usar el Array de form.Service como datos de ejemplo
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
    this.fileNames = new Array; // Inicialiazar array en cero valores

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
      container: this._fb.group({
        letras: ['', ],
        numbers: [ '', [Validators.min(0), Validators.max(99999999)] ] ,
        caracter: ['', [Validators.min(0), Validators.max(9)]]
      }),
      motonave: '',
      inporter: '',
      portDest: '',
      portOrig: '',
      espices: '',
      patenteCamion: '',
      patenteCarro: '',
      booking: '',
      empresaTransporte: '',
      cantPallets: ['', [Validators.min(0), Validators.max(99)]],
      horaCarga: '',
      nroBolsas: ['', [Validators.min(0), Validators.max(999)]]
    });
    this.formGroup3 = this._fb.group({
      limpio: '',
      preEnfriado: '',
      buenEstado: '',
      tipoCarga: '',
      seteoContainer: ['', Validators.max(999)],
      ventilacion: ['', Validators.max(99)],
      anoContainer: '',
      pti: ['' ],
      quest: ''

    });
    this.formGroup4 = this._fb.group({
      coments: 'Lorem ipsum, dolor sit amet consectetur'
    });
    this.formGroup4.controls['coments'].setValue(this.comments);


  }// end Oninit

  // Para subida de archivos
  onFileSelected(event) {
    this.selectedFile = null;
    this.selectedFile = <File> event.target.files[0];
    // this.fileName = this.selectedFile.name;

    console.log(this.selectedFile.name);
    console.log(this.selectedFile.name);

    this.selected = true;
    // this.onUpload();
  }


onUpload(event) {
    const fd = new FormData();
    console.log('Archivo es');
    console.log(this.selectedFile);
    // fd.append('informe', this.selectedFile, 'informe.jpg');
    console.log('nombre es:');
    console.log(this.selectedFile.name);
    fd.append('informe', this.selectedFile, this.selectedFile.name);
    // this.http.post(url, fd, { headers: {'Content-Type': 'multipart/form-data'}})
    this.http.post(uploadUrl, fd)
    .subscribe( res => {
      const data = <any> res;
      this.uploaded = data.creado;
      this.fileNames.push( data.name);
      console.log(this.fileNames);
    });

  }
// Workign with maximilian
  // onFileChange(event) {
  //   console.log (event);
  //   this.selectedFile = event.target.files[0];
  //   this.fileName = this.selectedFile.name;
  //   this.uploaded = true;
  // }


  // onFileChange(event) {

  //   console.log (event);
  //   this.selectedFile = event.target.files[0];
  //   // this.fileName = this.selectedFile.name;
  //   // this.uploaded = true;
  // }
  onClick(event) {
    // console.log( this.formGroup1.value );
    // console.log( this.formGroup2.value );
    // console.log( this.formGroup3.value );
    // console.log( this.formGroup4.value );

    // Converitr todos los formualarios en uno solo
    const datos = new Informe;
    datos.cliente = 'Grow';
    datos.orden = this.formGroup1.get('order').value;
    datos.planta = this.formGroup1.get('planta').value;
    datos.cliente = this.formGroup1.get('client').value;
    datos.container = this.getContainer(); // Unir campos del container
    datos.motonave = this.formGroup2.get('motonave').value;
    datos.inporter = this.formGroup2.get('inporter').value;
    datos.portDest = this.formGroup2.get('portDest').value;
    datos.portOrig = this.formGroup2.get('portOrig').value;
    datos.espices = this.formGroup2.get('espices').value;
    datos.patenteCamion = this.formGroup2.get('patenteCamion').value;
    datos.patenteCarro = this.formGroup2.get('patenteCarro').value;
    datos.booking = this.formGroup2.get('booking').value;
    datos.empresaTransporte = this.formGroup2.get('empresaTransporte').value;
    datos.cantPallets = this.formGroup2.get('cantPallets').value;
    datos.horaCarga = this.formGroup2.get('horaCarga').value;
    datos.preEnfriado = this.formGroup3.get('preEnfriado').value ? true : false;
    datos.nroBolsas = this.formGroup2.get('nroBolsas').value;
    datos.limpio = (this.formGroup3.get('limpio').value) ? true : false;
    datos.buenEstado = this.formGroup3.get('buenEstado').value ? true : false;
    datos.tipoCarga = this.formGroup3.get('tipoCarga').value;
    datos.seteoContainer = this.formGroup3.get('seteoContainer').value;
    datos.ventilacion = this.formGroup3.get('ventilacion').value;
    // datos.anoContainer = this.formGroup3.get('anoContainer').value;
    datos.pti = this.formGroup3.get('pti').value;
    datos.quest = this.formGroup3.get('quest').value;
    datos.coments = this.formGroup4.get('coments').value;


    // console.log(datos);
    this.formService.postInforme(datos)
      .subscribe(res => {console.log(res);
        this.enviado = true;
      });


  }

  getDatos() {
    // return this.formGroup1.get('aliases') as FormArray;
  }
  getContainer() {
    const a = this.formGroup2.get('container.letras').value;
    const b = this.formGroup2.get('container.numbers').value;
    const c = this.formGroup2.get('container.caracter').value;
    return a.toUpperCase()  + b + c;
  }
}
