import http from  "../http-common";

const getAllUsers = (id) =>{
    return http.get(`/users/user/${id}`);
}

const createUser = (data) =>{
    return http.post(`/users/insertUser`, data);
}

const updateUser = (data) => {
    return http.post(`/users/updateUser`, data);
}

const deleteUser = (id) =>{
    console.log(id);
    return http.post(`/users/deleteUser`, {id});
}

const authenticateUser = (user) => {
    return http.post(`/users/authenticateUser`, user);
}

const loadRefernceTableInfo = (data) =>
{
    return http.post(`/user/loadRefernceTableInfo`, data);
}

const UserService = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
    authenticateUser,
    loadRefernceTableInfo,
}

export default UserService;