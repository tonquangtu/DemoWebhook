var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/get-notify', (req, res) => {

  const data = req.body;

  res.json(data);
  console.log(data);
});

module.exports = router;
