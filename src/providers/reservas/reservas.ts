import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { User } from '../registro/registro';
import { URL } from '../../app/app.config';
//import { Observable } from 'rxjs/Observable';
@Injectable()
export class ReservasProvider {
    
    constructor(public http: HttpClient){
        console.log('Control de reservas')
    }
    all(){
        let url = URL+"/reservas"
        return this.http.get<Destinos[]>(url)
    }
    AgregarReserva(DestinosID: Destinos , usuarioid:any){
        let urlfinal = URL + "/reservas"+ "/"+ DestinosID;
        //let urlfinal = URL + "/reservas";
        DestinosID._idusuario = usuarioid
        return this.http.post<SimpleResponse>(urlfinal, DestinosID);
    }
}
export class SimpleResponse {
    success: boolean;
    err: string;
}
export class Destinos {
    constructor(
        public _idusuario:any,
        public _id: string,
        public nombre: string,
        public visitantes: number,
       // public fecha: Date,
        public precio: number,
        public imagen: string,
        public usuario:string ) { }
}
    