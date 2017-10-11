import { Injectable } from '@angular/core';
//import { Destinos } from './destinos';
@Injectable () 
    export class DestinosDataProvider{

        data: Destinos[];

        constructor(){
            this.loadData();
        }
                
  loadData() {
    this.data = [ 
    // { nombre: 'Hacienda Calibio', visitantes: 2, precio: 7000, imagen: 'https://i.ytimg.com/vi/w5DaQPVis5A/maxresdefault.jpg' },
    // { nombre: 'Observatorio Astronomico Sueño Paraiso', visitantes: 1, precio: 5000, imagen: 'https://static.wixstatic.com/media/f53e10_1411993f371c45dbaaf654e7f138d304.jpg/v1/fill/w_676,h_591,al_c,q_85/f53e10_1411993f371c45dbaaf654e7f138d304.webp' },
    // { nombre: 'Mamá Lombriz', visitantes: 1, precio: 3000, imagen: 'http://frea.com.co/images/logo_mama_lombriz.jpg' },
    // { nombre: 'Canopy Ardilla', visitantes: 1, precio: 5000, imagen: 'http://www.tuciudadenred.com/data/foto/gr_1467916411_1004209900.jpg' },
    // { nombre: 'Siete Sabores', visitantes: 4, precio: 12000, imagen: 'http://turronessirvent.com/wp-content/uploads/2016/01/helados.jpg' },
    // { nombre: 'Chocolate Pasion', visitantes: 1, precio: 5000, imagen: 'http://static.vix.com/es/sites/default/files/styles/large/public/imj/elgranchef/H/Helado%20de%20chocolate%20sin%20leche.jpg' },
    // { nombre: 'Frutos Rojos', visitantes: 1, precio: 5000, imagen: 'http://2.bp.blogspot.com/-qZ2Oi3Z3r9M/VNqo_iCRm6I/AAAAAAAAF_A/dcwSL1RgZJI/s1600/P2070250.JPG' },
    // { nombre: 'Helado de Fresas', visitantes: 1, precio: 5000, imagen: 'https://s-media-cache-ak0.pinimg.com/originals/eb/25/57/eb2557a80bdcf64f1f0d5cd3aa9e22da.jpg' },
     ];
    }
}

export class Destinos {
    constructor(
        public nombre: string,
        public visitantes: number,
        public precio: number,
        public imagen: string) { }
}
    