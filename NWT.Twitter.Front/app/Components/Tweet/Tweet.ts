import {Component, EventEmitter} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Tweet as TweetModel} from "../../Model/Tweet"
import {Comment as CommentModel} from "../../Model/Comment"
import {CommentList} from "../CommentList/CommentList"

@Component({
    selector: "tweet",
    inputs: ["tweet", "favourited"],
    outputs: ["putFavourited", "removeFavourited"],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, CommentList],
    templateUrl: "./app/Components/Tweet/Tweet.html"
})

export class Tweet {
    public tweet: TweetModel;
    public favourited: boolean;
    public putFavourited: EventEmitter<any>;
    public removeFavourited: EventEmitter<any>;
    private areCommentsShown:boolean;

    constructor() {
        this.putFavourited = new EventEmitter();
        this.removeFavourited = new EventEmitter();
        this.areCommentsShown = false;
    }

    private onPutFavourited(): void {
        this.favourited = true;
        this.putFavourited.next(this.tweet);
    }

    private onRemoveFavourited(): void {
        this.favourited = false;
        this.removeFavourited.next(this.tweet);
    }
    
    private onShowComments():void{
        this.areCommentsShown = !this.areCommentsShown;
    }
}

