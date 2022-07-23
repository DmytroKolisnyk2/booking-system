import axios from "axios";

axios.defaults.baseURL = "https://goiteens-rest-api.herokuapp.com";

const getManagers = () => {
  return axios
    .get("/managers")
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const getCourses = () => {
  return axios
    .get("/courses")
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const postManager = (credentials) => {
  return axios
    .post("/register_manager", credentials)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const postCourse = (credentials) => {
  return axios
    .post("/register_course", credentials)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const postGroup = (credentials) => {
  return axios
    .post("/register_course", credentials)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const putManager = (credentials, managerId) => {
  return axios
    .put(`/update_manager/${managerId}`, credentials)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const putCourse = (credentials, id) => {
  return axios
    .put(`/update_course/${id}`, credentials)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const putGroup = (credentials, id) => {
  return axios
    .put(`/update_course/${id}`, credentials)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const deleteManager = (managerId) => {
  return axios
    .delete(`/remove_manager/${managerId}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const deleteCourse = (id) => {
  return axios
    .delete(`/remove_course/${id}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const deleteGroup = (id) => {
  return axios
    .delete(`/remove_group/${id}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const getGroupById = (id) => {
  return axios
    .delete(`/remove_group/${id}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export {
  getManagers,
  getCourses,
  postManager,
  deleteManager,
  putManager,
  postCourse,
  putCourse,
  deleteCourse,
  postGroup,
  deleteGroup,
  putGroup,
  getGroupById
};
