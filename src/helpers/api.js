import axios from "axios";

axios.defaults.baseURL = "https://goiteens-rest-api.herokuapp.com";
axios.defaults.headers.common["Accept"] = "application/json";

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
const getManagerByName = (name) => {
  return axios
    .get(`/manager/${name}`)
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

const postUser = (credentials) => {
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
const postAppointment = (credentials) => {
  return axios
    .post("/register_appointment", credentials)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const createAppointment = (
  link,
  managerId,
  weekId,
  dayIndex,
  time,
  courseId,
  phone,
  age
) => {
  return axios
    .post(
      `/create_appointment/${weekId}/${dayIndex}/${time}/${courseId}/${link}/${phone}/${age}/${managerId}`
    )
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
const getCallerCurrentWeek2 = () => {
  return axios
    .get(`/caller_current_week`)
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
    .post(
      `/update_slot/${managerId}/${weekId}/${dayIndex}/${slotHour}/${colorId}`
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const saveTable = (managerId, tableCredential) => {
  return axios
    .post(`/save_template/${managerId}`, tableCredential)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const getWeekTable = (managerId) => {
  return axios
    .get(`/get_template/${managerId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const getCurrentWorkWeek = (managerId) => {
  return axios
    .get(`/current_work_week/${managerId}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const getWorkWeek = (managerId, weekId) => {
  return axios
    .get(`/get_work_week/${managerId}/${weekId}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const getCurrentConfirmatorData = () => {
  return axios
    .get(`/current_confirmation`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const getConfirmatorWeekData = (weekId, dayId, halfId) => {
  return axios
    .get(`/get_confirmation/${weekId}/${dayId}/${halfId}`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const setConfirmation = (slot_id, status, message) => {
  return axios
    .post(
      message
        ? `/set_confirmation/${slot_id}/${status}/${message}`
        : `/set_confirmation/${slot_id}/${status}`
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const setCancelConfirmation = (slot_id, status, message) => {
  return axios
    .post(
      message
        ? `/set_cancel_confirmation/${slot_id}/${status}/${message}`
        : `/set_cancel_confirmation/${slot_id}/${status}`
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
const postConsultationResult = (slotId, result, groupId, message) => {
  return axios
    .post(
      message
        ? `/consultation_result/${slotId}/${result}/${groupId}/${message}`
        : `/consultation_result/${slotId}/${result}/${groupId}/no-text`
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

const postStartConsultation = (weekId, dayIndex, slotHour, managerId) => {
    return axios
      .post(
        `/start_consultation/${weekId}/${dayIndex}/${slotHour}/${managerId}`
      )
      .then((res) => res.data)
      .catch((error) => console.log(error));
};

export {
  getConfirmatorWeekData,
  setCancelConfirmation,
  setConfirmation,
  getCurrentConfirmatorData,
  getCurrentWorkWeek,
  getWorkWeek,
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
  getWeekTable,
  getWeek,
  updateSlot,
  getRoles,
  getUsersByRole,
  putUser,
  deleteUser,
  postUser,
  createAppointment,
  getManagerByName,
  postAppointment,
  getCallerCurrentWeek2,
  postConsultationResult,
  postStartConsultation,
};
