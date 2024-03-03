import axios from "axios"

export const LoginUser = async(payload) => {
    return await axios.post("https://dummyjson.com/auth/login",payload)
}

export const GetProducts = async() => {
    return await axios.get("https://dummyjson.com/products")
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
