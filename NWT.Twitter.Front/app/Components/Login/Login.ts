import {Component} from "angular2/core"
import {Router, RouteData, RouterLink} from "angular2/router"

import {TwitterService} from "../../Services/TwitterService"

@Component({
    selector: "login",
    providers: [TwitterService],
    templateUrl:"./app/Components/Login/Login.html"
})

export class Login {
    
    private twitterService: TwitterService;
    
    public userName: string;
    public password: string;
    public confirmPassword: string;
    private router: Router;
    private service: TwitterService;
    
    constructor(_router:Router, _service:TwitterService){
        this.router = _router;
        this.service = _service;
    }
    
    private login(userName:string, password:string): void{
        this.router.navigate(['Index']);     
    }
}