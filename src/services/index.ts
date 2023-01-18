import mongoose from 'mongoose';

import { lyricSchema } from '../models/index';

const LyricModel = mongoose.model('Lyric', lyricSchema);

const getAllLyricsService = async () => {
  return await LyricModel.find();
};

const createLyricsService = async (lyrics: string) => {
  return await LyricModel.create(lyrics);
};

const getLyricsByIdService = async (id: string) => {
  return await LyricModel.findById(id);
};

const updateLyricsService = async (id: string, lyrics: any) => {
  return await LyricModel.findByIdAndUpdate(id, lyrics);
};

const deleteLyricsService = async (id: string) => {
  return await LyricModel.findByIdAndDelete(id);
};

export { getAllLyricsService, createLyricsService, deleteLyricsService, updateLyricsService, getLyricsByIdService };
