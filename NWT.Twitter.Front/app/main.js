System.register(['angular2/platform/browser', 'angular2/router', 'angular2/core', 'angular2/http', "./Services/TwitterService", './Components/app/app'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, router_1, core_1, http_1, TwitterService_1, app_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (TwitterService_1_1) {
                TwitterService_1 = TwitterService_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            /*Potrebno da bi se normalno pokretalo rutiranje i search.
                Uključiti prije predsavljanja projekta.*/
            core_1.enableProdMode();
            browser_1.bootstrap(app_1.App, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, TwitterService_1.TwitterService]);
        }
    }
});
//# sourceMappingURL=main.js.map