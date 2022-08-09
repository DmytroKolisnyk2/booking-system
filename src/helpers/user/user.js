import axios from "axios";

axios.defaults.baseURL = "https://goiteens-rest-api.herokuapp.com";
axios.defaults.headers.common["Accept"] = "application/json";

const getRoles = () => {
  return axios
    .get("/roles")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const getUsersByRole = (roleName) => {
  return axios
    .get(`/users/${roleName}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const postUser = (credentials) => {
  return axios
    .post("/register_manager", credentials)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const putUser = (credentials, id) => {
  return axios
    .put(`/update_user/${id}`, credentials)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const deleteUser = (id) => {
  return axios
    .delete(`/remove_user/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export { getRoles, getUsersByRole, postUser, deleteUser, putUser };