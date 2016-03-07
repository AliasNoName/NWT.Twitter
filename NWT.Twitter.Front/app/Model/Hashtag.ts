export class Hashtag{
    public ID:number;
    public data: string;

    constructor(data: string, ID:number= Math.random()) {
        this.ID = ID;
        this.data = data
    }
}