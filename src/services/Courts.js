import axios from "axios";
const baseUrl = "http://localhost:3001/api/courts";

const getCourts = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

export default {
  getCourts,
};
