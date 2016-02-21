import Metadata = require("../node_modules/angular2/src/core/metadata");
import Component = Metadata.Component;

import {bootstrap} from '../node_modules/angular2/platform/browser';
import {ROUTER_PROVIDERS, RouterOutlet, RouterLink, RouteConfig} from '../node_modules/angular2/router';
import {Home} from  './Components/home';

@Component({
    selector: 'twitter-app',
    directives: [RouterOutlet, RouterLink],
    templateUrl: "./HtmlTemplates/App.html"
})

@RouteConfig([
    { path: '/home', component: Home, name: 'home' }
])

export class Twitter {

}

bootstrap(Twitter, [ROUTER_PROVIDERS]);
