import { RequestMessage } from "../interfaces/requestMessage.interface";
import RequestMessagesModel from "../models/requestMessages";

const createMessageForRequest = async (messages: RequestMessage) => {
  const responseInsert = await RequestMessagesModel.create(messages);
  console.log(responseInsert, "responseInsert");
  return responseInsert;
};
const getMessageFromRequest = async () => {
  const response = await RequestMessagesModel.find({});
  return response;
};

export { getMessageFromRequest, createMessageForRequest };
