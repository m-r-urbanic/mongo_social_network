const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema(
    {
        thoughtOwner: [
            {
                type: Schema.Types.ObjectId,
                ref: 'users',
            }
        ],
        thought: text,
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
