import Metadata = require("../node_modules/angular2/src/core/metadata");
import View = Metadata.View;
import Component = Metadata.Component;

import {RouteConfig, RouterOutlet, RouterLink} from '../node_modules/angular2/router';
import {Home} from  './Components/home';

@Component({
    selector: 'app'
})

@RouteConfig([
    { path: '/home', component: Home, as: 'home' }
])

@Metadata.View({
    directives: [RouterOutlet, RouterLink],
    templateUrl: '/HtmlTemplates/App.html' 
})

class App {

}
