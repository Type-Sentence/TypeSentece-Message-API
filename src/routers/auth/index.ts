import { Request, Response, Router, raw } from "express";
import passport from "passport";
import { hashPassowrd } from "../../helpers/hashingController";
import Users from "../../database/schemas/usersSchema";
import { dateToSnowFlakes, generateSnowFlakes, snowFlakesToDate } from "../../helpers/auth/generateUserId";
import { generateDiscriminator } from "../../helpers/auth/generateDiscriminator";
import { User } from "../../interfaces/userInterafaces";

const router = Router();

router.post("/login", passport.authenticate("local"), (req: Request, res: Response) => {
    console.log("Loggd in");
    res.status(200).send({ msg: "Logged in" })
})

router.post("/register", async (req: Request, res: Response) => {
    const { email, username } = req.body;

    if (!email || !req.body.password || !username) return res.status(400).send({ msg: "Insert the nubmer of argument request (email, password, username)" })

    try {
        const userDb = await Users.findOne({ email });

        if (userDb) {
            return res.status(403).send({ msg: "email already in use" })
        } else {
            const password = hashPassowrd(req.body.password);

            const avatar = "https://static.crunchyroll.com/assets/avatar/170x170/100008-spy-x-family-anya-1.p";
            const banner = "https://static.crunchyroll.com/assets/wallpaper/720x180/0416-tokyo-revengers-kv.png"

            const id = generateSnowFlakes();
            const discriminator = await generateDiscriminator(req, res, username);
            const tag = username + discriminator;

            const newUser: User = await Users.create({ id, email, password, username, avatar, banner, discriminator, tag })

            return res.status(201).send(newUser);
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
})

export default router;