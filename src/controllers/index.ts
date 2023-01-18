import { validationResult } from 'express-validator';
import {
  getAllLyricsService,
  createLyricsService,
  getLyricsByIdService,
  updateLyricsService,
  deleteLyricsService,
} from '../services/index';

const createLyrics = async (req: any, res: any) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const lyrics = await createLyricsService(req.body);
    res.json({ data: lyrics, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllLyrics = async (req: any, res: any) => {
  try {
    const lyrics = await getAllLyricsService();
    res.json({ data: lyrics, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getLyricsById = async (req: any, res: any) => {
  try {
    const lyrics = await getLyricsByIdService(req.params.id);
    console.log(lyrics.body);
    res.json({ data: lyrics, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateLyrics = async (req: any, res: any) => {
  try {
    const lyrics = await updateLyricsService(req.params.id, req.body);
    res.json({ data: lyrics, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteLyrics = async (req: any, res: any) => {
  try {
    const lyrics = await deleteLyricsService(req.params.id);
    res.json({ data: lyrics, status: 'success' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { createLyrics, getAllLyrics, deleteLyrics, updateLyrics, getLyricsById };
