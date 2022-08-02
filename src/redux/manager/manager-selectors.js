const getDate = (state) => state.manager.week.weekDate;
const getTable = (state) => state.manager.week.slots;
const getTypeSelection = (state) => state.manager.typeActionSelection;

export { getDate, getTable, getTypeSelection };