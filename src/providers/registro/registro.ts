import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {Cliente} from '../models/cliente'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

//import { Observable } from 'rxjs/Observable';
import { URL} from '../../app/app.config';

@Injectable()
export class RegistroProvider {

  constructor(public http: HttpClient) {
    console.log('Se ha realizado la conexión al servidor exitosamente');
  }
  login(username:string , password:string){
    let url = URL+"/users/login"
    let req = {username:username , password:password}
    return this.http.post<SimpleResponse>(url, req)
  }
  signin(email: string, username: string, password: string){
    let dir = URL + "/users/signin" 
    let req = {email:email, username: username, password:password}
    return this.http.post<SimpleResponse>(dir,req)
  }
}

export class SimpleResponse{
success:boolean;
user:User;
}

export class User {
  _id: string;
  username:string;
  email:string;
  password:string;  
}