const getCallerDate = (state) => state.caller.week.weekDate;
const getTable = (state) => state.caller.week.slots;
const getTypeSelection = (state) => state.caller.typeActionSelection;
const getCallerId = (state) => state.caller.callerId;
const getWeekId = (state) => state.caller.week.weekId;
const getCallerLoading = (state) => state.caller.CallerLoading;

export {
  getCallerDate,
  getTable,
  getTypeSelection,
  getCallerId,
  getWeekId,
  getCallerLoading,
};