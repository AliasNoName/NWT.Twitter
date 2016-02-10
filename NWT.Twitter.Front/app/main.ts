import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import { enableProdMode } from 'angular2/core'


/*Potrebno da bi se normalno pokretalo rutiranje i search.
    Uključiti prije predsavljanja projekta.*/
enableProdMode();

import {App} from './Components/app/app';

bootstrap(App, [ROUTER_PROVIDERS]);