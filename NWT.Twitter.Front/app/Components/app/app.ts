import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Profile} from  '../profile/profile';
import {Following} from  '../Following/Following';
import {Index} from  '../Index/Index';
import {Favourites} from  '../Favourites/Favourites';
import {Hashtag} from  '../Hashtag/Hashtag';
import {EditProfile} from  '../EditProfile/EditProfile';

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
    { path: '/index', component: Index, name: 'Index' },
    { path: '/profile', component: Profile, name: 'Profile' },
    { path: '/following', component: Following, name: 'Following' },
    { path: '/favourites', component: Favourites, name: 'Favourites' },
    { path: '/hashtag', component: Hashtag, name: 'Hashtag' },
    { path: '/editprofile', component: EditProfile, name: 'EditProfile' }
])

export class App {}