const getDate = (state) => state.manager.week.current_week_date_start;
const getTable = (state) => state.manager.week.slots;
const getTypeSelection = (state) => state.manager.typeActionSelection;

export { getDate, getTable, getTypeSelection };