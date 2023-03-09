import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.hande";

const registerNewUser = async ({
  email,
  password,
  company,
  city,
  name,
  lastname,
  phone,
  rol,
}: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) {
    return "Alredy_user";
  }
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    company: company,
    city: city,
    name: name,
    lastname: lastname,
    phone: phone,
    rol: "client",
  });
  return registerNewUser;
};
const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });

  if (!checkIs) {
    return "Not_Found_user";
  }

  const passwordHash = checkIs.password;
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) {
    return "Incorrect_Password";
  }

  const token = generateToken(checkIs.email);
  const data = { token, user: checkIs };
  return data;
};
export { loginUser, registerNewUser };
