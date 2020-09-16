const request = require('request');
var parseString = require('xml2js').parseString;

exports.getFeed = function(feed){
    return new Promise((accept, reject) => {
        request(feed, { json: true }, (err, response, body) => {
            if (err) { return console.log(err); }
            parseString(body, function (err, result) {
                if (err) { reject(err); }
                accept(result);
            });
        });
    });
}

