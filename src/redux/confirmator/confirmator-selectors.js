const getConfirmatorLoadings = (state) => state.confirmator.loading;
const getConfirmatorAppointments = (state) => state.confirmator.appointments;
const getConfirmatorDate = (state) => state.confirmator.date.date;
const getConfirmatorWeekId = (state) => state.confirmator.date.week_id;
const getConfirmatorDay = (state) => state.confirmator.date.day;
const getConfirmatorHalf = (state) => state.confirmator.date.half;

export {
  getConfirmatorHalf,
  getConfirmatorDay,
  getConfirmatorWeekId,
  getConfirmatorDate,
  getConfirmatorAppointments,
  getConfirmatorLoadings,
};
