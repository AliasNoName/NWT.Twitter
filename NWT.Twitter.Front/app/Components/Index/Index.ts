import {Component} from "angular2/core"
import {RouteData} from "angular2/router"

import {Tweet as TweetModel} from "../../Model/Tweet"
import {Hashtag as HashtagModel} from "../../Model/Hashtag"

import {TweetsList} from "../TweetList/TweetsList"
import {Trends} from "../Trends/Trends"
import {UserInfo} from "../UserInfo/UserInfo"
import {NewTweet} from "../NewTweet/NewTweet"
import {Search} from "../Search/Search"

import {TwitterService} from "../../Services/TwitterService"
import {ContainsPipe} from "../../Pipes/ContainsPipe"


@Component({
    selector: "index",
    directives: [TweetsList, Trends, UserInfo, NewTweet, Search],
    pipes: [ContainsPipe],
    providers: [TwitterService],
    templateUrl:"./app/Components/Index/Index.html"
})


export class Index {
   private twitterService: TwitterService;
   
   private searchKey: string;
   public tweetsFollowing: TweetModel[];
    
    constructor(data:RouteData)
    {
        this.twitterService = data.get('twitterService');
        
        this.searchKey = "";
        this.tweetsFollowing = this.twitterService.tweets.filter (
            tweet => this.twitterService.currentUser.following.find(
                user => tweet.author == user
                )!=null|| tweet.author == this.twitterService.currentUser);
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
    
    private onNewTweetPublish(data: string) {
        var hashtaginfo:string;
        var dataFirstPart:string;
        var dataSecondPart:string;
        
        var i:number;
        var newHashtags: HashtagModel[]= [];
        
        var startIndex = data.indexOf("#");
        while (startIndex!=-1)
        {
            hashtaginfo = "#";
            for(i=startIndex+1; i < data.length && data[i] !=' ' && data[i]!='#'; i++)
               hashtaginfo = hashtaginfo.concat(data[i]);
                               
            dataFirstPart = data.slice(0, startIndex);
            dataSecondPart = data.slice(startIndex + hashtaginfo.length, data.length);
            data = dataFirstPart.concat(dataSecondPart);

           newHashtags.push(new HashtagModel(hashtaginfo));
           
           startIndex = data.indexOf("#", startIndex);
        }
         
        var newTweet =new TweetModel(this.twitterService.currentUser, new Date(), data);
        
        for(i=0; i<newHashtags.length; i++)
        {
            newTweet.hashtags.push(newHashtags[i]);
            this.twitterService.onHashtagAdd(newHashtags[i]);
        }

        this.tweetsFollowing.unshift(newTweet);
        this.twitterService.onNewTweetPublish(newTweet);
    }
}
