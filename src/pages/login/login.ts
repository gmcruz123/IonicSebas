import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginSesionPage} from './login-sesion/login-sesion';
import { Storage } from '@ionic/storage';
import { SigninPage } from '../signin/signin';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {
  }
  
  login() {
    this.navCtrl.push(LoginSesionPage);
  }
  Facebookin(){
    
  }
  signin(){
    this.navCtrl.push(SigninPage);
  }
}
