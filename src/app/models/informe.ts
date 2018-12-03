export class Informe {

  constructor(
    _id = null,
    orden =  '' ,
    planta = '' ,
    cliente = '' ,
    container = '' ,
    motonave = ''  ,
    inporter = '' ,
    portDest = '' ,
    portOrig = '' ,
    espices = '' ,
    patenteCamion = ''  ,
    patenteCarro = '' ,
    booking = '' ,
    empresaTransporte = '' ,
    cantPallets = 0,
    horaCarga =  new Date() ,
    seteoContainer = 0,
    nroBolsas = 0 ,
    limpio = false ,
    preEnfriado =  false ,
    buenEstado = false ,
    tipoCarga = '',
    ventilacion = 0 ,
    anoContainer = new Date(),
    pti = new Date(),
    quest = '',
    coments = ''
    // _id = null,
    // orden =  'orden froma ngular' ,
    // planta = 'planta form angular' ,
    // cliente = '' ,
    // container = '' ,
    // motonave = 'motonave'  ,
    // inporter = 'inporter' ,
    // portDest = 'destino' ,
    // portOrig = 'Valparaiso' ,
    // espices = 'Uva' ,
    // patenteCamion = 'patente camion'  ,
    // patenteCarro = 'patente carro' ,
    // booking = '' ,
    // empresaTransporte = 'EMpresa transporte' ,
    // cantPallets = 6,
    // horaCarga =  new Date() ,
    // seteoContainer = 45,
    // nroBolsas = 6 ,
    // limpio = true ,
    // preEnfriado =  true ,
    // buenEstado = false ,
    // tipoCarga = 'Grua',
    // ventilacion = 343 ,
    // anoContainer = new Date(),
    // pti = new Date(),
    // quest = 'quest',
    // coments = ''
    ) {
      this._id = _id;
      this.orden =  orden;
      this.planta = planta;
      this.cliente = cliente;
      this.container = container;
      this.motonave = motonave;
      this.inporter = inporter;
      this.portDest = portDest;
      this.portOrig = portOrig;
      this.espices = espices;
      this.patenteCamion = patenteCamion ;
      this.patenteCarro = patenteCarro;
      this.booking = booking;
      this.empresaTransporte = empresaTransporte;
      this.cantPallets = cantPallets;
      this.horaCarga = horaCarga;
      this.seteoContainer = seteoContainer;
      this.nroBolsas = nroBolsas;
      this.limpio = limpio;
      this.preEnfriado =  preEnfriado;
      this.buenEstado = buenEstado;
      this.tipoCarga = tipoCarga;
      this.ventilacion = ventilacion;
      this.anoContainer = anoContainer;
      this.pti = pti;
      this.quest = quest;
      this.coments = coments;
    }

    _id: String;
    orden:  String ;
    planta: String ;
    cliente: String ;
    container: String ;
    motonave: String  ;
    inporter: String ;
    portDest: String ;
    portOrig: String ;
    espices: String ;
    patenteCamion: String  ;
    patenteCarro: String ;
    booking: String ;
    empresaTransporte: String ;
    cantPallets: Number ;
    horaCarga:  Date ;
    nroBolsas: Number ;
    limpio: Boolean ;
    preEnfriado:  Boolean ;
    buenEstado: Boolean ;
    tipoCarga: String;
    seteoContainer ;
    ventilacion: Number ;
    anoContainer: Date;
    pti: Date;
    quest: String;
    coments: String;
}
