let express = require('express'),
    ApiRoutes = express.Router();

const { Client } = require('pg');


ApiRoutes.get("/things/", function (req, res) {

    let currclient = new Client({
        connectionString: process.env.DATABASE_URL,
        statement_timeout:: 25000,
        ssl: {
            rejectUnauthorized: false
          }
    });
    
    console.log('before connect');
    
    currclient.connect();
    
    console.log('is connectED');

    currclient.query('SELECT * FROM salesforce.thing__c;', (err, resp) => {
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
