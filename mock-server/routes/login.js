const express = require('express');
const router = express.Router();

const login = require('../data/login/login.json');
const loginVerification = (body, backend) =>
  body?.password === backend?.password && body?.username === backend?.username;
router.post('/', (req, res) => {
  try {
    if (loginVerification(req.body, login)) {
      res.json({token: login?.token});
    } else {
      res.status(400).send('invalid params');
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
