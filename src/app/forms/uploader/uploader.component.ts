
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
// import {MAT_STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { FormService } from '../../form.service';
// import { Informe } from 'src/app/models/informe';
// import { request } from 'http';
const uploadUrl = 'http://localhost:3000/api/informe/uploader'; // para definir servidor de upload
// const uploadUrl = 'http://35.211.175.246/node/api/informe/uploader'; // para definir servidor de upload

interface Respuesta {
  file?: string;

}


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],

})

export class UploaderComponent implements OnInit {

  selectedFile: File = null;
  selected = false;
  fileName: string;
  uploaded = false;
  constructor(private _fb: FormBuilder,  private http: HttpClient) {}

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = null;
    this.selectedFile = <File> event.target.files[0];
    // this.fileName = this.selectedFile.name;
    // almaceno elnombre del archivo en el servicio
    // this.formService.pushFilesNames(this.selectedFile.name);
    // console.log(this.formService.getFilesNames());
    this.selected = true;
  }



onUpload() {
    const fd = new FormData();
    console.log('Archivo es');
    console.log(this.selectedFile.name);

    fd.append('informe', this.selectedFile, this.selectedFile.name);
    this.http.post(uploadUrl, fd)
    .subscribe( res => {
      const data = <any> res;
      this.uploaded = data.creado;
      this.selected = false; // para ocultar nuevamente el boton upload
      console.log(data.name);
      this.fileName = this.selectedFile.name;
     });

  }
}
