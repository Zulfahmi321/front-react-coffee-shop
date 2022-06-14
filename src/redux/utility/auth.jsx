import axios from "axios";

export const doLogin = (body) => {
    return axios.post("http://localhost:8080/auth", body)
}

export const getProfile = (token) => {
    const config = { headers: { Authorization: `Bearer ${token}` } }
    return axios.get('http://localhost:8080/user', config)
}