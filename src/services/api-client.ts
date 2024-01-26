import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "06e8a48bbf0c483088dd4fc4bac8a73b"
    }
})