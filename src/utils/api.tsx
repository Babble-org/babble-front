import axios from "axios";
const BASE_URL = "https://babble-staging.gigalixirapp.com/api";

const check_username = async (username: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/users/check_username/${username}`,
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const userApi = { check_username };
export default userApi;
