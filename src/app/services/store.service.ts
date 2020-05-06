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
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veniam sunt iusto, quia eius dignissimos, non magni sit culpa dolores, impedit dolore totam labore ex numquam quidem? Officiis, repudiandae eius.',
      img: 'assets/Tienda/CineColombia.png',
      tyc: 'Terminos y condiciones de como usar este bono, como lo recibirá, fecha de caducidad, etc',
      date: '1941-11-01',
      price: 1200,
      category: 'boleto, cine',
      quantity: 15

    },
    {
      id: 1,
      nombre: 'Cine Mark',
      // tslint:disable-next-line: max-line-length
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veniam sunt iusto, quia eius dignissimos, non magni sit culpa dolores, impedit dolore totam labore ex numquam quidem? Officiis, repudiandae eius.',
      img: 'assets/Tienda/Cinemark.png',
      tyc: 'Terminos y condiciones de como usar este bono, como lo recibirá, fecha de caducidad, etc',
      date: '1939-05-01',
      price: 1200,
      category: 'boleto, cine',
      quantity: 335
    },
    {
      id: 2,
      nombre: 'Comfamiliar',
      // tslint:disable-next-line: max-line-length
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veniam sunt iusto, quia eius dignissimos, non magni sit culpa dolores, impedit dolore totam labore ex numquam quidem? Officiis, repudiandae eius.',
      img: 'assets/Tienda/Consota.png',
      tyc: 'Terminos y condiciones de como usar este bono, como lo recibirá, fecha de caducidad, etc',
      date: '1964-01-01',
      price: 5500,
      category: 'paseo, turismo',
      quantity: 12
    },
    {
      id: 3,
      nombre: 'Termales Santa Rosa de Cabal',
      // tslint:disable-next-line: max-line-length
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veniam sunt iusto, quia eius dignissimos, non magni sit culpa dolores, impedit dolore totam labore ex numquam quidem? Officiis, repudiandae eius.',
      img: 'assets/Tienda/Termales.png',
      tyc: 'Terminos y condiciones de como usar este bono, como lo recibirá, fecha de caducidad, etc',
      date: '1962-05-01',
      price: 9000,
      category: 'paseo, turismo',
      quantity: 65
    },
    {
      id: 4,
      nombre: 'Pizza Piccolo',
      // tslint:disable-next-line: max-line-length
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veniam sunt iusto, quia eius dignissimos, non magni sit culpa dolores, impedit dolore totam labore ex numquam quidem? Officiis, repudiandae eius.',
      img: 'assets/Tienda/Piccolo.png',
      tyc: 'Terminos y condiciones de como usar este bono, como lo recibirá, fecha de caducidad, etc',
      date: '1940-06-01',
      price: 3200,
      category: 'comida, restaurante',
      quantity: 32
    },
    {
      id: 5,
      nombre: 'Falabella',
      // tslint:disable-next-line: max-line-length
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veniam sunt iusto, quia eius dignissimos, non magni sit culpa dolores, impedit dolore totam labore ex numquam quidem? Officiis, repudiandae eius.',
      img: 'assets/Tienda/Falabella.png',
      tyc: 'Terminos y condiciones de como usar este bono, como lo recibirá, fecha de caducidad, etc',
      date: '1962-08-01',
      price: 8000,
      category: 'ropa',
      quantity: 28
    },
    {
      id: 6,
      nombre: 'Zara',
      // tslint:disable-next-line: max-line-length
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veniam sunt iusto, quia eius dignissimos, non magni sit culpa dolores, impedit dolore totam labore ex numquam quidem? Officiis, repudiandae eius.',
      img: 'assets/Tienda/Zara.png',
      tyc: 'Terminos y condiciones de como usar este bono, como lo recibirá, fecha de caducidad, etc',
      date: '1974-11-01',
      price: 8000,
      category: 'ropa',
      quantity: 0
    },
    {
      id: 7,
      nombre: 'Kukos',
      // tslint:disable-next-line: max-line-length
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veniam sunt iusto, quia eius dignissimos, non magni sit culpa dolores, impedit dolore totam labore ex numquam quidem? Officiis, repudiandae eius.',
      img: 'assets/Tienda/Kukos.png',
      tyc: 'Terminos y condiciones de como usar este bono, como lo recibirá, fecha de caducidad, etc',
      date: '1974-11-01',
      price: 8000,
      category: 'ropa',
      quantity: 88
    },
    {
      id: 8,
      nombre: 'Bioparque Ukumarí',
      // tslint:disable-next-line: max-line-length
      bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit veniam sunt iusto, quia eius dignissimos, non magni sit culpa dolores, impedit dolore totam labore ex numquam quidem? Officiis, repudiandae eius.',
      img: 'assets/Tienda/Ukumari.png',
      tyc: 'Terminos y condiciones de como usar este bono, como lo recibirá, fecha de caducidad, etc',
      date: '1974-11-01',
      price: 4300,
      category: 'paseo, turismo',
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

