webpackJsonp([2],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_sesion_login_sesion__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(326);
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
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_sesion_login_sesion__["a" /* LoginSesionPage */]);
    };
    LoginPage.prototype.Facebookin = function () { };
    LoginPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\login\login.html"*/'<ion-header>    \n\n      <ion-navbar color="primary">\n\n        <ion-title class="Titulo" color = "light"><q>No necesitas suerte, necesitas moverte</q></ion-title>\n\n      </ion-navbar>\n\n    </ion-header>\n\n    <ion-content padding class="login-bg">\n\n        <!-- Login-main permite el despliegue vertical -->\n\n        <div class="login-main"> \n\n              <h1 class="login-title" text-center>LaRutaG</h1>\n\n              <!-- Login-form permite el contenido que se expande -->\n\n              <div class="login-form">\n\n                <!-- Modelo de grilla: -->\n\n                <ion-row>\n\n                  <ion-col ion-col col-12 col-md-6 offset-md-3  col-lg-6 offset-lg-3>\n\n                    <ion-item color="itemLight">\n\n                        <button ion-col col-12 col-md-10 offset-md-1  col-lg-6 offset-lg-3 \n\n                                ion-button block color ="facebook">\n\n                                <ion-icon name ="logo-facebook" (click)="Facebookin()"> \n\n                                </ion-icon> Login con Facebook\n\n                        </button> \n\n                        <br>\n\n                        <button  ion-col col-12 col-md-10 offset-md-1  col-lg-6 offset-lg-3\n\n                                ion-button block color="danger" (click)="login()">Inicia Sesión\n\n                        </button>\n\n                        <br>  \n\n                        <button ion-col col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 \n\n                        ion-button clear (click) = "signin()" >Registrate</button>  \n\n                    </ion-item>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </div>\n\n            </div>\n\n      </ion-content>'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_perfil_perfil__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_favoritos_favoritos__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_special_special__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ExplorarPage } from '../menu/explorar/explorar';


// import { MensajesPage } from '../mensajes/mensajes';


//import { ReservasPage } from '../reservas/reservas'; 

var MenuPage = MenuPage_1 = (function () {
    function MenuPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.root = __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */];
        this.menuOpc = [
            { label: 'Seguir explorando', icon: 'menu' },
            { label: 'Perfil', icon: 'people' },
            { label: 'Favoritos', icon: 'star' },
            { label: 'special', icon: 'md-bicycle' },
        ];
    }
    MenuPage.prototype.setContent = function (index) {
        switch (index) {
            case 0:
                this.root = MenuPage_1;
                break;
            case 1:
                this.root = __WEBPACK_IMPORTED_MODULE_2__menu_perfil_perfil__["a" /* PerfilPage */];
                break;
            case 2:
                this.root = __WEBPACK_IMPORTED_MODULE_4__menu_favoritos_favoritos__["a" /* FavoritosPage */];
                break;
            case 3:
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
MenuPage = MenuPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\menu\menu.html"*/'<ion-split-pane when="lg">\n\n    <ion-menu [content]="content">\n\n      \n\n      <ion-list no-lines>\n\n        <ion-list-header>Menu</ion-list-header>\n\n        <button menuClose ion-item *ngFor="let m of menuOpc; index as i" (click)="setContent(i)"> \n\n          <ion-icon [name]="m.icon" margin-right></ion-icon> {{m.label}}\n\n        </button>\n\n        <ion-list-header>Perfil</ion-list-header>\n\n        <button ion-item (click)="logout()"> <ion-icon name="md-exit" margin-right></ion-icon>Cerrar Sesion</button>\n\n      </ion-list>\n\n  \n\n    </ion-menu>\n\n    <ion-nav [root]="root" main #content></ion-nav>\n\n  </ion-split-pane>'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MenuPage);

var MenuPage_1;
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroProvider; });
/* unused harmony export SimpleResponse */
/* unused harmony export User */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Cliente} from '../models/cliente'


//import { Observable } from 'rxjs/Observable';

var RegistroProvider = (function () {
    function RegistroProvider(http) {
        this.http = http;
        console.log('1. Conexión a HttpCliente exitoso');
    }
    RegistroProvider.prototype.login = function (username, password) {
        var url = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* URL */] + "/users/login";
        var req = { username: username, password: password };
        return this.http.post(url, req);
    };
    RegistroProvider.prototype.signin = function (email, username, password) {
        var dir = __WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* URL */] + "/users/signin";
        var req = { email: email, username: username, password: password };
        return this.http.post(dir, req);
    };
    return RegistroProvider;
}());
RegistroProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
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

