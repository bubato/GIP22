import instance from "./index";

export const getListUser = async (pageIndex, pageSize) => {
  return instance.get(`users?pageIndex=${pageIndex}&pageSize=${pageSize}`);
};
export const createUser = async (user) => {
  return instance.post("users", user);
};
export const removeUser = async (id) => {
  return instance.delete(`users/${id}`);
};
export const getUser = async (id) => {
  return instance.get(`users/${id}`);
};
export const updateUser = async (user, id) => {
  return instance.patch(`users/${id}`, user);
};
