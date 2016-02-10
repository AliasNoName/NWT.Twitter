import {Component} from "angular2/core"
import {User as UserModel} from "../../Model/User"

@Component({
    selector: "user-info",
    inputs: ["user"],
    templateUrl:"./app/Components/UserInfo/UserInfo.html" 
})

export class UserInfo {
    public user: UserModel;
}