const mongoose = require('mongoose');

export const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    maxlength: 1024
  },
  sports: [{
    type: String,
    trim: true,
    minlength: 3,
    maxlength: 50
  }],
  teams: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
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

const User = mongoose.model('User', userSchema);

userSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
  };

userSchema.statics.findByEmail = function(email) {
    return this.findOne({ email });
  };

userSchema.statics.findBySport = function(sport) {
    return this.find({ sports: sport });
  };
  
userSchema.statics.findActiveUsers = function() {
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
    return this.find({ lastLogin: { $gte: thirtyMinutesAgo } });
  };
  
