var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/get-notify', (req, res) => {

  const data = req.body;
  console.log(data);
  res.render('index', { title: data });
  // res.json(data);

});

router.post('/github-callback', (req, res) => {

  const data = req.data;
  console.log(data);
  res.json(data);
});

router.post('/github-install', (req, res) => {
  const data = req.data;
  console.log(data);
  res.json(data);
});

router.post('/github-afterinstall', (req, res) => {
  const data = req.data;
  console.log(data);
  res.json(data);
});
module.exports = router;
