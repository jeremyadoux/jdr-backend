var bcrypt = require('bcrypt');

module.exports = {
    attributes: {
        firstname: {
            type: 'string',
            required: true
        },
        lastname: {
            type: 'string',
            required: true
        },
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            minLength: 6,
            required: true,
            protected: true
        },
        enable: {
            type: 'boolean',
            defaultsTo: true
        },
        pseudo: {
            type: 'string'
        },
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },
    beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    }
};
