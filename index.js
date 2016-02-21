
// ---------------------
// Required modules
// =====================

var express     = require('express'),
    bodyParser  = require('body-parser'),

// ---------------------
// Instantiate tutApp
// =====================
    gvh2016     = express(),

// ---------------------
// Set port
// =====================
    port        = process.env.PORT || 5000,


// ---------------------
// Required scripts
// =====================
    config      = require('./config/apiauth.config.js'),
    gvhRoutes   = require('./routes/main.routes.js');


// ---------------------
// Use...
// =====================
gvh2016.use(bodyParser.urlencoded({ extended:true }));
gvh2016.use(bodyParser.json({ 'limit': '100mb' }));

// ---------------------
// Load routes
// =====================
gvhRoutes(gvh2016);

// ---------------------
// Start Server
// =====================
gvh2016.listen(port);

