import {Component} from "angular2/core"
import {User as UserModel} from "../../Model/User"
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Profile} from  '../Profile/Profile';
import {EditProfile} from  '../EditProfile/EditProfile';

@Component({
    selector: "profile-box",
    directives: [ROUTER_DIRECTIVES],
    inputs: ["user"],
    templateUrl: "./app/Components/ProfileBox/ProfileBox.html"
})

@RouteConfig([
    { path: '/profile', component: Profile, name: 'Profile' },
    { path: '/editprofile', component: EditProfile, name: 'EditProfile' }
])

export class ProfileBox {
    public user: UserModel;
}