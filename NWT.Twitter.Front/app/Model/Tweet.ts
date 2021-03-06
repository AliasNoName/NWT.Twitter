﻿import {Hashtag} from "./Hashtag"
import {User} from "./User"
import {Comment} from "./Comment"

export class Tweet {
    public ID: number;
    public author: User;
    public publishTime: Date;
    public data: string;
    public hashtags: Hashtag[];
    public comments: Comment[];

    constructor(author: User, publishTime: Date, data: string, hashtags: Hashtag[] = [], comments: Comment[] = [], ID:number= Math.random()) {
        this.ID = ID;
        this.author = author;
        this.publishTime = publishTime;
        this.data = data;
        this.hashtags = hashtags;
        this.comments = comments;
    }
}