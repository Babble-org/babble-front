import axios from "axios";
import { LoginInfo, RegisterInfo } from ".";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

const getPresignedURL = async (file_type: string) => {
  const token = await AsyncStorage.getItem("access_token");
  try {
    const response = await axios.post(
      `${BASE_URL}/presigned_url`,
      {
        category: "babb_images",
        file_type: file_type,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const uploadFile = async (url: string, file: string, type: string) => {
  try {
    const response = await axios.put(url, file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const api = {
  check_username,
  getBabb,
  Register,
  Login,
  getPresignedURL,
  uploadFile,
};
export default api;
