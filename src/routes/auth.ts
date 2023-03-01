import { Router, Request, Response } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth";
import {} from "../controllers/clients";

const router = Router();

router.post("/login", loginCtrl);
router.post("/register", registerCtrl);

export { router };
