System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Hashtag;
    return {
        setters:[],
        execute: function() {
            Hashtag = (function () {
                function Hashtag(data, ID) {
                    if (ID === void 0) { ID = Math.random(); }
                    this.ID = ID;
                    this.data = data;
                }
                return Hashtag;
            }());
            exports_1("Hashtag", Hashtag);
        }
    }
});
//# sourceMappingURL=Hashtag.js.map