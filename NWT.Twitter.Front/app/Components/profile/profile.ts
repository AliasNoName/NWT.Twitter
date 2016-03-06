import {Component} from 'angular2/core'
import {CORE_DIRECTIVES} from "angular2/common"
import {RouteData, RouteParams} from 'angular2/router';

import {User as UserModel} from "../../Model/User"

import {TweetsList} from "../TweetList/TweetsList"
import {Trends} from "../Trends/Trends"
import {UserInfo} from "../UserInfo/UserInfo"
import {ProfileBox} from "../ProfileBox/ProfileBox"
import {Search} from "../Search/Search"

import {TwitterService} from "../../Services/TwitterService"
import {ContainsPipe} from "../../Pipes/ContainsPipe"
 
 
@Component({
    selector: "profile",
    directives: [TweetsList, Trends, UserInfo, ProfileBox, Search],
    providers: [TwitterService],
    pipes: [ContainsPipe],
    templateUrl:"./app/Components/Profile/Profile.html"
})

export class Profile {
   private twitterService: TwitterService;
   
   public nickname: string;
   public user: UserModel;
   
   private searchKey: string;
   private isUserCurrentUser: boolean;
    
    constructor(data: RouteData, params:RouteParams)
    {
        this.twitterService = data.get('twitterService');
        
        this.nickname = params.get('nickname');
        
        this.isUserCurrentUser = this.nickname == this.twitterService.currentUser.nickname;
        
        
        if(this.isUserCurrentUser)
            this.user= this.twitterService.currentUser;
        else
            this.user = this.twitterService.users.find(user => user.nickname == this.nickname);
        
        this.searchKey = "";
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