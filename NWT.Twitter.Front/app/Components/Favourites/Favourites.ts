import {Component, View} from "angular2/core"
import {RouteData} from "angular2/router"

import {Hashtag as HashtagModel} from "../../Model/Hashtag"
import {Tweet as TweetModel} from "../../Model/Tweet"
import {User as UserModel} from "../../Model/User"
import {Comment as CommentModel} from "../../Model/Comment"
import {TweetsList} from "../TweetList/TweetsList"
import {Trends} from "../Trends/Trends"
import {UserInfo} from "../UserInfo/UserInfo"
import {Search} from "../Search/Search"
import {ContainsPipe} from "../../Pipes/ContainsPipe"


@Component({
    selector: "favourites"
})

@View({
        directives: [TweetsList, Trends, UserInfo, Search],
        pipes: [ContainsPipe],
    templateUrl: "./app/Components/Favourites/Favourites.html"
})

export class Favourites {
    public hashtags: HashtagModel[];
    public tweets: TweetModel[];
    public currentUser: UserModel;
    
    public notFavourited: TweetModel[];
    private searchKey: string;

    constructor(data: RouteData){
        this.currentUser = data.get('currentUser');
        this.hashtags = data.get('hashtags');
        this.tweets = data.get('tweets');

        this.searchKey = "";
        this.notFavourited = [];

        this.tweets.forEach(tweet=> {
            if (this.currentUser.favourites.indexOf(tweet) == -1)
                this.notFavourited.push(tweet);
        });
    }

    private onPutFavourited(favourite: TweetModel): void {
        var index = this.notFavourited.indexOf(favourite);
        if (index != -1) {
            this.notFavourited.splice(index, 1);
        }
        this.currentUser.favourites.push(favourite);
    }

    private onRemoveFavourited(favourite: TweetModel): void {
        var index = this.currentUser.favourites.indexOf(favourite);
        if (index != -1) {
            this.currentUser.favourites.splice(index, 1);
        }
        this.notFavourited.push(favourite);
    }

    private onSearchKeyUpdate(data: string): void {
        this.searchKey = data;
    }
}
