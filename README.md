A file has been ignored: config/apiauth.config.js

Create this file and add:

// export configurations
module.exports = {
  headers: {
    app_id: "xxxxxxxx",
    app_key: "xxxxxxxxxxxxxxxxxxxxxxxx"
  }
};

* app_id and app_key can be gotten from Infermedica's website