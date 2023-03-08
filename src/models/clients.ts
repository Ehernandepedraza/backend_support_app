import { model, Schema } from "mongoose";
import { Clients } from "../interfaces/client.interface";
import { ObjectId } from "mongodb";
// el request  debe haber una forma de que bonnet responder el request y que el request este abierto 
// en espera o cerrado hacer otra coleccion request message ligar el request y alli ligar los mensajes 
// en el front que aparezca un historico unos cards cuando yo undo los requests.
// cuando se crea un request se debe tambien poder adjuntar imagen
// que automaticamente s genere un duedate de la fecha de abierto del request
interface Request {
  _id: any;
  title: string;
  comment: string;
  startDate: string;
}
const RequestSchema = new Schema<Request>({
  _id: {
    type: Schema.Types.ObjectId,
    default: () => new ObjectId(),
  },
  title: { type: String, required: true },
  comment: { type: String, required: true },
  startDate: { type: String, required: true },
});
const ClientSchema = new Schema<Clients>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  access: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  requests: { type: [RequestSchema] }, // Use Request[] as the type for requests field
});

const ClientModel = model("clients", ClientSchema);
export default ClientModel;
