import express from 'express';
import Controller from "../controller/index.js"
import Read from "../controller/readDir.js"
const router = express.Router();

router.post("/create",Controller.writeFile); // for file creating API Request
router.get("/read",Read.readDir); // for file name retrivel API Request

export default router;