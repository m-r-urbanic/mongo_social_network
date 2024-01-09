const { Schema, model } = require('mongoose');

const friendsSchema = new Schema(
    {
        listOwner: [
            {
                type: Schema.Types.ObjectId,
                ref: 'users',
            }
        ],
        listPerson: [
            {
                type: Schema.Types.ObjectId,
                ref: 'users',
            }
        ]
    },
    {
        toJSON: {
        virtuals: true,
        },
        id: false,
    }
);


const Friends = model('friends', friendsSchema);

module.exports = Friends;
