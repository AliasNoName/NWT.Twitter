System.register(["angular2/core", "angular2/common"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var Tweet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Tweet = (function () {
                function Tweet() {
                    this.putFavourited = new core_1.EventEmitter();
                    this.removeFavourited = new core_1.EventEmitter();
                }
                Tweet.prototype.onPutFavourited = function () {
                    this.favourited = true;
                    this.putFavourited.next(this.tweet);
                };
                Tweet.prototype.onRemoveFavourited = function () {
                    this.favourited = false;
                    this.removeFavourited.next(this.tweet);
                };
                Tweet = __decorate([
                    core_1.Component({
                        selector: "tweet",
                        inputs: ["tweet", "favourited"],
                        outputs: ["putFavourited", "removeFavourited"]
                    }),
                    core_1.View({
                        directives: [common_1.CORE_DIRECTIVES],
                        template: "<div class=\"panel panel-default tweet\">\n                <div class=\"panel-body\">\n                <img src={{tweet.author.imageUrl}} class=\"tweet-user-image\" alt=\"user picture\" />\n                <div class=\"tweet-data\">\n                    <a src=\"#\"> <label>{{tweet.author.getFullName()}}</label></a>  @{{tweet.author.nickname}} - {{tweet.publishTime|date}}\n                    <div class=\"tweet-text\">{{tweet.data}}\n                       <span *ng-for=\"#hashtag of tweet.hashtags\">\n                        <a src=\"#\">   {{hashtag.data}}</a></div>\n                       </span>\n                    <ul class=\"list-inline\">\n                        <li><a href=\"#\"><i class=\"glyphicon glyphicon-arrow-left\"></i>Reply   </a></li>\n                        <li><a href=\"#\"><i class=\"glyphicon glyphicon-repeat\"></i>Retweet   </a></li>\n                        <li><a href=\"#!\" *ng-if=\"!favourited\" (click)=\"onPutFavourited()\"><i class=\"glyphicon glyphicon-star-empty\"></i>Favourite   </a>\n                            <a href=\"#!\" *ng-if=\"favourited\" (click)=\"onRemoveFavourited()\"><i class=\"glyphicon glyphicon-star\"></i>Favourited   </a></li>  \n                    </ul>\n                </div>\n            </div>\n        </div>\n                  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tweet);
                return Tweet;
            })();
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=Tweet.js.map