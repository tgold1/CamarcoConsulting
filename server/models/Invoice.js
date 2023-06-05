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
    required: true
  },
  stripePaymentIntentId: {
    type: String
  },
  employee: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
});

const Invoice = model('Invoice', invoiceSchema);

module.exports = Invoice;
