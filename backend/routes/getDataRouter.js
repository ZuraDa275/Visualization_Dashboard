import { Router } from "express";
import { getDataController } from "../controllers/getDataController.js";

const router = Router();

router.get("/get-data", getDataController);

export default router;