var _a;
//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\calendar\calendar.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n            <button ion-button menuToggle icon-only>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>\n\n        {{ viewTitle }}\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="addEvent()">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n   \n\n  <ion-content>\n\n  <calendar [eventSource]="eventSource"\n\n          [calendarMode]="calendar.mode"\n\n          [currentDate]="calendar.currentDate"\n\n          (onEventSelected)="onEventSelected($event)"\n\n          (onTitleChanged)="onViewTitleChanged($event)"\n\n          (onTimeSelected)="onTimeSelected($event)"\n\n          step="30"\n\n          class="calendar">\n\n        </calendar>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\calendar\calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		421,
		6
	],
	"../pages/detalle/detalle.module": [
		424,
		5
	],
	"../pages/event-modal/event-modal.module": [
		422,
		4
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
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSesionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_registro_registro__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(45);
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
//import { LoginPage } from '../../login/login';


//Para almacenamiento local:

var LoginSesionPage = (function () {
    function LoginSesionPage(navCtrl, navParams, entrar, toastCtrl, loadingCtrl, guardar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.entrar = entrar;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.guardar = guardar;
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
                _this.showToast(" Hola " + res.user.username + "!");
                loading.dismiss();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
                //Almacenamos localmente el identificador del usuario en sesión
                _this.guardar.set('identificacion', res.user._id);
            }
            else {
                _this.showToast("Usuario no encontrado");
                loading.dismiss();
            }
        });
    };
    LoginSesionPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    return LoginSesionPage;
}());
LoginSesionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login-sesion',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\login\login-sesion\login-sesion.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <ion-title class="Titulo" color = "light"><q>No necesitas suerte, necesitas moverte</q></ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n<ion-content padding class = "login">\n\n  <ion-card col-md-8 offset-md-2 col-lg-8 offset-lg-2 >\n\n      <ion-card-header class ="card-header">\n\n            Iniciar sesion \n\n      </ion-card-header>\n\n\n\n    <ion-card-content>\n\n          <ion-list no-line>\n\n              <ion-item>\n\n                <ion-input ion-col col-12 col-md-10  col-lg-6 offset-lg-3\n\n                type = "text" placeholder = "Username" text-center [(ngModel)]="user"\n\n                ></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-input ion-col col-12 col-md-10  col-lg-6 offset-lg-3\n\n                 type = "password" placeholder = "Password" text-center [(ngModel)]="password"\n\n                ></ion-input>\n\n              </ion-item>\n\n              <a>¿Has olvidado tu contraseña? <br> <b>Ingresa aquí para recuperar</b></a>\n\n              <ion-item>\n\n                    <button ion-col col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 ion-button\n\n                     block color="danger" (click)="login()" >Entrar</button>    \n\n              </ion-item>\n\n            </ion-list>\n\n                     \n\n          </ion-card-content>\n\n    \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\login\login-sesion\login-sesion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_registro_registro__["a" /* RegistroProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], LoginSesionPage);

//# sourceMappingURL=login-sesion.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\menu\perfil\perfil.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color = "primary">\n\n      <button ion-button menuToggle icon-only>\n\n          <ion-icon name = "menu"></ion-icon>     \n\n      </button>\n\n        <ion-title>Perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\menu\perfil\perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_explorar_explorar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservas_reservas__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(109);
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
        this.explorarPage = __WEBPACK_IMPORTED_MODULE_1__menu_explorar_explorar__["a" /* ExplorarPage */];
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
        selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\tabs\tabs.html"*/'     \n\n<ion-tabs>\n\n  <ion-tab [root]="explorarPage" tabTitle = "Explorar" tabIcon = "ios-eye" ></ion-tab>\n\n  <ion-tab [root]="reservasPage" tabTitle = "Reservas" tabIcon = "ios-book" ></ion-tab>\n\n  <ion-tab [root]="calendarPage" tabTitle = "Calendario"tabIcon= "ios-calendar"></ion-tab>\n\n  <!-- <ion-tab [root]="favoritosPage"tabTitle = "Favoritos"tabIcon = "ios-star-half-outline" ></ion-tab>\n\n  <ion-tab [root]="rootexit"     tabTitle = "Salir"    tabIcon = "ios-exit" ></ion-tab> -->\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\tabs\tabs.html"*/,
    })
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_detalle__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reservas_reservas__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { DestinosDataProvider } from '../../../providers/models/destinos-data';

