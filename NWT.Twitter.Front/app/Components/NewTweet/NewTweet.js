System.register(["angular2/core"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NewTweet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewTweet = (function () {
                function NewTweet() {
                    this.numberOfSymbols = 140;
                    this.publish = new core_1.EventEmitter();
                }
                NewTweet.prototype.newTweetUpdate = function (input) {
                    this.numberOfSymbols = 140 - input.value.length;
                    if (input.value.length > 140)
                        input.setAttribute("style", "background-color: #FFCCCC;");
                    else if (input.value.length > 130)
                        input.setAttribute("style", "background-color: #FFFCCC;");
                    else
                        input.setAttribute("style", "background-color: none;");
                };
                NewTweet.prototype.onPublish = function (input) {
                    var value = input.value.trim();
                    if (value == "") {
                        return;
                    }
                    if (value.length > 140) {
                        return;
                    }
                    this.publish.next(value);
                    input.value = "";
                    this.numberOfSymbols = 140;
                };
                NewTweet = __decorate([
                    core_1.Component({
                        selector: "new-tweet",
                        outputs: ["publish"],
                        templateUrl: "./app/Components/NewTweet/NewTweet.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewTweet);
                return NewTweet;
            })();
            exports_1("NewTweet", NewTweet);
        }
    }
});
//# sourceMappingURL=NewTweet.js.map