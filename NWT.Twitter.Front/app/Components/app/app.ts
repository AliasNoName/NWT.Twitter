import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Profile} from  '../profile/profile';

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

@RouteConfig([
    { path: '/profile', component: Profile, name: 'Profile' }
])

export class App {}