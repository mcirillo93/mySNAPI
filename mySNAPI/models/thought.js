const { Schema, model } = require('mongoose');
const Reaction = require('./reaction');
const formatDate = require('../utils/format.js')

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String, 
            required: true, 
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
          type: Date,
          default: Date.now,
          get: (date) => formatDate(date)
        }, 
        username: { 
            type: String, 
            required: true
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

  // Create a virtual property `reactionCount` that gets the # of reactions
  thoughtSchema
  .virtual('reactionCount')
// is this correct?? 
  .get(function () {
    return this.reactions.length;
  })

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

console.log(formatDate("2022-05-24T01:31:56.774Z"))
module.exports = Thought;