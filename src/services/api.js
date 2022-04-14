import axios from "axios";
const REACT_APP_LINK_API = process.env.REACT_APP_LINK_API;

const Api = axios.create({
    baseURL: REACT_APP_LINK_API
});

export default Api;