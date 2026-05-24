import { Schema, model } from 'mongoose';

const projectSchema = new Schema(
  {
    lang:        { type: String, required: true, enum: ['en', 'es', 'ja'] },
    title:       { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    img:         { type: String, required: true },
    imgAlt:      { type: String, default: '' },
    tags:        [{ type: String, trim: true }],
    link:        { type: String, required: true },
    order:       { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default model('Project', projectSchema);
