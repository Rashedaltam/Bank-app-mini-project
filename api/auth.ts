/// to handle login and registration

import instance from ".";
import { storeToken } from "./storage";
import axios from "axios";

///// responce data interface
interface loginResponce {
  token: string;
  user?: object;
}
// / login function that will be activated once user click the login button "onpress" (it will send the request to BE)
const loginFunction = async (username: string, password: string) => {
  try {
    const { data } = await instance.post<loginResponce>(
      "/mini-project/api/auth/login",
      {
        username,
        password,
      }
    );

    //////  the comand that send the token data to storage and encrypt it
    if (data.token) {
      await storeToken(data.token);
    }
    data.token;
    console.log("capture token from login:", data);
    return data;
  } catch (error) {
    /////// to capture the error coming from the "try" above.
    console.log("loging Function Error", error);
  }
};

///////////////////// register Function

const registerFunction = async (
  username: string,
  image: string,
  password: string
) => {
  try {
    const { data } = await instance.post<loginResponce>(
      "/mini-project/api/auth/register",
      {
        username,
        image,
        password,
      }
    );

    //////  the comand that send the token data to storage and encrypt it
    if (data.token) {
      await storeToken(data.token);
    }
    data.token;
    console.log("capture token from Register:", data);
    return data;
  } catch (error) {
    /////// to capture the error coming from the "try" above.
    console.log("Register Function Error", error);
  }
};


export { loginFunction, registerFunction };
