import * as express from 'express';

const router = express.Router();

router.use('/api/hello', (req, res) => {
    res.json("World");
});

export default router;