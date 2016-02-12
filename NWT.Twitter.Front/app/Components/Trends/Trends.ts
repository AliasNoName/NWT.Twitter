import {Component} from "angular2/core"
import {CORE_DIRECTIVES} from "angular2/common"
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {Hashtag as HashtagModel} from "../../Model/Hashtag"

@Component({
    selector: "trends",
    inputs: ["hashtags"],
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    template:
    `<div class="panel panel-default hidden-xs ">
    <label id="trends-label">Trends</label>
    <ul id="trends-list" *ngFor="#hashtag of hashtags">
                <li><a [routerLink]="['Hashtag', {data: hashtag.data}]">{{hashtag.data}}</a></li>
    </ul>
    </div>`
})

export class Trends{
    public hashtags: HashtagModel[]; 
}