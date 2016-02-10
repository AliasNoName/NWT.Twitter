System.register(['angular2/core', 'angular2/router', '../profile/profile', '../Following/Following', '../Index/Index', '../Favourites/Favourites', '../Hashtag/Hashtag', '../EditProfile/EditProfile', "../NewTweet/NewTweet"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, profile_1, Following_1, Index_1, Favourites_1, Hashtag_1, EditProfile_1, NewTweet_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (profile_1_1) {
                profile_1 = profile_1_1;
            },
            function (Following_1_1) {
                Following_1 = Following_1_1;
            },
            function (Index_1_1) {
                Index_1 = Index_1_1;
            },
            function (Favourites_1_1) {
                Favourites_1 = Favourites_1_1;
            },
            function (Hashtag_1_1) {
                Hashtag_1 = Hashtag_1_1;
            },
            function (EditProfile_1_1) {
                EditProfile_1 = EditProfile_1_1;
            },
            function (NewTweet_1_1) {
                NewTweet_1 = NewTweet_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'twitter-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: "./app/Components/app/app.html"
                    }),
                    router_1.RouteConfig([
                        { path: '/home', component: Index_1.Index, name: 'Index' },
                        { path: '/profile', component: profile_1.Profile, name: 'Profile' },
                        { path: '/following', component: Following_1.Following, name: 'Following' },
                        { path: '/favourites', component: Favourites_1.Favourites, name: 'Favourites' },
                        { path: '/hashtag/:data', component: Hashtag_1.Hashtag, name: 'Hashtag' },
                        { path: '/editprofile', component: EditProfile_1.EditProfile, name: 'EditProfile' },
                        { path: '/newtweet', component: NewTweet_1.NewTweet, name: 'NewTweet' },
                        { path: '/', redirectTo: ['Index'] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map