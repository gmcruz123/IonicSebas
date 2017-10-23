webpackJsonp([2],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_sesion_login_sesion__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(333);
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
    LoginPage.prototype.Facebookin = function () {
    };
    LoginPage.prototype.signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\login\login.html"*/'<ion-header>    \n\n      <ion-navbar color="primary">\n\n        <ion-title class="Titulo" color = "light"><q>No necesitas suerte, necesitas moverte</q></ion-title>\n\n      </ion-navbar>\n\n    </ion-header>\n\n    <ion-content padding class="login-bg">\n\n        <!-- Login-main permite el despliegue vertical -->\n\n        <div class="login-main"> \n\n              <h1 class="login-title" text-center>LaRutaG</h1>\n\n              <!-- Login-form permite el contenido que se expande -->\n\n              <div class="login-form">\n\n                <!-- Modelo de grilla: -->\n\n                <ion-row>\n\n                  <ion-col ion-col col-12 col-md-6 offset-md-3  col-lg-6 offset-lg-3>\n\n                    <ion-item color="itemLight">\n\n                        <button ion-col col-12 col-md-10 offset-md-1  col-lg-6 offset-lg-3 \n\n                                ion-button block color ="facebook">\n\n                                <ion-icon name ="logo-facebook" (click)="Facebookin()"> \n\n                                </ion-icon> Login con Facebook\n\n                        </button> \n\n                        <script>\n\n                          window.fbAsyncInit = function() {\n\n                            FB.init({\n\n                              appId      : \'124542488250174\',\n\n                              cookie     : true,\n\n                              xfbml      : true,\n\n                              version    : \'1.8.0_144\'\n\n                            });\n\n                            FB.AppEvents.logPageView();   \n\n                          };\n\n                        // Cargamos el sdk de forma asíncrona\n\n                          (function(d, s, id){\n\n                             var js, fjs = d.getElementsByTagName(s)[0];\n\n                             if (d.getElementById(id)) {return;}\n\n                             js = d.createElement(s); js.id = id;\n\n                             js.src = "//connect.facebook.net/en_US/sdk.js";\n\n                             fjs.parentNode.insertBefore(js, fjs);\n\n                           }(document, \'script\', \'facebook-jssdk\'));\n\n                        </script>\n\n                        <br>\n\n                        <button  ion-col col-12 col-md-10 offset-md-1  col-lg-6 offset-lg-3\n\n                                ion-button block color="danger" (click)="login()">Inicia Sesión\n\n                        </button>\n\n                        <br>  \n\n                        <button ion-col col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 \n\n                        ion-button clear (click) = "signin()" >Registrate</button>  \n\n                    </ion-item>\n\n                  </ion-col>\n\n                </ion-row>\n\n              </div>\n\n            </div>\n\n      </ion-content>'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_perfil_perfil__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_favoritos_favoritos__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_special_special__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(107);
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
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\menu\menu.html"*/'<ion-split-pane when="lg">\n\n    <ion-menu [content]="content">\n\n      \n\n      <ion-list no-lines>\n\n        <ion-list-header>Menu</ion-list-header>\n\n        <button menuClose ion-item *ngFor="let m of menuOpc; index as i" (click)="setContent(i)"> \n\n          <ion-icon [name]="m.icon" margin-right></ion-icon> {{m.label}}\n\n        </button>\n\n        <ion-list-header>Perfil</ion-list-header>\n\n        <button ion-item (click)="logout()"> <ion-icon name="md-exit" margin-right></ion-icon>Cerrar Sesion</button>\n\n      </ion-list>\n\n  \n\n    </ion-menu>\n\n    <ion-nav [root]="root" main #content></ion-nav>\n\n  </ion-split-pane>'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MenuPage);

var MenuPage_1;
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroProvider; });
/* unused harmony export SimpleResponse */
/* unused harmony export User */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(329);
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

