const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
  email: {
      type: String,
      required: true,
      minlength: 1,
      trim: true,
      unique: true,
      validate: {
          validator: validator.isEmail,
          message: "{VALUE} is not a valid email"
      }

    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

UserSchema.methods.toJSON = function() {
    return _.pick(this.toObject(), ["_id", "email"]);
}

UserSchema.methods.generateAuthToken = function() {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'ainmlila').toString();

    user.tokens.push({access, token});
    return user.save().then(() => token);
}

UserSchema.statics.findByToken = function(token) {

}

var User = mongoose.model("User", UserSchema);

module.exports = {User};
