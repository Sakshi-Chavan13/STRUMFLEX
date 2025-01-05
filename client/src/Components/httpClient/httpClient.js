import axios from "axios";

const axiosRequest = axios.create({
  baseURL: "http://localhost:3000",
  timer: 10000,
  withCredentials: true,
});

axiosRequest.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";
    config.Authorization = localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const httpClient = async (type, urls, payload) => {
  const url = import.meta.env.VITE_BASE_URL + urls;
  
  const { data } = await axiosRequest({
    method: type,
    url,
    data: payload,
    headers: { "Content-Type": "application/json" },
  });
  return { data };
};

axiosRequest.interceptors.response.use(
  (response) => ({
    ...response,
    data: response.data,
    status: response.status,
  }),
  (error) => {
    return Promise.reject(error);
  }
);
