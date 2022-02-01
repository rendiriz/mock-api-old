import express from 'express';

import { create } from '@controllers/simple/create';
import { read } from '@controllers/simple/read';

const router = express.Router();

router.post('/simple', create);
router.get('/simple/:uniq', read);

export default router;
