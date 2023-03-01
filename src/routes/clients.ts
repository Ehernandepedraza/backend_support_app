import { Router, Request, Response } from "express";
import {
  deleteClient,
  getClient,
  getClients,
  postClient,
  updateClient,
} from "../controllers/clients";
/* import { checkJwt } from "../middleware/session"; */

const router = Router();
router.get("/:id",/*  checkJwt, */ getClient);
router.get("/", /* checkJwt, */ getClients);
router.post("/", /* checkJwt, */ postClient);
router.put("/:id", /* checkJwt, */ updateClient);
router.delete("/:id", /* checkJwt, */ deleteClient);

export { router };
