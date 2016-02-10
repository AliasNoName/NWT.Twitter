import {Component, View} from "angular2/core"
import {User as UserModel} from "../../Model/User"

@Component({
    selector: "profile-box",
    inputs: ["user"]
})

@View({
    templateUrl: "./app/Components/ProfileBox/ProfileBox.html"
})

export class ProfileBox {
    public user: UserModel;
}