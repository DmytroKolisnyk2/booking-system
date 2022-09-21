import axios from "../axios-config";

const getGroups = () => {
  return axios
    .get("/groups")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const postGroup = (credentials) => {
  return axios
    .post("/register_group", credentials)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const putGroup = (credentials, id) => {
  return axios
    .put(`/update_group/${id}`, credentials)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const deleteGroup = (id) => {
  return axios
    .delete(`/remove_group/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const getGroupById = (id) => {
  return axios
    .delete(`/remove_group/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export { getGroups, postGroup, putGroup, deleteGroup, getGroupById };
