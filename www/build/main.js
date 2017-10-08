webpackJsonp([2],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalendarPage = (function () {
    function CalendarPage(navCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
    }
    CalendarPage.prototype.addEvent = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'From: ' + start + '<br>To: ' + end,
            buttons: ['OK']
        });
        alert.present();
    };
    CalendarPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    return CalendarPage;
}());
CalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\calendar\calendar.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-buttons start>\n\n            <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n          </ion-buttons>\n\n      <ion-title>\n\n        {{ viewTitle }}\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="addEvent()">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n   \n\n  <ion-content>\n\n  <calendar [eventSource]="eventSource"\n\n          [calendarMode]="calendar.mode"\n\n          [currentDate]="calendar.currentDate"\n\n          (onEventSelected)="onEventSelected($event)"\n\n          (onTitleChanged)="onViewTitleChanged($event)"\n\n          (onTimeSelected)="onTimeSelected($event)"\n\n          step="30"\n\n          class="calendar">\n\n        </calendar>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\calendar\calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		419,
		1
	],
	"../pages/event-modal/event-modal.module": [
		420,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSesionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_registro_registro__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { TabsPage} from '../../tabs/tabs';



var LoginSesionPage = (function () {
    function LoginSesionPage(navCtrl, navParams, entrar, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entrar = entrar;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    LoginSesionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginSesionPage');
    };
    LoginSesionPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "Cargando ..." });
        loading.present();
        this.entrar.login(this.user, this.password).subscribe(function (res) {
            if (res.success) {
                console.log(res.user);
                _this.showToast("Usuario encontrado " + res.user.username + "!");
                loading.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
            }
            else {
                _this.showToast("Usuario no encontrado");
            }
        });
    };
    LoginSesionPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    LoginSesionPage.prototype.myGoBack = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return LoginSesionPage;
}());
LoginSesionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login-sesion',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\login\login-sesion\login-sesion.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <ion-title class="Titulo" color = "light"><q>No necesitas suerte, necesitas moverte</q></ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n<ion-content padding class = "login">\n\n  <ion-card col-md-8 offset-md-2 col-lg-8 offset-lg-2 >\n\n      <ion-card-header class ="card-header">\n\n            Iniciar sesion \n\n      </ion-card-header>\n\n\n\n    <ion-card-content>\n\n          <ion-list no-line>\n\n              <ion-item>\n\n                <ion-input ion-col col-12 col-md-10  col-lg-6 offset-lg-3\n\n                type = "text" placeholder = "Username" text-center [(ngModel)]="user"\n\n                ></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-input ion-col col-12 col-md-10  col-lg-6 offset-lg-3\n\n                 type = "password" placeholder = "Password" text-center [(ngModel)]="password"\n\n                ></ion-input>\n\n              </ion-item>\n\n              <a>¿Has olvidado tu contraseña? <br> <b>Ingresa aquí para recuperar</b></a>\n\n              <ion-item>\n\n                    <button ion-col col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 ion-button\n\n                     block color="danger" (click)="login()" >Entrar</button>    \n\n              </ion-item>\n\n            </ion-list>\n\n            <button ion-button small (click)="myGoBack()" >Volver</button>            \n\n          </ion-card-content>\n\n    \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\login\login-sesion\login-sesion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_registro_registro__["a" /* RegistroProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
], LoginSesionPage);

//# sourceMappingURL=login-sesion.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_perfil_perfil__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_favoritos_favoritos__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_special_special__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ExplorarPage } from '../explorar/explorar';


// import { MensajesPage } from '../mensajes/mensajes';


//import { ReservasPage } from '../reservas/reservas'; 

