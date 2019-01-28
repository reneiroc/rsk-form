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
    termografo1 = '',
    termografo2 = '',
    termografoPallet1 = '',
    termografoPallet2 = '',
    seteoContainer = 0,
    cantCajas = 0 ,
    limpio = false ,
    preEnfriado =  false ,
    buenEstado = false ,
    tipoCarga = '',
    ventilacion = 0 ,
    anoContainer = new Date(),
    pti = new Date(),
    quest = false,
    coments = '',
    admosferaNumero = 0,
    admosferaPorcentaje = 0,
    a1 = '', ta1 = 0, b1 = '', tb1 = 0,
    a2 = '', ta2 = 0, b2 = '', tb2 = 0,
    a3 = '', ta3 = 0, b3 = '', tb3 = 0,
    a4 = '', ta4 = 0, b4 = '', tb4 = 0,
    a5 = '', ta5 = 0, b5 = '', tb5 = 0,
    a6 = '', ta6 = 0, b6 = '', tb6 = 0,
    a7 = '', ta7 = 0, b7 = '', tb7 = 0,
    a8 = '', ta8 = 0, b8 = '', tb8 = 0,
    a9 = '', ta9 = 0, b9 = '', tb9 = 0,
    a10 = '', ta10 = 0, b10 = '', tb10 = 0,

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
      this.cantCajas = cantCajas;
      this.termografoPallet1 = termografoPallet1;
      this.termografoPallet2 = termografoPallet2;
      this.termografo1 = termografo1;
      this.termografo2 = termografo2;
      this.limpio = limpio;
      this.preEnfriado =  preEnfriado;
      this.buenEstado = buenEstado;
      this.tipoCarga = tipoCarga;
      this.ventilacion = ventilacion;
      this.anoContainer = anoContainer;
      this.admosferaNumero = admosferaNumero;
      this.admosferaPorcentaje = admosferaPorcentaje;
      this.pti = pti;
      this.quest = quest;
      this.coments = coments;
      this.a1 = a1; this.ta1 = ta1; this.b1 = b1; this.tb1 = tb1;
      this.a2 = a2; this.ta2 = ta2; this.b2 = b2; this.tb2 = tb2;
      this.a3 = a3; this.ta3 = ta3; this.b3 = b3; this.tb3 = tb3;
      this.a4 = a4; this.ta4 = ta4; this.b4 = b4; this.tb4 = tb4;
      this.a5 = a5; this.ta5 = ta5; this.b5 = b5; this.tb5 = tb5;
      this.a6 = a6; this.ta6 = ta6; this.b6 = b6; this.tb6 = tb6;
      this.a7 = a7; this.ta7 = ta7; this.b7 = b7; this.tb7 = tb7;
      this.a8 = a8; this.ta8 = ta8; this.b8 = b8; this.tb8 = tb8;
      this.a9 = a9; this.ta9 = ta9; this.b9 = b9; this.tb9 = tb9;
      this.a10 = a10; this.ta10 = ta10, this.b10 = b10; this.tb10 = tb10;
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
    cantCajas: Number ;
    limpio: Boolean ;
    preEnfriado:  Boolean ;
    buenEstado: Boolean ;
    tipoCarga: String;
    seteoContainer: Number ;
    termografo1: String;
    termografo2: String;
    termografoPallet1: String;
    termografoPallet2: String;
    admosferaNumero: Number;
    admosferaPorcentaje: Number;
    ventilacion: Number ;
    anoContainer: Date;
    pti: Date;
    quest: Boolean;
    coments: String;
    a1: String;
    ta1: Number;
    b1: String;
    tb1: Number;
    a2: String;
    ta2: Number;
    b2: String;
    tb2: Number;
    a3: String;
    ta3: Number;
    b3: String;
    tb3: Number;
    a4: String;
    ta4: Number;
    b4: String;
    tb4: Number;
    a5: String;
    ta5: Number;
    b5: String;
    tb5: Number;
    a6: String;
    ta6: Number;
    b6: String;
    tb6: Number;
    a7: String;
    ta7: Number;
    b7: String;
    tb7: Number;
    a8: String;
    ta8: Number;
    b8: String;
    tb8: Number;
    a9: String;
    ta9: Number;
    b9: String;
    tb9: Number;
    a10: String;
    ta10: Number;
    b10: String;
    tb10: Number;
}
