import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { HttpClientModule } from '@angular/common/http'

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LoginSesionPage } from '../pages/login/login-sesion/login-sesion';
import { SigninPage } from '../pages/signin/signin';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ExplorarPage } from '../pages/menu/explorar/explorar';
import { SpecialPage } from '../pages/menu/special/special';
import { MensajesPage } from '../pages/mensajes/mensajes';
import { FavoritosPage } from '../pages/menu/favoritos/favoritos';
import { ReservasPage } from '../pages/reservaciones/reservaciones';
import { PerfilPage } from '../pages/menu/perfil/perfil';
import { CalendarPage } from '../pages/calendar/calendar';
import { MenuPage } from '../pages/menu/menu';
import { DetallePage } from '../pages/detalle/detalle';

import { RegistroProvider } from '../providers/registro/registro';
import { ReservasProvider } from '../providers/reservas/reservas';
import { NgCalendarModule} from 'ionic2-calendar';
import { DatabaseConnectionProvider } from '../providers/database-connection/database-connection';
//import { DestinosDataProvider } from '../providers/models/destinos-data';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    LoginSesionPage,
    TabsPage,
    MensajesPage,
    FavoritosPage,
    PerfilPage,
    CalendarPage,
    MenuPage,
    ExplorarPage,
    ReservasPage,
    SpecialPage,
    SigninPage,
    DetallePage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgCalendarModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    LoginSesionPage,
    TabsPage,
    MensajesPage,
    ExplorarPage,
    FavoritosPage,
    ReservasPage,
    PerfilPage,
    CalendarPage,
    MenuPage,
    SpecialPage,
    SigninPage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DatabaseConnectionProvider,
  //  DestinosDataProvider,
    RegistroProvider,
    ReservasProvider
  ]
})
export class AppModule { }
