webpackJsonp([2],{

/***/ 105:
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
        selector: 'page-calendar',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\calendar\calendar.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-buttons start>\n            <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n          </ion-buttons>\n      <ion-title>\n        {{ viewTitle }}\n      </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="addEvent()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n   \n  <ion-content>\n  <calendar [eventSource]="eventSource"\n          [calendarMode]="calendar.mode"\n          [currentDate]="calendar.currentDate"\n          (onEventSelected)="onEventSelected($event)"\n          (onTitleChanged)="onViewTitleChanged($event)"\n          (onTimeSelected)="onTimeSelected($event)"\n          step="30"\n          class="calendar">\n        </calendar>\n  </ion-content>'/*ion-inline-end:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\calendar\calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		413,
		1
	],
	"../pages/event-modal/event-modal.module": [
		414,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSesionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_registro_registro__ = __webpack_require__(321);
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
        this.entrar.insert().subscribe(function (res) {
            if (res.success) {
                _this.showToast("Libro insertado !");
                _this.navCtrl.pop();
            }
            else {
                _this.showToast("Error al insertar libro");
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
        selector: 'page-login-sesion',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\login\login-sesion\login-sesion.html"*/'<ion-header>\n    \n      <ion-navbar color="primary">\n        <ion-title class="Titulo" color = "light"><q>No necesitas suerte, necesitas moverte</q></ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n<ion-content padding class = "login">\n  <ion-card col-md-8 offset-md-2 col-lg-8 offset-lg-2 >\n      <ion-card-header class ="card-header">\n            Iniciar sesion \n      </ion-card-header>\n\n    <ion-card-content>\n          <ion-list no-line>\n              <ion-item>\n                <ion-input ion-col col-12 col-md-10  col-lg-6 offset-lg-3\n                type = "text" placeholder = "Username" text-center [(ngModel)]="libro.nombre"\n                ></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-input ion-col col-12 col-md-10  col-lg-6 offset-lg-3\n                 type = "password" placeholder = "Password" text-center [(ngModel)]="libro.autor"\n                ></ion-input>\n              </ion-item>\n              <a>¿Has olvidado tu contraseña? <br> <b>Ingresa aquí para recuperar</b></a>\n              <ion-item>\n                    <button ion-col col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3 ion-button\n                     block color="danger" (click)="login()" >Entrar</button>    \n              </ion-item>\n            </ion-list>\n            <button ion-button small (click)="myGoBack()" >Volver</button>            \n          </ion-card-content>\n    \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\login\login-sesion\login-sesion.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__providers_registro_registro__["a" /* RegistroProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_registro_registro__["a" /* RegistroProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object])
], LoginSesionPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=login-sesion.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_perfil_perfil__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_favoritos_favoritos__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_special_special__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(52);
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
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\menu\menu.html"*/'<ion-split-pane when="lg">\n    <ion-menu [content]="content">\n      \n      <ion-list no-lines>\n        <ion-list-header>Menu</ion-list-header>\n        <button menuClose ion-item *ngFor="let m of menuOpc; index as i" (click)="setContent(i)"> \n          <ion-icon [name]="m.icon" margin-right></ion-icon> {{m.label}}\n        </button>\n        <ion-list-header>Perfil</ion-list-header>\n        <button ion-item (click)="logout()"> <ion-icon name="md-exit" margin-right></ion-icon>Cerrar Sesion</button>\n      </ion-list>\n  \n    </ion-menu>\n    <ion-nav [root]="root" main #content></ion-nav>\n  </ion-split-pane>'/*ion-inline-end:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\menu\menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 315:
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
        selector: 'page-perfil',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\menu\perfil\perfil.html"*/'<!--\n  Generated template for the PerfilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>perfil</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\menu\perfil\perfil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PerfilPage);

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__explorar_explorar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservas_reservas__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(105);
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
        selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\tabs\tabs.html"*/'     \n<ion-tabs>\n  <ion-tab [root]="explorarPage" tabTitle = "Explorar" tabIcon = "ios-eye" ></ion-tab>\n  <ion-tab [root]="reservasPage" tabTitle = "Reservas" tabIcon = "ios-book" ></ion-tab>\n  <ion-tab [root]="calendarPage" tabTitle = "Calendario"tabIcon= "ios-calendar"></ion-tab>\n  <!-- <ion-tab [root]="favoritosPage"tabTitle = "Favoritos"tabIcon = "ios-star-half-outline" ></ion-tab>\n  <ion-tab [root]="rootexit"     tabTitle = "Salir"    tabIcon = "ios-exit" ></ion-tab> -->\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\tabs\tabs.html"*/,
    })
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 317:
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
        selector: 'page-explorar',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\explorar\explorar.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <button ion-button menuToggle icon-only > \n\n          <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n        <ion-title>Explorar</ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n<ion-content>\n\n <ion-searchbar>Buscar</ion-searchbar> \n\n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\explorar\explorar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ExplorarPage);

//# sourceMappingURL=explorar.js.map

/***/ }),

