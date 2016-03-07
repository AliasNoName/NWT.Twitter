import {User} from "./User"

export class Comment{
    public ID:number;
    public author: User;
    public data: string;
    
    constructor(author: User, data: string, ID:number= Math.random()) {
        this.ID = ID;
        this.author = author;
        this.data = data;
    }
}