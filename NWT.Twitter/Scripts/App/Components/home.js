var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Metadata = require("../../node_modules/angular2/src/core/metadata");
var Component = Metadata.Component;
var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        Component({
            selector: 'home',
            template: '<h1>Home</h1>'
        })
    ], Home);
    return Home;
})();
exports.Home = Home;
//# sourceMappingURL=home.js.map