const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  company :{
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  customer: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
});

const Project = model('Project', projectSchema);

module.exports = Project;