var ExplorarPage = (function () {
    // DestinoID: string
    function ExplorarPage(navCtrl, navParams, service, guardado) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.guardado = guardado;
        //Para mostrar Destinos en pantalla de  Explorer
        this.data = [];
        //   this.DestinoID = navParams.get('DestinoID');
    }
    ExplorarPage.prototype.ionViewDidLoad = function () {
        this.loadDestinos();
    };
    ExplorarPage.prototype.loadDestinos = function (refresher) {
        var _this = this;
        if (refresher === void 0) { refresher = null; }
        this.service.all().subscribe(function (res) {
            _this.data = res;
            if (refresher != null)
                refresher.complete();
        });
    };
    ExplorarPage.prototype.doRefresh = function (refresher) {
        this.loadDestinos(refresher);
    };
    ExplorarPage.prototype.detalle = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detalle_detalle__["a" /* DetallePage */]);
    };
    return ExplorarPage;
}());
ExplorarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-explorar',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\menu\explorar\explorar.html"*/'  <ion-header>    \n\n      <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only > \n\n          <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        <ion-title>Explorar</ion-title>\n\n      </ion-navbar>\n\n    </ion-header>\n\n<ion-content>\n\n    <ion-searchbar>Buscar</ion-searchbar>\n\n    \n\n            <ion-refresher (ionRefresh) = "doRefresh($event)">\n\n                <ion-refresher-content>\n\n                    pullingText = "Desliza para recargar"\n\n                    refreshText = "Recargando ..."\n\n                </ion-refresher-content>\n\n            </ion-refresher>\n\n    \n\n    <ion-col col-12 col-md-6 col-lg-4 *ngFor = "let d of data">\n\n        <ion-card>\n\n              <img src = "{{d.imagen}}" alt = "">\n\n              <ion-card-content>\n\n                  <ion-card-title>{{d.nombre}}</ion-card-title>\n\n                    <div><ion-icon name="logo-usd"></ion-icon> Precio: {{d.precio}}</div>\n\n                    <div><ion-icon name="people"></ion-icon> Me gusta: {{d.visitantes}}</div>\n\n      \n\n                           <button ion-button icon-only (click) = "detalle()" full>\n\n                              <ion-icon menu="search"></ion-icon>\n\n                               Reservar\n\n                           </button>\n\n              </ion-card-content>\n\n        </ion-card>   \n\n    </ion-col>  \n\n</ion-content> \n\n            \n\n<!-- \n\n    <ion-list col-12 col-md-12 col-lg-12 >\n\n        <ion-item *ngFor = "let d of data">\n\n            <img src = "{{d.imagen}}" alt = "">\n\n            <h2> <strong>{{d.nombre}}</strong></h2>\n\n            <div><ion-icon name="logo-usd"></ion-icon> Precio: {{d.precio}}</div>\n\n            <div><ion-icon name="people"></ion-icon> Me gusta: {{d.visitantes}}</div>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n     -->\n\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\menu\explorar\explorar.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_reservas_reservas__["a" /* ReservasProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_reservas_reservas__["a" /* ReservasProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
], ExplorarPage);

var _a, _b, _c, _d;
//# sourceMappingURL=explorar.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservasProvider; });
/* unused harmony export SimpleResponse */
/* unused harmony export Destinos */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Observable } from 'rxjs/Observable';
var ReservasProvider = (function () {
    function ReservasProvider(http) {
        this.http = http;
        console.log('Control de reservas');
    }
    ReservasProvider.prototype.all = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* URL */] + "/reservas";
        return this.http.get(url);
    };
    ReservasProvider.prototype.AgregarReserva = function (DestinosID, usuarioid) {
        var urlfinal = __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* URL */] + "/reservas" + "/" + usuarioid;
        return this.http.post(urlfinal, DestinosID);
    };
    return ReservasProvider;
}());
ReservasProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], ReservasProvider);

var SimpleResponse = (function () {
    function SimpleResponse() {
    }
    return SimpleResponse;
}());

