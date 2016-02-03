System.register(["angular2/angular2"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1;
    var ContainsPipe;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            ContainsPipe = (function () {
                function ContainsPipe() {
                }
                ContainsPipe.prototype.checkHashtags = function (tweet, keyword) {
                    var _this = this;
                    this.hashtagsContainingKeyword = [];
                    tweet.hashtags.forEach(function (hashtag) {
                        if (hashtag.data.toLowerCase().indexOf(keyword) != -1)
                            _this.hashtagsContainingKeyword.push(hashtag);
                    });
                    if (this.hashtagsContainingKeyword.length != 0)
                        return true;
                    return false;
                };
                ContainsPipe.prototype.transform = function (items, _a) {
                    var _this = this;
                    var keyword = _a[0];
                    if (keyword == null || keyword.trim() == "") {
                        return items;
                    }
                    keyword = keyword.toLowerCase();
                    return items.filter(function (item) { return item.data.toLowerCase().indexOf(keyword) != -1
                        || item.author.getFullName().toLowerCase().indexOf(keyword) != -1
                        || item.author.nickname.toLowerCase().indexOf(keyword) != -1
                        || item.publishTime.toDateString().toLowerCase().indexOf(keyword) != -1
                        || _this.checkHashtags(item, keyword); });
                };
                ContainsPipe = __decorate([
                    angular2_1.Pipe({
                        name: "contains",
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContainsPipe);
                return ContainsPipe;
            })();
            exports_1("ContainsPipe", ContainsPipe);
        }
    }
});
//# sourceMappingURL=ContainsPipe.js.map