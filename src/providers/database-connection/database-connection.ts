import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseConnectionProvider {

    db: SQLiteObject;

    constructor(){

    }

    getConnection(): Promise<SQLiteObject> {
        const sqlite = new SQLite();
        if(this.db){
          return Promise.resolve(this.db);
        }else{
          return sqlite.create({
            name: 'LaRutaG.db',
            location: 'default'
          }).then(db => {
            this.db = db;
            return this.init().then(res=>{
              return Promise.resolve(db);
            });        
          })
        }
      }
    init(): Promise<any>{
        const sql = "CREATE TABLE IF NO EXISTS usuario("
        + "id PRIMARY KEY AUTOINCREMENT"
        + ", nombre VARCHAR "
        + ", edad FLOAT "
        + ")";
        return this.getConnection().then(db =>{
            db.executeSql(sql,[]).then(res =>{
                return Promise.resolve(res);
            })
        });
    }

    executeSql(sql:string , params: any[]): Promise<any>{
        if(this.db != null)
            return this.db.executeSql(sql,params);
        else
            return Promise.reject("No connected");
    }    
    }