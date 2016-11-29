var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Crawler = require('js-crawler');
var osmosis = require('osmosis');
var Xray = require('x-ray');


var corsOptions = {
  origin: 'http://localhost:9000'
}

var app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));

var searchItem = 'gibson%20les%20paul%20classic%20antique'

// new Crawler().configure({depth: 3})
//   .crawl("http://www.reverb.com/marketplace?query=" + searchItem, function onSuccess(page) {
//     console.log(page.content);
//   });

// osmosis
// .get('http://www.reverb.com/marketplace?query=' + searchItem)
//   .find('//div[@class="wrap-thumbnailCatTop"]')
//   .set('products')
//   .log(console.log)
//   .debug(console.log)

var x = Xray();

app.get('/', function(req, res) {
  var stream = x('http://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050601.m570.l1313.TR0.TRC0.H0.Xgibson+les+paul+classic.TRS0&_nkw=gibson+les+paul+classic&_sacat=0', '#ListViewInner').stream();
stream.pipe(res);
})




app.listen(9000, function(){
  console.log('Got \'er listen\' on ', 9000)
})
