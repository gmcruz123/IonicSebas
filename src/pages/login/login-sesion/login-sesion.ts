import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
//import { TabsPage} from '../../tabs/tabs';
//import { LoginPage } from '../../login/login';
import { MenuPage } from '../../menu/menu';
import { RegistroProvider } from '../../../providers/registro/registro';

@Component({
  selector: 'page-login-sesion',
  templateUrl: 'login-sesion.html',
})
export class LoginSesionPage {

  user: string
  password: string
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public entrar: RegistroProvider,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginSesionPage');
  }

  login(){
    let loading =  this.loadingCtrl.create({content:"Cargando ..."});      
    loading.present();

  this.entrar.login(this.user, this.password).subscribe(res => {
    if (res.success) {
      console.log(res.user);
      this.showToast(" Hola "+res.user.username +"!");
      loading.dismiss();
      this.navCtrl.push(MenuPage);
    } else {
      this.showToast("Usuario no encontrado");
      loading.dismiss();
    }
  });
  }
  
  
  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
