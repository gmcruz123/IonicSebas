import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { URL} from '../../app/app.config';

@Injectable()
export class RegistroProvider {

  constructor(public http: Http) {
    console.log('Hello RegistroProvider Provider');
  }
}

