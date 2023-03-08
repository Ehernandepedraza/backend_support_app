export interface Requests {
  title: string;
  comment: string;
  startdate: string;
}
export interface Clients {
  email: string;
  name: string;
  phone: string;
  access: string;
  address: string;
  city: string;
  requests: Array<Requests>;
}
