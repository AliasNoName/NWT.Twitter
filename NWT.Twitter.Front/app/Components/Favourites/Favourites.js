System.register(["angular2/core", "angular2/router", "../TweetList/TweetsList", "../Trends/Trends", "../UserInfo/UserInfo", "../Search/Search", "../../Services/TwitterService", "../../Pipes/ContainsPipe"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, TweetsList_1, Trends_1, UserInfo_1, Search_1, TwitterService_1, ContainsPipe_1;
    var Favourites;
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
            Favourites = (function () {
                function Favourites(data) {
                    var _this = this;
                    this.twitterService = data.get('twitterService');
                    this.searchKey = "";
                    this.notFavourited = [];
                    this.twitterService.tweets.forEach(function (tweet) {
                        if (_this.twitterService.currentUser.favourites.indexOf(tweet) == -1)
                            _this.notFavourited.push(tweet);
                    });
                }
                Favourites.prototype.onPutFavourited = function (favourite) {
                    var index = this.notFavourited.indexOf(favourite);
                    if (index != -1) {
                        this.notFavourited.splice(index, 1);
                    }
                    this.twitterService.onPutFavourited(favourite);
                };
                Favourites.prototype.onRemoveFavourited = function (favourite) {
                    this.twitterService.onRemoveFavourited(favourite);
                    this.notFavourited.push(favourite);
                };
                Favourites.prototype.onSearchKeyUpdate = function (data) {
                    this.searchKey = data;
                };
                Favourites = __decorate([
                    core_1.Component({
                        selector: "favourites",
                        directives: [TweetsList_1.TweetsList, Trends_1.Trends, UserInfo_1.UserInfo, Search_1.Search],
                        pipes: [ContainsPipe_1.ContainsPipe],
                        providers: [TwitterService_1.TwitterService],
                        templateUrl: "./app/Components/Favourites/Favourites.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteData])
                ], Favourites);
                return Favourites;
            })();
            exports_1("Favourites", Favourites);
        }
    }
});
//# sourceMappingURL=Favourites.js.map