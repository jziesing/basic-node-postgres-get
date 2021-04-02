let express = require('express'),
    ApiRoutes = express.Router();

const { Client } = require('pg');


ApiRoutes.get("/things/", function (req, res) {

    client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
          }
    });

    currclient.connect();

    currclient.query('SELECT Id, Name FROM Salesforce.Thing__c;', (err, resp) => {
        if (err){
            res.send('error');
        }
        currclient.end();
        res.send(resp.rows);
    });

});



module.exports = ApiRoutes;
