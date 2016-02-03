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
    var UserInfo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UserInfo = (function () {
                function UserInfo() {
                }
                UserInfo = __decorate([
                    core_1.Component({
                        selector: "user-info",
                        inputs: ["user"]
                    }),
                    core_1.View({
                        template: "\n        <div class=\"panel panel-default user-panel\">\n    <img src={{user.imageUrl}} id=\"user-panel-user-image\" alt=\"user picture\" />\n    <a class=\"hidden-xs\" src= \"#\" > <label id=\"user-panel-user-name\">{{user.getFullName()}}</label><br /></a>\n    <a class=\"hidden-xs\" src=\"#\"> <span id=\"user-panel-nickname\">@{{user.nickname}}</span><br /></a>\n    <ul class=\"hidden-xs nav navbar-nav\">\n        <li class=\"user-container-info\">\n            TWEETS <br />\n            <label>{{user.numberTweets()}}</label>\n        </li>\n        <li class=\"user-container-info\">\n            FOLLOWING<br />\n            <label>{{user.numberFollowing()}}</label>\n        </li>\n    </ul>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserInfo);
                return UserInfo;
            })();
            exports_1("UserInfo", UserInfo);
        }
    }
});
//# sourceMappingURL=UserInfo.js.map