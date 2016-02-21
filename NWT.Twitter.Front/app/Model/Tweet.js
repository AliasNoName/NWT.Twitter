System.register([], function(exports_1) {
    var Tweet;
    return {
        setters:[],
        execute: function() {
            Tweet = (function () {
                function Tweet(author, publishTime, data, hashtags, comments) {
                    if (hashtags === void 0) { hashtags = []; }
                    if (comments === void 0) { comments = []; }
                    this.author = author;
                    this.publishTime = publishTime;
                    this.data = data;
                    this.hashtags = hashtags;
                    this.comments = comments;
                }
                return Tweet;
            })();
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=Tweet.js.map