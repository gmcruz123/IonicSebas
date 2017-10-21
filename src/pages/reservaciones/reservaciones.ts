import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReservasProvider,Reservas, Destinos } from '../../providers/reservas/reservas';
//import { User } from '../../providers/registro/registro';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-reservaciones',
  templateUrl: 'reservaciones.html',
})
export class ReservasPage {
  data: Reservas[] = [];
  //dataReserva: Destinos;
  //usuario: User;

  constructor (public navCtrl: NavController
              , public navParams: NavParams
              , public service: ReservasProvider
              , public guardado: Storage  ) {    
             //   this.dataReserva = new Destinos();  
 }

 //Realizar actualizaciones a lo que se cargue pág
 ionViewDidLoad() {
  this.loadReservas();
}
loadReservas(refresher = null){
  //Utilizo el retorno de una promesa para almacenar el valor del id usuario en var storage
   this.guardado.get("identificacion").then(id =>{
      console.log("4. id usuario desde reservaciones.ts: " + id)
      this.service.MostrarReservas(id).subscribe(res =>{
        this.data = res; 
        console.log("5. Aquí deberian mostrarse las reservas de usuario")
        if(refresher != null) refresher.complete();
    });
  })
}

// //Realizar actualizaciones al generar evento
 doRefresh(refresher){
     this.loadReservas(refresher);
   }
}