import {Component} from 'angular2/core'
import {CORE_DIRECTIVES} from "angular2/common"
import {RouteData} from 'angular2/router';

import {User as UserModel} from "../../Model/User"

import {Trends} from "../Trends/Trends"
import {UserInfo} from "../UserInfo/UserInfo"
import {UsersFollowingList} from "../UsersFollowingList/UsersFollowingList"
import {Search} from "../Search/Search"

import {TwitterService} from "../../Services/TwitterService"
import {ContainsPipeUsers} from "../../Pipes/ContainsPipeUsers"

 

@Component({
    selector: "following",
    directives: [Trends, UserInfo, UsersFollowingList, Search, CORE_DIRECTIVES],
    providers: [TwitterService],
    templateUrl:"./app/Components/Following/Following.html",
    pipes: [ContainsPipeUsers]
})

export class Following {
   private twitterService: TwitterService;
   
   private searchKey: string;
   public notFollowing: UserModel[];
    
    constructor(data: RouteData)
    {
        this.twitterService = data.get('twitterService');

        this.searchKey = "";
        this.notFollowing = [];
        
        this.twitterService.users.forEach(user=> {
            if (user != this.twitterService.currentUser && this.twitterService.currentUser.following.indexOf(user) == -1)
                this.notFollowing.push(user);
        });
    }

    private onFollow(user: UserModel) {
        var index = this.notFollowing.indexOf(user);

        if (index != -1) {
            this.notFollowing.splice(index, 1);
        }
        
        this.twitterService.onFollow(user);
    }

    private onUnFollow(user: UserModel) {
        this.twitterService.onUnFollow(user);
        this.notFollowing.push(user);
    }
    
    private onSearchKeyUpdate(data: string): void {
        this.searchKey = data;
    }
}


