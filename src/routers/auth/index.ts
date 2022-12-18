import { Request, Response, Router } from "express";
import passport from "passport";
const router = Router();

router.post("/login", passport.authenticate("local"), (req: Request, res: Response) => {
    console.log("Loggd in");
    res.status(200).send({ msg: "Logged in" })
})

router.post("/register", (req: Request, res: Response) => {
    const { email } = req.body;

    if (!email) return res.status(400).send({ msg: "No email has been entered" })

    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

    if (!emailRegex.test(email)) return res.status(400).send({ msg: "Insert a valid RFC2822 email" })
})

export default router;