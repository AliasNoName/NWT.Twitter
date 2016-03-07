import {Http, HTTP_PROVIDERS, Response, RequestOptions, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core'

import {Hashtag as HashtagModel} from "./../Model/Hashtag"
import {Tweet as TweetModel} from "./../Model/Tweet"
import {User as UserModel} from "./../Model/User"
import {Comment as CommentModel} from "./../Model/Comment"


@Injectable()
export class TwitterService {
     private http: Http;
     public hashtags: HashtagModel[];
     public tweets: TweetModel[];
     public users: UserModel[];
     public currentUser: UserModel;
     
     public loggedIn: boolean;
     
     constructor(http: Http){
        this.hashtags = [];
        this.users = [];
        this.tweets = [];
        this.http = http;
        
        this.loggedIn = false;
        
        this.importTestData();
        this.callFromDatabase();

        this.users.forEach(user => user.tweets = this.tweets.filter(tweet => tweet.author == user));    
    }
    
    private importTestData(){
        this.hashtags.push(new HashtagModel("#hashtag_trend1"));
        this.hashtags.push(new HashtagModel("#hashtag_trend2"));
        this.hashtags.push(new HashtagModel("#hashtag_trend3"));
        this.hashtags.push(new HashtagModel("#hashtag_trend4"));
        this.hashtags.push(new HashtagModel("#hashtag_trend5"));
        this.hashtags.push(new HashtagModel("#hashtag_trend6"));
        
        this.users.push(new UserModel("Ime", "Prezime", "Nickname", "imeprezime@gmail.com","Password.1", "/Content/Users/User1.png"));
        this.users.push(new UserModel("Ime2", "Prezime2", "Nickname2", "ime2prezime2@gmail.com", "Password.2", "/Content/Users/User3.png"));
        this.users.push(new UserModel("Ime3", "Prezime3", "Nickname3", "ime3prezime3@gmail.com", "Password.3", "/Content/Users/User2.png"));
        this.users.push(new UserModel("Ime4", "Prezime4", "Nickname4", "ime4prezime4@gmail.com", "Password.4", "/Content/Users/User4.png"));
        
         this.users[0].following = [this.users[2], this.users[1]];
         this.users[1].following = [this.users[2]];
         this.users[2].following = [this.users[3], this.users[1], this.users[0]];
         this.users[3].following = [this.users[2], this.users[1]];
         
        this.tweets.push(new TweetModel(this.users[0], new Date(2015, 12, 12), "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", [this.hashtags[0], this.hashtags[4]]));
        this.tweets.push(new TweetModel(this.users[1], new Date(2015, 12, 10), "Duis malesuada leo justo, eget efficitur ligula varius sed. Suspendisse potenti. Integer imperdiet lobortis leo. Integer ullamcorper iaculis convallis.", [this.hashtags[5], this.hashtags[1], this.hashtags[3]]));
        this.tweets.push(new TweetModel(this.users[2], new Date(2015, 12, 4), "Aliquam quam quam, dignissim non eros nec, congue scelerisque arcu. Nam ac nibh massa. Suspendisse tristique ante vel ultricies congue. Mauris sagittis nec tortor vitae rutrum.", [this.hashtags[5]]));
        this.tweets.push(new TweetModel(this.users[0], new Date(2015, 12, 2), "Donec lacinia massa lectus. Sed a tristique odio.", [this.hashtags[3], this.hashtags[4], this.hashtags[1]]));
        
        this.tweets[0].comments = [new CommentModel(this.users[0], "Pellentesque a accumsan nunc"), new CommentModel(this.users[2], "Nam vulputate enim a mollis mattis"), new CommentModel(this.users[0], "Nam faucibus eleifend eros ut lobortis")];
        this.tweets[1].comments = [new CommentModel(this.users[2], "Phasellus sit amet blandit velit"), new CommentModel(this.users[3], "Sed varius pulvinar ornare"), new CommentModel(this.users[2], "Curabitur lectus nibh"), new CommentModel(this.users[1], "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus")];
        this.tweets[2].comments = [new CommentModel(this.users[3], "Lorem ipsum dolor sit amet,"), new CommentModel(this.users[2], "Integer sit amet ipsum consectetu")];
        this.tweets[3].comments = [new CommentModel(this.users[1], "Cras vitae faucibus risus."), new CommentModel(this.users[3], "Nulla vitae elit a risus ullamcorper facilisis"), new CommentModel(this.users[0], "Nullam ornare nisl vel urna faucibus, non ultrices nibh pulvinar.")];       
    }
    
    private callFromDatabase(){
        this.fetchHashtags();
        this.fetchUsers();
        this.fetchTweets();
        this.fetchCurrentUser();
    }
    
    private fetchHashtags(){

        let request = this.http.request("http://localhost:19964/api/Master/Hashtags/Database");

        request.subscribe((response: Response) => {
        response.json().forEach(hashtags => {
                hashtags.map(hashtag=>
                {
                    this.hashtags.push(new HashtagModel("#"+hashtag.text, hashtag.id));
                })
            })       
        }, (error) => alert("Error: " + JSON.stringify(error)));
    }
    
    private fetchUsers(){
        let request = this.http.request("http://localhost:19964/api/Master/Users/Database");

        request.subscribe((response: Response) => {
        response.json().forEach(users => {
                users.map(user=>
                {
                    var newUser = new UserModel(user.firstName, user.lastName, user.userName, user.emal, user.passwordHash, user.imageUrl, user.id);
                    newUser.following = [];
                    if(user.followedUsers!=null)
                    {
                        user.followedUsers.forEach(following=>newUser.following.push(following));
                    }
                    this.users.push(newUser);
                     
                })
            })
        }, (error) => alert("Error: " + JSON.stringify(error)));
    }
    
    private fetchTweets(){
        let request = this.http.request("http://localhost:19964/api/Master/Tweets/Database");
        
        request.subscribe((response: Response) => {
        response.json().forEach(tweets => {
                tweets.map(tweet=>
                {
                    /*this.users.find(user=>user.ID==tweet.userID)*/
                    var newTweet = new TweetModel(this.users[0], new Date(), tweet.text, tweet.hashtags, tweet.id);
                    newTweet.comments = [];
                    if(tweet.comments!=null)
                    {
                        tweet.comments.forEach(comment=>newTweet.comments.push(comment));
                    }
                    this.tweets.push(newTweet);
                     
                })
            })    
        }, (error) => alert("Error: " + JSON.stringify(error)));
    }
    
    private fetchCurrentUser(){
        this.currentUser = this.users[0];
        this.currentUser.favourites = [this.tweets[1], this.tweets[2]];
    }
    
    public onPutFavourited(favourite: TweetModel): void {
        this.currentUser.favourites.unshift(favourite);
    }
    
    public onRemoveFavourited(favourite: TweetModel): void {
        var index = this.currentUser.favourites.indexOf(favourite);
        if (index != -1) {
            this.currentUser.favourites.splice(index, 1);
        }
    }
    
    public onNewTweetPublish(newTweet: TweetModel){
        this.tweets.unshift(newTweet);
        this.currentUser.tweets.unshift(newTweet);
    }
    
    public onHashtagAdd(newHashtag: HashtagModel){
        if(this.hashtags.find(hashtag=>hashtag.data == newHashtag.data)== null)
                this.hashtags.unshift(newHashtag);
    }
    
    public onFollow(user: UserModel){
        this.currentUser.following.push(user);
    }
    
    public onUnFollow(user: UserModel) {
        var index = this.currentUser.following.indexOf(user);

        if (index != -1) {
            this.currentUser.following.splice(index, 1);
        }
    }
    
    public onCurrentUserImageChange(inputValue: any): void {
        this.currentUser.imageUrl = URL.createObjectURL(inputValue.target.files[0]);
    }
    
    public onUserDataChange(newData: UserModel){
        var index = this.users.indexOf(this.currentUser);
        this.currentUser = new UserModel(newData.name, newData.lastname, newData.nickname, newData.email, newData.password, newData.imageUrl, newData.tweets, newData.following, newData.favourites, this.currentUser.ID);
        this.users[index] = this.currentUser;
        console.log(this.users);
    }
    
    public onLogin(userName:string, password:string):number{
        var loginAtemptUser: UserModel;
        
        //0-OK, 1-Not Sumbited, 2-Wrong User, 3-Wrong password
        loginAtemptUser = this.users.find(user=>user.nickname==userName);
        if(loginAtemptUser == null)
            return 2;
        else if(loginAtemptUser.password != password)
            return 3;
         else
         {
             this.loggedIn = true;
             this.currentUser = loginAtemptUser;
            return 0;
         }
    }
    
}