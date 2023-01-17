
import instance from "./index";

export const list = async()=>{
    return instance.get("users")
}
export const create = async (user)=>{
    return instance.post("users/create",user)
}
export const remove = async(id)=>{
    return instance.delete(`users/${id}`)
}
export const read = async(id)=>{
    return instance.get(`users/${id}`)
}
export const update = async(user)=>{
    return instance.patch(`users/${user._id}`,user)
}