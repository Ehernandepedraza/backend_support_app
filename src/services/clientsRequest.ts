import { Requests } from "../interfaces/client.interface";
import ClientModel from "../models/clients";

const deleteRequestFromClient = async (clientId: string, requestId: string) => {
  const response = await ClientModel.updateOne(
    { _id: clientId },
    { $pull: { requests: { _id: requestId } } }
  );
  console.log(response);
  return response;
};

const createRequestForClient = async (
  clientId: string,
  newRequestData: any
) => {
  const response = await ClientModel.updateOne(
    { _id: clientId },
    { $push: { requests: newRequestData } }
  );
  
  return response;
};

export { deleteRequestFromClient, createRequestForClient };
