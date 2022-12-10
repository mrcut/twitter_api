import axios from "axios";

import { authHeader, urlTweetSearch, urlUser } from "./constantes";

export const getTweetByKeyword = (string: string) => {
  const config = { headers: authHeader() };
  return axios.get(urlTweetSearch + string, config);
};

export const getUserById = (id: number) => {
  const config = { headers: authHeader() };
  return axios.get(urlUser + id, config);
};
