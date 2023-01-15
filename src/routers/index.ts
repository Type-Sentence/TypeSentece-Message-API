import { Router } from "express";
const router = Router();

import testRouter from "./test";
import authRouter from "./auth";

router.use("/test", testRouter);
router.use("/auth", authRouter);

export default router;