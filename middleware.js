var middleware = {

  requireAuthentication: function(req, res, next) {
      console.log("private route hit ouch...");
      next();
  },
  logger: function(req, res, next) {
    var date = new Date().toString();
    console.log('Request: ' + date + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

module.exports = middleware;
