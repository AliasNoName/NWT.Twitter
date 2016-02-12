System.register(['angular2/core', 'angular2/router', '../profile/profile', '../Following/Following', '../Index/Index', '../Favourites/Favourites', '../Hashtag/Hashtag', '../EditProfile/EditProfile', "../../Services/TwitterService"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, profile_1, Following_1, Index_1, Favourites_1, Hashtag_1, EditProfile_1, TwitterService_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
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
            function (TwitterService_1_1) {
                TwitterService_1 = TwitterService_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(twitterService, router_) {
                    this.router_ = router_;
                    this.twitterService = twitterService;
                    router_.config([
                        { path: '/home', component: Index_1.Index, name: 'Index', data: { twitterService: this.twitterService } },
                        { path: '/profile/:nickname', component: profile_1.Profile, name: 'Profile', data: { twitterService: this.twitterService } },
                        { path: '/following', component: Following_1.Following, name: 'Following', data: { twitterService: this.twitterService } },
                        { path: '/favourites', component: Favourites_1.Favourites, name: 'Favourites', data: { twitterService: this.twitterService } },
                        { path: '/hashtag/:data', component: Hashtag_1.Hashtag, name: 'Hashtag', data: { twitterService: this.twitterService } },
                        { path: '/editprofile', component: EditProfile_1.EditProfile, name: 'EditProfile', data: { twitterService: this.twitterService } },
                        { path: '/', redirectTo: ['Index'] }
                    ]);
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'twitter-app',
                        directives: [router_2.ROUTER_DIRECTIVES],
                        providers: [TwitterService_1.TwitterService],
                        templateUrl: "./app/Components/app/app.html"
                    }), 
                    __metadata('design:paramtypes', [TwitterService_1.TwitterService, router_1.Router])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map