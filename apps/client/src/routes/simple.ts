import express from 'express';

import { create } from '@controllers/simple/create';

const router = express.Router();

router.post('/simple', create);

export default router;