/***/ 318:
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
        selector: 'page-reservas',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\reservas\reservas.html"*/'<ion-header>\n    \n      <ion-navbar color="primary">\n        <button ion-button menuToggle icon-only > \n          <ion-icon name="menu"></ion-icon>\n          </button>\n        <ion-title>Reservas</ion-title>\n      </ion-navbar>\n    \n    </ion-header>\n\n<ion-content padding>\nadfhsdhsdfv\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\reservas\reservas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], ReservasPage);

//# sourceMappingURL=reservas.js.map

/***/ }),

/***/ 319:
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
        selector: 'page-favoritos',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\menu\favoritos\favoritos.html"*/'<!--\n  Generated template for the FavoritosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>favoritos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\menu\favoritos\favoritos.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], FavoritosPage);

//# sourceMappingURL=favoritos.js.map

/***/ }),

/***/ 320:
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
        selector: 'page-special',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\menu\special\special.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-buttons start>\n        <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      </ion-buttons>\n      <ion-title>Special</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\nsdvosgokegfkmlefm\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\menu\special\special.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SpecialPage);

//# sourceMappingURL=special.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(397);
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
    RegistroProvider.prototype.login = function (email, password) {
        var contentType = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ "Content-Type<": "application/json" });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */](contentType);
        var body = { email: email, password: password };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* URL */] + "/users/login", body, options).map(function (response) {
            return response.json();
        });
    };
    return RegistroProvider;
}());
RegistroProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], RegistroProvider);

