var passport = require('passport'),
  bcrypt = require('bcrypt');

module.exports = {

    _config: {
        actions: false,
        shortcuts: false,
        rest: false
    },

    login: function(req, res) {
      sails.hooks.email.send(
        "testEmail",
        {
          recipientName: "Joe",
          senderName: "Sue"
        },
        {
          to: "joe@example.com",
          subject: "Hi there"
        },
        function(err) {console.log(err || "It worked!");}
      );

      var email = req.body.email;
      var password = req.body.password;

      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user || user == undefined) {
          res.json({ error: 'Incorrect email.' }, 500);
        }

        bcrypt.compare(password, user.password, function (err, result) {
          if (!result) {
            res.json({error: 'Invalid Password'}, 500);
          } else {
            var returnUser = {
              email: user.email,
              createdAt: user.createdAt,
              id: user.id
            };

            Token.create({ email : user.email}, function(err, result) {
              res.json(result);
            });
          }
        });
      });
    },

    getCurrentUser: function(req, res) {
        var token = req.body.token;

        Token.findOne({token: token}, function(err, token) {
            if (err) {
                return done(err);
            }
            else if (!token || token == undefined) {
                res.json({ error: 'Incorrect token.' }, 500);
            }
            else {
                User.findOne({email: token.email}, function(err, user) {
                    res.json(user);
                });
            }
        });
    }
};
