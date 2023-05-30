const { Schema, model } = require('mongoose');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const invoiceSchema = new Schema({
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
  paid: {
    type: Boolean,
    default: false,
  },
  stripePaymentIntentId: {
    type: String,
  },
});

const Invoice = model('Invoice', invoiceSchema);

module.exports = Invoice;

// MAKE SURE TO RUN NPM INSTALL STRIPE