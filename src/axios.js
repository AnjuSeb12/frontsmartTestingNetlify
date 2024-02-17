import axios from "axios";


const instance=axios.create({
    baseURL:"https://backendsmarttesting.onrender.com/"
})
export default instance;