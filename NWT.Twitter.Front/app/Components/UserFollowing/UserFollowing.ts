import {Component, View, EventEmitter} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {User as UserModel} from "../../Model/User"

@Component({
    selector: "user-following",
    inputs: ["isFollowing", "user"],
    outputs: ["followed", "unfollowed"]
})

@View({
    directives: [CORE_DIRECTIVES],
    templateUrl: "./app/Components/UserFollowing/UserFollowing.html"
})

export class UserFollowing {
    public isFollowing: boolean;
    public user: UserModel;
    public followed: EventEmitter<any>;
    public unfollowed: EventEmitter<any>;

    constructor() {
        this.followed = new EventEmitter();
        this.unfollowed = new EventEmitter();
    }

    private onFollow(): void {
        this.followed.next(this.user);
    }

    private onUnFollow(): void {
        this.unfollowed.next(this.user);
    }
}

