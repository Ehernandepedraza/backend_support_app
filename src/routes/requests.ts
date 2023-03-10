import { Router } from "express";
import {
  createClientRequest,
  deleteClientRequest,
  getClientRequests,
  updateClientRequest,
} from "../controllers/requests";

/* import { checkJwt } from "../middleware/session"; */

const router = Router();

router.get("/", /* checkJwt, */ getClientRequests);
router.post("/", /* checkJwt, */ createClientRequest);
router.put("/:id", /* checkJwt, */ updateClientRequest);
router.delete("/:id", /* checkJwt, */ deleteClientRequest);

export { router };
