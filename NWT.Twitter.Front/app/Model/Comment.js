System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Comment;
    return {
        setters:[],
        execute: function() {
            Comment = (function () {
                function Comment(author, data, ID) {
                    if (ID === void 0) { ID = Math.random(); }
                    this.ID = ID;
                    this.author = author;
                    this.data = data;
                }
                return Comment;
            }());
            exports_1("Comment", Comment);
        }
    }
});
//# sourceMappingURL=Comment.js.map