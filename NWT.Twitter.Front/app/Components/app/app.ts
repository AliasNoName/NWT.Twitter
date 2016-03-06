import {Component} from 'angular2/core';
import {RouteData, Router} from 'angular2/router';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Profile} from  '../profile/profile';
import {Following} from  '../Following/Following';
import {Index} from  '../Index/Index';
import {Favourites} from  '../Favourites/Favourites';
import {Hashtag} from  '../Hashtag/Hashtag';
import {EditProfile} from  '../EditProfile/EditProfile';
import {Login} from '../Login/Login';

import {TweetsList} from "../TweetList/TweetsList"
import {Trends} from "../Trends/Trends"
import {UserInfo} from "../UserInfo/UserInfo"
import {NewTweet} from "../NewTweet/NewTweet"
import {Search} from "../Search/Search"

import {TwitterService} from "../../Services/TwitterService"

import {ContainsPipe} from "../../Pipes/ContainsPipe"

@Component({
    selector: 'twitter-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [TwitterService],
    templateUrl:"./app/Components/app/app.html"
})

export class App {
    private twitterService: TwitterService;

    constructor(twitterService: TwitterService, private router_: Router) {
        this.twitterService = twitterService;
 
    router_.config([
        {path: '/login', component: Login},
        { path: '/home', component: Index, name: 'Index', data: {twitterService: this.twitterService} },
        { path: '/profile/:nickname', component: Profile, name: 'Profile', data: {twitterService: this.twitterService} },
        { path: '/following', component: Following, name: 'Following', data: {twitterService: this.twitterService}},
        { path: '/favourites', component: Favourites, name: 'Favourites', data: {twitterService: this.twitterService}},
        { path: '/hashtag/:data', component: Hashtag, name: 'Hashtag', data: {twitterService: this.twitterService} }, 
        { path: '/editprofile', component: EditProfile, name: 'EditProfile', data: {twitterService: this.twitterService} },
        { path: '/', redirectTo: ['Index']}
    ])
    }
}