/**
* Export cheerio (with )
*/

exports = module.exports = process.env.CHEERIO_COV
  ? require('./lib-cov/cheerio')
  : require('./lib/cheerio');

/*
Export the version
*/

exports.version = require('./package').version;
var cheerio = require('cheerio'),
    $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

$.html();