var Destinos = (function () {
    function Destinos(_id, nombre, visitantes, precio, imagen) {
        this._id = _id;
        this.nombre = nombre;
        this.visitantes = visitantes;
        this.precio = precio;
        this.imagen = imagen;
    }
    return Destinos;
}());

var _a;
//# sourceMappingURL=reservas.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL; });
var URL = "https://proyectoionic.herokuapp.com";
//tomar del api...master heroku , el repositorio se llama rutag master al hacer push 
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        selector: 'page-reservas',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\reservas\reservas.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only > \n\n          <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        <ion-title>Reservas</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n\n\n<ion-content padding>\n\nadfhsdhsdfv\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\reservas\reservas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ReservasPage);

//# sourceMappingURL=reservas.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        selector: 'page-favoritos',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\menu\favoritos\favoritos.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only > \n\n          <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        <ion-title>Favoritos</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\menu\favoritos\favoritos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], FavoritosPage);

//# sourceMappingURL=favoritos.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        selector: 'page-special',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\menu\special\special.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only > \n\n          <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        <ion-title>Explorar</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n<ion-content padding>\n\nsdvosgokegfkmlefm\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\menu\special\special.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SpecialPage);

//# sourceMappingURL=special.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_registro_registro__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, registrarme, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.registrarme = registrarme;
        this.toastCtrl = toastCtrl;
    }
    SigninPage.prototype.signin = function () {
        var _this = this;
        this.registrarme.signin(this.email, this.user, this.password).subscribe(function (res) {
            if (res.success) {
                _this.showToast(" Te has registrado exitosamente");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
            }
            else {
                _this.showToast("Usuario no se ha podido registrar");
            }
        });
    };
    SigninPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\signin\signin.html"*/'<ion-header>\n    \n      <ion-navbar color="primary">\n        <ion-title class="Titulo" color = "light"><q>No necesitas suerte, necesitas moverte</q></ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n<ion-content padding class = "login">\n  <ion-card col-md-8 offset-md-2 col-lg-8 offset-lg-2 >\n      <ion-card-header class ="card-header">\n            Registro\n      </ion-card-header>\n    <ion-card-content>\n          <ion-list no-line>\n              <a>Ingresa los siguientes datos:</a>\n              <ion-item>\n                  <ion-input ion-col col-12 col-md-10 col-lg-6 offset-lg-3\n                  type = "text" placeholder = "Email" text-center [(ngModel)] = "email">\n                  </ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input ion-col col-12 col-md-10 col-lg-6 offset-lg-3\n                type = "text" placeholder = "Username" text-center [(ngModel)]="user"\n                ></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input ion-col col-12 col-md-10  col-lg-6 offset-lg-3\n                 type = "password" placeholder = "Password" text-center [(ngModel)]="password"\n                ></ion-input>\n              </ion-item>\n              <ion-item>\n                    <button ion-col col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 ion-button\n                     block color="danger" (click)="signin()">Ingresar datos</button>    \n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\signin\signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_registro_registro__["a" /* RegistroProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(345);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_sesion_login_sesion__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menu_explorar_explorar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_menu_special_special__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mensajes_mensajes__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_menu_favoritos_favoritos__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_reservas_reservas__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_menu_perfil_perfil__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_calendar_calendar__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_menu_menu__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_registro_registro__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_reservas_reservas__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic2_calendar__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_database_connection_database_connection__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























