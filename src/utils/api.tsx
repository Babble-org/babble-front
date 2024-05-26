import axios from "axios";
import { LoginInfo, RegisterInfo } from ".";
const BASE_URL = "https://babble-staging.gigalixirapp.com/api";

const check_username = async (username: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/users/check_username/${username}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getBabb = async () => {
  try {
    const response = await axios.get(`http://localhost:8081/babb`, {});
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const Register = async (registerInfo: RegisterInfo | null) => {
  try {
    console.log(registerInfo);
    const response = await axios.post(`${BASE_URL}/users`, registerInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const Login = async (loginInfo: LoginInfo | null) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, loginInfo, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const api = { check_username, getBabb, Register, Login };
export default api;
