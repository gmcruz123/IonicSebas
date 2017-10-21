import {  Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

import { DetallePage } from '../../detalle/detalle';
import { User } from '../../../providers/registro/registro';
import { Storage } from '@ionic/storage';
//import { DestinosDataProvider } from '../../../providers/models/destinos-data';
import {  ReservasProvider, Destinos } from '../../../providers/reservas/reservas';

@Component({
  selector: 'page-explorar',
  templateUrl: 'explorar.html',
})

export class ExplorarPage {

  //Para mostrar Destinos en pantalla de  Explorer
  data: Destinos[] = [];
  usuario: User
 // DestinoID: string
  constructor(
              public navCtrl: NavController
              , public navParams: NavParams
              , public service: ReservasProvider
              , public guardado: Storage) {      
   //   this.DestinoID = navParams.get('DestinoID');
    }

  ionViewDidLoad() {
    this.loadDestinos();
  }

  loadDestinos(refresher = null){
    this.service.all().subscribe(res =>{
      this.data = res; 
      if(refresher != null) refresher.complete();
    });
  }
  doRefresh(refresher){
    this.loadDestinos(refresher);
  }
 detalle(index:number){
    console.log("0.0. indexDestino Elegido: " +this.data[index]._id )
    this.navCtrl.push(DetallePage, {DestinoExplorar:this.data[index]});
  }
}