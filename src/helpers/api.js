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
const getRoles = () => {
  return axios
    .get("/roles")
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const getUsersByRole = (roleName) => {
  return axios
    .get(`/users/${roleName}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const getGroups = () => {
  return axios
    .get("/groups")
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const postManager = (credentials) => {
  return axios
    .post("/register_user", credentials)
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
    .post("/register_group", credentials)
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
    .put(`/update_group/${id}`, credentials)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const putUser = (credentials, id) => {
  return axios
    .put(`/update_user/${id}`, credentials)
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
const deleteUser = (id) => {
  return axios
    .delete(`/remove_user/${id}`)
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

const getCurrentWeek = (managerId) => {
  return axios
    .get(`/current_week/${managerId}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const getWeek = (managerId, weekId) => {
  return axios
    .get(`/get_week/${managerId}/${weekId}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const updateSlot = (managerId, weekId, dayIndex, slotHour, colorId) => {
  return axios
    .post(`/update_slot/${managerId}/${weekId}/${dayIndex}/${slotHour}/${colorId}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const saveTable = (managerId, tableCredential) => {
  return axios
    .post(`/save_template/${managerId}`, tableCredential)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const getTable = (managerId) => {
  return axios
    .get(`/get_template/${managerId}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const getCurrentWorkWeek = (managerId) => {
  return axios
    .get(`/current_work_week/${managerId}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export {
  getCurrentWorkWeek,
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
  getGroupById,
  getGroups,
  getCurrentWeek,
  saveTable,
  getTable,
  getWeek,
  updateSlot,
  getRoles,
  getUsersByRole,
  putUser,
  deleteUser,
};