//# sourceMappingURL=registro.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(341);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login_sesion_login_sesion__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_database_connection_database_connection__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_explorar_explorar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menu_special_special__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_mensajes_mensajes__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_menu_favoritos_favoritos__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_reservas_reservas__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_menu_perfil_perfil__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_registro_registro__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_calendar_calendar__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_menu_menu__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic2_calendar__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { HttpClientModule } from '@angular/common/http';
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login_sesion_login_sesion__["a" /* LoginSesionPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_mensajes_mensajes__["a" /* MensajesPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_menu_favoritos_favoritos__["a" /* FavoritosPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_menu_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_explorar_explorar__["a" /* ExplorarPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_reservas_reservas__["a" /* ReservasPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_menu_special_special__["a" /* SpecialPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_21_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_login_login_sesion_login_sesion__["a" /* LoginSesionPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_mensajes_mensajes__["a" /* MensajesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_explorar_explorar__["a" /* ExplorarPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_menu_favoritos_favoritos__["a" /* FavoritosPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_reservas_reservas__["a" /* ReservasPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_menu_perfil_perfil__["a" /* PerfilPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_menu_special_special__["a" /* SpecialPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_10__providers_database_connection_database_connection__["a" /* DatabaseConnectionProvider */],
            //HttpClientModule,
            __WEBPACK_IMPORTED_MODULE_18__providers_registro_registro__["a" /* RegistroProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 156,
	"./af.js": 156,
	"./ar": 157,
	"./ar-dz": 158,
	"./ar-dz.js": 158,
	"./ar-kw": 159,
	"./ar-kw.js": 159,
	"./ar-ly": 160,
	"./ar-ly.js": 160,
	"./ar-ma": 161,
	"./ar-ma.js": 161,
	"./ar-sa": 162,
	"./ar-sa.js": 162,
	"./ar-tn": 163,
	"./ar-tn.js": 163,
	"./ar.js": 157,
	"./az": 164,
	"./az.js": 164,
	"./be": 165,
	"./be.js": 165,
	"./bg": 166,
	"./bg.js": 166,
	"./bn": 167,
	"./bn.js": 167,
	"./bo": 168,
	"./bo.js": 168,
	"./br": 169,
	"./br.js": 169,
	"./bs": 170,
	"./bs.js": 170,
	"./ca": 171,
	"./ca.js": 171,
	"./cs": 172,
	"./cs.js": 172,
	"./cv": 173,
	"./cv.js": 173,
	"./cy": 174,
	"./cy.js": 174,
	"./da": 175,
	"./da.js": 175,
	"./de": 176,
	"./de-at": 177,
	"./de-at.js": 177,
	"./de-ch": 178,
	"./de-ch.js": 178,
	"./de.js": 176,
	"./dv": 179,
	"./dv.js": 179,
	"./el": 180,
	"./el.js": 180,
	"./en-au": 181,
	"./en-au.js": 181,
	"./en-ca": 182,
	"./en-ca.js": 182,
	"./en-gb": 183,
	"./en-gb.js": 183,
	"./en-ie": 184,
	"./en-ie.js": 184,
	"./en-nz": 185,
	"./en-nz.js": 185,
	"./eo": 186,
	"./eo.js": 186,
	"./es": 187,
	"./es-do": 188,
	"./es-do.js": 188,
	"./es.js": 187,
	"./et": 189,
	"./et.js": 189,
	"./eu": 190,
	"./eu.js": 190,
	"./fa": 191,
	"./fa.js": 191,
	"./fi": 192,
	"./fi.js": 192,
	"./fo": 193,
	"./fo.js": 193,
	"./fr": 194,
	"./fr-ca": 195,
	"./fr-ca.js": 195,
	"./fr-ch": 196,
	"./fr-ch.js": 196,
	"./fr.js": 194,
	"./fy": 197,
	"./fy.js": 197,
	"./gd": 198,
	"./gd.js": 198,
	"./gl": 199,
	"./gl.js": 199,
	"./gom-latn": 200,
	"./gom-latn.js": 200,
	"./he": 201,
	"./he.js": 201,
	"./hi": 202,
	"./hi.js": 202,
	"./hr": 203,
	"./hr.js": 203,
	"./hu": 204,
	"./hu.js": 204,
	"./hy-am": 205,
	"./hy-am.js": 205,
	"./id": 206,
	"./id.js": 206,
	"./is": 207,
	"./is.js": 207,
	"./it": 208,
	"./it.js": 208,
	"./ja": 209,
	"./ja.js": 209,
	"./jv": 210,
	"./jv.js": 210,
	"./ka": 211,
	"./ka.js": 211,
	"./kk": 212,
	"./kk.js": 212,
	"./km": 213,
	"./km.js": 213,
	"./kn": 214,
	"./kn.js": 214,
	"./ko": 215,
	"./ko.js": 215,
	"./ky": 216,
	"./ky.js": 216,
	"./lb": 217,
	"./lb.js": 217,
	"./lo": 218,
	"./lo.js": 218,
	"./lt": 219,
	"./lt.js": 219,
	"./lv": 220,
	"./lv.js": 220,
	"./me": 221,
	"./me.js": 221,
	"./mi": 222,
	"./mi.js": 222,
	"./mk": 223,
	"./mk.js": 223,
	"./ml": 224,
	"./ml.js": 224,
	"./mr": 225,
	"./mr.js": 225,
	"./ms": 226,
	"./ms-my": 227,
	"./ms-my.js": 227,
	"./ms.js": 226,
	"./my": 228,
	"./my.js": 228,
	"./nb": 229,
	"./nb.js": 229,
	"./ne": 230,
	"./ne.js": 230,
	"./nl": 231,
	"./nl-be": 232,
	"./nl-be.js": 232,
	"./nl.js": 231,
	"./nn": 233,
	"./nn.js": 233,
	"./pa-in": 234,
	"./pa-in.js": 234,
	"./pl": 235,
	"./pl.js": 235,
	"./pt": 236,
	"./pt-br": 237,
	"./pt-br.js": 237,
	"./pt.js": 236,
	"./ro": 238,
	"./ro.js": 238,
	"./ru": 239,
	"./ru.js": 239,
	"./sd": 240,
	"./sd.js": 240,
	"./se": 241,
	"./se.js": 241,
	"./si": 242,
	"./si.js": 242,
	"./sk": 243,
	"./sk.js": 243,
	"./sl": 244,
	"./sl.js": 244,
	"./sq": 245,
	"./sq.js": 245,
	"./sr": 246,
	"./sr-cyrl": 247,
	"./sr-cyrl.js": 247,
	"./sr.js": 246,
	"./ss": 248,
	"./ss.js": 248,
	"./sv": 249,
	"./sv.js": 249,
	"./sw": 250,
	"./sw.js": 250,
	"./ta": 251,
	"./ta.js": 251,
	"./te": 252,
	"./te.js": 252,
	"./tet": 253,
	"./tet.js": 253,
	"./th": 254,
	"./th.js": 254,
	"./tl-ph": 255,
	"./tl-ph.js": 255,
	"./tlh": 256,
	"./tlh.js": 256,
	"./tr": 257,
	"./tr.js": 257,
	"./tzl": 258,
	"./tzl.js": 258,
	"./tzm": 259,
	"./tzm-latn": 260,
	"./tzm-latn.js": 260,
	"./tzm.js": 259,
	"./uk": 261,
	"./uk.js": 261,
	"./ur": 262,
	"./ur.js": 262,
	"./uz": 263,
	"./uz-latn": 264,
	"./uz-latn.js": 264,
	"./uz.js": 263,
	"./vi": 265,
	"./vi.js": 265,
	"./x-pseudo": 266,
	"./x-pseudo.js": 266,
	"./yo": 267,
	"./yo.js": 267,
	"./zh-cn": 268,
	"./zh-cn.js": 268,
	"./zh-hk": 269,
	"./zh-hk.js": 269,
	"./zh-tw": 270,
	"./zh-tw.js": 270
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
webpackContext.id = 365;

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(52);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return URL; });
var URL = "https://proyectoionic.herokuapp.com/";
//tomar del api...master heroku 
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 398:
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\home\home.html"*/'\n<ion-content padding>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseConnectionProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(400);
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

/***/ 401:
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
        selector: 'page-mensajes',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\mensajes\mensajes.html"*/'\n<ion-header>\n    <ion-navbar>\n        <ion-buttons start>\n                <button ion-button menuToggle>\n                    <ion-icon name = "menu"></ion-icon>\n                </button>\n            </ion-buttons>\n            <ion-title> Explorar</ion-title>\n        </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n sdvnsvlssfbzsfr\n</ion-content>\n'/*ion-inline-end:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\mensajes\mensajes.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MensajesPage);

//# sourceMappingURL=mensajes.js.map

/***/ }),

