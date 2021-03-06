System.register(['angular2/http', 'angular2/core', "./../Model/Hashtag", "./../Model/Tweet", "./../Model/User", "./../Model/Comment"], function(exports_1, context_1) {
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
    var http_1, core_1, Hashtag_1, Tweet_1, User_1, Comment_1;
    var TwitterService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
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
            function (Comment_1_1) {
                Comment_1 = Comment_1_1;
            }],
        execute: function() {
            TwitterService = (function () {
                function TwitterService(http) {
                    var _this = this;
                    this.hashtags = [];
                    this.users = [];
                    this.tweets = [];
                    this.http = http;
                    this.loggedIn = false;
                    this.importTestData();
                    this.callFromDatabase();
                    this.users.forEach(function (user) { return user.tweets = _this.tweets.filter(function (tweet) { return tweet.author == user; }); });
                }
                TwitterService.prototype.importTestData = function () {
                    this.hashtags.push(new Hashtag_1.Hashtag("#hashtag_trend1"));
                    this.hashtags.push(new Hashtag_1.Hashtag("#hashtag_trend2"));
                    this.hashtags.push(new Hashtag_1.Hashtag("#hashtag_trend3"));
                    this.hashtags.push(new Hashtag_1.Hashtag("#hashtag_trend4"));
                    this.hashtags.push(new Hashtag_1.Hashtag("#hashtag_trend5"));
                    this.hashtags.push(new Hashtag_1.Hashtag("#hashtag_trend6"));
                    this.users.push(new User_1.User("Ime", "Prezime", "Nickname", "imeprezime@gmail.com", "Password.1", "/Content/Users/User1.png"));
                    this.users.push(new User_1.User("Ime2", "Prezime2", "Nickname2", "ime2prezime2@gmail.com", "Password.2", "/Content/Users/User3.png"));
                    this.users.push(new User_1.User("Ime3", "Prezime3", "Nickname3", "ime3prezime3@gmail.com", "Password.3", "/Content/Users/User2.png"));
                    this.users.push(new User_1.User("Ime4", "Prezime4", "Nickname4", "ime4prezime4@gmail.com", "Password.4", "/Content/Users/User4.png"));
                    this.users[0].following = [this.users[2], this.users[1]];
                    this.users[1].following = [this.users[2]];
                    this.users[2].following = [this.users[3], this.users[1], this.users[0]];
                    this.users[3].following = [this.users[2], this.users[1]];
                    this.tweets.push(new Tweet_1.Tweet(this.users[0], new Date(2015, 12, 12), "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", [this.hashtags[0], this.hashtags[4]]));
                    this.tweets.push(new Tweet_1.Tweet(this.users[1], new Date(2015, 12, 10), "Duis malesuada leo justo, eget efficitur ligula varius sed. Suspendisse potenti. Integer imperdiet lobortis leo. Integer ullamcorper iaculis convallis.", [this.hashtags[5], this.hashtags[1], this.hashtags[3]]));
                    this.tweets.push(new Tweet_1.Tweet(this.users[2], new Date(2015, 12, 4), "Aliquam quam quam, dignissim non eros nec, congue scelerisque arcu. Nam ac nibh massa. Suspendisse tristique ante vel ultricies congue. Mauris sagittis nec tortor vitae rutrum.", [this.hashtags[5]]));
                    this.tweets.push(new Tweet_1.Tweet(this.users[0], new Date(2015, 12, 2), "Donec lacinia massa lectus. Sed a tristique odio.", [this.hashtags[3], this.hashtags[4], this.hashtags[1]]));
                    this.tweets[0].comments = [new Comment_1.Comment(this.users[0], "Pellentesque a accumsan nunc"), new Comment_1.Comment(this.users[2], "Nam vulputate enim a mollis mattis"), new Comment_1.Comment(this.users[0], "Nam faucibus eleifend eros ut lobortis")];
                    this.tweets[1].comments = [new Comment_1.Comment(this.users[2], "Phasellus sit amet blandit velit"), new Comment_1.Comment(this.users[3], "Sed varius pulvinar ornare"), new Comment_1.Comment(this.users[2], "Curabitur lectus nibh"), new Comment_1.Comment(this.users[1], "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus")];
                    this.tweets[2].comments = [new Comment_1.Comment(this.users[3], "Lorem ipsum dolor sit amet,"), new Comment_1.Comment(this.users[2], "Integer sit amet ipsum consectetu")];
                    this.tweets[3].comments = [new Comment_1.Comment(this.users[1], "Cras vitae faucibus risus."), new Comment_1.Comment(this.users[3], "Nulla vitae elit a risus ullamcorper facilisis"), new Comment_1.Comment(this.users[0], "Nullam ornare nisl vel urna faucibus, non ultrices nibh pulvinar.")];
                };
                TwitterService.prototype.callFromDatabase = function () {
                    this.fetchHashtags();
                    this.fetchUsers();
                    this.fetchTweets();
                    this.fetchCurrentUser();
                };
                TwitterService.prototype.fetchHashtags = function () {
                    var _this = this;
                    var request = this.http.request("http://localhost:19964/api/Master/Hashtags/Database");
                    request.subscribe(function (response) {
                        response.json().forEach(function (hashtags) {
                            hashtags.map(function (hashtag) {
                                _this.hashtags.push(new Hashtag_1.Hashtag("#" + hashtag.text, hashtag.id));
                            });
                        });
                    }, function (error) { return alert("Error: " + JSON.stringify(error)); });
                };
                TwitterService.prototype.fetchUsers = function () {
                    var _this = this;
                    var request = this.http.request("http://localhost:19964/api/Master/Users/Database");
                    request.subscribe(function (response) {
                        response.json().forEach(function (users) {
                            users.map(function (user) {
                                var newUser = new User_1.User(user.firstName, user.lastName, user.userName, user.emal, user.passwordHash, user.imageUrl, user.id);
                                newUser.following = [];
                                if (user.followedUsers != null) {
                                    user.followedUsers.forEach(function (following) { return newUser.following.push(following); });
                                }
                                _this.users.push(newUser);
                            });
                        });
                    }, function (error) { return alert("Error: " + JSON.stringify(error)); });
                };
                TwitterService.prototype.fetchTweets = function () {
                    var _this = this;
                    var request = this.http.request("http://localhost:19964/api/Master/Tweets/Database");
                    request.subscribe(function (response) {
                        response.json().forEach(function (tweets) {
                            tweets.map(function (tweet) {
                                /*this.users.find(user=>user.ID==tweet.userID)*/
                                var newTweet = new Tweet_1.Tweet(_this.users[0], new Date(), tweet.text, tweet.hashtags, tweet.id);
                                newTweet.comments = [];
                                if (tweet.comments != null) {
                                    tweet.comments.forEach(function (comment) { return newTweet.comments.push(comment); });
                                }
                                _this.tweets.push(newTweet);
                            });
                        });
                    }, function (error) { return alert("Error: " + JSON.stringify(error)); });
                };
                TwitterService.prototype.fetchCurrentUser = function () {
                    this.currentUser = this.users[0];
                    this.currentUser.favourites = [this.tweets[1], this.tweets[2]];
                };
                TwitterService.prototype.onPutFavourited = function (favourite) {
                    this.currentUser.favourites.unshift(favourite);
                };
                TwitterService.prototype.onRemoveFavourited = function (favourite) {
                    var index = this.currentUser.favourites.indexOf(favourite);
                    if (index != -1) {
                        this.currentUser.favourites.splice(index, 1);
                    }
                };
                TwitterService.prototype.onNewTweetPublish = function (newTweet) {
                    this.tweets.unshift(newTweet);
                    this.currentUser.tweets.unshift(newTweet);
                };
                TwitterService.prototype.onHashtagAdd = function (newHashtag) {
                    if (this.hashtags.find(function (hashtag) { return hashtag.data == newHashtag.data; }) == null)
                        this.hashtags.unshift(newHashtag);
                };
                TwitterService.prototype.onFollow = function (user) {
                    this.currentUser.following.push(user);
                };
                TwitterService.prototype.onUnFollow = function (user) {
                    var index = this.currentUser.following.indexOf(user);
                    if (index != -1) {
                        this.currentUser.following.splice(index, 1);
                    }
                };
                TwitterService.prototype.onCurrentUserImageChange = function (inputValue) {
                    this.currentUser.imageUrl = URL.createObjectURL(inputValue.target.files[0]);
                };
                TwitterService.prototype.onUserDataChange = function (newData) {
                    var index = this.users.indexOf(this.currentUser);
                    this.currentUser = new User_1.User(newData.name, newData.lastname, newData.nickname, newData.email, newData.password, newData.imageUrl, newData.tweets, newData.following, newData.favourites, this.currentUser.ID);
                    this.users[index] = this.currentUser;
                    console.log(this.users);
                };
                TwitterService.prototype.onLogin = function (userName, password) {
                    var loginAtemptUser;
                    //0-OK, 1-Not Sumbited, 2-Wrong User, 3-Wrong password
                    loginAtemptUser = this.users.find(function (user) { return user.nickname == userName; });
                    if (loginAtemptUser == null)
                        return 2;
                    else if (loginAtemptUser.password != password)
                        return 3;
                    else {
                        this.loggedIn = true;
                        this.currentUser = loginAtemptUser;
                        return 0;
                    }
                };
                TwitterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TwitterService);
                return TwitterService;
            }());
            exports_1("TwitterService", TwitterService);
        }
    }
});
//# sourceMappingURL=TwitterService.js.map