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
    template: `
    < nav >
        <ul>
            <li><a router-link="start" > Start < /a></li >
            <li><a router-link="about" > About < /a></li >
            <li><a router-link="contact" > Contact < /a></li >
        </ul>
    < /nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})

class App {

}
