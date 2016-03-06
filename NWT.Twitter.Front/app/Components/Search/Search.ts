import {Component, View, EventEmitter} from "angular2/core"
import {Tweet as TweetModel} from "../../Model/Tweet"

@Component({
    selector: "search",
    outputs: ["searchData"]
})

@View({
    template:
    `
    <div class="input-group">
         <input type="text" class="form-control" placeholder="Search for..." #input (keyup)="updateSearchKey(input)"/>
         <span class="input-group-btn">
            <button class="btn btn-default" type="button"><span class="glyphicon glyphicon-search"></span>.</button>
         </span>
    </div>
  
`
})

export class Search {
    public tweets: TweetModel[];
    private searchKey: string;
    private searchData: EventEmitter<any>;

    constructor() {
        this.searchKey = "";
        this.searchData = new EventEmitter();
    }

    private updateSearchKey(input: HTMLInputElement): void {
        this.searchKey = input.value.trim();
        this.searchData.next(this.searchKey);
    }
}