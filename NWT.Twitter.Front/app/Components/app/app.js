System.register(['angular2/core', 'angular2/router', '../profile/profile', '../Following/Following', '../Index/Index', '../Favourites/Favourites', '../Hashtag/Hashtag', '../EditProfile/EditProfile', "../../Model/Hashtag", "../../Model/Tweet", "../../Model/User", "../../Model/Comment"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, profile_1, Following_1, Index_1, Favourites_1, Hashtag_1, EditProfile_1, Hashtag_2, Tweet_1, User_1, Comment_1;
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
            function (Hashtag_2_1) {
                Hashtag_2 = Hashtag_2_1;
            },
            function (Tweet_1_1) {
                Tweet_1 = Tweet_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            },
            function (Comment_1_1) {
                Comment_1 = Comment_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(router_) {
                    var _this = this;
                    this.router_ = router_;
                    this.hashtags = [
                        new Hashtag_2.Hashtag("#hashtag_trend1"),
                        new Hashtag_2.Hashtag("#hashtag_trend2"),
                        new Hashtag_2.Hashtag("#hashtag_trend3"),
                        new Hashtag_2.Hashtag("#hashtag_trend4"),
                        new Hashtag_2.Hashtag("#hashtag_trend5"),
                        new Hashtag_2.Hashtag("#hashtag_trend6"),
                    ];
                    this.users = [
                        new User_1.User("Ime", "Prezime", "Nickname", "imeprezime@gmail.com", "Password.1", "/Content/Users/User1.png"),
                        new User_1.User("Ime2", "Prezime2", "Nickname2", "ime2prezime2@gmail.com", "Password.2", "/Content/Users/User3.png"),
                        new User_1.User("Ime3", "Prezime3", "Nickname3", "ime3prezime3@gmail.com", "Password.3", "/Content/Users/User2.png"),
                        new User_1.User("Ime4", "Prezime4", "Nickname4", "ime4prezime4@gmail.com", "Password.4", "/Content/Users/User4.png"),
                    ];
                    this.users[0].following = [this.users[2], this.users[1]];
                    this.users[1].following = [this.users[2]];
                    this.users[2].following = [this.users[3], this.users[1], this.users[0]];
                    this.users[3].following = [this.users[2], this.users[1]];
                    this.tweets = [
                        new Tweet_1.Tweet(this.users[0], new Date(2015, 12, 12), "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", [this.hashtags[0], this.hashtags[4]]),
                        new Tweet_1.Tweet(this.users[1], new Date(2015, 12, 10), "Duis malesuada leo justo, eget efficitur ligula varius sed. Suspendisse potenti. Integer imperdiet lobortis leo. Integer ullamcorper iaculis convallis.", [this.hashtags[5], this.hashtags[1], this.hashtags[3]]),
                        new Tweet_1.Tweet(this.users[2], new Date(2015, 12, 4), "Aliquam quam quam, dignissim non eros nec, congue scelerisque arcu. Nam ac nibh massa. Suspendisse tristique ante vel ultricies congue. Mauris sagittis nec tortor vitae rutrum.", [this.hashtags[5]]),
                        new Tweet_1.Tweet(this.users[0], new Date(2015, 12, 2), "Donec lacinia massa lectus. Sed a tristique odio.", [this.hashtags[3], this.hashtags[4], this.hashtags[1]])
                    ];
                    this.currentUser = this.users[0];
                    this.currentUser.tweets = this.tweets.filter(function (tweet) { return tweet.author == _this.currentUser; });
                    this.currentUser.favourites = [this.tweets[1], this.tweets[2]];
                    this.tweets[0].comments = [new Comment_1.Comment(this.users[0], "Pellentesque a accumsan nunc"), new Comment_1.Comment(this.users[2], "Nam vulputate enim a mollis mattis"), new Comment_1.Comment(this.users[0], "Nam faucibus eleifend eros ut lobortis")];
                    this.tweets[1].comments = [new Comment_1.Comment(this.users[2], "Phasellus sit amet blandit velit"), new Comment_1.Comment(this.users[3], "Sed varius pulvinar ornare"), new Comment_1.Comment(this.users[2], "Curabitur lectus nibh"), new Comment_1.Comment(this.users[1], "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus")];
                    this.tweets[2].comments = [new Comment_1.Comment(this.users[3], "Lorem ipsum dolor sit amet,"), new Comment_1.Comment(this.users[2], "Integer sit amet ipsum consectetu")];
                    this.tweets[3].comments = [new Comment_1.Comment(this.users[1], "Cras vitae faucibus risus."), new Comment_1.Comment(this.users[3], "Nulla vitae elit a risus ullamcorper facilisis"), new Comment_1.Comment(this.users[0], "Nullam ornare nisl vel urna faucibus, non ultrices nibh pulvinar.")];
                    router_.config([
                        { path: '/home', component: Index_1.Index, name: 'Index', data: { currentUser: this.currentUser, hashtags: this.hashtags, tweets: this.tweets } },
                        { path: '/profile', component: profile_1.Profile, name: 'Profile', data: { currentUser: this.currentUser, hashtags: this.hashtags } },
                        { path: '/following', component: Following_1.Following, name: 'Following', data: { currentUser: this.currentUser, hashtags: this.hashtags, users: this.users } },
                        { path: '/favourites', component: Favourites_1.Favourites, name: 'Favourites', data: { currentUser: this.currentUser, hashtags: this.hashtags, tweets: this.tweets } },
                        { path: '/hashtag/:data', component: Hashtag_1.Hashtag, name: 'Hashtag', data: { currentUser: this.currentUser, hashtags: this.hashtags, tweets: this.tweets } },
                        { path: '/editprofile', component: EditProfile_1.EditProfile, name: 'EditProfile', data: { currentUser: this.currentUser } },
                        { path: '/', redirectTo: ['Index'] }
                    ]);
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'twitter-app',
                        directives: [router_2.ROUTER_DIRECTIVES],
                        templateUrl: "./app/Components/app/app.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], App);
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=app.js.map