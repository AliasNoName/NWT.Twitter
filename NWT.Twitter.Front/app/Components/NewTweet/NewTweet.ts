import {Component,EventEmitter} from "angular2/core"

@Component({
    selector: "new-tweet",
    outputs: ["publish"],
    templateUrl: "./app/Components/NewTweet/NewTweet.html"
})

export class NewTweet {
    private numberOfSymbols: number;
    public publish: EventEmitter<any>;

    constructor() {
        this.numberOfSymbols = 140;
        this.publish = new EventEmitter();
    }

    private newTweetUpdate(input: HTMLInputElement): void {
        this.numberOfSymbols = 140 - input.value.length;
        if (input.value.length > 140)
            input.setAttribute("style", "background-color: #FFCCCC;");
        else if (input.value.length > 130)
            input.setAttribute("style", "background-color: #FFFCCC;");
        else
            input.setAttribute("style", "background-color: none;");
    }

    private onPublish(input: HTMLInputElement): void {
        var value = input.value.trim();
        if (value == "") { return; }

        if (value.length > 140) {
            return;
        }

        this.publish.next(value);

        input.value = "";
        this.numberOfSymbols = 140;
    }
}

