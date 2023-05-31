const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
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
  company: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const Project = model('Project', projectSchema);

module.exports = Project;