var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.root = __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */];
        this.menuOpc = [
            { label: 'Perfil', icon: 'people' },
            { label: 'Favoritos', icon: 'star' },
            { label: 'special', icon: 'md-bicycle' },
        ];
    }
    MenuPage.prototype.setContent = function (index) {
        switch (index) {
            case 0:
                this.root = __WEBPACK_IMPORTED_MODULE_2__menu_perfil_perfil__["a" /* PerfilPage */];
                break;
            case 1:
                this.root = __WEBPACK_IMPORTED_MODULE_4__menu_favoritos_favoritos__["a" /* FavoritosPage */];
                break;
            case 2:
                this.root = __WEBPACK_IMPORTED_MODULE_5__menu_special_special__["a" /* SpecialPage */];
                break;
        }
        ;
    };
    MenuPage.prototype.logout = function () {
        var alert = this.alertCtrl.create({
            title: 'Saliendo..',
            subTitle: 'Gracias por utilizar nuestra aplicación..',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\menu\menu.html"*/'<ion-split-pane when="lg">\n\n    <ion-menu [content]="content">\n\n      \n\n      <ion-list no-lines>\n\n        <ion-list-header>Menu</ion-list-header>\n\n        <button menuClose ion-item *ngFor="let m of menuOpc; index as i" (click)="setContent(i)"> \n\n          <ion-icon [name]="m.icon" margin-right></ion-icon> {{m.label}}\n\n        </button>\n\n        <ion-list-header>Perfil</ion-list-header>\n\n        <button ion-item (click)="logout()"> <ion-icon name="md-exit" margin-right></ion-icon>Cerrar Sesion</button>\n\n      </ion-list>\n\n  \n\n    </ion-menu>\n\n    <ion-nav [root]="root" main #content></ion-nav>\n\n  </ion-split-pane>'/*ion-inline-end:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    return PerfilPage;
}());
PerfilPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\menu\perfil\perfil.html"*/'<!--\n\n  Generated template for the PerfilPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\menu\perfil\perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__explorar_explorar__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservas_reservas__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import  { MensajesPage } from '../mensajes/mensajes';



//import  { FavoritosPage } from '../favoritos/favoritos';
//import  { PerfilPage } from '../perfil/perfil';
//import  { ExitPage }  from '../exit/exit';
var TabsPage = (function () {
    function TabsPage() {
        this.explorarPage = __WEBPACK_IMPORTED_MODULE_1__explorar_explorar__["a" /* ExplorarPage */];
        this.reservasPage = __WEBPACK_IMPORTED_MODULE_2__reservas_reservas__["a" /* ReservasPage */];
        this.calendarPage = __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__["a" /* CalendarPage */];
    }
    // favoritosPage = FavoritosPage;
    // rootexit = ExitPage;
    //myIndex: number;
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\tabs\tabs.html"*/'     \n\n<ion-tabs>\n\n  <ion-tab [root]="explorarPage" tabTitle = "Explorar" tabIcon = "ios-eye" ></ion-tab>\n\n  <ion-tab [root]="reservasPage" tabTitle = "Reservas" tabIcon = "ios-book" ></ion-tab>\n\n  <ion-tab [root]="calendarPage" tabTitle = "Calendario"tabIcon= "ios-calendar"></ion-tab>\n\n  <!-- <ion-tab [root]="favoritosPage"tabTitle = "Favoritos"tabIcon = "ios-star-half-outline" ></ion-tab>\n\n  <ion-tab [root]="rootexit"     tabTitle = "Salir"    tabIcon = "ios-exit" ></ion-tab> -->\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\tabs\tabs.html"*/,
    })
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExplorarPage = (function () {
    function ExplorarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ExplorarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExplorarPage');
    };
    return ExplorarPage;
}());
ExplorarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-explorar',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\explorar\explorar.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only > \n\n          <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        <ion-title>Explorar</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n<ion-content>\n\n <ion-searchbar>Buscar</ion-searchbar> \n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\explorar\explorar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ExplorarPage);

//# sourceMappingURL=explorar.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReservasPage = (function () {
    function ReservasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReservasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservasPage');
    };
    return ReservasPage;
}());
ReservasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reservas',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\reservas\reservas.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only > \n\n          <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        <ion-title>Reservas</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n\n\n<ion-content padding>\n\nadfhsdhsdfv\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\reservas\reservas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ReservasPage);

//# sourceMappingURL=reservas.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FavoritosPage = (function () {
    function FavoritosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritosPage');
    };
    return FavoritosPage;
}());
FavoritosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-favoritos',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\menu\favoritos\favoritos.html"*/'<!--\n\n  Generated template for the FavoritosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>favoritos</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\menu\favoritos\favoritos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], FavoritosPage);

