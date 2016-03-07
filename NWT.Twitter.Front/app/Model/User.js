System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(name, lastname, nickname, email, password, imageUrl, tweets, following, favourites, ID) {
                    if (tweets === void 0) { tweets = []; }
                    if (following === void 0) { following = []; }
                    if (favourites === void 0) { favourites = []; }
                    if (ID === void 0) { ID = Math.random(); }
                    this.ID = ID;
                    this.name = name;
                    this.lastname = lastname;
                    this.nickname = nickname;
                    this.email = email;
                    this.password = password;
                    this.imageUrl = imageUrl;
                    this.tweets = tweets;
                    this.favourites = favourites;
                    this.following = following;
                }
                User.prototype.getFullName = function () {
                    return this.name + " " + this.lastname;
                };
                User.prototype.numberTweets = function () {
                    return this.tweets.length;
                };
                User.prototype.numberFollowing = function () {
                    return this.following.length;
                };
                return User;
            }());
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=User.js.map