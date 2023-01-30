import instance from "./index";

export const list = async()=>{
    return instance.get("position")
}
export const create = async (position)=>{
    return instance.post("position/add",position)
}
export const remove = async(id)=>{
    return instance.delete(`position/${id}`)
}
export const readPosition = async(id)=>{
    return instance.get(`position/${id}`)
}
export const updatePosition = async(id,position,)=>{
    return instance.patch(`position/${id}`,position)
}