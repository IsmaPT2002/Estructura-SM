const mongoose = require('mongoose');

export const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  sport: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Team = mongoose.model('Team', teamSchema);

teamSchema.statics.findBySport = function(sport) {
    return this.find({ sport });
  };

teamSchema.statics.findByCaptain = function(captainId) {
    return this.find({ captain: captainId });
  };
  
teamSchema.statics.findByName = function(name) {
    return this.findOne({ name });
  };
  
teamSchema.statics.findTeamWithMembers = function(teamId) {
    return this.findById(teamId).populate('members');
  };
  
