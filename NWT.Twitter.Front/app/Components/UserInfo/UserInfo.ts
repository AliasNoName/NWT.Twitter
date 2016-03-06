import {Component} from "angular2/core"
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {User as UserModel} from "../../Model/User"

@Component({
    selector: "user-info",
    inputs: ["user"],
    directives: [ROUTER_DIRECTIVES],
    templateUrl:"./app/Components/UserInfo/UserInfo.html" 
})

export class UserInfo {
    public user: UserModel;
}