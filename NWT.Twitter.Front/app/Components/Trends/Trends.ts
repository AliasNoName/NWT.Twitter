import {Component, View} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {Hashtag as HashtagModel} from "../../Model/Hashtag"

@Component({
    selector: "trends",
    inputs: ["hashtags"]
})

@View({
    directives: [CORE_DIRECTIVES],
    template:
    `<div class="panel panel-default hidden-xs ">
    <label id="trends-label">Trends</label>
    <ul id="trends-list" *ngFor="#hashtag of hashtags">
                <li>{{hashtag.data}}</li>
    </ul>
    </div>`
})

export class Trends {
    public hashtags: HashtagModel[]; 
}