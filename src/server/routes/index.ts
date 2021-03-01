import * as express from 'express';
// import apiRouter from './api';
import authRouter from './auth';

const router = express.Router();

router.use("/auth", authRouter);
// router.use("/api", apiRouter);

router.use('/api/hello', (req, res) => {
    res.json("World");
});

export default router;