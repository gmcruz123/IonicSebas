import { Component } from '@angular/core';
import { NavController, NavParams,ToastController } from 'ionic-angular';
import { RegistroProvider } from '../../providers/registro/registro';
import { MenuPage } from '../menu/menu';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  
  email: string
  user: string
  password: string

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public registrarme: RegistroProvider,
              public toastCtrl: ToastController) {
  }

  signin(){
    this.registrarme.signin(this.email, this.user, this.password).subscribe(res =>{
        if (res.success){
          this.showToast(res.user.username + ", Te has registrado exitosamente");
          this.navCtrl.push(MenuPage);
        }else{
          this.showToast("Usuario no se ha podido registrar");
        }
    });
  }
  showToast(msg: string){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present()
  }
}
