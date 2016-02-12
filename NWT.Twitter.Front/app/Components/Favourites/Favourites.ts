import {Component} from "angular2/core"
import {RouteData} from "angular2/router"

import {Tweet as TweetModel} from "../../Model/Tweet"

import {TweetsList} from "../TweetList/TweetsList"
import {Trends} from "../Trends/Trends"
import {UserInfo} from "../UserInfo/UserInfo"
import {Search} from "../Search/Search"

import {TwitterService} from "../../Services/TwitterService"
import {ContainsPipe} from "../../Pipes/ContainsPipe"


@Component({
    selector: "favourites",
    directives: [TweetsList, Trends, UserInfo, Search],
    pipes: [ContainsPipe],
    providers: [TwitterService],
    templateUrl: "./app/Components/Favourites/Favourites.html"
})

export class Favourites {
    private twitterService: TwitterService;
    
    public notFavourited: TweetModel[];
    private searchKey: string;

    constructor(data: RouteData){
        this.twitterService = data.get('twitterService');

        this.searchKey = "";
        this.notFavourited = [];

        this.twitterService.tweets.forEach(tweet=> {
            if (this.twitterService.currentUser.favourites.indexOf(tweet) == -1)
                this.notFavourited.push(tweet);
        });
    }

    private onPutFavourited(favourite: TweetModel): void {
        var index = this.notFavourited.indexOf(favourite);
        if (index != -1) {
            this.notFavourited.splice(index, 1);
        }
        this.twitterService.onPutFavourited(favourite);
    }

    private onRemoveFavourited(favourite: TweetModel): void {
        this.twitterService.onRemoveFavourited(favourite);
        this.notFavourited.push(favourite);
    }

    private onSearchKeyUpdate(data: string): void {
        this.searchKey = data;
    }
}
