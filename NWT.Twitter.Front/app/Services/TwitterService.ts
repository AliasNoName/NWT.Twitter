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
     
     constructor(http: Http){
        this.hashtags = [];
        this.users = [];
        this.tweets = [];
        this.http = http;
        
        this.fetchHashtags();
        this.fetchUsers();
        this.fetchTweets();
        this.fetchCurrentUser();
        
        this.users.forEach(user => user.tweets = this.tweets.filter(tweet => tweet.author == user));
    }
    
    /*
    TODO:
    private fetchTodos(){
        let request = this.http.request("/api/TodoItems");
        
        request.subscribe((response: Response) => {
            this.todos = response.json().map(todo => new TodoItem(todo.Value, todo.Done, todo.ID))
        }, (error) => alert("Error: " + JSON.stringify(error)));
    }
    */
    
    private fetchHashtags(){
        this.hashtags = [
            new HashtagModel("#hashtag_trend1"),
            new HashtagModel("#hashtag_trend2"),
            new HashtagModel("#hashtag_trend3"),
            new HashtagModel("#hashtag_trend4"),
            new HashtagModel("#hashtag_trend5"),
            new HashtagModel("#hashtag_trend6"),
        ];
    }
    
    private fetchUsers(){
        this.users = [
            new UserModel("Ime", "Prezime", "Nickname", "imeprezime@gmail.com","Password.1", "/Content/Users/User1.png"),
            new UserModel("Ime2", "Prezime2", "Nickname2", "ime2prezime2@gmail.com", "Password.2", "/Content/Users/User3.png"),
            new UserModel("Ime3", "Prezime3", "Nickname3", "ime3prezime3@gmail.com", "Password.3", "/Content/Users/User2.png"),
            new UserModel("Ime4", "Prezime4", "Nickname4", "ime4prezime4@gmail.com", "Password.4", "/Content/Users/User4.png"),
        ];
        
            this.users[0].following = [this.users[2], this.users[1]];
            this.users[1].following = [this.users[2]];
            this.users[2].following = [this.users[3], this.users[1], this.users[0]];
            this.users[3].following = [this.users[2], this.users[1]];
    }
    
    private fetchTweets(){
        this.tweets = [
            new TweetModel(this.users[0], new Date(2015, 12, 12), "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", [this.hashtags[0], this.hashtags[4]]),
            new TweetModel(this.users[1], new Date(2015, 12, 10), "Duis malesuada leo justo, eget efficitur ligula varius sed. Suspendisse potenti. Integer imperdiet lobortis leo. Integer ullamcorper iaculis convallis.", [this.hashtags[5], this.hashtags[1], this.hashtags[3]]),
            new TweetModel(this.users[2], new Date(2015, 12, 4), "Aliquam quam quam, dignissim non eros nec, congue scelerisque arcu. Nam ac nibh massa. Suspendisse tristique ante vel ultricies congue. Mauris sagittis nec tortor vitae rutrum.", [this.hashtags[5]]),
            new TweetModel(this.users[0], new Date(2015, 12, 2), "Donec lacinia massa lectus. Sed a tristique odio.", [this.hashtags[3], this.hashtags[4], this.hashtags[1]])
        ];
        
        this.tweets[0].comments = [new CommentModel(this.users[0], "Pellentesque a accumsan nunc"), new CommentModel(this.users[2], "Nam vulputate enim a mollis mattis"), new CommentModel(this.users[0], "Nam faucibus eleifend eros ut lobortis")];
        this.tweets[1].comments = [new CommentModel(this.users[2], "Phasellus sit amet blandit velit"), new CommentModel(this.users[3], "Sed varius pulvinar ornare"), new CommentModel(this.users[2], "Curabitur lectus nibh"), new CommentModel(this.users[1], "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus")];
        this.tweets[2].comments = [new CommentModel(this.users[3], "Lorem ipsum dolor sit amet,"), new CommentModel(this.users[2], "Integer sit amet ipsum consectetu")];
        this.tweets[3].comments = [new CommentModel(this.users[1], "Cras vitae faucibus risus."), new CommentModel(this.users[3], "Nulla vitae elit a risus ullamcorper facilisis"), new CommentModel(this.users[0], "Nullam ornare nisl vel urna faucibus, non ultrices nibh pulvinar.")];
        
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
        this.currentUser = new UserModel(newData.name, newData.lastname, newData.nickname, newData.email, newData.password, newData.imageUrl, newData.tweets, newData.following, newData.favourites);
    }
    
}