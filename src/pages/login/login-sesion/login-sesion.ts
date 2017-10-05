import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { TabsPage} from '../../tabs/tabs';
import { LoginPage } from '../../login/login';
import { MenuPage } from '../../menu/menu';

@Component({
  selector: 'page-login-sesion',
  templateUrl: 'login-sesion.html',
})
export class LoginSesionPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginSesionPage');
  }
  login(){
    this.navCtrl.setRoot(MenuPage);
  }
  myGoBack(){
    this.navCtrl.push(LoginPage);
  }
}
