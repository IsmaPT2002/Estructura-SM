const mongoose = require('mongoose');

export const sportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Sport = mongoose.model('Sport', sportSchema);

sportSchema.statics.findByName = function(name) {
    return this.findOne({ name });
  };

sportSchema.statics.findByDescription = function(keyword) {
    return this.find({ description: { $regex: keyword, $options: 'i' } });
  };

sportSchema.statics.findAllSports = function() {
    return this.find();
  };
  
sportSchema.statics.deleteByName = function(name) {
    return this.deleteOne({ name });
  };

  


  