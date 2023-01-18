import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const lyricSchema = new Schema({
  title: String,
  artist: String,
  genre: String,
  body: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export { lyricSchema };
