const { Schema, model } = require('mongoose');

const usersSchema = new Schema(
  {
    name: {
        type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Users = model('users', usersSchema);

module.exports = Users;
