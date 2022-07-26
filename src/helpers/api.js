import axios from "axios";

axios.defaults.baseURL = "https://goiteens-rest-api.herokuapp.com";

const getManagers = () => {
  return axios
    .get("/managers")
    .then((res) => res.data.data)
    .catch((error) => console.log(error));
};
export default getManagers;
