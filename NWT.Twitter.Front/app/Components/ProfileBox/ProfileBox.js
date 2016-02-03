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
    var ProfileBox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ProfileBox = (function () {
                function ProfileBox() {
                }
                ProfileBox = __decorate([
                    core_1.Component({
                        selector: "profile-box",
                        inputs: ["user"]
                    }),
                    core_1.View({
                        template: "\n        <div class=\"panel panel-default\" id=\"profile-panel\">\n    <img src={{user.imageUrl}} id=\"profile-user-image\" alt=\"user picture\" />\n    <a src=\"#\"> <label id=\"profile-user-name\">{{user.getFullName()}}</label><br/></a>\n    <a src=\"#\"> <span id=\"profile-nickname\">@{{user.nickname}}</span><br/></a>\n    <ul class=\"hidden-xs nav navbar-nav\">\n        <li class=\"profile-info\">\n            TWEETS <br/>\n            <label>{{user.numberTweets()}}</label>\n        </li>\n        <li class=\"profile-info\">\n            FOLLOWING<br/>\n            <label>{{user.numberFollowing()}}</label>\n        </li>\n    </ul>\n    <button class=\"btn button pull-right edit-profile\">Edit Profile</button>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProfileBox);
                return ProfileBox;
            })();
            exports_1("ProfileBox", ProfileBox);
        }
    }
});
//# sourceMappingURL=ProfileBox.js.map