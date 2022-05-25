const {Schema, model} = require('mongoose');
const Reaction = require('./Reaction');

// Creathing thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [Reaction],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// Creating virtual property to get number of reactions
thoughtSchema
.virtual('reactionCount')
.get(function(){
    return this.reactions.length;
});

// Initializing thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;