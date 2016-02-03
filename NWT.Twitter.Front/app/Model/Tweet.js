System.register([], function(exports_1) {
    var Tweet;
    return {
        setters:[],
        execute: function() {
            Tweet = (function () {
                function Tweet(author, publishTime, data, hashtags) {
                    if (hashtags === void 0) { hashtags = []; }
                    this.author = author;
                    this.publishTime = publishTime;
                    this.data = data;
                    this.hashtags = hashtags;
                }
                return Tweet;
            })();
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=Tweet.js.map