require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_middleware/error-handler');
const paypal = require("paypal-rest-sdk");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
/* app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
}); */

paypal.configure({
    mode: "sandbox", //sandbox or live
    client_id:
      "AQ5TunZNqRBLe-xixbE3nr3qnhx_wPuBhiR_buXeIot7yun7l2EFSdVZYKJ7hL__k8pEePgTzZEUR80P",
    client_secret:
      "EEjn62OMEhiHdCiY2mhFt9NMLr-3pyMngOQwYyZuZnftBDQ6wdMoDMGYTFY_6BSxQZpG3PZBBL5Pv9Gj",
  });

// api routes
app.use('/api/users', require('./users/users.controller'));
app.use('/api/history', require('./history/history.controller'));
app.use('/api/pay', require('./pay/pay.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));
