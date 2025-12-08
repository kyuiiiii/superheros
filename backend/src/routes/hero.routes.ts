
import express from 'express';

import { addHero, getHero } from '../controllers/hero.controller';

const router = express.Router();

router.get('/', getHero);

router.get('/', addHero);


export default router;