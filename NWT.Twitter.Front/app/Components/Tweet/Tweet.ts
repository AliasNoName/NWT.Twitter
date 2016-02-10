import {Component, EventEmitter} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {Tweet as TweetModel} from "../../Model/Tweet"

@Component({
    selector: "tweet",
    inputs: ["tweet", "favourited"],
    outputs: ["putFavourited", "removeFavourited"],
    directives: [CORE_DIRECTIVES],
    templateUrl: "./app/Components/Tweet/Tweet.html"
})

export class Tweet {
    public tweet: TweetModel;
    public favourited: boolean;
    public putFavourited: EventEmitter<any>;
    public removeFavourited: EventEmitter<any>;

    constructor() {
        this.putFavourited = new EventEmitter();
        this.removeFavourited = new EventEmitter();
    }

    private onPutFavourited(): void {
        this.favourited = true;
        this.putFavourited.next(this.tweet);
    }

    private onRemoveFavourited(): void {
        this.favourited = false;
        this.removeFavourited.next(this.tweet);
    }
}

