import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {RouterConfig} from 'angular2/router';

@Component({
    selector: 'twitter-app',
    templateUrl: './HtmlTemplates/App.html'
})

class App { }

bootstrap(App);