/***/ 110:
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
        selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\calendar\calendar.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n            <button ion-button menuToggle icon-only>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n      <ion-title>\n\n        {{ viewTitle }}\n\n      </ion-title>\n\n      <ion-buttons end>\n\n        <button ion-button icon-only (click)="addEvent()">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-navbar>\n\n  </ion-header>\n\n   \n\n  <ion-content>\n\n  <calendar [eventSource]="eventSource"\n\n          [calendarMode]="calendar.mode"\n\n          [currentDate]="calendar.currentDate"\n\n          (onEventSelected)="onEventSelected($event)"\n\n          (onTitleChanged)="onViewTitleChanged($event)"\n\n          (onTimeSelected)="onTimeSelected($event)"\n\n          step="30"\n\n          class="calendar">\n\n        </calendar>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\calendar\calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		436,
		1
	],
	"../pages/event-modal/event-modal.module": [
		437,
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
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSesionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_registro_registro__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
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
                _this.guardar.set("identificacion", res.user._id) + "";
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
        selector: 'page-login-sesion',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\login\login-sesion\login-sesion.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <ion-title class="Titulo" color = "light"><q>No necesitas suerte, necesitas moverte</q></ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n<ion-content padding class = "login">\n\n  <ion-card col-md-8 offset-md-2 col-lg-8 offset-lg-2 >\n\n      <ion-card-header class ="card-header">\n\n            Iniciar sesion \n\n      </ion-card-header>\n\n\n\n    <ion-card-content>\n\n          <ion-list no-line>\n\n              <ion-item>\n\n                <ion-input ion-col col-12 col-md-10  col-lg-6 offset-lg-3\n\n                type = "text" placeholder = "Username" text-center [(ngModel)]="user"\n\n                ></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-input ion-col col-12 col-md-10  col-lg-6 offset-lg-3\n\n                 type = "password" placeholder = "Password" text-center [(ngModel)]="password"\n\n                ></ion-input>\n\n              </ion-item>\n\n              <a>¿Has olvidado tu contraseña? <br> <b>Ingresa aquí para recuperar</b></a>\n\n              <ion-item>\n\n                    <button ion-col col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 ion-button\n\n                     block color="danger" (click)="login()" >Entrar</button>    \n\n              </ion-item>\n\n            </ion-list>\n\n                     \n\n          </ion-card-content>\n\n    \n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\login\login-sesion\login-sesion.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_registro_registro__["a" /* RegistroProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], LoginSesionPage);

//# sourceMappingURL=login-sesion.js.map

/***/ }),

