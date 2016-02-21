import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import { enableProdMode } from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';

import {TwitterService} from "./Services/TwitterService"


/*Potrebno da bi se normalno pokretalo rutiranje i search.
    Uključiti prije predsavljanja projekta.*/
enableProdMode();

import {App} from './Components/app/app';

bootstrap(App, [ROUTER_PROVIDERS, HTTP_PROVIDERS, TwitterService]);