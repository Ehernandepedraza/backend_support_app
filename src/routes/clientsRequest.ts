import { Router } from "express";
import {
  createClientRequest,
  deleteClientRequest,
} from "../controllers/clientsRequest";

/* import { checkJwt } from "../middleware/session"; */

const router = Router();

router.delete("/:clientId/:requestId", /* checkJwt, */ deleteClientRequest);
router.post("/:clientId/", /* checkJwt, */ createClientRequest);

export { router };
