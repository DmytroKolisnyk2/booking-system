import axios from "axios";
axios.defaults.baseURL = "https://goiteens-booking-system.herokuapp.com";
axios.defaults.headers.common["Accept"] = "application/json";

export default axios;