/***/ 325:
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
        selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\menu\perfil\perfil.html"*/'\n\n<ion-header>\n\n\n\n  <ion-navbar color = "primary">\n\n      <button ion-button menuToggle icon-only>\n\n          <ion-icon name = "menu"></ion-icon>     \n\n      </button>\n\n        <ion-title>Perfil</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\menu\perfil\perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_explorar_explorar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservaciones_reservaciones__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(110);
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
        this.reservasPage = __WEBPACK_IMPORTED_MODULE_2__reservaciones_reservaciones__["a" /* ReservasPage */];
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
        selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\tabs\tabs.html"*/'     \n\n<ion-tabs>\n\n  <ion-tab [root]="explorarPage" tabTitle = "Explorar" tabIcon = "ios-eye" ></ion-tab>\n\n  <ion-tab [root]="reservasPage" tabTitle = "Reservas" tabIcon = "ios-book" ></ion-tab>\n\n  <ion-tab [root]="calendarPage" tabTitle = "Calendario"tabIcon= "ios-calendar"></ion-tab>\n\n  <!-- <ion-tab [root]="favoritosPage"tabTitle = "Favoritos"tabIcon = "ios-star-half-outline" ></ion-tab>\n\n  <ion-tab [root]="rootexit"     tabTitle = "Salir"    tabIcon = "ios-exit" ></ion-tab> -->\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\tabs\tabs.html"*/,
    })
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detalle_detalle__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_reservas_reservas__ = __webpack_require__(55);
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
    ExplorarPage.prototype.detalle = function (index) {
        console.log("0.0. indexDestino Elegido: " + this.data[index]._id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__detalle_detalle__["a" /* DetallePage */], { DestinoExplorar: this.data[index] });
    };
    return ExplorarPage;
}());
ExplorarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-explorar',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\menu\explorar\explorar.html"*/'  <ion-header>    \n\n      <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only > \n\n          <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        <ion-title>Explorar</ion-title>\n\n      </ion-navbar>\n\n    </ion-header>\n\n<ion-content>\n\n    <ion-searchbar>Buscar</ion-searchbar>\n\n    \n\n            <ion-refresher (ionRefresh) = "doRefresh($event)">\n\n                <ion-refresher-content>\n\n                    pullingText = "Desliza para recargar"\n\n                    refreshText = "Recargando ..."\n\n                </ion-refresher-content>\n\n            </ion-refresher>\n\n    \n\n    <ion-col col-12 col-md-6 col-lg-4 *ngFor = "let d of data ;  let i = index">\n\n        <ion-card>\n\n              <img src = "{{d.imagen}}" alt = "">\n\n              <ion-card-content>\n\n                  <ion-card-title>{{d.nombre}}</ion-card-title>\n\n                    <div><ion-icon name="logo-usd"></ion-icon> Precio: {{d.precio}}</div>\n\n                    <div><ion-icon name="people"></ion-icon> Me gusta: {{d.visitantes}}</div>\n\n      \n\n                           <button ion-button icon-only (click) = "detalle(i)" full>\n\n                              <ion-icon menu="search"></ion-icon>\n\n                               Reservar\n\n                           </button>\n\n              </ion-card-content>\n\n        </ion-card>   \n\n    </ion-col>  \n\n</ion-content> \n\n            \n\n<!-- \n\n    <ion-list col-12 col-md-12 col-lg-12 >\n\n        <ion-item *ngFor = "let d of data">\n\n            <img src = "{{d.imagen}}" alt = "">\n\n            <h2> <strong>{{d.nombre}}</strong></h2>\n\n            <div><ion-icon name="logo-usd"></ion-icon> Precio: {{d.precio}}</div>\n\n            <div><ion-icon name="people"></ion-icon> Me gusta: {{d.visitantes}}</div>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n     -->\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\menu\explorar\explorar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_reservas_reservas__["b" /* ReservasProvider */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], ExplorarPage);

//# sourceMappingURL=explorar.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reservas_reservas__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { User } from '../../providers/registro/registro';

var DetallePage = (function () {
    function DetallePage(navCtrl, navParams, reservar, toastCtrl, guardar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reservar = reservar;
        this.toastCtrl = toastCtrl;
        this.guardar = guardar;
        this.DestinoExplorar = this.navParams.get("DestinoExplorar");
        this.dataDestino = new __WEBPACK_IMPORTED_MODULE_2__providers_reservas_reservas__["a" /* Destinos */]();
    }
    DetallePage.prototype.save = function () {
        var _this = this;
        //Guardo el id del sitio seleccionado. Envío la posición del objeto destino y lo recibo
        //con el nombre de DestinoExplorar y luego se lo asigno id destino   
        console.log("0. DestinoExplorar.id: " + this.DestinoExplorar._id);
        this.dataDestino._idDestino = this.DestinoExplorar._id;
        console.log("1. dataReserva._id del destino : " + this.dataDestino._idDestino);
        //Asignamos el valor del identificador del usuario a la reserva (es decir, al destino específico)
        this.guardar.get("identificacion").then(function (val) {
            _this.dataDestino._idusuario = val + "";
            _this.reservar.AgregarReserva(_this.dataDestino, _this.dataDestino._idusuario)
                .subscribe(function (res) {
                if (res.success) {
                    _this.showToast("¡Reserva realizada EXITOSAMENTE!");
                    _this.navCtrl.pop();
                }
                else {
                    _this.showToast("Error al realizar reserva");
                }
            });
        });
    };
    DetallePage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    return DetallePage;
}());
DetallePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detalle',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\detalle\detalle.html"*/'<ion-header>\n\n\n\n    <ion-navbar color="primary">\n\n      <ion-title>Agregar Reservacion</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n    \n\n  <ion-content padding class = "login-bg">\n\n    <form #form="ngForm" col-12 col-md-6 offset-md-6 >\n\n      <ion-item>\n\n        <ion-label floating>Entidad </ion-label>\n\n        <ion-input name="nombre" type="text" [(ngModel)]="dataDestino.nombre" required></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label floating>Numero de personas</ion-label>\n\n        <ion-input name="NumPersonas" type="number" [(ngModel)]="dataDestino.NumPersonas" required></ion-input>\n\n      </ion-item>\n\n      <ion-item>  \n\n        <ion-label>Fecha</ion-label>\n\n        <ion-input name="fecha" type="Date" [(ngModel)]="dataDestino.fecha" required></ion-input>\n\n      </ion-item>\n\n      <button ion-button block full margin-top (click)="save()" [disabled]="!form.valid"> Guardar </button>\n\n    </form>\n\n  </ion-content>'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\detalle\detalle.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_reservas_reservas__["b" /* ReservasProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], DetallePage);

