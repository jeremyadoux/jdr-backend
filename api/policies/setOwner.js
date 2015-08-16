var passport = require('passport');

module.exports = function (req, res, done) {
  passport.authenticate('bearer', {session: false}, function(err, user, info) {
    if (err) return done(err);
    if (user) {
      if(!req.body.owner) {
        req.body.owner = user[0].id;
      } else {
        //TEst si l'utilisateur est un manageur
      }
      return done();
    }

    return res.send(403, {message: "You are not permitted to perform this action."});
  })(req, res);
};
