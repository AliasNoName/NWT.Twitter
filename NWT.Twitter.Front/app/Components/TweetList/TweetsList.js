System.register(["angular2/core", "angular2/common", "../Tweet/Tweet"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Tweet_1;
    var TweetsList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Tweet_1_1) {
                Tweet_1 = Tweet_1_1;
            }],
        execute: function() {
            TweetsList = (function () {
                function TweetsList() {
                    this.putFavourited = new core_1.EventEmitter();
                    this.removeFavourited = new core_1.EventEmitter();
                }
                TweetsList.prototype.checkIfFavourited = function (tweet) {
                    if (this.currentUser.favourites.indexOf(tweet) != -1)
                        return true;
                    return false;
                };
                TweetsList.prototype.onPutFavourited = function (favourite) {
                    this.putFavourited.next(favourite);
                };
                TweetsList.prototype.onRemoveFavourited = function (favourite) {
                    this.removeFavourited.next(favourite);
                };
                TweetsList = __decorate([
                    core_1.Component({
                        selector: "tweets-list",
                        inputs: ["tweets", "currentUser"],
                        outputs: ["putFavourited", "removeFavourited"]
                    }),
                    core_1.View({
                        directives: [common_1.CORE_DIRECTIVES, Tweet_1.Tweet],
                        template: "\n<div>\n        <div *ng-for=\"#tweet of tweets\">\n                <tweet [tweet]=\"tweet\" [favourited]=\"checkIfFavourited(tweet)\" (put-favourited)=\"onPutFavourited($event)\"  (remove-favourited)=\"onRemoveFavourited($event)\"></tweet>\n        </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TweetsList);
                return TweetsList;
            })();
            exports_1("TweetsList", TweetsList);
        }
    }
});
//# sourceMappingURL=TweetsList.js.map