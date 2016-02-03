System.register(["angular2/core", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var UserFollowing;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
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
                        directives: [common_1.CORE_DIRECTIVES],
                        template: "<div class=\"panel panel-default users\">\n            <img src={{user.imageUrl}} class=\"users-image\" alt=\"user picture\" />\n            <a src=\"#\"> <label class=\"users-name\">{{user.getFullName()}}</label><br/></a>\n            <a src=\"#\"> <span class=\"users-nickname\">@{{user.nickname}}</span><br/></a>\n            <button *ng-if=\"isFollowing\" class=\"btn pull-right btn-warning\" (click)=\"onUnFollow()\">Unfollow</button>\n            <button *ng-if=\"!isFollowing\" class=\"btn pull-right btn-success\"(click)=\"onFollow()\">Follow</button>\n            <ul class=\"nav navbar-nav\">\n                <li class=\"users-info\">\n                    TWEETS <br/>\n                    <label>{{user.numberTweets()}}</label>\n                </li>\n                <li class=\"users-info\">\n                    FOLLOWING<br/>\n                    <label>{{user.numberFollowing()}}</label>\n                </li>\n            </ul>\n        </div>\n                  "
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