//import { DestinosDataProvider } from '../providers/models/destinos-data';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login_sesion_login_sesion__["a" /* LoginSesionPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_mensajes_mensajes__["a" /* MensajesPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_menu_favoritos_favoritos__["a" /* FavoritosPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_menu_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_menu_explorar_explorar__["a" /* ExplorarPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_reservas_reservas__["a" /* ReservasPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_menu_special_special__["a" /* SpecialPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_23_ionic2_calendar__["a" /* NgCalendarModule */],
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
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login_sesion_login_sesion__["a" /* LoginSesionPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_mensajes_mensajes__["a" /* MensajesPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_menu_explorar_explorar__["a" /* ExplorarPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_menu_favoritos_favoritos__["a" /* FavoritosPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_reservas_reservas__["a" /* ReservasPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_menu_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_menu_special_special__["a" /* SpecialPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_24__providers_database_connection_database_connection__["a" /* DatabaseConnectionProvider */],
            //  DestinosDataProvider,
            __WEBPACK_IMPORTED_MODULE_21__providers_registro_registro__["a" /* RegistroProvider */],
            __WEBPACK_IMPORTED_MODULE_22__providers_reservas_reservas__["a" /* ReservasProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 160,
	"./af.js": 160,
	"./ar": 161,
	"./ar-dz": 162,
	"./ar-dz.js": 162,
	"./ar-kw": 163,
	"./ar-kw.js": 163,
	"./ar-ly": 164,
	"./ar-ly.js": 164,
	"./ar-ma": 165,
	"./ar-ma.js": 165,
	"./ar-sa": 166,
	"./ar-sa.js": 166,
	"./ar-tn": 167,
	"./ar-tn.js": 167,
	"./ar.js": 161,
	"./az": 168,
	"./az.js": 168,
	"./be": 169,
	"./be.js": 169,
	"./bg": 170,
	"./bg.js": 170,
	"./bn": 171,
	"./bn.js": 171,
	"./bo": 172,
	"./bo.js": 172,
	"./br": 173,
	"./br.js": 173,
	"./bs": 174,
	"./bs.js": 174,
	"./ca": 175,
	"./ca.js": 175,
	"./cs": 176,
	"./cs.js": 176,
	"./cv": 177,
	"./cv.js": 177,
	"./cy": 178,
	"./cy.js": 178,
	"./da": 179,
	"./da.js": 179,
	"./de": 180,
	"./de-at": 181,
	"./de-at.js": 181,
	"./de-ch": 182,
	"./de-ch.js": 182,
	"./de.js": 180,
	"./dv": 183,
	"./dv.js": 183,
	"./el": 184,
	"./el.js": 184,
	"./en-au": 185,
	"./en-au.js": 185,
	"./en-ca": 186,
	"./en-ca.js": 186,
	"./en-gb": 187,
	"./en-gb.js": 187,
	"./en-ie": 188,
	"./en-ie.js": 188,
	"./en-nz": 189,
	"./en-nz.js": 189,
	"./eo": 190,
	"./eo.js": 190,
	"./es": 191,
	"./es-do": 192,
	"./es-do.js": 192,
	"./es.js": 191,
	"./et": 193,
	"./et.js": 193,
	"./eu": 194,
	"./eu.js": 194,
	"./fa": 195,
	"./fa.js": 195,
	"./fi": 196,
	"./fi.js": 196,
	"./fo": 197,
	"./fo.js": 197,
	"./fr": 198,
	"./fr-ca": 199,
	"./fr-ca.js": 199,
	"./fr-ch": 200,
	"./fr-ch.js": 200,
	"./fr.js": 198,
	"./fy": 201,
	"./fy.js": 201,
	"./gd": 202,
	"./gd.js": 202,
	"./gl": 203,
	"./gl.js": 203,
	"./gom-latn": 204,
	"./gom-latn.js": 204,
	"./he": 205,
	"./he.js": 205,
	"./hi": 206,
	"./hi.js": 206,
	"./hr": 207,
	"./hr.js": 207,
	"./hu": 208,
	"./hu.js": 208,
	"./hy-am": 209,
	"./hy-am.js": 209,
	"./id": 210,
	"./id.js": 210,
	"./is": 211,
	"./is.js": 211,
	"./it": 212,
	"./it.js": 212,
	"./ja": 213,
	"./ja.js": 213,
	"./jv": 214,
	"./jv.js": 214,
	"./ka": 215,
	"./ka.js": 215,
	"./kk": 216,
	"./kk.js": 216,
	"./km": 217,
	"./km.js": 217,
	"./kn": 218,
	"./kn.js": 218,
	"./ko": 219,
	"./ko.js": 219,
	"./ky": 220,
	"./ky.js": 220,
	"./lb": 221,
	"./lb.js": 221,
	"./lo": 222,
	"./lo.js": 222,
	"./lt": 223,
	"./lt.js": 223,
	"./lv": 224,
	"./lv.js": 224,
	"./me": 225,
	"./me.js": 225,
	"./mi": 226,
	"./mi.js": 226,
	"./mk": 227,
	"./mk.js": 227,
	"./ml": 228,
	"./ml.js": 228,
	"./mr": 229,
	"./mr.js": 229,
	"./ms": 230,
	"./ms-my": 231,
	"./ms-my.js": 231,
	"./ms.js": 230,
	"./my": 232,
	"./my.js": 232,
	"./nb": 233,
	"./nb.js": 233,
	"./ne": 234,
	"./ne.js": 234,
	"./nl": 235,
	"./nl-be": 236,
	"./nl-be.js": 236,
	"./nl.js": 235,
	"./nn": 237,
	"./nn.js": 237,
	"./pa-in": 238,
	"./pa-in.js": 238,
	"./pl": 239,
	"./pl.js": 239,
	"./pt": 240,
	"./pt-br": 241,
	"./pt-br.js": 241,
	"./pt.js": 240,
	"./ro": 242,
	"./ro.js": 242,
	"./ru": 243,
	"./ru.js": 243,
	"./sd": 244,
	"./sd.js": 244,
	"./se": 245,
	"./se.js": 245,
	"./si": 246,
	"./si.js": 246,
	"./sk": 247,
	"./sk.js": 247,
	"./sl": 248,
	"./sl.js": 248,
	"./sq": 249,
	"./sq.js": 249,
	"./sr": 250,
	"./sr-cyrl": 251,
	"./sr-cyrl.js": 251,
	"./sr.js": 250,
	"./ss": 252,
	"./ss.js": 252,
	"./sv": 253,
	"./sv.js": 253,
	"./sw": 254,
	"./sw.js": 254,
	"./ta": 255,
	"./ta.js": 255,
	"./te": 256,
	"./te.js": 256,
	"./tet": 257,
	"./tet.js": 257,
	"./th": 258,
	"./th.js": 258,
	"./tl-ph": 259,
	"./tl-ph.js": 259,
	"./tlh": 260,
	"./tlh.js": 260,
	"./tr": 261,
	"./tr.js": 261,
	"./tzl": 262,
	"./tzl.js": 262,
	"./tzm": 263,
	"./tzm-latn": 264,
	"./tzm-latn.js": 264,
	"./tzm.js": 263,
	"./uk": 265,
	"./uk.js": 265,
	"./ur": 266,
	"./ur.js": 266,
	"./uz": 267,
	"./uz-latn": 268,
	"./uz-latn.js": 268,
	"./uz.js": 267,
	"./vi": 269,
	"./vi.js": 269,
	"./x-pseudo": 270,
	"./x-pseudo.js": 270,
	"./yo": 271,
	"./yo.js": 271,
	"./zh-cn": 272,
	"./zh-cn.js": 272,
	"./zh-hk": 273,
	"./zh-hk.js": 273,
	"./zh-tw": 274,
	"./zh-tw.js": 274
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
webpackContext.id = 369;

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(106);
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
//import { MenuPage } from '../pages/menu/menu';
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\home\home.html"*/'\n\n<ion-content padding>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        selector: 'page-mensajes',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\mensajes\mensajes.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-buttons start>\n\n                <button ion-button menuToggle>\n\n                    <ion-icon name = "menu"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n            <ion-title> Explorar</ion-title>\n\n        </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n sdvnsvlssfbzsfr\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\mensajes\mensajes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MensajesPage);

//# sourceMappingURL=mensajes.js.map

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseConnectionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(420);
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

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetallePage = (function () {
    function DetallePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetallePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetallePage');
    };
    return DetallePage;
}());
DetallePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalle',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\detalle\detalle.html"*/'<ion-header>\n  \n    <ion-navbar color="primary">\n      <ion-title>Agregar Reservacion</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <form #form="ngForm">\n  \n      <ion-item>\n        <ion-label floating>Numero de personas</ion-label>\n        <ion-input name="visitantes" type="number" [(ngModel)]="destino.visitantes" required></ion-input>\n      </ion-item>\n  \n      <!-- <ion-item margin-bottom>\n        <ion-label floating>Fecha</ion-label>\n        <ion-input name="Date" type="Date" [(ngModel)]="destino.Date" required></ion-input>\n      </ion-item> -->\n\n  \n      <button ion-button block full margin-top (click)="save()" [disabled]="!form.valid"> Guardar </button>\n  \n    </form>\n  </ion-content>'/*ion-inline-end:"C:\Users\Sebastian\Desktop\ProyectoIonic\IonicAppMoviles - copia\src\pages\detalle\detalle.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], DetallePage);

//# sourceMappingURL=detalle.js.map

/***/ })

},[327]);
//# sourceMappingURL=main.js.map