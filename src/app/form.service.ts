import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Informe } from './models/informe';


const record =  { 'orden':  '47488393',
      'planta': 'PLANATA info',
      'cliente': 'Labtera',
      'container': 'MMM8888881',
      'motonave': 'motonave',
      'importer': 'Importer dato',
      'portDest': 'Puerto Destino',
      'portOrig': 'Puerto Origen',
      'espices': 'Manzana',
      'patenteCamion': '88patente',
      'patenteCarro': '788carro patente',
      'booking': 'bookeing 55',
      'empresaTrasnporte': 'Empresa de Trasnporte',
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



@Injectable(
  {providedIn: 'root'}
)
export class FormService {

  registo = record;
  informe: Informe;
  private filesNames = new Array();

  readonly URL_API = 'http://35.211.175.246/node/api/informe';
  // readonly URL_API = 'http://localhost:3000/api/informe';
  constructor(private http: HttpClient) {}

  postInforme(infome: Informe) {
    console.log('from Services class');
    console.log('informe');
    return this.http.post (this.URL_API, infome);
  }
  putInforme(informe: Informe) {
    return this.http.put(this.URL_API + `/${informe._id}`, informe);
  }
  getInfome() {
    return this.http.get(this.URL_API);
  }


  getFilesNames() {// Retorn nombres de archivos cargados
    return this.filesNames;
  }
  pushFilesNames(name: string) {// Agrego nombres de archivos al array
    return this.filesNames.push(name);
  }
}
