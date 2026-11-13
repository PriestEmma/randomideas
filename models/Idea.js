const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add a text field'],
    },
    tag: {
      type: String,
    },
    username: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    id: false,
    // ADDED: Include virtual properties in JSON and objects
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
);

IdeaSchema.virtual('formattedDate').get(function () {
  return this.date.toLocaleDateString('en-CA', {
    timeZone: 'Africa/Lagos',
  });
});

IdeaSchema.virtual('formattedTime').get(function () {
  return this.date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Africa/Lagos',
  });
});

module.exports = mongoose.model('Idea', IdeaSchema);
