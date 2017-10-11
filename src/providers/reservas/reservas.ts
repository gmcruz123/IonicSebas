import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
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
    insert(destino:Destinos){
        return this.http.post<SimpleResponse>(URL, destino);
    }
}
export class SimpleResponse {
    success: boolean;
    err: string;
}
export class Destinos {
    constructor(
        public nombre: string,
        public visitantes: number,
        public precio: number,
        public imagen: string) { }
}
    