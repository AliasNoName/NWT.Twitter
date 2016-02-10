import {User} from "./User"

export class Comment{
    public author: User;
    public data: string;
    
    constructor(author: User, data: string) {
        this.author = author;
        this.data = data;
    }
}