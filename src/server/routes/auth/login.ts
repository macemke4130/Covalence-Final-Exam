import * as express from 'express';
import * as passport from 'passport';
import { signToken } from '../../utils/tokens';
import { ReqUser } from '../../utils/types';

const router = express.Router();

router.post('/', passport.authenticate('local'), async (req: any, res) => {
    const loginAttempt = req.body;
    try {
        const token = signToken({
            userid: req.user.id,
            email: req.user.email,
            username: req.user.username
        });

        res.json(token);
    } catch (e) {
        console.log(e);
        res.status(500).json( {message: "Failed Login", e})
    }
})

export default router;