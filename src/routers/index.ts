import { Router } from "express";
const router = Router();

import testRouter from "./test";

router.use("/test", testRouter);

export default router;