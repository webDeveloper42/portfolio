import { Schema, model } from 'mongoose';

const profileSchema = new Schema(
  {
    lang:         { type: String, required: true, enum: ['en', 'es', 'ja'], unique: true },
    name:         { type: String, required: true, trim: true },
    title:        { type: String, required: true, trim: true },
    email:        { type: String, required: true, trim: true, lowercase: true },
    jobInterests: { type: String, required: true, trim: true },
    tagline:      { type: String, default: '', trim: true },
  },
  { timestamps: true }
);

export default model('Profile', profileSchema);
