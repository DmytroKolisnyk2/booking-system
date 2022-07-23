import axios from "axios";

axios.defaults.baseURL = "https://goiteens-rest-api.herokuapp.com";

const getManagers = () => {
  return axios
    .get("/managers")
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const postManager = (credentials) => {
  return axios
    .post("/register_manager", credentials)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const putManager = (credentials, managerId) => {
  return axios
    .put(`/update_manager/${managerId}`, credentials)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const deleteManager = (managerId) => {
  return axios
    .delete(`/remove_manager/${managerId}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export { getManagers, postManager, deleteManager, putManager };