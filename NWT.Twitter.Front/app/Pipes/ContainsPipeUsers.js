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
    var ContainsPipeUsers;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            ContainsPipeUsers = (function () {
                function ContainsPipeUsers() {
                }
                ContainsPipeUsers.prototype.transform = function (items, _a) {
                    var keyword = _a[0];
                    if (keyword == null || keyword.trim() == "") {
                        return items;
                    }
                    keyword = keyword.toLowerCase();
                    return items.filter(function (item) { return item.getFullName().toLowerCase().indexOf(keyword) != -1
                        || item.nickname.toLowerCase().indexOf(keyword) != -1; });
                };
                ContainsPipeUsers = __decorate([
                    angular2_1.Pipe({
                        name: "containsuser",
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], ContainsPipeUsers);
                return ContainsPipeUsers;
            })();
            exports_1("ContainsPipeUsers", ContainsPipeUsers);
        }
    }
});
//# sourceMappingURL=ContainsPipeUsers.js.map