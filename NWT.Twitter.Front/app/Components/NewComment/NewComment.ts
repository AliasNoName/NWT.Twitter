import {Component,EventEmitter} from "angular2/core"
import {User as UserModel} from "../../Model/User"

@Component({
    selector: "new-comment",
    inputs: ["currentUser"],
    outputs: ["publish"],
    templateUrl: "./app/Components/NewComment/NewComment.html"
})

export class NewComment {
    public publish: EventEmitter<any>;
    public currentUser: UserModel;

    constructor() {
        this.publish = new EventEmitter();
    }

    private onPublish(input: HTMLInputElement): void {
        var value = input.value.trim();
        if (value == "") { return; }
        this.publish.next(value);
        
        input.value = "";
    }
}

