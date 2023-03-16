import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/"; // change this if you want to use a different url for APIs
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
