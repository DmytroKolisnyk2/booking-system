import axios from "../axios-config";

axios.create({
  withCredentials: true,
});

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
    .post(`/search`, credentials)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const putAppointment = (credentials) => {
  return axios
    .post(`/update_superad_appointment`, credentials)
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

export { getAppointment, postAppointment, createAppointment, putAppointment, getAppointmentByCrm };
