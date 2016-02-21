System.register(['angular2/core', "angular2/common", 'angular2/router', "../Trends/Trends", "../UserInfo/UserInfo", "../UsersFollowingList/UsersFollowingList", "../Search/Search", "../../Services/TwitterService", "../../Pipes/ContainsPipeUsers"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, Trends_1, UserInfo_1, UsersFollowingList_1, Search_1, TwitterService_1, ContainsPipeUsers_1;
    var Following;
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
            },
            function (Trends_1_1) {
                Trends_1 = Trends_1_1;
            },
            function (UserInfo_1_1) {
                UserInfo_1 = UserInfo_1_1;
            },
            function (UsersFollowingList_1_1) {
                UsersFollowingList_1 = UsersFollowingList_1_1;
            },
            function (Search_1_1) {
                Search_1 = Search_1_1;
            },
            function (TwitterService_1_1) {
                TwitterService_1 = TwitterService_1_1;
            },
            function (ContainsPipeUsers_1_1) {
                ContainsPipeUsers_1 = ContainsPipeUsers_1_1;
            }],
        execute: function() {
            Following = (function () {
                function Following(data) {
                    var _this = this;
                    this.twitterService = data.get('twitterService');
                    this.searchKey = "";
                    this.notFollowing = [];
                    this.twitterService.users.forEach(function (user) {
                        if (user != _this.twitterService.currentUser && _this.twitterService.currentUser.following.indexOf(user) == -1)
                            _this.notFollowing.push(user);
                    });
                }
                Following.prototype.onFollow = function (user) {
                    var index = this.notFollowing.indexOf(user);
                    if (index != -1) {
                        this.notFollowing.splice(index, 1);
                    }
                    this.twitterService.onFollow(user);
                };
                Following.prototype.onUnFollow = function (user) {
                    this.twitterService.onUnFollow(user);
                    this.notFollowing.push(user);
                };
                Following.prototype.onSearchKeyUpdate = function (data) {
                    this.searchKey = data;
                };
                Following = __decorate([
                    core_1.Component({
                        selector: "following",
                        directives: [Trends_1.Trends, UserInfo_1.UserInfo, UsersFollowingList_1.UsersFollowingList, Search_1.Search, common_1.CORE_DIRECTIVES],
                        providers: [TwitterService_1.TwitterService],
                        templateUrl: "./app/Components/Following/Following.html",
                        pipes: [ContainsPipeUsers_1.ContainsPipeUsers]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteData])
                ], Following);
                return Following;
            })();
            exports_1("Following", Following);
        }
    }
});
//# sourceMappingURL=Following.js.map