import { Component } from '@angular/core';
import { IonicPage, ToastController, NavController, NavParams } from 'ionic-angular';
import { Destinos, ReservasProvider } from '../../providers/reservas/reservas';
import { User } from '../../providers/registro/registro';

import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  usuario:User;
  destino: Destinos;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public reservar: ReservasProvider,
              public toastCtrl: ToastController,
              public guardar: Storage) {
              this.destino = new Destinos("","","",0,0,"","" );
  }

  save() {
    let identidad = this.guardar.get(this.usuario._id)
    this.reservar.AgregarReserva(this.destino, identidad)
      .subscribe(res => {
        if (res.success) {
          this.showToast("Reserva realizada !");
          this.navCtrl.pop();
        } else {
          this.showToast("Error al realizar reserva");
        }
      });
  }

  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}

