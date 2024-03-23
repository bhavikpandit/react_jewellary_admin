import axios from "axios"
import { API_BASE } from '../config/AppConstant'

export const LoginUser = async(payload) => {
    return await axios.post(`${API_BASE}admin/login`,payload)
}

export const LogoutUser = async(payload) => {
    console.log(payload)
    return await axios.post(`${API_BASE}admin/logout`,payload)
}

export const GetAllProducts = async() => {
    return await axios.get(`${API_BASE}admin`)
}

export const DeleteProductById = async(id) => {
    return await axios.delete(`https://dummyjson.com/products/${id}`)
}
export const GetUsers = async() => {
    return await axios.get("https://dummyjson.com/users")
}
export const DeleteUserById = async(id) => {
    return await axios.delete(`https://dummyjson.com/users/${id}`)
}
