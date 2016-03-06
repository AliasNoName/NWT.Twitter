import {Component} from "angular2/core"
import {RouteParams, RouteData} from 'angular2/router';

import {Hashtag as HashtagModel} from "../../Model/Hashtag"
import {Tweet as TweetModel} from "../../Model/Tweet"

import {TweetsList} from "../TweetList/TweetsList"
import {Trends} from "../Trends/Trends"
import {UserInfo} from "../UserInfo/UserInfo"
import {ProfileBox} from "../ProfileBox/ProfileBox"
import {Search} from "../Search/Search"

import {TwitterService} from "../../Services/TwitterService"
import {ContainsPipe} from "../../Pipes/ContainsPipe" 


@Component({
    selector: "hashtag",
    directives: [TweetsList, Trends, UserInfo, ProfileBox, Search],
    pipes: [ContainsPipe],
    providers: [TwitterService],
    templateUrl:"./app/Components/Hashtag/Hashtag.html"
})

export class Hashtag {
    private twitterService: TwitterService;
    
    private searchKey: string;
    public currentHashtag: HashtagModel;
    public twetsWithHashtag: TweetModel[];

    constructor(routeParams: RouteParams, routeData: RouteData) {
        this.twitterService = routeData.get('twitterService');
        
        this.currentHashtag = new HashtagModel(routeParams.get('data'));
        
        this.searchKey = "";
        this.twetsWithHashtag = [];

        this.twitterService.tweets.forEach(tweet=> {
            tweet.hashtags.forEach(hashtag=> {
                if (hashtag.data == this.currentHashtag.data)
                    this.twetsWithHashtag.push(tweet);
            });
        });
    }

    private onPutFavourited(favourite: TweetModel): void {
        this.twitterService.onPutFavourited(favourite);
    }

    private onRemoveFavourited(favourite: TweetModel): void {
        this.twitterService.onRemoveFavourited(favourite);
    }

    private onSearchKeyUpdate(data: string): void {
        this.searchKey = data;
    }
}