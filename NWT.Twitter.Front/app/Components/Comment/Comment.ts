import {Component} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Comment as CommentModel} from "../../Model/Comment"

@Component({
    selector: "comment",
    inputs: ["comment"],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    templateUrl:"./app/Components/Comment/Comment.html"
})

export class Comment {
    public comment: CommentModel;
}