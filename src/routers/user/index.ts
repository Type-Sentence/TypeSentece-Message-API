import { Request, Response, Router } from "express";
import { isAuthenticated } from "../../helpers/middlewares";
const router = Router()

router.get("/", isAuthenticated, (req: Request, res: Response) => {
    res.status(200).send(req.user)
})

export default router