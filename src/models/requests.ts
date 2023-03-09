import { model, Schema } from "mongoose";
interface Request {
  _id: any;
  title: string;
  comment: string;
  startDate: string;
  client: string;
  agent: string;
}
const RequestSchema = new Schema<Request>({
  client: {
    type: String,
    required: true,
  },
  agent: { type: String, required: true },
  title: { type: String, required: true },
  comment: { type: String, required: true },
  startDate: { type: String, required: true },
});

const RequestModel = model("requests", RequestSchema);
export default RequestModel;
