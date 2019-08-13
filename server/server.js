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

// GET all approved bars for Bars page
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

// GET all unapproved bars for Admin page
app.get('/bars/unapproved', (req, res) => {
  pool.query(`SELECT * FROM "bars" WHERE "approved" = false;`)
    .then((result) => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error making unapproved bars get request', error);
      res.sendStatus(500);
    });
});

//GET details about a specific bar for SpecificBar page
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

//GET messages about a specific bar for MessageFeed page
app.get('/messages/:bar_id', (req, res) => {
  pool.query(`SELECT "user"."username" as "users_name", "messages"."id" as "message_id", "messages"."message", "messages"."date", "bars"."name" FROM "user" JOIN "messages" ON "user"."id" = "messages"."user_id" JOIN "bars" ON "bars"."id" = "messages"."bar_id" WHERE "bar_id"=$1 ORDER BY "date" DESC;`, [req.params.bar_id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error making bar specific messages GET request', error);
      res.sendStatus(500);
    });
});

//GET all messages for the Admin page
app.get('/messages', (req, res) => {
  pool.query(`SELECT "user"."username" as "users_name", "messages"."id" as "message_id", "messages"."message", "messages"."date", "bars"."name" FROM "user" JOIN "messages" ON "user"."id" = "messages"."user_id" JOIN "bars" ON "bars"."id" = "messages"."bar_id" ORDER BY "users_name";`)
    .then((result) => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error getting all messages for Admin GET request', error);
      res.sendStatus(500);
    });
});


//POST messages from Message Feed
app.post('/messages', (req, res) => {
  const sqlText = `INSERT INTO "messages" ("bar_id", "user_id", "date", "message")
  VALUES ($1, $2, $3, $4);`
  
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  const values = [req.body.bar_id, req.body.user_id, today, req.body.message];
  console.log(req.body.message)
  pool.query(sqlText, values)
  .then((results) => {
    res.sendStatus(201);
  }).catch((error) => {
    console.log('Error with post', error);
    res.sendStatus(500);
  });
});

//POST a new bar
app.post('/bars', (req, res) => {
  const sqlText = `INSERT INTO "bars" ("name", "address", "notes", "phone", "image_url", "approved")
  VALUES ($1, $2, $3, $4, $5, $6);`
  const values = [req.body.bar_name, req.body.street_address, req.body.notes, req.body.phone, 'https://i.ibb.co/KN454FY/hammsontap.jpg', req.body.approved];
  console.log(req.body.message)
  pool.query(sqlText, values)
  .then((results) => {
    res.sendStatus(201);
  }).catch((error) => {
    console.log('Error with post', error);
    res.sendStatus(500);
  });
});

//DELETE a suggested bar on Admin page
app.delete('/bars/:bar_id', (req, res) => {
  pool.query('DELETE FROM "bars" WHERE "id"=$1;', [req.params.bar_id])
  .then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('Error DELETING bar', error);
    res.sendStatus(500);
  })
});

//DELETE a Message Feed message on Admin page
app.delete('/messages/:message_id', (req, res) => {
  pool.query('DELETE FROM "messages" WHERE "id"=$1;', [req.params.message_id])
    .then((result) => {
      res.sendStatus(200);
    }).catch((error) => {
      console.log('Error DELETING message', error);
      res.sendStatus(500);
    })
});

//PUT: approve a bar on Admin page
app.put('/bars/:approve', (req, res) => {
  console.log('Updating bars')
  const sqlText = `UPDATE "bars" SET "approved"=$1 WHERE "id"=$2;`;
  values = [true, req.params.approve]
  pool.query(sqlText, values)
    .then((response) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      res.sendStatus(500);
    })
})

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
