System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var Search;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Search = (function () {
                function Search() {
                    this.searchKey = "";
                    this.searchData = new core_1.EventEmitter();
                }
                Search.prototype.updateSearchKey = function (input) {
                    this.searchKey = input.value.trim();
                    this.searchData.next(this.searchKey);
                };
                Search = __decorate([
                    core_1.Component({
                        selector: "search",
                        outputs: ["searchData"]
                    }),
                    core_1.View({
                        template: "\n    <div class=\"input-group\">\n         <input type=\"text\" class=\"form-control\" placeholder=\"Search for...\" #input (keyup)=\"updateSearchKey(input)\"/>\n         <span class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"button\"><span class=\"glyphicon glyphicon-search\"></span>.</button>\n         </span>\n    </div>\n  \n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Search);
                return Search;
            }());
            exports_1("Search", Search);
        }
    }
});
//# sourceMappingURL=Search.js.map