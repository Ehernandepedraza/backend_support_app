import { model, Schema } from "mongoose";
import { Clients } from "../interfaces/client.interface";

interface Request {
  id: number;
  title: string;
  comment: string;
  startDate: Date;
}

const ClientSchema = new Schema<Clients>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  access: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  requests: { type: [Object] as unknown as Request[], required: true }, // Use Request[] as the type for requests field
});

const ClientModel = model("clients", ClientSchema);
export default ClientModel;
