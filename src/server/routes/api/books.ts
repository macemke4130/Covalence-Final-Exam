import * as express from 'express';
import * as passport from 'passport';
import db from '../../db';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const allBooks = await db.books.all();
        res.json(allBooks);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Nope.", e });
    }
});

export default router;