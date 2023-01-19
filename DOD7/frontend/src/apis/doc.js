import instance from "./index";

export const list = async()=>{
    return instance.get("document")
}
export const create = async (doc)=>{
    return instance.post("document/",doc)
}
export const remove = async(id)=>{
    return instance.delete(`document/${id}`)
}
export const read = async(id)=>{
    return instance.get(`document/${id}`)
}
export const update = async(doc)=>{
    return instance.patch(`document/${doc._id}`,doc)
}