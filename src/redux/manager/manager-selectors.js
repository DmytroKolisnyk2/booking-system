const getDate = (state) => state.manager.week.weekDate;
const getTable = (state) => state.manager.week.slots;
const getTypeSelection = (state) => state.manager.typeActionSelection;
const getManagerId = (state) => state.manager.managerId;
const getWeekId = (state) => state.manager.week.weekId;
const getSavedTemplateText = (state) => state.manager.savedTemplate.text;
const getSavedTemplateDate = (state) => state.manager.savedTemplate.date;

export {
  getDate,
  getTable,
  getTypeSelection,
  getManagerId,
  getWeekId,
  getSavedTemplateText,
  getSavedTemplateDate,
};