//# sourceMappingURL=favoritos.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpecialPage = (function () {
    function SpecialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpecialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecialPage');
    };
    return SpecialPage;
}());
SpecialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-special',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\menu\special\special.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-buttons start>\n\n        <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      </ion-buttons>\n\n      <ion-title>Special</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content padding>\n\nsdvosgokegfkmlefm\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\menu\special\special.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SpecialPage);

//# sourceMappingURL=special.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroProvider; });
/* unused harmony export SimpleResponse */
/* unused harmony export User */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(403);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistroProvider = (function () {
    function RegistroProvider(http) {
        this.http = http;
        console.log('Hello RegistroProvider Provider');
    }
    RegistroProvider.prototype.login = function (username, password) {
        var url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* URL */] + "/users/login";
        var req = { username: username, password: password };
        return this.http.post(url, req);
    };
    return RegistroProvider;
}());
RegistroProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
], RegistroProvider);

var SimpleResponse = (function () {
    function SimpleResponse() {
    }
    return SimpleResponse;
}());

var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(342);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_sesion_login_sesion__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_database_connection_database_connection__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_explorar_explorar__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_menu_special_special__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mensajes_mensajes__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_menu_favoritos_favoritos__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_reservas_reservas__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_menu_perfil_perfil__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_registro_registro__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_calendar_calendar__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_menu_menu__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ionic2_calendar__ = __webpack_require__(408);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login_sesion_login_sesion__["a" /* LoginSesionPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_mensajes_mensajes__["a" /* MensajesPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_menu_favoritos_favoritos__["a" /* FavoritosPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_menu_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_explorar_explorar__["a" /* ExplorarPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_reservas_reservas__["a" /* ReservasPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_menu_special_special__["a" /* SpecialPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_22_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login_sesion_login_sesion__["a" /* LoginSesionPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_mensajes_mensajes__["a" /* MensajesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_explorar_explorar__["a" /* ExplorarPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_menu_favoritos_favoritos__["a" /* FavoritosPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_reservas_reservas__["a" /* ReservasPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_menu_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_menu_special_special__["a" /* SpecialPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_11__providers_database_connection_database_connection__["a" /* DatabaseConnectionProvider */],
            __WEBPACK_IMPORTED_MODULE_19__providers_registro_registro__["a" /* RegistroProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 157,
	"./af.js": 157,
	"./ar": 158,
	"./ar-dz": 159,
	"./ar-dz.js": 159,
	"./ar-kw": 160,
	"./ar-kw.js": 160,
	"./ar-ly": 161,
	"./ar-ly.js": 161,
	"./ar-ma": 162,
	"./ar-ma.js": 162,
	"./ar-sa": 163,
	"./ar-sa.js": 163,
	"./ar-tn": 164,
	"./ar-tn.js": 164,
	"./ar.js": 158,
	"./az": 165,
	"./az.js": 165,
	"./be": 166,
	"./be.js": 166,
	"./bg": 167,
	"./bg.js": 167,
	"./bn": 168,
	"./bn.js": 168,
	"./bo": 169,
	"./bo.js": 169,
	"./br": 170,
	"./br.js": 170,
	"./bs": 171,
	"./bs.js": 171,
	"./ca": 172,
	"./ca.js": 172,
	"./cs": 173,
	"./cs.js": 173,
	"./cv": 174,
	"./cv.js": 174,
	"./cy": 175,
	"./cy.js": 175,
	"./da": 176,
	"./da.js": 176,
	"./de": 177,
	"./de-at": 178,
	"./de-at.js": 178,
	"./de-ch": 179,
	"./de-ch.js": 179,
	"./de.js": 177,
	"./dv": 180,
	"./dv.js": 180,
	"./el": 181,
	"./el.js": 181,
	"./en-au": 182,
	"./en-au.js": 182,
	"./en-ca": 183,
	"./en-ca.js": 183,
	"./en-gb": 184,
	"./en-gb.js": 184,
	"./en-ie": 185,
	"./en-ie.js": 185,
	"./en-nz": 186,
	"./en-nz.js": 186,
	"./eo": 187,
	"./eo.js": 187,
	"./es": 188,
	"./es-do": 189,
	"./es-do.js": 189,
	"./es.js": 188,
	"./et": 190,
	"./et.js": 190,
	"./eu": 191,
	"./eu.js": 191,
	"./fa": 192,
	"./fa.js": 192,
	"./fi": 193,
	"./fi.js": 193,
	"./fo": 194,
	"./fo.js": 194,
	"./fr": 195,
	"./fr-ca": 196,
	"./fr-ca.js": 196,
	"./fr-ch": 197,
	"./fr-ch.js": 197,
	"./fr.js": 195,
	"./fy": 198,
	"./fy.js": 198,
	"./gd": 199,
	"./gd.js": 199,
	"./gl": 200,
	"./gl.js": 200,
	"./gom-latn": 201,
	"./gom-latn.js": 201,
	"./he": 202,
	"./he.js": 202,
	"./hi": 203,
	"./hi.js": 203,
	"./hr": 204,
	"./hr.js": 204,
	"./hu": 205,
	"./hu.js": 205,
	"./hy-am": 206,
	"./hy-am.js": 206,
	"./id": 207,
	"./id.js": 207,
	"./is": 208,
	"./is.js": 208,
	"./it": 209,
	"./it.js": 209,
	"./ja": 210,
	"./ja.js": 210,
	"./jv": 211,
	"./jv.js": 211,
	"./ka": 212,
	"./ka.js": 212,
	"./kk": 213,
	"./kk.js": 213,
	"./km": 214,
	"./km.js": 214,
	"./kn": 215,
	"./kn.js": 215,
	"./ko": 216,
	"./ko.js": 216,
	"./ky": 217,
	"./ky.js": 217,
	"./lb": 218,
	"./lb.js": 218,
	"./lo": 219,
	"./lo.js": 219,
	"./lt": 220,
	"./lt.js": 220,
	"./lv": 221,
	"./lv.js": 221,
	"./me": 222,
	"./me.js": 222,
	"./mi": 223,
	"./mi.js": 223,
	"./mk": 224,
	"./mk.js": 224,
	"./ml": 225,
	"./ml.js": 225,
	"./mr": 226,
	"./mr.js": 226,
	"./ms": 227,
	"./ms-my": 228,
	"./ms-my.js": 228,
	"./ms.js": 227,
	"./my": 229,
	"./my.js": 229,
	"./nb": 230,
	"./nb.js": 230,
	"./ne": 231,
	"./ne.js": 231,
	"./nl": 232,
	"./nl-be": 233,
	"./nl-be.js": 233,
	"./nl.js": 232,
	"./nn": 234,
	"./nn.js": 234,
	"./pa-in": 235,
	"./pa-in.js": 235,
	"./pl": 236,
	"./pl.js": 236,
	"./pt": 237,
	"./pt-br": 238,
	"./pt-br.js": 238,
	"./pt.js": 237,
	"./ro": 239,
	"./ro.js": 239,
	"./ru": 240,
	"./ru.js": 240,
	"./sd": 241,
	"./sd.js": 241,
	"./se": 242,
	"./se.js": 242,
	"./si": 243,
	"./si.js": 243,
	"./sk": 244,
	"./sk.js": 244,
	"./sl": 245,
	"./sl.js": 245,
	"./sq": 246,
	"./sq.js": 246,
	"./sr": 247,
	"./sr-cyrl": 248,
	"./sr-cyrl.js": 248,
	"./sr.js": 247,
	"./ss": 249,
	"./ss.js": 249,
	"./sv": 250,
	"./sv.js": 250,
	"./sw": 251,
	"./sw.js": 251,
	"./ta": 252,
	"./ta.js": 252,
	"./te": 253,
	"./te.js": 253,
	"./tet": 254,
	"./tet.js": 254,
	"./th": 255,
	"./th.js": 255,
	"./tl-ph": 256,
	"./tl-ph.js": 256,
	"./tlh": 257,
	"./tlh.js": 257,
	"./tr": 258,
	"./tr.js": 258,
	"./tzl": 259,
	"./tzl.js": 259,
	"./tzm": 260,
	"./tzm-latn": 261,
	"./tzm-latn.js": 261,
	"./tzm.js": 260,
	"./uk": 262,
	"./uk.js": 262,
	"./ur": 263,
	"./ur.js": 263,
	"./uz": 264,
	"./uz-latn": 265,
	"./uz-latn.js": 265,
	"./uz.js": 264,
	"./vi": 266,
	"./vi.js": 266,
	"./x-pseudo": 267,
	"./x-pseudo.js": 267,
	"./yo": 268,
	"./yo.js": 268,
	"./zh-cn": 269,
	"./zh-cn.js": 269,
	"./zh-hk": 270,
	"./zh-hk.js": 270,
	"./zh-tw": 271,
	"./zh-tw.js": 271
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 366;

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { TabsPage} from '../pages/tabs/tabs';
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage) {
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            // this.storage.get("logged").then(value=>this.rootPage = value? HomePage: LoginPage);
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL; });
var URL = "https://proyectoionic.herokuapp.com";
//tomar del api...master heroku 
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\home\home.html"*/'\n\n<ion-content padding>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseConnectionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DatabaseConnectionProvider = (function () {
    function DatabaseConnectionProvider() {
    }
    DatabaseConnectionProvider.prototype.getConnection = function () {
        var _this = this;
        var sqlite = new __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]();
        if (this.db) {
            return Promise.resolve(this.db);
        }
        else {
            return sqlite.create({
                name: 'LaRutaG.db',
                location: 'default'
            }).then(function (db) {
                _this.db = db;
                return _this.init().then(function (res) {
                    return Promise.resolve(db);
                });
            });
        }
    };
    DatabaseConnectionProvider.prototype.init = function () {
        var sql = "CREATE TABLE IF NO EXISTS usuario("
            + "id PRIMARY KEY AUTOINCREMENT"
            + ", nombre VARCHAR "
            + ", edad FLOAT "
            + ")";
        return this.getConnection().then(function (db) {
            db.executeSql(sql, []).then(function (res) {
                return Promise.resolve(res);
            });
        });
    };
    DatabaseConnectionProvider.prototype.executeSql = function (sql, params) {
        if (this.db != null)
            return this.db.executeSql(sql, params);
        else
            return Promise.reject("No connected");
    };
    return DatabaseConnectionProvider;
}());
DatabaseConnectionProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DatabaseConnectionProvider);

