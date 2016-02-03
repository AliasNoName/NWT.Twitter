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
    template: `<div class="panel panel-default users">
            <img src={{user.imageUrl}} class="users-image" alt="user picture" />
            <a src="#"> <label class="users-name">{{user.getFullName()}}</label><br/></a>
            <a src="#"> <span class="users-nickname">@{{user.nickname}}</span><br/></a>
            <button *ng-if="isFollowing" class="btn pull-right btn-warning" (click)="onUnFollow()">Unfollow</button>
            <button *ng-if="!isFollowing" class="btn pull-right btn-success"(click)="onFollow()">Follow</button>
            <ul class="nav navbar-nav">
                <li class="users-info">
                    TWEETS <br/>
                    <label>{{user.numberTweets()}}</label>
                </li>
                <li class="users-info">
                    FOLLOWING<br/>
                    <label>{{user.numberFollowing()}}</label>
                </li>
            </ul>
        </div>
                  `
})

export class UserFollowing {
    public isFollowing: boolean;
    public user: UserModel;
    public followed: EventEmitter;
    public unfollowed: EventEmitter;

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

