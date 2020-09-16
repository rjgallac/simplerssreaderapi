var firebaseService = require("./firebaseService.js");
var rssService = require("./rssService.js");

feeds = [
    'https://www.hotukdeals.com/rss/all',
    'http://news.ycombinator.com/rss'
]


exports.getFeeds = function() {
    const promises = [];
    feeds.forEach(feed => {
        const promise = rssService.getFeed(feed)
            .then(result =>{
            list = result.rss.channel[0].item.map(i =>{
                return {
                'feed': feed,
                'title': i.title,
                'description': i.description,
                'link': i.link,
                'pubdate': i.pubDate
                }
            })
            return firebaseService.save(list);
                
        });
        promises.push(promise);
    })
    return promises;
}

exports.getAll = function() {
    return firebaseService.getAll()
        .then(data => {
            console.log(data)
            return data;
        });
}