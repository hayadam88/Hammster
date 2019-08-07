const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const pool = require('./modules/pool');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes------------------------------------------------------- */
app.use('/api/user', userRouter);

// GET all approved bars route
app.get('/bars', (req, res) => {
  pool.query(`SELECT * FROM "bars" WHERE "approved" = true;`)
    .then((result) => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error making bars get request', error);
      res.sendStatus(500);
    });
});

//GET details about a specific bar
app.get('/bars/details', (req, res) => {
  console.log(req.query.id);

  pool.query(`SELECT * FROM "bars" WHERE "id"=$1;`, [req.query.id])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch(error => {
      console.log('Error making bars get request', error);
      res.sendStatus(500);
    });
});

//GET messages about a specific bar
app.get('/messages/:bar_id', (req, res) => {
  pool.query(`SELECT * FROM "messages" WHERE "bar_id"=$1;`, [req.params.bar_id])
    .then((result) => {
      res.send(result.rows[0]);
    })
    .catch(error => {
      console.log('Error making bar specific messages GET request', error);
      res.sendStatus(500);
    });
});


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
