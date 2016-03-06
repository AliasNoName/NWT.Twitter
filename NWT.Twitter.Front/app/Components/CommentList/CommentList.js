System.register(["angular2/core", "angular2/common", "../Comment/Comment"], function(exports_1, context_1) {
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
    var core_1, common_1, Comment_1;
    var CommentList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Comment_1_1) {
                Comment_1 = Comment_1_1;
            }],
        execute: function() {
            CommentList = (function () {
                function CommentList() {
                }
                CommentList = __decorate([
                    core_1.Component({
                        selector: "comments-list",
                        inputs: ["comments"],
                        directives: [common_1.CORE_DIRECTIVES, Comment_1.Comment],
                        template: "\n<div>\n        <div *ngFor=\"#comment of comments\">\n                <comment [comment]=\"comment\"></comment>\n        </div>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CommentList);
                return CommentList;
            }());
            exports_1("CommentList", CommentList);
        }
    }
});
//# sourceMappingURL=CommentList.js.map