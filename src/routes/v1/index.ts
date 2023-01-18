import { Router } from 'express';
import { createLyrics, getAllLyrics } from '../../controllers/index';

const router = Router();

router.route('/').get(getAllLyrics).post(createLyrics);

export default router;
