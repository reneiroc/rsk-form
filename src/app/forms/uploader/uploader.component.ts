
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {MAT_STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import { FormService } from '../../form.service';
import { Informe } from 'src/app/models/informe';
const uploadUrl = 'http://localhost:3000/api/informe/uploader'; // para definir servidor de upload
@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  selectedFile: File = null;
  selected = false;
  constructor(private _fb: FormBuilder, private formService: FormService, private http: HttpClient) {}

  ngOnInit() {
  }

  onFileSelected(event) {

    this.selectedFile = <File> event.target.files[0];
    console.log(this.selectedFile.name);
    this.selected = true;
  }


onUpload() {
    const fd = new FormData();
    console.log('Archivo es');
    console.log(this.selectedFile.name);
    fd.append('informe', this.selectedFile, this.selectedFile.name);
    this.http.post(uploadUrl, fd)
    .subscribe( res => {
      console.log(res);
     });

  }
}
