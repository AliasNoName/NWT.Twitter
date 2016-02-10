System.register(['angular2/platform/browser', 'angular2/router', 'angular2/core', './Components/app/app'], function(exports_1) {
    var browser_1, router_1, core_1, app_1;
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
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            /*Potrebno da bi se normalno pokretalo rutiranje i search.
                Uključiti prije predsavljanja projekta.*/
            core_1.enableProdMode();
            browser_1.bootstrap(app_1.App, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map