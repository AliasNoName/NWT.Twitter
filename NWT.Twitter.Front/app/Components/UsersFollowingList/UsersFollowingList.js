System.register(["angular2/core", "angular2/common", "../UserFollowing/UserFollowing"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, UserFollowing_1;
    var UsersFollowingList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (UserFollowing_1_1) {
                UserFollowing_1 = UserFollowing_1_1;
            }],
        execute: function() {
            UsersFollowingList = (function () {
                function UsersFollowingList() {
                    this.followed = new core_1.EventEmitter();
                    this.unfollowed = new core_1.EventEmitter();
                }
                UsersFollowingList.prototype.onFollow = function (user) {
                    this.followed.next(user);
                };
                UsersFollowingList.prototype.onUnFollow = function (user) {
                    this.unfollowed.next(user);
                };
                UsersFollowingList = __decorate([
                    core_1.Component({
                        selector: "users-following-list",
                        inputs: ["users", "isFollowing"],
                        outputs: ["followed", "unfollowed"]
                    }),
                    core_1.View({
                        directives: [common_1.CORE_DIRECTIVES, UserFollowing_1.UserFollowing],
                        template: "\n        <div>\n        <h3 *ng-if=\"isFollowing\">Users you followed</h3>\n        <h3 *ng-if=\"!isFollowing\">Other users</h3>\n        <br/>\n        <div *ng-for=\"#user of users\">\n                <user-following [is-following] = \"isFollowing\" [user]=\"user\" (followed)=\"onFollow($event)\" (unfollowed)=\"onUnFollow($event)\"></user-following>\n        </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], UsersFollowingList);
                return UsersFollowingList;
            })();
            exports_1("UsersFollowingList", UsersFollowingList);
        }
    }
});
//# sourceMappingURL=UsersFollowingList.js.map