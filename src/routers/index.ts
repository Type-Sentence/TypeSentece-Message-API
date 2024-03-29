import { Router } from "express";
const router = Router();

import testRouter from "./test";
import authRouter from "./auth";
import userRouter from "./user";

router.use("/test", testRouter);
router.use("/auth", authRouter);
router.use("/user", userRouter);

export default router;