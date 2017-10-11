import {  Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

//import { DestinosDataProvider } from '../../../providers/models/destinos-data';
import {  ReservasProvider, Destinos } from '../../../providers/reservas/reservas';
@Component({
  selector: 'page-explorar',
  templateUrl: 'explorar.html',
})
export class ExplorarPage {

  data: Destinos[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public service: ReservasProvider,
  //  public LocalService: DestinosDataProvider
    ) {
//      this.data = LocalService.data; 
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
  Reserve(){
  }

}
