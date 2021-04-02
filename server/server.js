/*
 * @Server.js
 */
"use strict";

require ('newrelic');

let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    apiRoutes = require('./ApiRoutes');



//  create server app
let app = express();
let port = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(apiRoutes);


const publicPath = path.join(__dirname, '/../client-build/');
app.use(express.static(publicPath));
app.use('*', express.static(publicPath));


//  run
app.listen(port, () => console.log( "Express server listening on port " + port) );
