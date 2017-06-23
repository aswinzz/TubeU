var express = require('express');
var router = express.Router();
var YouTube = require('youtube-node');

var youTube = new YouTube();

youTube.setKey('AIzaSyB-Z_rlxm941OxMRgdFeF-xYcOOHdycM7E');



/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
	var search=req.param('search');
  youTube.search(search, 9, function(error, result) {
  if (error) {
    console.log(error);
  }
  else {
  	res.render('result', {data:result.items,token:result.nextPageToken});
    console.log(result.items);
  }
});
  
});


module.exports = router;
