var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Metadata = require("../node_modules/angular2/src/core/metadata");
var Component = Metadata.Component;
var router_1 = require('../node_modules/angular2/router');
var home_1 = require('./Components/home');
var App = (function () {
    function App() {
    }
    App = __decorate([
        Component({
            selector: 'app'
        }),
        router_1.RouteConfig([
            { path: '/home', component: home_1.Home, as: 'home' }
        ]),
        Metadata.View({
            directives: [router_1.RouterOutlet, router_1.RouterLink],
            templateUrl: '/HtmlTemplates/App.html'
        })
    ], App);
    return App;
})();
//# sourceMappingURL=app.js.map