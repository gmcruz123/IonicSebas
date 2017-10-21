import { Component } from '@angular/core';
import { ToastController, NavController, NavParams } from 'ionic-angular';
import { Destinos, ReservasProvider, Reservas } from '../../providers/reservas/reservas';
//import { User } from '../../providers/registro/registro';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  dataDestino: Destinos;
  DestinoExplorar : Destinos;
  usuarioid :string;


  constructor(public navCtrl: NavController
              ,public navParams: NavParams
              ,public reservar: ReservasProvider
              ,public toastCtrl: ToastController
              ,public guardar: Storage) {
              this.DestinoExplorar = this.navParams.get("DestinoExplorar")  
              this.dataDestino = new Destinos();
  }
  save() {
     //Guardo el id del sitio seleccionado. Envío la posición del objeto destino y lo recibo
     //con el nombre de DestinoExplorar y luego se lo asigno id destino   
     console.log("0. DestinoExplorar.id: " + this.DestinoExplorar._id )
     this.dataDestino._idDestino =  this.DestinoExplorar._id; 
     console.log("1. dataReserva._id del destino : " + this.dataDestino._idDestino);
     //Asignamos el valor del identificador del usuario a la reserva (es decir, al destino específico)
    this.guardar.get("identificacion").then((val)=> { this.dataDestino._idusuario = val + "";
    this.reservar.AgregarReserva(this.dataDestino, this.dataDestino._idusuario)
    .subscribe(res => {
      if (res.success) {
        this.showToast("¡Reserva realizada EXITOSAMENTE!");
        this.navCtrl.pop();
      } else {
        this.showToast("Error al realizar reserva");
      }
    });
    }
  )
}
  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}