//# sourceMappingURL=detalle.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL; });
var URL = "https://proyectoionic.herokuapp.com";
//tomar del api...master heroku , el repositorio se llama rutag master al hacer push 
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reservas_reservas__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { User } from '../../providers/registro/registro';

var ReservasPage = (function () {
    //dataReserva: Destinos;
    //usuario: User;
    function ReservasPage(navCtrl, navParams, service, guardado) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.guardado = guardado;
        this.data = [];
        //   this.dataReserva = new Destinos();  
    }
    //Realizar actualizaciones a lo que se cargue pág
    ReservasPage.prototype.ionViewDidLoad = function () {
        this.loadReservas();
    };
    ReservasPage.prototype.loadReservas = function (refresher) {
        var _this = this;
        if (refresher === void 0) { refresher = null; }
        //Utilizo el retorno de una promesa para almacenar el valor del id usuario en var storage
        this.guardado.get("identificacion").then(function (id) {
            console.log("4. id usuario desde reservaciones.ts: " + id);
            _this.service.MostrarReservas(id).subscribe(function (res) {
                _this.data = res;
                console.log("5. Aquí deberian mostrarse las reservas de usuario" + _this.data);
                if (refresher != null)
                    refresher.complete();
            });
        });
    };
    // //Realizar actualizaciones al generar evento
    ReservasPage.prototype.doRefresh = function (refresher) {
        this.loadReservas(refresher);
    };
    return ReservasPage;
}());
ReservasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-reservaciones',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\reservaciones\reservaciones.html"*/'<ion-header>    \n\n    <ion-navbar color="primary">\n\n      <button ion-button menuToggle icon-only > \n\n        <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n      <ion-title>Reservaciones</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n<ion-content>\n\n  <!-- <ion-searchbar>Buscar</ion-searchbar> -->\n\n\n\n          <ion-refresher (ionRefresh) = "doRefresh($event)">\n\n              <ion-refresher-content>\n\n                  pullingText = "Desliza para recargar"\n\n                  refreshText = "Recargando ..."\n\n              </ion-refresher-content>\n\n          </ion-refresher>\n\n  \n\n  <ion-col col-12 col-md-6 col-lg-4 *ngFor = "let d of data ;  let i = index">\n\n      <ion-card>\n\n            <ion-card-content>\n\n                  <div><ion-icon name="contract"></ion-icon> Ocasión: {{d.nombre}}</div>\n\n                  <div><ion-icon name="people"></ion-icon> Numero de Personas: {{d.NumPersonas}}</div>\n\n                  <div><ion-icon name="calendar"></ion-icon> Fecha de viaje: {{d.fecha}}</div>\n\n                </ion-card-content>\n\n      </ion-card>   \n\n  </ion-col>  \n\n</ion-content> \n\n          '/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\reservaciones\reservaciones.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_reservas_reservas__["b" /* ReservasProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_reservas_reservas__["b" /* ReservasProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]) === "function" && _d || Object])
], ReservasPage);

var _a, _b, _c, _d;
//# sourceMappingURL=reservaciones.js.map

/***/ }),

