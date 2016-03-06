System.register(['angular2/core', 'angular2/router', "../TweetList/TweetsList", "../Trends/Trends", "../UserInfo/UserInfo", "../ProfileBox/ProfileBox", "../Search/Search", "../../Services/TwitterService", "../../Pipes/ContainsPipe"], function(exports_1, context_1) {
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
    var core_1, router_1, TweetsList_1, Trends_1, UserInfo_1, ProfileBox_1, Search_1, TwitterService_1, ContainsPipe_1;
    var Profile;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (TweetsList_1_1) {
                TweetsList_1 = TweetsList_1_1;
            },
            function (Trends_1_1) {
                Trends_1 = Trends_1_1;
            },
            function (UserInfo_1_1) {
                UserInfo_1 = UserInfo_1_1;
            },
            function (ProfileBox_1_1) {
                ProfileBox_1 = ProfileBox_1_1;
            },
            function (Search_1_1) {
                Search_1 = Search_1_1;
            },
            function (TwitterService_1_1) {
                TwitterService_1 = TwitterService_1_1;
            },
            function (ContainsPipe_1_1) {
                ContainsPipe_1 = ContainsPipe_1_1;
            }],
        execute: function() {
            Profile = (function () {
                function Profile(data, params) {
                    var _this = this;
                    this.twitterService = data.get('twitterService');
                    this.nickname = params.get('nickname');
                    this.isUserCurrentUser = this.nickname == this.twitterService.currentUser.nickname;
                    if (this.isUserCurrentUser)
                        this.user = this.twitterService.currentUser;
                    else
                        this.user = this.twitterService.users.find(function (user) { return user.nickname == _this.nickname; });
                    this.searchKey = "";
                }
                Profile.prototype.onPutFavourited = function (favourite) {
                    this.twitterService.onPutFavourited(favourite);
                };
                Profile.prototype.onRemoveFavourited = function (favourite) {
                    this.twitterService.onRemoveFavourited(favourite);
                };
                Profile.prototype.onSearchKeyUpdate = function (data) {
                    this.searchKey = data;
                };
                Profile = __decorate([
                    core_1.Component({
                        selector: "profile",
                        directives: [TweetsList_1.TweetsList, Trends_1.Trends, UserInfo_1.UserInfo, ProfileBox_1.ProfileBox, Search_1.Search],
                        providers: [TwitterService_1.TwitterService],
                        pipes: [ContainsPipe_1.ContainsPipe],
                        templateUrl: "./app/Components/Profile/Profile.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteData, router_1.RouteParams])
                ], Profile);
                return Profile;
            }());
            exports_1("Profile", Profile);
        }
    }
});
//# sourceMappingURL=profile.js.map