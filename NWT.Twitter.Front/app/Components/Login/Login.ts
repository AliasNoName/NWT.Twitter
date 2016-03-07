import {Component} from "angular2/core"
import {Router, RouteData} from "angular2/router"

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
    private service: TwitterService;
    private router: Router;
    
    private errorStatusCode:number; //0-OK, 1-Not Sumbited, 2-Wrong User, 3-Wrong password
    public errorOccured: boolean;
    public errorText: string;
    
    constructor(_router:Router, data: RouteData)
    {
        this.router = _router;
        this.twitterService = data.get('twitterService');
        this.errorOccured = false;
        this.errorText = "";
        this.errorStatusCode = 1;
    }
    
    private login(userName:string, password:string): void{
          this.errorStatusCode = this.twitterService.onLogin(userName, password);
          if(this.errorStatusCode==0)
          {
              setTimeout(()=>{
                this.router.navigate(['Index']);
                }, 100);
                this.errorOccured = false;
          }
          else{ 
            this.errorOccured = true;
            if(this.errorStatusCode==2)
            {
              this.errorText = "Wrong Nickname!"
            }
            else if(this.errorStatusCode==3)
            {
              this.errorText = "Wrong Password!"
            }
          }
    }
}