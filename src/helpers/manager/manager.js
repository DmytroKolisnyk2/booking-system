import axios from "axios";

axios.defaults.baseURL = "https://goiteens-rest-api.herokuapp.com";
axios.defaults.headers.common["Accept"] = "application/json";

const getManagers = () => {
  return axios
    .get("/managers")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const getManagerByName = (name) => {
  return axios
    .get(`/manager/${name}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const postManager = (credentials) => {
  return axios
    .post("/register_user", credentials)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const putManager = (credentials, managerId) => {
  return axios
    .put(`/update_manager/${managerId}`, credentials)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const deleteManager = (managerId) => {
  return axios
    .delete(`/remove_manager/${managerId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export {
  getManagers,
  getManagerByName,
  postManager,
  putManager,
  deleteManager,
};