const getDate = (state) => state.caller.week.weekDate;
const getTable = (state) => state.caller.week.slots;
const getTypeSelection = (state) => state.caller.typeActionSelection;
const getCallerId = (state) => state.caller.callerId;
const getWeekId = (state) => state.caller.week.weekId;
// const getSavedTemplateText = (state) => state.manager.savedTemplate.text;
// const getSavedTemplateDate = (state) => state.manager.savedTemplate.date;

export {
  getDate,
  getTable,
  getTypeSelection,
  getCallerId,
  getWeekId,
  // getSavedTemplateText,
  // getSavedTemplateDate,
};