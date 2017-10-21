import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { User } from '../registro/registro';
import { URL } from '../../app/app.config';
@Injectable()
export class ReservasProvider {
    data: Destinos;
    constructor(public http: HttpClient){
        console.log('Control de reservas')
    }
    //Mostrar sitios turísticos
    all(){
        let url = URL+"/sitios"
        return this.http.get<Destinos[]>(url)
    }
    //Agregar reservas:
    AgregarReserva(Destinos: Destinos , usuarioid:string){
        console.log("2. Usuarioid: "+usuarioid);
        let urlfinal = URL + "/reservas";
        console.log("3. Destinos._Usuarioid: " + Destinos._idusuario);
        return this.http.post<SimpleResponse>(urlfinal, Destinos);
    }
    MostrarReservas(id: string){
        console.log("5. IdUsuario desde Reservas.ts: "+id)
        let urlReserva = URL + "/reservas/" + id;
        console.log("6. IdUsuario Enviado exitosamente")
        return this.http.get<Reservas[]>(urlReserva);
    }
}
export class SimpleResponse {
    success: boolean;
    err: string;
}
export class Destinos {
        public _idusuario:string;
        public _id: string;
        public _idDestino: string;
        public nombre: string;
        public visitantes: number;
        public precio: number;
        public imagen: string;
    }
export class Reservas {
        public fecha: Date;
        public NumPersonas: number;
        public nombre: string;
}