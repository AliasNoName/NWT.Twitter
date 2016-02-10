System.register(["angular2/core", "angular2/common", 'angular2/router', "../CommentList/CommentList"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, CommentList_1;
    var Tweet;
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
            function (CommentList_1_1) {
                CommentList_1 = CommentList_1_1;
            }],
        execute: function() {
            Tweet = (function () {
                function Tweet() {
                    this.putFavourited = new core_1.EventEmitter();
                    this.removeFavourited = new core_1.EventEmitter();
                    this.areCommentsShown = false;
                }
                Tweet.prototype.onPutFavourited = function () {
                    this.favourited = true;
                    this.putFavourited.next(this.tweet);
                };
                Tweet.prototype.onRemoveFavourited = function () {
                    this.favourited = false;
                    this.removeFavourited.next(this.tweet);
                };
                Tweet.prototype.onShowComments = function () {
                    this.areCommentsShown = !this.areCommentsShown;
                };
                Tweet = __decorate([
                    core_1.Component({
                        selector: "tweet",
                        inputs: ["tweet", "favourited"],
                        outputs: ["putFavourited", "removeFavourited"],
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, CommentList_1.CommentList],
                        templateUrl: "./app/Components/Tweet/Tweet.html"
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