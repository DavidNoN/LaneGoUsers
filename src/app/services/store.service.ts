import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private stores: Store[] = [
    {
      id: 0,
      nombre: 'Cine Colombia',
      // tslint:disable-next-line: max-line-length
      bio: 'Obtendrá un bono de entrada de una boleta 2D en Cine Colombia.',
      img: 'assets/Tienda/CineColombia.png',
      tyc: 'Vigencia del bono para ser redimido en las taquillas de Cine Colombia: Hasta el 25 de Septiembre del 2020. No válido para 3D, DINAMIX 4D ni Contenido Alternativo. Vencido el plazo, el bono no podrá redimirse ni se devolverá las monedas con las que fue comprada. Bono válido solo en perfecto estado. Prohibida su reventa. No se hacen cambios. No canjeables por dinero, ni otros productos. No acumulables con otros premios.', //'Terminos y condiciones de como usar este bono, como lo recibirá, fecha de caducidad, etc',
      date: '1941-11-01',
      price: 1200,
      category: 'Boleto, Cine',
      quantity: 15

    },
    {
      id: 1,
      nombre: 'Cine Mark',
      // tslint:disable-next-line: max-line-length
      bio:'Obtendrá un bono de entrada de una boleta 2D en Cine Mark',
      img: 'assets/Tienda/Cinemark.png',
      tyc: 'Vigencia del bono para ser redimido en las taquillas de Cine Mark: Hasta el 30 de Agosto del 2020.La redención de la boleta 2D no es válida para formato 3D, XD, DBOX, PREMIER NI BISTRO.Indispensable presentar la boleta en taquilla para redimir el premio. Una vez redimida la boleta, el sistema no permite cambios ni devoluciones. Por lo tanto, la boleta quedará como redimida.No acumulable con otros premios. Aplican condiciones y restricciones.',
      date: '1939-05-01',
      price: 1200,
      category: 'Boleto, Cine',
      quantity: 335
    },
    {
      id: 2,
      nombre: 'Comfamiliar',
      // tslint:disable-next-line: max-line-length
      bio: 'Obtendrá un boleto de entrada para el parque recreacional Consotá',
      img: 'assets/Tienda/Consota.png',
      tyc: 'Vigencia del bono para ser redimido en el Parque recreacional Consotá: Hasta el 30 de Octubre del 2020. Los servicios que están incluidos en el ingreso con el boleto son: piscinas, chiva, recorrido de la Memoria Indígena y Granja de Noé, adicionalmente todas las actividades recreativas al interior del parque. Una vez pasada la fecha de vigencia del boleto este queda inservible. No acumulable con otros premios',
      date: '1964-01-01',
      price: 5500,
      category: 'Paseo, Turismo',
      quantity: 12
    },
    {
      id: 3,
      nombre: 'Termales Santa Rosa de Cabal',
      // tslint:disable-next-line: max-line-length
      bio: 'Adquirirá un boleto de entrada para el balneario Termales de Santa Rosa de Cabal',
      img: 'assets/Tienda/Termales.png',
      tyc: 'El boleto tendra vigencia para ser redimido: Hasta 20 de Diciembre del 2020. El bono es un pasaporte Termal balneario, el cual incluye:  Ingreso al parque termal. Acceso a 3 piscinas Termales y 1 para niños. Uso de vestier y guardaropas. Sendero ecologíco con cascadas naturales. Una vez pasada la fecha de vigencia del boleto este queda inservible. No acumulable con otros premios ',
      date: '1962-05-01',
      price: 9000,
      category: 'Paseo, Turismo',
      quantity: 65
    },
    {
      id: 4,
      nombre: 'Pizza Piccolo',
      // tslint:disable-next-line: max-line-length
      bio: 'Obtendrá un cupón de descuento en Pizza Piccolo',
      img: 'assets/Tienda/Piccolo.png',
      tyc: 'Vigencia del cupón en restaurante Pizza Piccolo: Hasta 30 de Junio del 2020. El cupón es del 40% de descuento del valor total en sólo pizza premium. No incluye bebidas ni otras opciones adicionales. Una vez pasada la fecha de vigencia del boleto este queda inservible. No acumulable con otros premios',
      date: '1940-06-01',
      price: 3200,
      category: 'Comida, Restaurante',
      quantity: 32
    },
    {
      id: 5,
      nombre: 'Falabella',
      // tslint:disable-next-line: max-line-length
      bio: 'Obtendrá un cupón de descuento en tiendas Falabella',
      img: 'assets/Tienda/Falabella.png',
      tyc: 'Vigencia del cupón en tiendas Falabella: Hasta el 20 de Julio del 2020. El cupón es del 25% en vestuario de mujer, hombre y niños, ropa deportiva y articulos de cocina. El descuento se aplica sobre el precio normal del producto. Descuentos válidos únicamente en Tiendas Falabella. Presentar el cupón de descuento en las cajas de tienda Falabella antes de realizar el pago de los productos. No aplica para eventos madrugón ni Trasnochón Falabella. Una vez pasada la fecha de vigencia del boleto este queda inservible. No acumulable con otros premios ',
      date: '1962-08-01',
      price: 8000,
      category: 'Ropa',
      quantity: 28
    },
    {
      id: 6,
      nombre: 'Zara',
      // tslint:disable-next-line: max-line-length
      bio: 'Obtendrá un cupón de descuento en tiendas Zara',
      img: 'assets/Tienda/Zara.png',
      tyc: 'Vigencia del cupón en tiendas Zara: Hasta el 15 de Septiembre del 2020. El cupón es del 30% de descuento  del valor total de la compra. Una vez pasada la fecha de vigencia del boleto este queda inservible. No acumulable con otros premios ',
      date: '1974-11-01',
      price: 8000,
      category: 'Ropa',
      quantity: 0
    },
    {
      id: 7,
      nombre: 'Kukos',
      // tslint:disable-next-line: max-line-length
      bio: 'Obtendrá un cupón de descuento en tiendas Kuko`s',
      img: 'assets/Tienda/Kukos.png',
      tyc: 'Vigencia del cupón en tiendas Kuko`s: Hasta el 25 de Agosto del 2020. El cupón es del 35% de descuento del valor total de la compra. Una vez pasada la fecha de vigencia del boleto este queda inservible. No acumulable con otros premios ',
      date: '1974-11-01',
      price: 8000,
      category: 'Ropa',
      quantity: 88
    },
    {
      id: 8,
      nombre: 'Bioparque Ukumarí',
      // tslint:disable-next-line: max-line-length
      bio: 'Adquirirá un boleto de entrada al lugar turístico Bioparque Ukumarí',
      img: 'assets/Tienda/Ukumari.png',
      tyc: 'El boleto tendra vigencia para ser redimido: Hasta el 10 de Noviembre del 2020. El boleto es un pasaporte el cual incluye la entrada al parque y un tour por todas las instalaciones. No incluye parqueadero ni otras opciones.  Una vez pasada la fecha de vigencia del boleto este queda inservible. No acumulable con otros premios',
      date: '1974-11-01',
      price: 4300,
      category: 'Paseo, Turismo',
      quantity: 2
    },
  ];


constructor() {


}

getStores() {
return this.stores;
}

getStore( idx: string ) {
return this.stores[idx];
}


searchStores( termino: string ): Store[] {

let storeArr: Store[] = [];
termino = termino.toLowerCase();
for (let i = 0; i < this.stores.length; i ++ ) {
  let store = this.stores[i];
let nombre = store.nombre.toLowerCase();
if ( nombre.indexOf( termino ) >= 0 ) {
  store.idx = i;
  storeArr.push( store );
}
}

return storeArr;
}

}

export interface Store {
      id?: number;
      nombre: string;
      bio: string;
      img: string;
      tyc: string;
      date: string;
      price: number;
      category: string;
      quantity: number;
      idx?: number;
}

