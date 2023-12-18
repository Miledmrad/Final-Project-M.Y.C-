const User = require("../model/user");

const createUser = async (firstName, lastName, username, password, email, address, dob) =>{
    try{
        const newUser = await User.create({
            user_first_name:firstName,
            user_last_name:lastName,
            user_username:username,
            user_password:password,
            user_email:email,
            user_address:address,
            user_dob:dob,

        })
        return newUser.toJSON();
    }catch(e){
        console.error('Error creating user', e);
    }

}

const getAllUsers = async () =>{
    try{
        const user = await User.findAll({include: [{model: Country}]});
        return user;
    }catch(e){
        console.error(e);
    }
}

const getUserById = async (id) =>{
    try{
        const user = await User.findByPk(id);
        if(user){
            return user;
        }
        return "user not found";
    }catch(error){
        console.error(error);
    }
}

const updateUser = async (id, firstName, lastName, username, password, email, mobile, address, gender, dob) => {
    try{
        const updateuser = await User.update({
            user_first_name:firstName,
            user_last_name:lastName,
            user_username:username,
            user_password:password,
            user_email:email,
            user_mobile:mobile,
            user_address:address,
            user_dob:dob,
            user_gender:gender
        }, {where: {user_id: id}});

        return updateuser;
    }catch(error){
        console.error(error);
    }
}

const deleteUser = async(id) =>{
    try{
        const user = await User.findByPk(id);
        if(user){
            const deleteduser = await user.destroy();
            return deleteduser.toJSON();
        }
    }catch(error){
        console.error(error);
    }
}

const authenticateUser = async (username, password) => {
    let response = {
        message: "not authenticated",
        user: null,
    }
    try{
        const user = await User.findOne({where: {user_username: username}});
        if(user){
            if(user.user_password === password){
                response.message = "authenticated";
                response.user = user;
            }
        }

    }catch(error){
        console.error(error);
    }

    return response;
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    authenticateUser,
}

