import axios from "../axios-config";

const postConsultationResult = (slotId, result, groupId, message) => {
  return axios
    .post(
      message
        ? `/consultation_result/${slotId}/${result}/${groupId}/${message}`
        : `/consultation_result/${slotId}/${result}/${groupId}/no-text`
    )
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

const postStartConsultation = (weekId, dayIndex, slotHour, managerId) => {
  return axios
    .post(`/start_consultation/${weekId}/${dayIndex}/${slotHour}/${managerId}`)
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
};

export { postConsultationResult, postStartConsultation };
