import axios from "axios";

axios.defaults.baseURL = "https://goiteens-rest-api.herokuapp.com";
axios.defaults.headers.common["Accept"] = "application/json";

const postAppointment = (credentials) => {
  return axios
    .post("/register_appointment", credentials)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const getAppointment = ({ id }) => {
  return axios
    .get(`/appointment/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const getAppointmentByCrm = (credentials) => {
  return axios
    .get(`/appointment`, credentials)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const putAppointment = (credentials, id) => {
  return axios
    .put(`/appointment/${id}`, credentials)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const createAppointment = (
  link,
  managerId,
  weekId,
  dayIndex,
  time,
  courseId,
  phone,
  age,
  message
) => {
  return axios
    .post(
      `/create_appointment/${weekId}/${dayIndex}/${time}/${courseId}/${phone}/${age}/${managerId}/${
        message ? message : "0"
      }`,
      link
    )
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export {
  getAppointment,
  postAppointment,
  createAppointment,
  putAppointment,
  getAppointmentByCrm,
};
