// Dependencies
var request = require('request');
var cheerio = require('cheerio');
var urls = [];

request('https://www.reddit.com/r/badphilosophy/', function scrape(err, resp, body){
	if(!err && resp.statusCode == 200){
		var $ = cheerio.load(body);
		$('a.title', '#siteTable').each(function(){
			var url = $(this).attr('href');
			urls.push(url);
		});

		document.write(urls);
		console.log(urls);
	}


});

module.exports = scrape();