import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: false,
    },

    isFavourite: {
      type: Boolean,
      default: false,
      required: false,
    },

    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
    },
  },

  { timestamps: true, versionKey: false },
);

export const Contact = mongoose.model('contacts', contactSchema);
