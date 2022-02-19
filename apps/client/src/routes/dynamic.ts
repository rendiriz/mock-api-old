import express from 'express';

import { read } from '@controllers/dynamic';

const router = express.Router();

router.get('/:code/:endpoint', read);
router.post('/:code/:endpoint', read);
router.put('/:code/:endpoint', read);
router.patch('/:code/:endpoint', read);
router.delete('/:code/:endpoint', read);

export default router;
