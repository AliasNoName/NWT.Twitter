System.register(["angular2/core", "angular2/router", "../../Services/TwitterService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, TwitterService_1;
    var Login;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (TwitterService_1_1) {
                TwitterService_1 = TwitterService_1_1;
            }],
        execute: function() {
            Login = (function () {
                function Login(_router, _service) {
                    this.router = _router;
                    this.service = _service;
                }
                Login.prototype.login = function (userName, password) {
                    this.router.navigate(['Index']);
                };
                Login = __decorate([
                    core_1.Component({
                        selector: "login",
                        providers: [TwitterService_1.TwitterService],
                        templateUrl: "./app/Components/Login/Login.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, TwitterService_1.TwitterService])
                ], Login);
                return Login;
            }());
            exports_1("Login", Login);
        }
    }
});
//# sourceMappingURL=Login.js.map