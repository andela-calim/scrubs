// export configurations
module.exports = function(gvh2016) {
  // ---------------------
  // Routes
  // =====================
  var needle      = require('needle');
  
  var baseUrl = 'https://api.infermedica.com';

  options = require('../config/apiauth.config.js');

  var nested = {
    "sex": "male", 
    "age": 29, 
    "evidence": [
      {
        "id": "s_1172", "choice_id": "present"
      }
    ]
    // "Content-Type": "application/json"
  }

  gvh2016.route('/')
  .get(function(req, res) {
    res.send("Welcome to the index. You shouldn't be here")
  });

  gvh2016.route('/conditions')
  .get(function(req, res) {
    needle.get(baseUrl + '/v2/conditions', options, function(err, resp){
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        var keys = Object.keys(resp);
        console.log(resp.body);
        res.status(200).send(resp.body)
      }
    });
  });

  gvh2016.route('/symptoms')
  .get(function(req, res) {
    needle.get(baseUrl + '/v2/symptoms', options, function(err, resp){
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        var keys = Object.keys(resp);
        console.log(resp.body);
        res.status(200).send(resp.body)
      }
    });
  });

  gvh2016.route('/diagnosis')
  .post(function(req, res) { 
    options.json = true;
    needle.post(baseUrl + '/v1/diagnosis', nested, options, function(err, resp){
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        // var keys = Object.keys(resp);
        console.log(resp.body);
        res.status(200).send(resp.body)
      }
    });
  });
}