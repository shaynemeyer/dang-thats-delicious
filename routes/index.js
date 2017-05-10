const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const shayne = { name: 'Shayne', age:0 }
  //res.send('Hey! It works!');
  //res.json(shayne)
  res.send(req.query.name)
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
})

module.exports = router;
