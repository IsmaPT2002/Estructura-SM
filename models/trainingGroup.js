const mongoose = require('mongoose');

export const trainingGroupSchema = new mongoose.Schema({
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
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  owner: {
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

const TrainingGroup = mongoose.model('TrainingGroup', trainingGroupSchema);

trainingGroupSchema.statics.findByName = function(name, callback) {
    return this.findOne({ name }, callback);
  };
  
trainingGroupSchema.statics.findBySport = function(sport) {
    return this.find({ sport });
  };

trainingGroupSchema.statics.findByLocation = function(location) {
    return this.find({ location });
  };
  
trainingGroupSchema.statics.findByCreator = function(creatorId) {
    return this.find({ creator: creatorId });
  };
  
trainingGroupSchema.statics.findActiveGroups = function() {
    return this.find({ endDate: { $gte: new Date() } });
  };
  
