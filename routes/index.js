var express = require('express');
var router = express.Router();
let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* POST form page. */

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Mini Message Board' });
});

router.post('/new', function (req, res, next) {
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date(),
  });

  res.redirect('/');
});

module.exports = router;
