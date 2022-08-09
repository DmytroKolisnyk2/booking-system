import axios from "axios";

axios.defaults.baseURL = "https://goiteens-rest-api.herokuapp.com";
axios.defaults.headers.common["Accept"] = "application/json";

const getCurrentConfirmatorData = () => {
  return axios
    .get(`/current_confirmation`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const getConfirmatorWeekData = (weekId, dayId, halfId) => {
  return axios
    .get(`/get_confirmation/${weekId}/${dayId}/${halfId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const setConfirmation = (slot_id, status, message) => {
  return axios
    .post(
      message
        ? `/set_confirmation/${slot_id}/${status}/${message}`
        : `/set_confirmation/${slot_id}/${status}`
    )
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};
const setCancelConfirmation = (slot_id, status, message) => {
  return axios
    .post(
      message
        ? `/set_cancel_confirmation/${slot_id}/${status}/${message}`
        : `/set_cancel_confirmation/${slot_id}/${status}`
    )
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export {
  getCurrentConfirmatorData,
  getConfirmatorWeekData,
  setConfirmation,
  setCancelConfirmation,
};