System.register(["angular2/core", 'angular2/router', "../../Model/Hashtag", "../TweetList/TweetsList", "../Trends/Trends", "../UserInfo/UserInfo", "../ProfileBox/ProfileBox", "../Search/Search", "../../Services/TwitterService", "../../Pipes/ContainsPipe"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, Hashtag_1, TweetsList_1, Trends_1, UserInfo_1, ProfileBox_1, Search_1, TwitterService_1, ContainsPipe_1;
    var Hashtag;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Hashtag_1_1) {
                Hashtag_1 = Hashtag_1_1;
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
            Hashtag = (function () {
                function Hashtag(routeParams, routeData) {
                    var _this = this;
                    this.twitterService = routeData.get('twitterService');
                    this.currentHashtag = new Hashtag_1.Hashtag(routeParams.get('data'));
                    this.searchKey = "";
                    this.twetsWithHashtag = [];
                    this.twitterService.tweets.forEach(function (tweet) {
                        tweet.hashtags.forEach(function (hashtag) {
                            if (hashtag.data == _this.currentHashtag.data)
                                _this.twetsWithHashtag.push(tweet);
                        });
                    });
                }
                Hashtag.prototype.onPutFavourited = function (favourite) {
                    this.twitterService.onPutFavourited(favourite);
                };
                Hashtag.prototype.onRemoveFavourited = function (favourite) {
                    this.twitterService.onRemoveFavourited(favourite);
                };
                Hashtag.prototype.onSearchKeyUpdate = function (data) {
                    this.searchKey = data;
                };
                Hashtag = __decorate([
                    core_1.Component({
                        selector: "hashtag",
                        directives: [TweetsList_1.TweetsList, Trends_1.Trends, UserInfo_1.UserInfo, ProfileBox_1.ProfileBox, Search_1.Search],
                        pipes: [ContainsPipe_1.ContainsPipe],
                        providers: [TwitterService_1.TwitterService],
                        templateUrl: "./app/Components/Hashtag/Hashtag.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, router_1.RouteData])
                ], Hashtag);
                return Hashtag;
            })();
            exports_1("Hashtag", Hashtag);
        }
    }
});
//# sourceMappingURL=Hashtag.js.map