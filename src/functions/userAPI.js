import axios from "axios";

// API calls to interact with the Users table in DB

export const getUserByEmail = async (email) => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/user/email?email=${email}`)
    return response.data
}
export const getById = async (id, path) => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}${path}/${id}`)
    return response.data
}

export const add = async (newData, path) => {
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}${path}`, newData);
    return response;
}

export const updateById = async (newUserDetails, path, id) => {
    const response = await axios.put(`${process.env.REACT_APP_BACKEND_BASE_URL}${path}/${id}`, newUserDetails);
    return response;
}

export const deleteById = async (id, path) => {
    const response = await axios.delete(`${process.env.REACT_APP_BACKEND_BASE_URL}${path}/${id}`)
    return response;
}