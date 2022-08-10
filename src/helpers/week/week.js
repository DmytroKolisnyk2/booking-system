import axios from "axios";

axios.defaults.baseURL = "https://goiteens-rest-api.herokuapp.com";
axios.defaults.headers.common["Accept"] = "application/json";

const getCurrentWeek = (managerId) => {
  return axios
    .get(`/current_week/${managerId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const getCallerCurrentWeek2 = () => {
  return axios
    .get(`/caller_current_week`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const getCallerWorkWeek = (weekId) => {
  return axios
    .get(`/get_caller_week/${weekId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const getWeek = (managerId, weekId) => {
  return axios
    .get(`/get_week/${managerId}/${weekId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const updateSlot = (managerId, weekId, dayIndex, slotHour, colorId) => {
  return axios
    .post(
      `/update_slot/${managerId}/${weekId}/${dayIndex}/${slotHour}/${colorId}`
    )
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const saveTable = (managerId, tableCredential) => {
  return axios
    .post(`/save_template/${managerId}`, tableCredential)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
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
    .catch((error) => {
      throw error;
    });
};

const getWorkWeek = (managerId, weekId) => {
  return axios
    .get(`/get_work_week/${managerId}/${weekId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export {
  getCurrentWeek,
  getCallerCurrentWeek2,
  getWeek,
  updateSlot,
  saveTable,
  getWeekTable,
  getCurrentWorkWeek,
  getWorkWeek,
  getCallerWorkWeek,
};
