const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    taxId: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    shared: {
      type: Number,
      required: false,
    },
    createUser: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    createDate: {
      type: Date,
      default: Date.now,
    },
    updateUser: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    updateDate: {
      type: Date,
      default: Date.now,
    },
    subscribed: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: 'User',
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    versionKey: false,
  },
);

CompanySchema.set('toJSON', {
  getters: true,
  transform: (doc, ret) => {
    ret.companyId = ret._id;
    delete ret._id;
    delete ret.id;
  },
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;
