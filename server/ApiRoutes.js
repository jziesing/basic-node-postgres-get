let express = require('express'),
    ApiRoutes = express.Router();

const { Client } = require('pg');


ApiRoutes.get("/things/", function (req, res) {

    let currclient = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
          }
    });

    console.log('before connect');

    currclient.connect();

    console.log('is connectED');

    currclient.query('SELECT * FROM public.thing;', (err, resp) => {
        if (err){
            console.log('is ERROR');
            console.log(err);
            res.send('error');
        }
        console.log(resp);
        currclient.end();
        res.send(resp.rows);
    });

});



module.exports = ApiRoutes;
