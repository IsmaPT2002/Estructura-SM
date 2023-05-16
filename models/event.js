const mongoose = require('mongoose');

export const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 10,
    maxlength: 500
  },
  sport: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  location: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  date: {
    type: Date,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Event = mongoose.model('Event', eventSchema);

eventSchema.statics.find = function() {
    return this.find();
  }

eventSchema.statics.findById = function(id) {
    return this.findById(id);
  }

  
  
  
