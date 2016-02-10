import {Component, View, EventEmitter} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"

import {Tweet as TweetModel} from "../../Model/Tweet"
import {User as UserModel} from "../../Model/User"
import {Tweet} from "../Tweet/Tweet"

@Component({
    selector: "tweets-list",
    inputs: ["tweets", "currentUser"],
    outputs: ["putFavourited", "removeFavourited"]
})

@View({
    directives: [CORE_DIRECTIVES, Tweet],
    template:
    `
<div>
        <div *ngFor="#tweet of tweets">
                <tweet [tweet]="tweet" [favourited]="checkIfFavourited(tweet)" (putFavourited)="onPutFavourited($event)"  (removeFavourited)="onRemoveFavourited($event)"></tweet>
        </div>
</div>
    `
})
export class TweetsList {

    public tweets: TweetModel[];
    public currentUser: UserModel;
    public putFavourited: EventEmitter<any>;
    public removeFavourited: EventEmitter<any>;

    constructor() {
        this.putFavourited = new EventEmitter();
        this.removeFavourited = new EventEmitter();
    }

    checkIfFavourited(tweet: TweetModel): boolean {
        if (this.currentUser.favourites.indexOf(tweet) != -1)
            return true;
        return false;
    }

    private onPutFavourited(favourite: TweetModel): void {
        this.putFavourited.next(favourite);
    }

    private onRemoveFavourited(favourite: TweetModel): void {
        this.removeFavourited.next(favourite);
    }

}
