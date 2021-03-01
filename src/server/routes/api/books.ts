import * as express from 'express';
import * as passport from 'passport';
import db from '../../db';

const router = express.Router();

router.get('/categories', async (req, res) => {
    try {
        console.log("All Cats");
        const allCats = await db.books.allCats();
        res.json(allCats);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Nope.", e });
    }
});

router.post('/new', passport.authenticate('jwt'), async (req: any, res) => { 
    const newBook = req.body;
    try {
        const r = await db.books.insert(newBook);
        const newBookId = r.insertId;
        res.json({ message: 'new post inserted', newBook, newBookId });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Nope.", e });
    }
});

router.put('/editbook/:id', passport.authenticate('jwt'), async (req, res) => {
    try {
        const editedBook = req.body;
        const id = Number(req.params.id);
        const editBook = await db.books.editBook(id, editedBook);
        res.json(editBook);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Nope.", e });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const singleBook = await db.books.one(id);
        res.json(singleBook);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Nope.", e });
    }
});


router.get('/', async (req, res) => {
    try {
        const allBooks = await db.books.all();
        res.json(allBooks);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Nope.", e });
    }
});


router.delete('/delete/:id', passport.authenticate('jwt'), async (req, res) => {
    try {
        const id = Number(req.params.id);
        const deleteBook = await db.books.destroy(id);
        res.json(deleteBook);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Nope.", e });
    }
});



export default router;