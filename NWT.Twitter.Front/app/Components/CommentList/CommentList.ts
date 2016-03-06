import {Component} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"


import {Comment as CommentModel} from "../../Model/Comment"
import {Comment} from "../Comment/Comment"

@Component({
    selector: "comments-list",
    inputs: ["comments"],
    directives: [CORE_DIRECTIVES, Comment],
    template:
    `
<div>
        <div *ngFor="#comment of comments">
                <comment [comment]="comment"></comment>
        </div>
</div>
    `
})

export class CommentList {
    public comments: CommentModel[];
}
