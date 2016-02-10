System.register(["angular2/core", 'angular2/router', '../Profile/Profile', '../EditProfile/EditProfile'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, Profile_1, EditProfile_1;
    var ProfileBox;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Profile_1_1) {
                Profile_1 = Profile_1_1;
            },
            function (EditProfile_1_1) {
                EditProfile_1 = EditProfile_1_1;
            }],
        execute: function() {
            ProfileBox = (function () {
                function ProfileBox() {
                }
                ProfileBox = __decorate([
                    core_1.Component({
                        selector: "profile-box",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        inputs: ["user"],
                        templateUrl: "./app/Components/ProfileBox/ProfileBox.html"
                    }),
                    router_1.RouteConfig([
                        { path: '/profile', component: Profile_1.Profile, name: 'Profile' },
                        { path: '/editprofile', component: EditProfile_1.EditProfile, name: 'EditProfile' }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], ProfileBox);
                return ProfileBox;
            })();
            exports_1("ProfileBox", ProfileBox);
        }
    }
});
//# sourceMappingURL=ProfileBox.js.map