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
    var Trends;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Trends = (function () {
                function Trends() {
                }
                Trends = __decorate([
                    core_1.Component({
                        selector: "trends",
                        inputs: ["hashtags"]
                    }),
                    core_1.View({
                        directives: [common_1.CORE_DIRECTIVES],
                        template: "<div class=\"panel panel-default hidden-xs \">\n    <label id=\"trends-label\">Trends</label>\n    <ul id=\"trends-list\" *ng-for=\"#hashtag of hashtags\">\n                <li>{{hashtag.data}}</li>\n    </ul>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Trends);
                return Trends;
            })();
            exports_1("Trends", Trends);
        }
    }
});
//# sourceMappingURL=Trends.js.map