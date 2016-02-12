import {Component} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {User as UserModel} from "../../Model/User"
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Profile} from  '../Profile/Profile';
import {EditProfile} from  '../EditProfile/EditProfile';

@Component({
    selector: "profile-box",
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    inputs: ["user", "isUserCurrentUser"],
    templateUrl: "./app/Components/ProfileBox/ProfileBox.html"
})

export class ProfileBox {
    public user: UserModel;
    public isUserCurrentUser: boolean;
}