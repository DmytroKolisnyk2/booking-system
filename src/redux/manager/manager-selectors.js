const getDate = (state) => state.manager.week.current_week_date_start;
const getTable = (state) => state.manager.week.slots;

export { getDate,  getTable};