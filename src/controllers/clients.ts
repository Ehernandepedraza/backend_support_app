import { Request, response, Response } from "express";
import {
  insertClient,
  getClientsData,
  getClientData,
  updateClientData,
  deleteClientData,
} from "../services/clients";
import { handleHttp } from "../utils/error.handle";
const getClient = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getClientData(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CLIENT");
  }
};
const getClients = async (req: Request, res: Response) => {
  try {
    const response = await getClientsData();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_CLIENTS");
  }
};
const updateClient = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateClientData(id, body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_UPDATE_CLIENT");
  }
};
const postClient = async ({ body }: Request, res: Response) => {
  try {
    const responseClient = await insertClient(body);
    res.send(responseClient);
  } catch (e) {
    handleHttp(res, "ERROR_POST_CLIENT");
  }
};
const deleteClient = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await deleteClientData(id);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_DELETE_CLIENT");
  }
};

export { getClient, getClients, updateClient, postClient, deleteClient };
