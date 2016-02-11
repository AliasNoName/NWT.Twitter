import {Component} from 'angular2/core'
import {CORE_DIRECTIVES} from "angular2/common"
import {RouteData} from 'angular2/router';

import {Hashtag as HashtagModel} from "../../Model/Hashtag"
import {User as UserModel} from "../../Model/User"
import {Tweet as TweetModel} from "../../Model/Tweet"
import {Comment as CommentModel} from "../../Model/Comment"
import {Trends} from "../Trends/Trends"
import {UserInfo} from "../UserInfo/UserInfo"
import {UsersFollowingList} from "../UsersFollowingList/UsersFollowingList"
import {Search} from "../Search/Search"
import {ContainsPipeUsers} from "../../Pipes/ContainsPipeUsers"

 

@Component({
    selector: "following",
    directives: [Trends, UserInfo, UsersFollowingList, Search, CORE_DIRECTIVES],
    templateUrl:"./app/Components/Following/Following.html",
    pipes: [ContainsPipeUsers]
})

export class Following {
   public currentUser: UserModel;
   public hashtags: HashtagModel[];
   public users: UserModel[];
   
   private searchKey: string;
   public notFollowing: UserModel[];
    
    constructor(data: RouteData)
    {
        this.currentUser = data.get('currentUser');
        this.hashtags = data.get('hashtags');
        this.users = data.get('users');

        this.searchKey = "";
        this.notFollowing = [];
        
        this.users.forEach(user=> {
            if (user != this.currentUser && this.currentUser.following.indexOf(user) == -1)
                this.notFollowing.push(user);
        });
    }


    private onFollow(user: UserModel) {
        var index = this.notFollowing.indexOf(user);

        if (index != -1) {
            this.notFollowing.splice(index, 1);
        }

        this.currentUser.following.push(user);
    }

    private onUnFollow(user: UserModel) {
        var index = this.currentUser.following.indexOf(user);

        if (index != -1) {
            this.currentUser.following.splice(index, 1);
        }

        this.notFollowing.push(user);
    }
    private onSearchKeyUpdate(data: string): void {
        this.searchKey = data;
    }
}


