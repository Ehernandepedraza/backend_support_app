import { Request, response, Response } from "express";
import {
  createRequestForClient,
  deleteRequestFromClient,
  getRequestsForClient,
  updateRequestsForClient,
} from "../services/requests";

import { handleHttp } from "../utils/error.handle";

const getClientRequests = async (req: Request, res: Response) => {
  try {
    const response = await getRequestsForClient();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CLIENTS");
  }
};

const updateClientRequest = async (
  { params, body }: Request,
  res: Response
) => {
  try {
    const { id } = params;
    const response = await updateRequestsForClient(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_CLIENT");
  }
};

const createClientRequest = async ({ body }: Request, res: Response) => {
  try {
    const responseClient = await createRequestForClient(body);
    res.send(responseClient);
  } catch (e) {
    handleHttp(res, "ERROR_POST_CLIENT");
  }
};

const deleteClientRequest = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteRequestFromClient(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_CLIENT");
  }
};

export {
  getClientRequests,
  updateClientRequest,
  createClientRequest,
  deleteClientRequest,
};
