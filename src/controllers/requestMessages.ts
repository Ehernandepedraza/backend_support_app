import { Request, Response } from "express";
import {
  createMessageForRequest,
  getMessageFromRequest,
} from "../services/requestMessages";

import { handleHttp } from "../utils/error.handle";

const getRequestMessages = async (req: Request, res: Response) => {
  try {
    const response = await getMessageFromRequest();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CLIENTS");
  }
};

const createRequestMessage = async ({ body }: Request, res: Response) => {
  try {
    const responseClient = await createMessageForRequest(body);
    res.send(responseClient);
  } catch (e) {
    handleHttp(res, "ERROR_POST_CLIENT");
  }
};

export { getRequestMessages, createRequestMessage };
