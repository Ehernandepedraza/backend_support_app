import { Router } from "express";
import {
  createRequestMessage,
  getRequestMessages,
} from "../controllers/requestMessages";

/* import { checkJwt } from "../middleware/session"; */

const router = Router();

router.get("/", /* checkJwt, */ getRequestMessages);
router.post("/", /* checkJwt, */ createRequestMessage);

export { router };
