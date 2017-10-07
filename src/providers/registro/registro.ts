import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cliente} from '../models/cliente'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { URL} from '../../app/app.config';

@Injectable()
export class RegistroProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RegistroProvider Provider');
  }

  

  login(username:string,password:string){
    let url = URL+"/users/login"
    let req = {username , password}
    return this.http.post<SimpleResponse>(url, req)
  }

  insert(book:User){
    let url = URL+"/users/login"
    return this.http.post<SimpleResponse>(url, book)
  }





}

export class SimpleResponse{
success:boolean;
user:Cliente;
}

export class User {
  _id: string;
  nombre:string;
  autor:string;
  paginas:number;  
}