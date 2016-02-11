import {Component} from "angular2/core"
import {RouteParams, RouteData} from 'angular2/router';

import {Hashtag as HashtagModel} from "../../Model/Hashtag"
import {Tweet as TweetModel} from "../../Model/Tweet"
import {User as UserModel} from "../../Model/User"
import {TweetsList} from "../TweetList/TweetsList"
import {Trends} from "../Trends/Trends"
import {UserInfo} from "../UserInfo/UserInfo"
import {ProfileBox} from "../ProfileBox/ProfileBox"
import {Search} from "../Search/Search"
import {ContainsPipe} from "../../Pipes/ContainsPipe"


@Component({
    selector: "hashtag",
    directives: [TweetsList, Trends, UserInfo, ProfileBox, Search],
    pipes: [ContainsPipe],
    templateUrl:"./app/Components/Hashtag/Hashtag.html"
})

export class Hashtag {
    public hashtags: HashtagModel[];
    public tweets: TweetModel[];
    public currentUser: UserModel;
    
    private searchKey: string;
    public currentHashtag: HashtagModel;
    public twetsWithHashtag: TweetModel[];

    constructor(routeParams: RouteParams, routeData: RouteData) {
        this.hashtags = routeData.get('hashtags');
        this.tweets = routeData.get('tweets');
        this.currentUser = routeData.get('currentUser');
        
        this.currentHashtag = new HashtagModel(routeParams.get('data'));
        
        this.searchKey = "";
        this.twetsWithHashtag = [];

        this.tweets.forEach(tweet=> {
            tweet.hashtags.forEach(hashtag=> {
                if (hashtag.data == this.currentHashtag.data)
                    this.twetsWithHashtag.push(tweet);
            });
        });
    }

    private onPutFavourited(favourite: TweetModel): void {
        this.currentUser.favourites.unshift(favourite);
    }

    private onRemoveFavourited(favourite: TweetModel): void {
        var index = this.currentUser.favourites.indexOf(favourite);
        if (index != -1) {
            this.currentUser.favourites.splice(index, 1);
        }
    }

    private onSearchKeyUpdate(data: string): void {
        this.searchKey = data;
    }
}