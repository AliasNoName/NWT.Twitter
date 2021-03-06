System.register(["angular2/core", "angular2/router", "../../Model/Tweet", "../../Model/Hashtag", "../TweetList/TweetsList", "../Trends/Trends", "../UserInfo/UserInfo", "../NewTweet/NewTweet", "../Search/Search", "../../Services/TwitterService", "../../Pipes/ContainsPipe"], function(exports_1, context_1) {
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
    var core_1, router_1, Tweet_1, Hashtag_1, TweetsList_1, Trends_1, UserInfo_1, NewTweet_1, Search_1, TwitterService_1, ContainsPipe_1;
    var Index;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Tweet_1_1) {
                Tweet_1 = Tweet_1_1;
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
            function (NewTweet_1_1) {
                NewTweet_1 = NewTweet_1_1;
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
            Index = (function () {
                function Index(data) {
                    var _this = this;
                    this.twitterService = data.get('twitterService');
                    this.searchKey = "";
                    this.tweetsFollowing = this.twitterService.tweets.filter(function (tweet) { return _this.twitterService.currentUser.following.find(function (user) { return tweet.author == user; }) != null || tweet.author == _this.twitterService.currentUser; });
                }
                Index.prototype.onPutFavourited = function (favourite) {
                    this.twitterService.onPutFavourited(favourite);
                };
                Index.prototype.onRemoveFavourited = function (favourite) {
                    this.twitterService.onRemoveFavourited(favourite);
                };
                Index.prototype.onSearchKeyUpdate = function (data) {
                    this.searchKey = data;
                };
                Index.prototype.onNewTweetPublish = function (data) {
                    var hashtaginfo;
                    var dataFirstPart;
                    var dataSecondPart;
                    var i;
                    var newHashtags = [];
                    var startIndex = data.indexOf("#");
                    while (startIndex != -1) {
                        hashtaginfo = "#";
                        for (i = startIndex + 1; i < data.length && data[i] != ' ' && data[i] != '#'; i++)
                            hashtaginfo = hashtaginfo.concat(data[i]);
                        dataFirstPart = data.slice(0, startIndex);
                        dataSecondPart = data.slice(startIndex + hashtaginfo.length, data.length);
                        data = dataFirstPart.concat(dataSecondPart);
                        newHashtags.push(new Hashtag_1.Hashtag(hashtaginfo));
                        startIndex = data.indexOf("#", startIndex);
                    }
                    var newTweet = new Tweet_1.Tweet(this.twitterService.currentUser, new Date(), data);
                    for (i = 0; i < newHashtags.length; i++) {
                        newTweet.hashtags.push(newHashtags[i]);
                        this.twitterService.onHashtagAdd(newHashtags[i]);
                    }
                    this.tweetsFollowing.unshift(newTweet);
                    this.twitterService.onNewTweetPublish(newTweet);
                };
                Index = __decorate([
                    core_1.Component({
                        selector: "index",
                        directives: [TweetsList_1.TweetsList, Trends_1.Trends, UserInfo_1.UserInfo, NewTweet_1.NewTweet, Search_1.Search],
                        pipes: [ContainsPipe_1.ContainsPipe],
                        providers: [TwitterService_1.TwitterService],
                        templateUrl: "./app/Components/Index/Index.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteData])
                ], Index);
                return Index;
            }());
            exports_1("Index", Index);
        }
    }
});
//# sourceMappingURL=Index.js.map