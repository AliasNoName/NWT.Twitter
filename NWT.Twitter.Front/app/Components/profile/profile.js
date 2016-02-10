System.register(['angular2/core', "../../Model/Hashtag", "../../Model/Tweet", "../../Model/User", "../TweetList/TweetsList", "../Trends/Trends", "../UserInfo/UserInfo", "../ProfileBox/ProfileBox", "../Search/Search", "../../Pipes/ContainsPipe"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Hashtag_1, Tweet_1, User_1, TweetsList_1, Trends_1, UserInfo_1, ProfileBox_1, Search_1, ContainsPipe_1;
    var Profile;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Hashtag_1_1) {
                Hashtag_1 = Hashtag_1_1;
            },
            function (Tweet_1_1) {
                Tweet_1 = Tweet_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
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
            function (ContainsPipe_1_1) {
                ContainsPipe_1 = ContainsPipe_1_1;
            }],
        execute: function() {
            Profile = (function () {
                function Profile() {
                    var _this = this;
                    this.searchKey = "";
                    this.hashtags = [
                        new Hashtag_1.Hashtag("#hashtag_trend1"),
                        new Hashtag_1.Hashtag("#hashtag_trend2"),
                        new Hashtag_1.Hashtag("#hashtag_trend3"),
                        new Hashtag_1.Hashtag("#hashtag_trend4"),
                        new Hashtag_1.Hashtag("#hashtag_trend5"),
                        new Hashtag_1.Hashtag("#hashtag_trend6"),
                    ];
                    this.users = [
                        new User_1.User("Ime", "Prezime", "Nickname", "imeprezime@gmail.com", "Password.1", "/Content/Users/User1.png"),
                        new User_1.User("Ime2", "Prezime2", "Nickname2", "ime2prezime2@gmail.com", "Password.2", "/Content/Users/User3.png"),
                        new User_1.User("Ime3", "Prezime3", "Nickname3", "ime3prezime3@gmail.com", "Password.3", "/Content/Users/User2.png"),
                        new User_1.User("Ime4", "Prezime4", "Nickname4", "ime4prezime4@gmail.com", "Password.4", "/Content/Users/User4.png"),
                    ];
                    this.users[0].following = [this.users[2], this.users[1]];
                    this.users[1].following = [this.users[2]];
                    this.users[2].following = [this.users[3], this.users[1], this.users[0]];
                    this.users[3].following = [this.users[2], this.users[1]];
                    this.tweets = [
                        new Tweet_1.Tweet(this.users[0], new Date(2015, 12, 12), "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", [this.hashtags[0], this.hashtags[4]]),
                        new Tweet_1.Tweet(this.users[1], new Date(2015, 12, 10), "Duis malesuada leo justo, eget efficitur ligula varius sed. Suspendisse potenti. Integer imperdiet lobortis leo. Integer ullamcorper iaculis convallis.", [this.hashtags[5], this.hashtags[1], this.hashtags[3]]),
                        new Tweet_1.Tweet(this.users[2], new Date(2015, 12, 4), "Aliquam quam quam, dignissim non eros nec, congue scelerisque arcu. Nam ac nibh massa. Suspendisse tristique ante vel ultricies congue. Mauris sagittis nec tortor vitae rutrum.", [this.hashtags[5]]),
                        new Tweet_1.Tweet(this.users[0], new Date(2015, 12, 2), "Donec lacinia massa lectus. Sed a tristique odio.", [this.hashtags[3], this.hashtags[4], this.hashtags[1]])
                    ];
                    this.currentUser = this.users[0];
                    this.currentUser.tweets = this.tweets.filter(function (tweet) { return tweet.author == _this.currentUser; });
                    this.currentUser.favourites = [this.tweets[1], this.tweets[2]];
                    this.notFavourited = [];
                    this.tweets.forEach(function (tweet) {
                        if (_this.currentUser.favourites.indexOf(tweet) == -1)
                            _this.notFavourited.push(tweet);
                    });
                    this.notFollowing = [];
                    this.users.forEach(function (user) {
                        if (user != _this.currentUser && _this.currentUser.following.indexOf(user) == -1)
                            _this.notFollowing.push(user);
                    });
                    /*Universal data part-end*/
                }
                Profile.prototype.onPutFavourited = function (favourite) {
                    this.currentUser.favourites.push(favourite);
                };
                Profile.prototype.onRemoveFavourited = function (favourite) {
                    var index = this.currentUser.favourites.indexOf(favourite);
                    if (index != -1) {
                        this.currentUser.favourites.splice(index, 1);
                    }
                };
                Profile.prototype.onSearchKeyUpdate = function (data) {
                    this.searchKey = data;
                };
                Profile = __decorate([
                    core_1.Component({
                        selector: "profile",
                        directives: [TweetsList_1.TweetsList, Trends_1.Trends, UserInfo_1.UserInfo, ProfileBox_1.ProfileBox, Search_1.Search],
                        pipes: [ContainsPipe_1.ContainsPipe],
                        templateUrl: "./app/Components/Profile/Profile.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Profile);
                return Profile;
            })();
            exports_1("Profile", Profile);
        }
    }
});
//# sourceMappingURL=profile.js.map