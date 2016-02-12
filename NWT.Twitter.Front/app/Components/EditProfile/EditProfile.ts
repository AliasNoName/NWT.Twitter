import {Component} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {RouteConfig, RouteData} from 'angular2/router';

import {Profile} from  '../Profile/Profile';
import {User as UserModel} from "../../Model/User"
import {EditProfileForm} from "../EditProfileForm/EditProfileForm"


@Component({
    selector: "edit-profile",
    directives: [EditProfileForm, CORE_DIRECTIVES],
    templateUrl: "./app/Components/EditProfile/EditProfile.html"
})

export class EditProfile {
    public currentUser: UserModel;
    public users: UserModel[];
   
    public newData: UserModel;
    public errorOccured: boolean;
    public errorText: string;
    public retypedPwd: string;
    public changesSaved:boolean;
    
    constructor(data: RouteData)
    {
        this.currentUser = data.get('currentUser');
        this.users = data.get('users');
        
        this.newData = this.currentUser;
        this.retypedPwd = this.currentUser.password;
        this.errorOccured = false;
        this.errorText = "";
        this.changesSaved = false;
    }

    private imageChange(inputValue: any): void {
        this.currentUser.imageUrl = URL.createObjectURL(inputValue.target.files[0]);
        this.changesSaved = false;
    }

     

    private checkName(data: string): boolean {
        var value = data.trim();
        if (value == "") {
            this.errorText = "Name required!";
            return false;
        }
        return true;
    }

    private checkLastName(data: string): boolean {
        var value = data.trim();
        if (value == "") {
            this.errorText = "Last name required!";
            return false;
        }
        return true;
    }

    private checkNickname(data: string): boolean {
        var value = data.trim();
        if (value == "") {
            this.errorText = "Nickname required!";
            return false;
        }
        if(this.users.find(user=>user.nickname==data&&user!=this.currentUser)!=null)
        {
            this.errorText = "Nickname already taken!";
            return false;
        }
        return true;
    }

    private checkEmail(data: string): boolean {
        var value = data.trim();
        var emailPattern: RegExp = /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;
        if (value == "") {
            this.errorText = "Email required!";
            return false;
        }
        else if (!value.match(emailPattern)){
            this.errorText = "Wrong email format!";
            return false;
        }
        return true;
    }

    private checkPassword(data: string): boolean {
        var value = data.trim();
        var pwdPattern: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,100}$/;
        if (value == "") {
            this.errorText = "Password required!";
            return false;
        }
        else if (!value.match(pwdPattern)) {
            this.errorText = "Wrong password format! (Password must be at least 6 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.)";
            return false;
        }
        return true;
    }

    private checkRepeatedPassword(retyped: string, pwd: string): boolean {
    var value = retyped.trim();
        if (value == "") {
            this.errorText = "Retype password!";
            return false;
        }
        else if (pwd!=retyped) {
            this.errorText = "Passwords do not match!";
            return false;
        }
        return true;
    }
    
    private onNameChange(data: string) {
        this.newData.name = data;
        this.changesSaved = false;

    }

    private onLastNameChange(data: string) {
        this.newData.lastname = data;
        this.changesSaved = false;
    }

    private onNicknameChange(data: string) {
        this.newData.nickname = data;
        this.changesSaved = false;
    }

    private onEmailChange(data: string) {
        this.newData.email = data;
        this.changesSaved = false;
    }

    private onPasswordChange(data: string) {
        this.newData.password = data;
        this.changesSaved = false;
    }

    private onRepeatPasswordChange(data: string) {
        this.retypedPwd = data;
        this.changesSaved = false;
    }

    onSubmit(): void {
        if (this.checkName(this.newData.name)
            && this.checkLastName(this.newData.lastname)
            && this.checkNickname(this.newData.nickname)
            && this.checkEmail(this.newData.email)
            && this.checkPassword(this.newData.password)
            && this.checkRepeatedPassword(this.retypedPwd, this.newData.password)) {
            this.errorText = " ";
            this.errorOccured = false;
            this.currentUser = this.newData;
            this.changesSaved = true;
        }
        else
            this.errorOccured = true;
    }

    onRest(): void {
        this.newData.name = "";
        this.newData.lastname = "";
        this.newData.nickname = "";
        this.newData.password = "";
        this.newData.password = "";
    }

}
