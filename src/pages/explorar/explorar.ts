import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-explorar',
  templateUrl: 'explorar.html',
})
export class ExplorarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorarPage');
  }

}
