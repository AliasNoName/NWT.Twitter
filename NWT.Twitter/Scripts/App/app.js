var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Metadata = require("../node_modules/angular2/src/core/metadata");
var Component = Metadata.Component;
var browser_1 = require('../node_modules/angular2/platform/browser');
var router_1 = require('../node_modules/angular2/router');
var home_1 = require('./Components/home');
var Twitter = (function () {
    function Twitter() {
    }
    Twitter = __decorate([
        Component({
            selector: 'twitter-app',
            directives: [router_1.RouterOutlet, router_1.RouterLink],
            templateUrl: "./HtmlTemplates/App.html"
        }),
        router_1.RouteConfig([
            { path: '/home', component: home_1.Home, name: 'home' }
        ])
    ], Twitter);
    return Twitter;
})();
exports.Twitter = Twitter;
browser_1.bootstrap(Twitter, [router_1.ROUTER_PROVIDERS]);
//# sourceMappingURL=app.js.map