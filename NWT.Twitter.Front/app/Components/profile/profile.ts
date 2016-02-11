import {Component} from 'angular2/core'
import {CORE_DIRECTIVES} from "angular2/common"
import {RouteData} from 'angular2/router';

import {Hashtag as HashtagModel} from "../../Model/Hashtag"
import {Tweet as TweetModel} from "../../Model/Tweet"
import {User as UserModel} from "../../Model/User"
import {Comment as CommentModel} from "../../Model/Comment"
import {TweetsList} from "../TweetList/TweetsList"
import {Trends} from "../Trends/Trends"
import {UserInfo} from "../UserInfo/UserInfo"
import {ProfileBox} from "../ProfileBox/ProfileBox"
import {Search} from "../Search/Search"
import {ContainsPipe} from "../../Pipes/ContainsPipe"
 
 
@Component({
    selector: "profile",
    directives: [TweetsList, Trends, UserInfo, ProfileBox, Search],
    pipes: [ContainsPipe],
    templateUrl:"./app/Components/Profile/Profile.html"
})

export class Profile {
   public currentUser: UserModel;
   public hashtags: HashtagModel[];
   
   private searchKey: string;
    
    constructor(data: RouteData)
    {
        this.currentUser = data.get('currentUser');
        this.hashtags = data.get('hashtags');
        
        this.searchKey = "";
    }

    private onPutFavourited(favourite: TweetModel): void {
        this.currentUser.favourites.push(favourite);
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