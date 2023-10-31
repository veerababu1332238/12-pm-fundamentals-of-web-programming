const {userModel} = require('../models/user.model');

class UserService {
    create(data) {
        const user = new userModel(data);
        return user.save();
    }
    getById(id) {
        return userModel.findById(id);
    }
    getByMobile(mobile) {
        return userModel.findOne({mobile});
    }
    getByEmail(email) {
        console.log(email);
        return userModel.findOne({email});
    }
    update(data) {
        return userModel.findByIdAndUpdate(data.id, {
            $set: {
                resetPasswordToken: data.resetPasswordToken,
                resetPasswordExpiry: data.resetPasswordExpiry
            }
        }, {new: true});
    }
    updatePassword(data) {
        return userModel.findByIdAndUpdate(data.id, {
            $set: {
                resetPasswordToken: data.resetPasswordToken,
                resetPasswordExpiry: data.resetPasswordExpiry,
                password: data.password
            },
        }, {
            fields: {__v: 0, resetPasswordToken: 0, resetPasswordExpiry: 0, createdAt: 0, password: 0},
            new: true
        });
    }
    updateUser(data) {
        return userModel.findByIdAndUpdate(data.id, {
            $set: {...data},
        }, {
            fields: {__v: 0, resetPasswordToken: 0, resetPasswordExpiry: 0, createdAt: 0, password: 0},
            new: true
        });
    }
    byUserId(id) {
        return userModel.findById(id, {_id: 0, __v: 0, password: 0, createdAt: 0});
    }

    deleteUser(id) {
        return userModel.findByIdAndDelete(id);
    }

    users() {
        return userModel.find({});
    }

}

module.exports = new UserService();