/***/ 406:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_sesion_login_sesion__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(104);
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
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\login\login.html"*/'<ion-header>\n\n    \n\n      <ion-navbar color="primary">\n\n        <ion-title class="Titulo" color = "light"><q>No necesitas suerte, necesitas moverte</q></ion-title>\n\n      </ion-navbar>\n\n    \n\n    </ion-header>\n\n<ion-content padding class="login-bg">\n\n      <ion-card col-md-6 offset-md-3 col-lg-6 offset-lg-3 >\n\n            <ion-card-header class ="card-header">\n\n                LaRutaG \n\n          </ion-card-header>\n\n          <ion-card-content>\n\n                <ion-list no-line>\n\n                    <ion-item>\n\n                        <button col-12 col-md-7 offset-md-3 col-lg-4 offset-lg-4 ion-button block color ="facebook">\n\n                          <ion-icon name ="logo-facebook" (click)="Facebookin()"> </ion-icon> Login con Facebook\n\n                        </button>\n\n                    </ion-item>          \n\n                    <ion-item>\n\n                          <button  col-12 col-md-7 offset-md-3 col-lg-4 offset-lg-4 ion-button block outline color="light" (click)="login()">Inicia Sesión</button>    \n\n                    </ion-item>\n\n                  </ion-list>\n\n          </ion-card-content>\n\n  </ion-card>\n\n  <button ion-button outline color ="Secondary"> ¿No tienes una cuenta? Regístrate aquí</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Sebastian\Desktop\MobileApss\IONIC\LaRutaG\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[322]);
//# sourceMappingURL=main.js.map