/***/ 331:
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
        selector: 'page-favoritos',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\menu\favoritos\favoritos.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only > \n\n          <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        <ion-title>Favoritos</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\menu\favoritos\favoritos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], FavoritosPage);

//# sourceMappingURL=favoritos.js.map

/***/ }),

/***/ 332:
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
        selector: 'page-special',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\menu\special\special.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only > \n\n          <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        <ion-title>Explorar</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n<ion-content padding>\n\nsdvosgokegfkmlefm\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\menu\special\special.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SpecialPage);

//# sourceMappingURL=special.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_registro_registro__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(108);
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
        selector: 'page-signin',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\signin\signin.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <ion-title class="Titulo" color = "light"><q>No necesitas suerte, necesitas moverte</q></ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n<ion-content padding class = "login">\n\n  <ion-card col-md-8 offset-md-2 col-lg-8 offset-lg-2 >\n\n      <ion-card-header class ="card-header">\n\n            Registro\n\n      </ion-card-header>\n\n    <ion-card-content>\n\n          <ion-list no-line>\n\n              <a>Ingresa los siguientes datos:</a>\n\n              <ion-item>\n\n                  <ion-input ion-col col-12 col-md-10 col-lg-6 offset-lg-3\n\n                  type = "text" placeholder = "Email" text-center [(ngModel)] = "email">\n\n                  </ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-input ion-col col-12 col-md-10 col-lg-6 offset-lg-3\n\n                type = "text" placeholder = "Username" text-center [(ngModel)]="user"\n\n                ></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                <ion-input ion-col col-12 col-md-10  col-lg-6 offset-lg-3\n\n                 type = "password" placeholder = "Password" text-center [(ngModel)]="password"\n\n                ></ion-input>\n\n              </ion-item>\n\n              <ion-item>\n\n                    <button ion-col col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 ion-button\n\n                     block color="danger" (click)="signin()">Ingresar datos</button>    \n\n              </ion-item>\n\n            </ion-list>\n\n          </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\signin\signin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_registro_registro__["a" /* RegistroProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login_sesion_login_sesion__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menu_explorar_explorar__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_menu_special_special__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_mensajes_mensajes__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_menu_favoritos_favoritos__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_reservaciones_reservaciones__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_menu_perfil_perfil__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_calendar_calendar__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_menu_menu__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_detalle_detalle__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_registro_registro__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_reservas_reservas__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ionic2_calendar__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_database_connection_database_connection__ = __webpack_require__(434);
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
            __WEBPACK_IMPORTED_MODULE_17__pages_reservaciones_reservaciones__["a" /* ReservasPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_menu_special_special__["a" /* SpecialPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_detalle_detalle__["a" /* DetallePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_24_ionic2_calendar__["a" /* NgCalendarModule */],
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
            __WEBPACK_IMPORTED_MODULE_17__pages_reservaciones_reservaciones__["a" /* ReservasPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_menu_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_menu_special_special__["a" /* SpecialPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_detalle_detalle__["a" /* DetallePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_25__providers_database_connection_database_connection__["a" /* DatabaseConnectionProvider */],
            //  DestinosDataProvider,
            __WEBPACK_IMPORTED_MODULE_22__providers_registro_registro__["a" /* RegistroProvider */],
            __WEBPACK_IMPORTED_MODULE_23__providers_reservas_reservas__["b" /* ReservasProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 164,
	"./af.js": 164,
	"./ar": 165,
	"./ar-dz": 166,
	"./ar-dz.js": 166,
	"./ar-kw": 167,
	"./ar-kw.js": 167,
	"./ar-ly": 168,
	"./ar-ly.js": 168,
	"./ar-ma": 169,
	"./ar-ma.js": 169,
	"./ar-sa": 170,
	"./ar-sa.js": 170,
	"./ar-tn": 171,
	"./ar-tn.js": 171,
	"./ar.js": 165,
	"./az": 172,
	"./az.js": 172,
	"./be": 173,
	"./be.js": 173,
	"./bg": 174,
	"./bg.js": 174,
	"./bm": 175,
	"./bm.js": 175,
	"./bn": 176,
	"./bn.js": 176,
	"./bo": 177,
	"./bo.js": 177,
	"./br": 178,
	"./br.js": 178,
	"./bs": 179,
	"./bs.js": 179,
	"./ca": 180,
	"./ca.js": 180,
	"./cs": 181,
	"./cs.js": 181,
	"./cv": 182,
	"./cv.js": 182,
	"./cy": 183,
	"./cy.js": 183,
	"./da": 184,
	"./da.js": 184,
	"./de": 185,
	"./de-at": 186,
	"./de-at.js": 186,
	"./de-ch": 187,
	"./de-ch.js": 187,
	"./de.js": 185,
	"./dv": 188,
	"./dv.js": 188,
	"./el": 189,
	"./el.js": 189,
	"./en-au": 190,
	"./en-au.js": 190,
	"./en-ca": 191,
	"./en-ca.js": 191,
	"./en-gb": 192,
	"./en-gb.js": 192,
	"./en-ie": 193,
	"./en-ie.js": 193,
	"./en-nz": 194,
	"./en-nz.js": 194,
	"./eo": 195,
	"./eo.js": 195,
	"./es": 196,
	"./es-do": 197,
	"./es-do.js": 197,
	"./es-us": 198,
	"./es-us.js": 198,
	"./es.js": 196,
	"./et": 199,
	"./et.js": 199,
	"./eu": 200,
	"./eu.js": 200,
	"./fa": 201,
	"./fa.js": 201,
	"./fi": 202,
	"./fi.js": 202,
	"./fo": 203,
	"./fo.js": 203,
	"./fr": 204,
	"./fr-ca": 205,
	"./fr-ca.js": 205,
	"./fr-ch": 206,
	"./fr-ch.js": 206,
	"./fr.js": 204,
	"./fy": 207,
	"./fy.js": 207,
	"./gd": 208,
	"./gd.js": 208,
	"./gl": 209,
	"./gl.js": 209,
	"./gom-latn": 210,
	"./gom-latn.js": 210,
	"./gu": 211,
	"./gu.js": 211,
	"./he": 212,
	"./he.js": 212,
	"./hi": 213,
	"./hi.js": 213,
	"./hr": 214,
	"./hr.js": 214,
	"./hu": 215,
	"./hu.js": 215,
	"./hy-am": 216,
	"./hy-am.js": 216,
	"./id": 217,
	"./id.js": 217,
	"./is": 218,
	"./is.js": 218,
	"./it": 219,
	"./it.js": 219,
	"./ja": 220,
	"./ja.js": 220,
	"./jv": 221,
	"./jv.js": 221,
	"./ka": 222,
	"./ka.js": 222,
	"./kk": 223,
	"./kk.js": 223,
	"./km": 224,
	"./km.js": 224,
	"./kn": 225,
	"./kn.js": 225,
	"./ko": 226,
	"./ko.js": 226,
	"./ky": 227,
	"./ky.js": 227,
	"./lb": 228,
	"./lb.js": 228,
	"./lo": 229,
	"./lo.js": 229,
	"./lt": 230,
	"./lt.js": 230,
	"./lv": 231,
	"./lv.js": 231,
	"./me": 232,
	"./me.js": 232,
	"./mi": 233,
	"./mi.js": 233,
	"./mk": 234,
	"./mk.js": 234,
	"./ml": 235,
	"./ml.js": 235,
	"./mr": 236,
	"./mr.js": 236,
	"./ms": 237,
	"./ms-my": 238,
	"./ms-my.js": 238,
	"./ms.js": 237,
	"./my": 239,
	"./my.js": 239,
	"./nb": 240,
	"./nb.js": 240,
	"./ne": 241,
	"./ne.js": 241,
	"./nl": 242,
	"./nl-be": 243,
	"./nl-be.js": 243,
	"./nl.js": 242,
	"./nn": 244,
	"./nn.js": 244,
	"./pa-in": 245,
	"./pa-in.js": 245,
	"./pl": 246,
	"./pl.js": 246,
	"./pt": 247,
	"./pt-br": 248,
	"./pt-br.js": 248,
	"./pt.js": 247,
	"./ro": 249,
	"./ro.js": 249,
	"./ru": 250,
	"./ru.js": 250,
	"./sd": 251,
	"./sd.js": 251,
	"./se": 252,
	"./se.js": 252,
	"./si": 253,
	"./si.js": 253,
	"./sk": 254,
	"./sk.js": 254,
	"./sl": 255,
	"./sl.js": 255,
	"./sq": 256,
	"./sq.js": 256,
	"./sr": 257,
	"./sr-cyrl": 258,
	"./sr-cyrl.js": 258,
	"./sr.js": 257,
	"./ss": 259,
	"./ss.js": 259,
	"./sv": 260,
	"./sv.js": 260,
	"./sw": 261,
	"./sw.js": 261,
	"./ta": 262,
	"./ta.js": 262,
	"./te": 263,
	"./te.js": 263,
	"./tet": 264,
	"./tet.js": 264,
	"./th": 265,
	"./th.js": 265,
	"./tl-ph": 266,
	"./tl-ph.js": 266,
	"./tlh": 267,
	"./tlh.js": 267,
	"./tr": 268,
	"./tr.js": 268,
	"./tzl": 269,
	"./tzl.js": 269,
	"./tzm": 270,
	"./tzm-latn": 271,
	"./tzm-latn.js": 271,
	"./tzm.js": 270,
	"./uk": 272,
	"./uk.js": 272,
	"./ur": 273,
	"./ur.js": 273,
	"./uz": 274,
	"./uz-latn": 275,
	"./uz-latn.js": 275,
	"./uz.js": 274,
	"./vi": 276,
	"./vi.js": 276,
	"./x-pseudo": 277,
	"./x-pseudo.js": 277,
	"./yo": 278,
	"./yo.js": 278,
	"./zh-cn": 279,
	"./zh-cn.js": 279,
	"./zh-hk": 280,
	"./zh-hk.js": 280,
	"./zh-tw": 281,
	"./zh-tw.js": 281
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
webpackContext.id = 382;

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(107);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 421:
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\home\home.html"*/'\n\n<ion-content padding>\n\n  \n\n</ion-content>'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 422:
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
        selector: 'page-mensajes',template:/*ion-inline-start:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\mensajes\mensajes.html"*/'\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-buttons start>\n\n                <button ion-button menuToggle>\n\n                    <ion-icon name = "menu"></ion-icon>\n\n                </button>\n\n            </ion-buttons>\n\n            <ion-title> Explorar</ion-title>\n\n        </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n sdvnsvlssfbzsfr\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\PC portatil\Desktop\IonicSebastian\src\pages\mensajes\mensajes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MensajesPage);

//# sourceMappingURL=mensajes.js.map

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseConnectionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(435);
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

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ReservasProvider; });
/* unused harmony export SimpleResponse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Destinos; });
/* unused harmony export Reservas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(329);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservasProvider = (function () {
    function ReservasProvider(http) {
        this.http = http;
        console.log('Control de reservas');
    }
    //Mostrar sitios turísticos
    ReservasProvider.prototype.all = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* URL */] + "/sitios";
        return this.http.get(url);
    };
    //Agregar reservas:
    ReservasProvider.prototype.AgregarReserva = function (Destinos, usuarioid) {
        console.log("2. Usuarioid: " + usuarioid);
        var urlfinal = __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* URL */] + "/reservas";
        console.log("3. Destinos._Usuarioid: " + Destinos._idusuario);
        return this.http.post(urlfinal, Destinos);
    };
    ReservasProvider.prototype.MostrarReservas = function (id) {
        console.log("5. IdUsuario desde Reservas.ts: " + id);
        var urlReserva = __WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* URL */] + "/reservas/" + id;
        console.log("6. IdUsuario Enviado exitosamente");
        return this.http.get(urlReserva);
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
    function Destinos() {
    }
    return Destinos;
}());

var Reservas = (function () {
    function Reservas() {
    }
    return Reservas;
}());

var _a;
//# sourceMappingURL=reservas.js.map

/***/ })

},[334]);
//# sourceMappingURL=main.js.map