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
      `/create_appointment/${weekId}/${dayIndex}/${time}/${courseId}/${phone}/${age}/${managerId}/${message}`,
      link
    )
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export { postAppointment, createAppointment };
