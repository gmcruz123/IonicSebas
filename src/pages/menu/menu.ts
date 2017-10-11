import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

//import { ExplorarPage } from '../menu/explorar/explorar';
import { PerfilPage } from '../menu/perfil/perfil';
import { TabsPage } from '../tabs/tabs';
// import { MensajesPage } from '../mensajes/mensajes';
import { FavoritosPage } from '../menu/favoritos/favoritos';
import { SpecialPage } from '../menu/special/special';
//import { ReservasPage } from '../reservas/reservas'; 
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  
  root : any = TabsPage;
  menuOpc: Menu[] = [
    { label: 'Seguir explorando', icon: 'menu'},
    { label: 'Perfil', icon: 'people' },
    { label: 'Favoritos', icon: 'star' },
    { label: 'special', icon: 'md-bicycle' },
    // { label: 'Comida', icon: 'md-restaurant' },
    // { label: 'Cafes', icon: 'md-pint' },
    // { label: 'Bar', icon: 'md-wine' }
  ];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }
  
  setContent(index: number) {
    switch(index){
      
      case 0: this.root = MenuPage ; break;
      case 1: this.root = PerfilPage ; break;
      case 2: this.root = FavoritosPage ; break; 
      case 3: this.root = SpecialPage; break; 
  };
 }

 
 logout(){
  let alert =  this. alertCtrl.create({
      title: 'Saliendo..',
      subTitle: 'Gracias por utilizar nuestra aplicación..',
      buttons:['OK']
  });
  alert.present();
  this.navCtrl.push(LoginPage);
}
}
  interface Menu {
    label: string;
    icon: string;
  }


