System.register(["angular2/core", "angular2/common", 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1;
    var UserFollowing;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UserFollowing = (function () {
                function UserFollowing() {
                    this.followed = new core_1.EventEmitter();
                    this.unfollowed = new core_1.EventEmitter();
                }
                UserFollowing.prototype.onFollow = function () {
                    this.followed.next(this.user);
                };
                UserFollowing.prototype.onUnFollow = function () {
                    this.unfollowed.next(this.user);
                };
                UserFollowing = __decorate([
                    core_1.Component({
                        selector: "user-following",
                        inputs: ["isFollowing", "user"],
                        outputs: ["followed", "unfollowed"]
                    }),
                    core_1.View({
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        templateUrl: "./app/Components/UserFollowing/UserFollowing.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserFollowing);
                return UserFollowing;
            })();
            exports_1("UserFollowing", UserFollowing);
        }
    }
});
//# sourceMappingURL=UserFollowing.js.map