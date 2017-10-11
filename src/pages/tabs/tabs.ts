import  { Component } from '@angular/core';

//import  { MensajesPage } from '../mensajes/mensajes';
import  { ExplorarPage } from '../menu/explorar/explorar';
import  { ReservasPage } from '../reservas/reservas';
import  { CalendarPage } from '../calendar/calendar';
 //import  { FavoritosPage } from '../favoritos/favoritos';
//import  { PerfilPage } from '../perfil/perfil';
//import  { ExitPage }  from '../exit/exit';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
explorarPage = ExplorarPage;
reservasPage = ReservasPage;
calendarPage = CalendarPage;
// favoritosPage = FavoritosPage;
// rootexit = ExitPage;
//myIndex: number;
ionViewDidLoad(){
  console.log('ionViewDidLoad TabsPage');
}
}
