const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema(
    {
        thoughtOwner: [
            {
                type: Schema.Types.ObjectId,
                ref: 'users',
            }
        ],
        thought: {
            type: String,
            minLength: 1,
            maxLength: 500,
        },
    },
    {
        toJSON: {
        virtuals: true,
        },
        id: false,
    }
);


const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
