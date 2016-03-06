import {Component, View, EventEmitter} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"

import {User as UserModel} from "../../Model/User"
import {UserFollowing} from "../UserFollowing/UserFollowing"

@Component({
    selector: "users-following-list",
    inputs: ["users", "isFollowing"],
    outputs: ["followed", "unfollowed"]
})

@View({
    directives: [CORE_DIRECTIVES, UserFollowing],
    templateUrl: "./app/Components/UsersFollowingList/UsersFollowingList.html"
})
export class UsersFollowingList {

    public users: UserModel[];
    public isFollowing: boolean;
    public followed: EventEmitter<any>;
    public unfollowed: EventEmitter<any>;

    constructor() {
        this.followed = new EventEmitter();
        this.unfollowed = new EventEmitter();
    }

    private onFollow(user: UserModel): void {
        this.followed.next(user);
    }

    private onUnFollow(user: UserModel): void {
        this.unfollowed.next(user);
    }
}