//# sourceMappingURL=database-connection.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MensajesPage = (function () {
    function MensajesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MensajesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MensajesPage');
    };
    return MensajesPage;
}());
MensajesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mensajes',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\mensajes\mensajes.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-buttons start>\n\n                <button ion-button menuToggle>\n\n                    <ion-icon name = "menu"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n            <ion-title> Explorar</ion-title>\n\n        </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n sdvnsvlssfbzsfr\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\mensajes\mensajes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MensajesPage);

//# sourceMappingURL=mensajes.js.map

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_sesion_login_sesion__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_sesion_login_sesion__["a" /* LoginSesionPage */]);
    };
    LoginPage.prototype.Facebookin = function () { };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\login\login.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <ion-title class="Titulo" color = "light"><q>No necesitas suerte, necesitas moverte</q></ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n<ion-content padding class="login-bg">\n\n      <ion-card col-md-6 offset-md-3 col-lg-6 offset-lg-3 >\n\n            <ion-card-header class ="card-header">\n\n                LaRutaG \n\n          </ion-card-header>\n\n          <ion-card-content>\n\n                <ion-list no-line>\n\n                    <ion-item>\n\n                        <button col-12 col-md-7 offset-md-3 col-lg-4 offset-lg-4 ion-button block color ="facebook">\n\n                          <ion-icon name ="logo-facebook" (click)="Facebookin()"> </ion-icon> Login con Facebook\n\n                        </button>\n\n                    </ion-item>          \n\n                    <ion-item>\n\n                          <button  col-12 col-md-7 offset-md-3 col-lg-4 offset-lg-4 ion-button block outline color="light" (click)="login()">Inicia Sesión</button>    \n\n                    </ion-item>\n\n                  </ion-list>\n\n          </ion-card-content>\n\n  </ion-card>\n\n  <button ion-button outline color ="Secondary"> ¿No tienes una cuenta? Regístrate aquí</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\PC portatil\Desktop\ProyectoRutaG\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[324]);
//# sourceMappingURL=main.js.map