import {Component} from 'angular2/core';
import {RouteData, Router} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Profile} from  '../profile/profile';
import {Following} from  '../Following/Following';
import {Index} from  '../Index/Index';
import {Favourites} from  '../Favourites/Favourites';
import {Hashtag} from  '../Hashtag/Hashtag';
import {EditProfile} from  '../EditProfile/EditProfile';


import {Hashtag as HashtagModel} from "../../Model/Hashtag"
import {Tweet as TweetModel} from "../../Model/Tweet"
import {User as UserModel} from "../../Model/User"
import {Comment as CommentModel} from "../../Model/Comment"

import {TweetsList} from "../TweetList/TweetsList"
import {Trends} from "../Trends/Trends"
import {UserInfo} from "../UserInfo/UserInfo"
import {NewTweet} from "../NewTweet/NewTweet"
import {Search} from "../Search/Search"

import {ContainsPipe} from "../../Pipes/ContainsPipe"

@Component({
    selector: 'twitter-app',
    directives: [ROUTER_DIRECTIVES],
    templateUrl:"./app/Components/app/app.html"
})

export class App {
    public hashtags: HashtagModel[];
    public tweets: TweetModel[];
    public users: UserModel[];
    public currentUser: UserModel;
    

    constructor(private router_: Router) {
        this.hashtags = [
            new HashtagModel("#hashtag_trend1"),
            new HashtagModel("#hashtag_trend2"),
            new HashtagModel("#hashtag_trend3"),
            new HashtagModel("#hashtag_trend4"),
            new HashtagModel("#hashtag_trend5"),
            new HashtagModel("#hashtag_trend6"),
        ];

        this.users = [
            new UserModel("Ime", "Prezime", "Nickname", "imeprezime@gmail.com","Password.1", "/Content/Users/User1.png"),
            new UserModel("Ime2", "Prezime2", "Nickname2", "ime2prezime2@gmail.com", "Password.2", "/Content/Users/User3.png"),
            new UserModel("Ime3", "Prezime3", "Nickname3", "ime3prezime3@gmail.com", "Password.3", "/Content/Users/User2.png"),
            new UserModel("Ime4", "Prezime4", "Nickname4", "ime4prezime4@gmail.com", "Password.4", "/Content/Users/User4.png"),
        ];

        this.users[0].following = [this.users[2], this.users[1]];
        this.users[1].following = [this.users[2]];
        this.users[2].following = [this.users[3], this.users[1], this.users[0]];
        this.users[3].following = [this.users[2], this.users[1]];

        this.tweets = [
            new TweetModel(this.users[0], new Date(2015, 12, 12), "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", [this.hashtags[0], this.hashtags[4]]),
            new TweetModel(this.users[1], new Date(2015, 12, 10), "Duis malesuada leo justo, eget efficitur ligula varius sed. Suspendisse potenti. Integer imperdiet lobortis leo. Integer ullamcorper iaculis convallis.", [this.hashtags[5], this.hashtags[1], this.hashtags[3]]),
            new TweetModel(this.users[2], new Date(2015, 12, 4), "Aliquam quam quam, dignissim non eros nec, congue scelerisque arcu. Nam ac nibh massa. Suspendisse tristique ante vel ultricies congue. Mauris sagittis nec tortor vitae rutrum.", [this.hashtags[5]]),
            new TweetModel(this.users[0], new Date(2015, 12, 2), "Donec lacinia massa lectus. Sed a tristique odio.", [this.hashtags[3], this.hashtags[4], this.hashtags[1]])
        ];

        this.currentUser = this.users[0];
        this.currentUser.favourites = [this.tweets[1], this.tweets[2]];
        
        this.users.forEach(user => user.tweets = this.tweets.filter(tweet => tweet.author == user));

        
        this.tweets[0].comments = [new CommentModel(this.users[0], "Pellentesque a accumsan nunc"), new CommentModel(this.users[2], "Nam vulputate enim a mollis mattis"), new CommentModel(this.users[0], "Nam faucibus eleifend eros ut lobortis")];
        this.tweets[1].comments = [new CommentModel(this.users[2], "Phasellus sit amet blandit velit"), new CommentModel(this.users[3], "Sed varius pulvinar ornare"), new CommentModel(this.users[2], "Curabitur lectus nibh"), new CommentModel(this.users[1], "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus")];
        this.tweets[2].comments = [new CommentModel(this.users[3], "Lorem ipsum dolor sit amet,"), new CommentModel(this.users[2], "Integer sit amet ipsum consectetu")];
        this.tweets[3].comments = [new CommentModel(this.users[1], "Cras vitae faucibus risus."), new CommentModel(this.users[3], "Nulla vitae elit a risus ullamcorper facilisis"), new CommentModel(this.users[0], "Nullam ornare nisl vel urna faucibus, non ultrices nibh pulvinar.")];
        
    
    router_.config([
                { path: '/home', component: Index, name: 'Index', data: {currentUser: this.currentUser, hashtags: this.hashtags, tweets: this.tweets} },
                { path: '/profile/:nickname', component: Profile, name: 'Profile', data: {currentUser: this.currentUser, hashtags: this.hashtags, users: this.users} },
                { path: '/following', component: Following, name: 'Following', data: {currentUser: this.currentUser, hashtags: this.hashtags, users: this.users}},
                { path: '/favourites', component: Favourites, name: 'Favourites', data: {currentUser: this.currentUser, hashtags: this.hashtags, tweets: this.tweets}},
                { path: '/hashtag/:data', component: Hashtag, name: 'Hashtag', data: {currentUser: this.currentUser, hashtags: this.hashtags, tweets: this.tweets} }, 
                { path: '/editprofile', component: EditProfile, name: 'EditProfile', data: {currentUser: this.currentUser, users: this.users} },
                { path: '/', redirectTo: ['Index']}
        ])
    }
}