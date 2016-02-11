import {Component} from "angular2/core"
import {RouteData} from 'angular2/router';

import {Hashtag as HashtagModel} from "../../Model/Hashtag"
import {Tweet as TweetModel} from "../../Model/Tweet"
import {User as UserModel} from "../../Model/User"
import {Comment as CommentModel} from "../../Model/Comment"
import {TweetsList} from "../TweetList/TweetsList"
import {Trends} from "../Trends/Trends"
import {UserInfo} from "../UserInfo/UserInfo"
import {NewTweet} from "../NewTweet/NewTweet"
import {Search} from "../Search/Search"

import {ContainsPipe} from "../../Pipes/ContainsPipe"


@Component({
    selector: "index",
    directives: [TweetsList, Trends, UserInfo, NewTweet, Search],
    pipes: [ContainsPipe],
    templateUrl:"./app/Components/Index/Index.html"
})


export class Index {
   public currentUser: UserModel;
   public hashtags: HashtagModel[];
   public tweets: TweetModel[];
   
   private searchKey: string;
    
    constructor(data: RouteData)
    {
        this.currentUser = data.get('currentUser');
        this.hashtags = data.get('hashtags');
        this.tweets = data.get('tweets');
        
        this.searchKey = "";
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
    
    private onNewTweetPublish(data: string) {
        var hashtaginfo:string;
        var dataFirstPart:string;
        var dataSecondPart:string;
        
        var i:number;
        var newHashtags: HashtagModel[]= [];
        
        var startIndex = data.indexOf("#");
        while (startIndex!=-1)
        {
            hashtaginfo = "";
            for(i=startIndex; data[i]!=" " && i<data.length; i++)
            {
                hashtaginfo = hashtaginfo.concat(data[i]);
            }
            dataFirstPart = data.slice(0, startIndex);
            dataSecondPart = data.slice(startIndex + hashtaginfo.length, data.length);
            data = dataFirstPart.concat(dataSecondPart);

           newHashtags.push(new HashtagModel(hashtaginfo));
        
            startIndex = data.indexOf("#", startIndex + hashtaginfo.length);
        }
         
        var newTweet =new TweetModel(this.currentUser, new Date(), data);
        
        for(i=0; i<newHashtags.length; i++)
        {
            newTweet.hashtags.push(newHashtags[i]);
            if(this.hashtags.find(hashtag=>hashtag.data == newHashtags[i].data)== null)
                this.hashtags.push(newHashtags[i]);
        }
        
        
        this.tweets.unshift(newTweet);
        this.currentUser.tweets.unshift(newTweet);
    }
}
