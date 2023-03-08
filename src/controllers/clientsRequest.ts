import { Request, response, Response } from "express";
import {
  createRequestForClient,
  deleteRequestFromClient,
} from "../services/clientsRequest";

import { handleHttp } from "../utils/error.handle";

const deleteClientRequest = async ({ params }: Request, res: Response) => {
  try {
    const { clientId, requestId } = params;
    const response = await deleteRequestFromClient(clientId, requestId);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_CLIENT");
  }
};

const createClientRequest = async (
  { params, body }: Request,
  res: Response
) => {
  try {
    const { clientId } = params;
    const response = await createRequestForClient(clientId, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_CLIENT");
  }
};

export { deleteClientRequest, createClientRequest };
