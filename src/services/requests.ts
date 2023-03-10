import { Request } from "../interfaces/request.interface";
import RequestModel from "../models/requests";

const createRequestForClient = async (client: Request) => {
  const responseInsert = await RequestModel.create(client);
  return responseInsert;
};
const getRequestsForClient = async () => {
  const responseClient = await RequestModel.find({});
  return responseClient;
};

const updateRequestsForClient = async (id: string, data: Request) => {
  const responseClient = await RequestModel.findOneAndUpdate(
    { _id: id },
    data,
    {
      new: true,
    }
  );
  return responseClient;
};

const deleteRequestFromClient = async (id: string) => {
  const responseClient = await RequestModel.remove({ _id: id });
  return responseClient;
};

export {
  deleteRequestFromClient,
  createRequestForClient,
  getRequestsForClient,
  updateRequestsForClient,
};
