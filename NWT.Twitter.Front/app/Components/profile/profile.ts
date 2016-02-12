import {Component} from 'angular2/core'
import {CORE_DIRECTIVES} from "angular2/common"
import {RouteData, RouteParams} from 'angular2/router';

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
   public users: UserModel[];
   
   public nickname: string;
   public user: UserModel;
   
   private searchKey: string;
   private isUserCurrentUser: boolean;
    
    constructor(data: RouteData, params:RouteParams)
    {
        this.currentUser = data.get('currentUser');
        this.hashtags = data.get('hashtags');
        this.users = data.get('users');
        
        this.nickname = params.get('nickname');
        
        this.isUserCurrentUser = this.nickname == this.currentUser.nickname;
        
        
        if(this.isUserCurrentUser)
            this.user= this.currentUser;
        else
            this.user = this.users.find(user => user.nickname == this.nickname);
        
        this.searchKey = "";
    }

    private onPutFavourited(favourite: TweetModel): void {
        this.user.favourites.push(favourite);
    }

    private onRemoveFavourited(favourite: TweetModel): void {
        var index = this.user.favourites.indexOf(favourite);
        if (index != -1) {
            this.user.favourites.splice(index, 1);
        }
    }

    private onSearchKeyUpdate(data: string): void {
        this.searchKey = data;
    }
}