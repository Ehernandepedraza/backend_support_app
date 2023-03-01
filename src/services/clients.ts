import ClientModel from "../models/clients";
import { Clients } from "../interfaces/client.interface";
const insertClient = async (client: Clients) => {
  const responseInsert = await ClientModel.create(client);
  return responseInsert;
};
const getClientsData = async () => {
  const responseClient = await ClientModel.find({});
  return responseClient;
};
const getClientData = async (id: string) => {
  const responseClient = await ClientModel.findOne({ _id: id });
  return responseClient;
};
const updateClientData = async (id: string, data: Clients) => {
  const responseClient = await ClientModel.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return responseClient;
};
const deleteClientData = async (id: string) => {
  const responseClient = await ClientModel.remove({ _id: id });
  return responseClient;
};
export {
  insertClient,
  getClientsData,
  getClientData,
  updateClientData,
  deleteClientData,
};
