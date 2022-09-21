import axios from "../axios-config";
import { error } from "@pnotify/core";

const getRoles = () => {
  return axios
    .get("/roles")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const getUsers = () => {
  return axios
    .get("/users")
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const getUserById = (id) => {
  return axios
    .get(`/user/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      error(`${err.response.data.message}`);
      throw err;
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
const getUserByName = (name) => {
  return axios
    .get(`/user/${name}`)
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

export {
  getRoles,
  getUsersByRole,
  postUser,
  deleteUser,
  putUser,
  getUserById,
  getUserByName,
  getUsers,
};
