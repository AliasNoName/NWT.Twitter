System.register(["angular2/core", "angular2/common", 'angular2/router', "../../Model/User", "../EditProfileForm/EditProfileForm", "../../Services/TwitterService"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, User_1, EditProfileForm_1, TwitterService_1;
    var EditProfile;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (User_1_1) {
                User_1 = User_1_1;
            },
            function (EditProfileForm_1_1) {
                EditProfileForm_1 = EditProfileForm_1_1;
            },
            function (TwitterService_1_1) {
                TwitterService_1 = TwitterService_1_1;
            }],
        execute: function() {
            EditProfile = (function () {
                function EditProfile(data) {
                    this.twitterService = data.get('twitterService');
                    this.newData = new User_1.User(this.twitterService.currentUser.name, this.twitterService.currentUser.lastname, this.twitterService.currentUser.nickname, this.twitterService.currentUser.email, this.twitterService.currentUser.password, this.twitterService.currentUser.imageUrl, this.twitterService.currentUser.tweets, this.twitterService.currentUser.following, this.twitterService.currentUser.favourites);
                    this.retypedPwd = this.twitterService.currentUser.password;
                    this.errorOccured = false;
                    this.errorText = "";
                    this.changesSaved = false;
                }
                EditProfile.prototype.imageChange = function (inputValue) {
                    this.twitterService.onCurrentUserImageChange(inputValue);
                    this.newData.imageUrl = URL.createObjectURL(inputValue.target.files[0]);
                    this.changesSaved = false;
                };
                EditProfile.prototype.checkName = function (data) {
                    var value = data.trim();
                    if (value == "") {
                        this.errorText = "Name required!";
                        return false;
                    }
                    return true;
                };
                EditProfile.prototype.checkLastName = function (data) {
                    var value = data.trim();
                    if (value == "") {
                        this.errorText = "Last name required!";
                        return false;
                    }
                    return true;
                };
                EditProfile.prototype.checkNickname = function (data) {
                    var _this = this;
                    var value = data.trim();
                    if (value == "") {
                        this.errorText = "Nickname required!";
                        return false;
                    }
                    if (this.twitterService.users.find(function (user) { return user.nickname == data && user != _this.twitterService.currentUser; }) != null) {
                        this.errorText = "Nickname already taken!";
                        return false;
                    }
                    return true;
                };
                EditProfile.prototype.checkEmail = function (data) {
                    var value = data.trim();
                    var emailPattern = /^([a-zA-Z0-9])+([a-zA-Z0-9._%+-])+@([a-zA-Z0-9_.-])+\.(([a-zA-Z]){2,6})$/;
                    if (value == "") {
                        this.errorText = "Email required!";
                        return false;
                    }
                    else if (!value.match(emailPattern)) {
                        this.errorText = "Wrong email format!";
                        return false;
                    }
                    return true;
                };
                EditProfile.prototype.checkPassword = function (data) {
                    var value = data.trim();
                    var pwdPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,100}$/;
                    if (value == "") {
                        this.errorText = "Password required!";
                        return false;
                    }
                    else if (!value.match(pwdPattern)) {
                        this.errorText = "Wrong password format! (Password must be at least 6 characters, and must include at least one upper case letter, one lower case letter, and one numeric digit.)";
                        return false;
                    }
                    return true;
                };
                EditProfile.prototype.checkRepeatedPassword = function (retyped, pwd) {
                    var value = retyped.trim();
                    if (value == "") {
                        this.errorText = "Retype password!";
                        return false;
                    }
                    else if (pwd != retyped) {
                        this.errorText = "Passwords do not match!";
                        return false;
                    }
                    return true;
                };
                EditProfile.prototype.onNameChange = function (data) {
                    this.newData.name = data;
                    this.changesSaved = false;
                };
                EditProfile.prototype.onLastNameChange = function (data) {
                    this.newData.lastname = data;
                    this.changesSaved = false;
                };
                EditProfile.prototype.onNicknameChange = function (data) {
                    this.newData.nickname = data;
                    this.changesSaved = false;
                };
                EditProfile.prototype.onEmailChange = function (data) {
                    this.newData.email = data;
                    this.changesSaved = false;
                };
                EditProfile.prototype.onPasswordChange = function (data) {
                    this.newData.password = data;
                    this.changesSaved = false;
                };
                EditProfile.prototype.onRepeatPasswordChange = function (data) {
                    this.retypedPwd = data;
                    this.changesSaved = false;
                };
                EditProfile.prototype.onSubmit = function () {
                    if (this.checkName(this.newData.name)
                        && this.checkLastName(this.newData.lastname)
                        && this.checkNickname(this.newData.nickname)
                        && this.checkEmail(this.newData.email)
                        && this.checkPassword(this.newData.password)
                        && this.checkRepeatedPassword(this.retypedPwd, this.newData.password)) {
                        this.errorText = " ";
                        this.errorOccured = false;
                        this.twitterService.onUserDataChange(this.newData);
                        this.changesSaved = true;
                    }
                    else
                        this.errorOccured = true;
                };
                EditProfile.prototype.onRest = function () {
                    this.newData.name = "";
                    this.newData.lastname = "";
                    this.newData.nickname = "";
                    this.newData.password = "";
                    this.newData.password = "";
                };
                EditProfile = __decorate([
                    core_1.Component({
                        selector: "edit-profile",
                        directives: [EditProfileForm_1.EditProfileForm, common_1.CORE_DIRECTIVES],
                        providers: [TwitterService_1.TwitterService],
                        templateUrl: "./app/Components/EditProfile/EditProfile.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteData])
                ], EditProfile);
                return EditProfile;
            }());
            exports_1("EditProfile", EditProfile);
        }
    }
});
//# sourceMappingURL=EditProfile.js.map